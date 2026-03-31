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

  // ── Individual contributors ────────────────────────────────────────────────
  drasko: {
    id: "drasko",
    name: "Drasko Draskovic",
    role: "Founder, Abstract Machines",
    github: "drasko",
    url: "https://absmach.eu",
  },
  rodneyosodo: {
    id: "rodneyosodo",
    name: "Rodney Osodo",
    role: "Software Engineer",
    github: "rodneyosodo",
    url: "https://rodneyosodo.com",
  },
  jeffmboya: {
    id: "jeffmboya",
    name: "Jeff Mboya",
    role: "Embedded Systems Engineer",
    github: "JeffMboya",
  },
  nyagamunene: {
    id: "nyagamunene",
    name: "Steve Munene",
    role: "Systems Engineer",
    github: "nyagamunene",
  },
  dborovcanin: {
    id: "dborovcanin",
    name: "Dušan Borovčanin",
    role: "Software Engineer",
    github: "dborovcanin",
  },
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
