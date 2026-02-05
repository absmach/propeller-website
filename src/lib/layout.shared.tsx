import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, LayoutTemplate } from "lucide-react";
import { assetPath } from "./base-path";

export const linkItems: LinkItemType[] = [
  {
    icon: <AlbumIcon />,
    text: "Docs",
    url: "/docs",
    active: "nested-url",
  },
  {
    text: "Blogs",
    url: "/blogs",
    icon: <LayoutTemplate />,
    active: "url",
  },
];

export const logo = (
  <>
    <div className="flex items-center space-x-2">
      <img
        src={assetPath("/named-logo-black.svg")}
        className="h-30 w-auto dark:hidden"
        alt="propeller logo"
      />
      <img
        src={assetPath("/named-logo-white.svg")}
        className="h-30 w-auto hidden dark:block"
        alt="propeller logo"
      />
    </div>
  </>
);

export function baseOptions(): BaseLayoutProps {
  return {
    themeSwitch: {
      enabled: true,
    },
    searchToggle: {
      enabled: true,
    },
    githubUrl: "https://github.com/absmach/propeller",
    nav: {
      title: <>{logo}</>,
      transparentMode: "top",
    },
    links: linkItems,
  };
}
