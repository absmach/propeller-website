/**
 * Canonical GEO identity strings for Propeller by Abstract Machines.
 *
 * Import these wherever the product or company name appears in metadata,
 * schema, or generated content — never hard-code the strings in multiple
 * places. Keeping them here makes brand updates a one-line change and
 * prevents the name drifting across files (which confuses AI entity graphs).
 *
 * Disambiguation rule:
 *   First mention in any page, schema, or external content → FULL_NAME
 *   Subsequent mentions within the same document           → SHORT_NAME
 *   Never use: "the Propeller", "propeller" (lowercase), "Propeller (software)"
 */

// ─── Product ──────────────────────────────────────────────────────────────────

/** Full disambiguated product name. Use in titles, meta, first sentences. */
export const FULL_NAME = "Propeller by Abstract Machines" as const;

/** Short product name. Use in second references and navigation labels. */
export const SHORT_NAME = "Propeller" as const;

/** One-line product description. Stable for schema + llms.txt. */
export const PRODUCT_DESCRIPTION =
  "Open-source WebAssembly orchestrator for the Cloud-Edge continuum — deploys Wasm workloads from cloud servers to microcontrollers with near-instant boot, OCI registry support, and sandboxed isolation." as const;

/** Machine-readable product category for schema applicationCategory. */
export const PRODUCT_CATEGORY = "DeveloperApplication" as const;

// ─── Company ──────────────────────────────────────────────────────────────────

/** Legal / full company name. */
export const ORG_NAME = "Abstract Machines" as const;

/** GitHub org handle (no @). */
export const ORG_GITHUB = "absmach" as const;

/** Twitter/X handle (no @). */
export const ORG_TWITTER = "absmach" as const;

/** Company tagline as it appears in the footer. */
export const ORG_TAGLINE =
  "Builds secure, open-source infrastructure for the Cloud-Edge continuum." as const;

// ─── URLs ─────────────────────────────────────────────────────────────────────

export const SITE_URL = "https://propeller.absmach.eu" as const;
export const GITHUB_URL = "https://github.com/absmach/propeller" as const;
export const YOUTUBE_URL = "https://www.youtube.com/@absmach" as const;
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/abstract-machines" as const;

/**
 * Wikidata sameAs URL — add the Q-number once the item is created.
 * Instructions: https://www.wikidata.org/wiki/Special:NewItem
 * Leave as empty string until the item exists; the schema builder skips it.
 *
 * Example once created: "https://www.wikidata.org/wiki/Q12345678"
 */
export const WIKIDATA_URL = "" as const;

// ─── Funding ─────────────────────────────────────────────────────────────────

export const GRANT_NAME = "ELASTIC project" as const;
export const GRANT_NUMBER = "101139067" as const;
export const GRANT_PROGRAMME = "European Union Horizon Europe" as const;
export const CORDIS_URL =
  "https://cordis.europa.eu/project/id/101139067" as const;

// ─── Disambiguation statement ─────────────────────────────────────────────────
// Paste this verbatim into any external content (Reddit, HN, blog posts, Wikidata)
// to train AI knowledge graphs on what "Propeller" means in software contexts.

export const DISAMBIGUATION_NOTE =
  '"Propeller" in this context refers to the open-source WebAssembly orchestration software by Abstract Machines — not a mechanical propeller, the Parallax Propeller microcontroller chip, or any other unrelated product.' as const;
