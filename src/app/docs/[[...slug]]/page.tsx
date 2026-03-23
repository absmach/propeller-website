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

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const authors = resolveAuthors(page.data.authors);
  const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu"}${page.url}`;

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

      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
        <DocAttribution
          authors={authors}
          lastModified={page.data.lastModified}
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
    // Explicit self-referencing canonical per docs page.
    // page.url is a root-relative path (e.g. "/docs/getting-started");
    // Next.js combines it with metadataBase from the root layout.
    alternates: {
      canonical: page.url,
    },
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
