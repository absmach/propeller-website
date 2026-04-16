import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/geo-constants";
import { source } from "@/lib/source";

const BASE_URL = SITE_URL;

export const dynamic = "force-static";

const EXCLUDED_PATHS = new Set(["/docs/test"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  for (const page of source.getPages()) {
    if (EXCLUDED_PATHS.has(page.url)) continue;
    entries.push({
      url: `${BASE_URL}${page.url}`,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}
