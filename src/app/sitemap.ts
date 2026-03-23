import { statSync } from "node:fs";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

export const dynamic = "force-static";

function resolveLastModified(page: {
  data: { lastModified?: string };
  path: string;
}): Date {
  if (page.data.lastModified) {
    const d = new Date(page.data.lastModified);
    if (!Number.isNaN(d.getTime())) return d;
  }
  try {
    return statSync(join(process.cwd(), "content", page.path)).mtime;
  } catch {
    return new Date();
  }
}

function derivePriority(slugs: string[]): number {
  switch (slugs.length) {
    case 0:
      return 0.9;
    case 1:
      return 0.8;
    case 2:
      return 0.65;
    default:
      return 0.45;
  }
}

function deriveChangeFreq(
  slugs: string[],
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (slugs.length >= 3) return "monthly";
  return "weekly";
}

const EXCLUDED_PATHS = new Set(["/docs/test"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  entries.push(
    {
      url: BASE_URL,
      lastModified: (() => {
        try {
          return statSync(
            join(process.cwd(), "src/app/(home)/page.tsx"),
          ).mtime.toISOString();
        } catch {
          return new Date().toISOString();
        }
      })(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: (() => {
        try {
          return statSync(
            join(process.cwd(), "src/app/(home)/about/page.tsx"),
          ).mtime.toISOString();
        } catch {
          return new Date().toISOString();
        }
      })(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  );

  for (const page of source.getPages()) {
    if (EXCLUDED_PATHS.has(page.url)) continue;

    entries.push({
      url: `${BASE_URL}${page.url}`,
      lastModified: resolveLastModified(page).toISOString(),
      changeFrequency: deriveChangeFreq(page.slugs),
      priority: derivePriority(page.slugs),
    });
  }

  return entries;
}
