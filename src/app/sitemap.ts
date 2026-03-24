import { execSync } from "node:child_process";
import { join } from "node:path";
import type { MetadataRoute } from "next";
import { source } from "@/lib/source";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

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
}): Date {
  if (page.data.lastModified) {
    const d = new Date(page.data.lastModified);
    if (!Number.isNaN(d.getTime())) return d;
  }
  return (
    gitLastModified(join(process.cwd(), "content", page.path)) ?? new Date()
  );
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

const EXCLUDED_PATHS = new Set([
  "/docs/test",
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

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  entries.push(
    {
      url: BASE_URL,
      lastModified: (
        gitLastModified(join(process.cwd(), "src/app/(home)/page.tsx")) ??
        new Date()
      ).toISOString(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: (
        gitLastModified(join(process.cwd(), "src/app/(home)/about/page.tsx")) ??
        new Date()
      ).toISOString(),
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
