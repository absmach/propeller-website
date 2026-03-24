import { execSync } from "node:child_process";
import { join } from "node:path";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocAttribution } from "@/components/doc-attribution";
import { LLMCopyButton, ViewOptions } from "@/components/page-actions";
import { resolveAuthors } from "@/lib/authors";
import { getPageImage, source } from "@/lib/source";
import { breadcrumbListSchema, techArticleSchema } from "@/lib/structured-data";
import { getMDXComponents } from "@/mdx-components";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

function resolvePageLastModified(
  frontmatterDate: string | undefined,
  filePath: string,
): string | undefined {
  if (frontmatterDate) return frontmatterDate;
  try {
    const date = execSync(
      `git log -1 --format=%cd --date=short -- ${filePath}`,
      { cwd: process.cwd() },
    )
      .toString()
      .trim();
    return date || undefined;
  } catch {
    return undefined;
  }
}

function resolvePageDatePublished(filePath: string): string | undefined {
  try {
    const output = execSync(
      `git log --follow --format=%cd --date=short -- ${filePath}`,
      { cwd: process.cwd() },
    )
      .toString()
      .trim();
    if (!output) return undefined;
    const lines = output.split("\n").filter(Boolean);
    return lines[lines.length - 1] || undefined;
  } catch {
    return undefined;
  }
}

// Auto-generated API stub pages with no prose (no request body, no response schema,
// no field descriptions) that cannot reach 300 words when rendered.
const THIN_API_PAGES = new Set([
  "/docs/api/health/get",
  "/docs/api/metrics/get",
  "/docs/api/proplets/get",
  "/docs/api/proplets/proplet_id/get",
  "/docs/api/proplets/proplet_id/delete",
  "/docs/api/proplets/proplet_id/metrics/get",
  "/docs/api/tasks/get",
  "/docs/api/tasks/task_id/get",
  "/docs/api/tasks/task_id/delete",
  "/docs/api/tasks/task_id/start/post",
  "/docs/api/tasks/task_id/stop/post",
  "/docs/api/tasks/task_id/metrics/get",
  "/docs/api/tasks/task_id/results/get",
  "/docs/api/jobs/get",
  "/docs/api/jobs/job_id/get",
  "/docs/api/jobs/job_id/start/post",
  "/docs/api/jobs/job_id/stop/post",
]);

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const authors = resolveAuthors(page.data.authors);
  const pageUrl = `${BASE_URL}${page.url}`;
  const contentPath = join(process.cwd(), "content", page.path);
  const lastModified = resolvePageLastModified(
    page.data.lastModified,
    contentPath,
  );
  const datePublished = resolvePageDatePublished(contentPath);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            techArticleSchema({
              title: page.data.title,
              description: page.data.description,
              url: pageUrl,
              datePublished,
              dateModified: lastModified,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbListSchema(params.slug ?? [])),
        }}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pt-2 pb-6">
        <LLMCopyButton markdownUrl={`${page.url}.mdx`} />
        <ViewOptions
          markdownUrl={`${page.url}.mdx`}
          githubUrl={`https://github.com/absmach/propeller-website/blob/main/content/docs/${page.path}`}
        />
      </div>

      <DocAttribution authors={authors} lastModified={lastModified} />

      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: `${BASE_URL}${page.url}`,
    },
    ...(THIN_API_PAGES.has(page.url) && {
      robots: { index: false, follow: true },
    }),
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
