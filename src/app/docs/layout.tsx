import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { Metadata } from "next";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export const metadata: Metadata = {
  title: {
    template: "%s — Propeller Docs",
    default: "Documentation — Propeller WebAssembly Orchestrator",
  },
};

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree()}
      links={base.links?.filter((item) => item.type === "icon")}
    >
      {children}
    </DocsLayout>
  );
}
