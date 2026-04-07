import Link from "fumadocs-core/link";
import { Github } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Author } from "@/lib/authors";

interface DocAttributionProps {
  authors: Author[];
  lastModified?: string;
}

function getAuthorInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function AuthorChip({ author }: { author: Author }) {
  const initials = author.name ? getAuthorInitials(author.name) : "?";

  return (
    <div className="flex items-center gap-2 group">
      <Avatar size="sm" className="ring-1 ring-border">
        {author.avatar ? (
          <AvatarImage src={author.avatar} alt={`Avatar of ${author.name}`} />
        ) : null}
        <AvatarFallback className="text-xs font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col leading-tight">
        {author.url ? (
          <Link
            href={author.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium hover:underline"
          >
            {author.name}
          </Link>
        ) : (
          <span className="text-xs font-medium">{author.name}</span>
        )}
        <span className="text-xs text-muted-foreground">{author.role}</span>
      </div>
      <Link
        href={`https://github.com/${author.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${author.name} on GitHub`}
        className="ml-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <Github className="size-3.5" aria-hidden="true" />
      </Link>
    </div>
  );
}

export function DocAttribution({ authors, lastModified }: DocAttributionProps) {
  const formattedDate = lastModified
    ? new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(lastModified))
    : null;
  const label =
    authors.length === 1
      ? authors[0].id === "abstract-machines"
        ? "Maintained by"
        : "Author"
      : "Authors";

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4 mt-2 text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/70">
          {label}
        </span>
        {authors.map((author) => (
          <AuthorChip key={author.id} author={author} />
        ))}
      </div>

      {formattedDate && (
        <time
          dateTime={lastModified}
          className="text-xs text-muted-foreground/70 shrink-0"
        >
          Updated {formattedDate}
        </time>
      )}
    </div>
  );
}
