"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TopbarSectionLinkProps = {
  href: `/#${string}`;
  children: ReactNode;
  className?: string;
};

export function TopbarSectionLink({
  href,
  children,
  className,
}: TopbarSectionLinkProps) {
  const pathname = usePathname();

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    const hash = href.split("#")[1];
    if (!hash) return;

    const target = document.getElementById(hash);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1 p-2 text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground max-sm:flex max-sm:w-full max-sm:gap-2 max-sm:px-0 max-sm:py-1.5 max-sm:text-fd-popover-foreground/80",
        className,
      )}
    >
      {children}
    </a>
  );
}
