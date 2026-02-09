import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "@/lib/source";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = blogs.getPage([params.slug]);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <article className="mx-auto flex w-full max-w-[800px] flex-col px-4 py-8">
      <div className="mb-8 flex flex-row gap-4 text-sm">
        <div>
          <p className="mb-1 text-fd-muted-foreground">Written by</p>
          <p className="font-medium">{page.data.author}</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-fd-muted-foreground">At</p>
          <p className="font-medium">
            {new Date(page.data.date).toDateString()}
          </p>
        </div>
      </div>

      <h1 className="mb-4 text-3xl font-semibold">{page.data.title}</h1>
      <p className="mb-8 text-fd-muted-foreground">{page.data.description}</p>

      <div className="prose min-w-0 flex-1">
        <div className="mb-8 flex flex-row gap-2 not-prose">
          <Link
            href="/blogs"
            className="rounded-md border bg-fd-secondary px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            ← Back to Blog
          </Link>
        </div>

        <InlineTOC items={page.data.toc} />
        <MDX components={defaultMdxComponents} />
      </div>
    </article>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = blogs.getPage([params.slug]);

  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description ?? "Latest updates and announcements.",
  };
}

export function generateStaticParams(): { slug: string }[] {
  return blogs.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
