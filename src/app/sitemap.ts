import { execSync } from "node:child_process";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/geo-constants";
import { source } from "@/lib/source";

const BASE_URL = SITE_URL;

export const dynamic = "force-static";

function gitLastModified(filePath: string): Date | null {
  try {
    const iso = execSync(`git log -1 --format=%cI -- ${filePath}`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim();
    if (!iso) return null;
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? null : d;
  } catch {
    return null;
  }
}

function resolveLastModified(page: {
  data: { lastModified?: string };
  path: string;
}): Date | undefined {
  if (page.data.lastModified) {
    const d = new Date(page.data.lastModified);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return (
    gitLastModified(join(process.cwd(), "content", page.path)) ?? undefined
  );
}

const EXCLUDED_PATHS = new Set(["/docs/test"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const homepageMod = gitLastModified(
    join(process.cwd(), "src/app/(home)/page.tsx"),
  );
  const aboutMod = gitLastModified(
    join(process.cwd(), "src/app/(home)/about/page.tsx"),
  );

  entries.push(
    {
      url: BASE_URL,
      ...(homepageMod && { lastModified: homepageMod.toISOString() }),
    },
    {
      url: `${BASE_URL}/about`,
      ...(aboutMod && { lastModified: aboutMod.toISOString() }),
    },
  );

  for (const page of source.getPages()) {
    if (EXCLUDED_PATHS.has(page.url)) continue;

    const lastMod = resolveLastModified(page);
    entries.push({
      url: `${BASE_URL}${page.url}`,
      ...(lastMod && { lastModified: lastMod.toISOString() }),
    });
  }

  return entries;
}
