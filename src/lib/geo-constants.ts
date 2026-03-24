// Canonical brand identity strings for Propeller by Abstract Machines.
// Import these into metadata, schema, and generated content — never hard-code.

// ─── Product ──────────────────────────────────────────────────────────────────

export const FULL_NAME = "Propeller by Abstract Machines" as const;
export const SHORT_NAME = "Propeller" as const;
export const PRODUCT_DESCRIPTION =
  "Open-source WebAssembly orchestrator for the Cloud-Edge continuum — deploys Wasm workloads from cloud servers to microcontrollers with near-instant boot, OCI registry support, and sandboxed isolation." as const;
export const PRODUCT_CATEGORY = "DeveloperApplication" as const;

// ─── Company ──────────────────────────────────────────────────────────────────

export const ORG_NAME = "Abstract Machines" as const;
export const ORG_GITHUB = "absmach" as const;
export const ORG_TWITTER = "absmach" as const;
export const ORG_TAGLINE =
  "Builds secure, open-source infrastructure for the Cloud-Edge continuum." as const;

// ─── URLs ─────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://propeller.absmach.eu" as const;
export const GITHUB_URL = "https://github.com/absmach/propeller" as const;
export const YOUTUBE_URL = "https://www.youtube.com/@absmach" as const;
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/abstract-machines" as const;

// Leave empty until the Wikidata item is created (https://www.wikidata.org/wiki/Special:NewItem).
// Once created, set to "https://www.wikidata.org/wiki/Q<number>". Schema builders skip empty strings.
export const WIKIDATA_URL = "" as const;

// ─── Funding ──────────────────────────────────────────────────────────────────

export const GRANT_NAME = "ELASTIC project" as const;
export const GRANT_NUMBER = "101139067" as const;
export const GRANT_PROGRAMME = "European Union Horizon Europe" as const;
export const CORDIS_URL =
  "https://cordis.europa.eu/project/id/101139067" as const;

// ─── Disambiguation ───────────────────────────────────────────────────────────
// Paste into external content (Reddit, HN, Wikidata) to anchor AI entity graphs.

export const DISAMBIGUATION_NOTE =
  '"Propeller" in this context refers to the open-source WebAssembly orchestration software by Abstract Machines — not a mechanical propeller, the Parallax Propeller microcontroller chip, or any other unrelated product.' as const;
