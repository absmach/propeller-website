export interface Author {
  id: string;
  name: string;
  role: string;
  github: string;
  /** Optional: links to a personal or company profile page */
  url?: string;
  /** Optional: relative or absolute avatar URL */
  avatar?: string;
}

/**
 * Central author registry.
 *
 * Usage in MDX frontmatter:
 *   authors: [abstract-machines]         ← org-level default
 *   authors: [alice, bob]                ← named contributors
 *
 * Add real team members below. The "abstract-machines" entry is the
 * safe fallback for any page without a named individual author.
 */
export const AUTHORS: Record<string, Author> = {
  // ── Org-level default ──────────────────────────────────────────────────────
  "abstract-machines": {
    id: "abstract-machines",
    name: "Abstract Machines",
    role: "Core Team",
    github: "absmach",
    url: "https://absmach.eu",
    avatar: "/abstract-machines.svg",
  },

  // ── Individual contributors (fill in real names) ───────────────────────────
  // Example entries — replace with actual team members:
  //
  // "alice-dupont": {
  //   id: "alice-dupont",
  //   name: "Alice Dupont",
  //   role: "Software Engineer",
  //   github: "alicedupont",
  //   url: "https://github.com/alicedupont",
  // },
  //
  // "bob-martin": {
  //   id: "bob-martin",
  //   name: "Bob Martin",
  //   role: "Embedded Systems Engineer",
  //   github: "bobmartin",
  // },
};

/** Returns authors for a page, falling back to the org author if none match. */
export function resolveAuthors(ids?: string[]): Author[] {
  if (!ids || ids.length === 0) {
    return [AUTHORS["abstract-machines"]];
  }
  return ids
    .map((id) => AUTHORS[id])
    .filter((a): a is Author => a !== undefined);
}
