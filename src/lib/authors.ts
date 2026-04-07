export interface Author {
  id: string;
  name: string;
  role: string;
  github: string;
  url?: string;
  avatar?: string;
}

const DEFAULT_AUTHOR_ID = "abstract-machines";

export const AUTHORS: Record<string, Author> = {
  "abstract-machines": {
    id: "abstract-machines",
    name: "Abstract Machines",
    role: "Core Team",
    github: "absmach",
    url: "https://absmach.eu",
    avatar: "/abstract-machines.svg",
  },
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

export function resolveAuthors(ids?: string[]): Author[] {
  const defaultAuthor = AUTHORS[DEFAULT_AUTHOR_ID];
  if (!ids || ids.length === 0) {
    return [defaultAuthor];
  }
  const authors = ids
    .map((id) => AUTHORS[id])
    .filter((a): a is Author => a !== undefined);

  return authors.length > 0 ? authors : [defaultAuthor];
}
