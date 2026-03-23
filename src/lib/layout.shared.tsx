import type { BaseLayoutProps, LinkItemType } from "fumadocs-ui/layouts/shared";
import { AlbumIcon, Info, LayoutTemplate } from "lucide-react";
import { assetPath } from "./base-path";

export const linkItems: LinkItemType[] = [
  {
    text: "Features",
    url: "/#features",
    active: "url",
  },
  {
    text: "How It Works",
    url: "/#how-it-works",
    active: "url",
  },
  {
    text: "FAQ",
    url: "/#faq",
    active: "url",
  },
  {
    icon: <AlbumIcon />,
    text: "Docs",
    url: "/docs",
    active: "nested-url",
  },
  {
    text: "Blogs",
    url: "https://www.absmach.eu/blog/?category=propeller",
    icon: <LayoutTemplate />,
    active: "url",
  },
  {
    text: "About",
    url: "/about",
    icon: <Info />,
    active: "url",
  },
];

export const logo = (
  <>
    <div className="flex items-center space-x-2">
      <img
        src={assetPath("/named-logo-black.svg")}
        className="h-10 w-auto dark:hidden"
        alt="propeller logo"
        width={160}
        height={40}
      />
      <img
        src={assetPath("/named-logo-white.svg")}
        className="h-10 w-auto hidden dark:block"
        alt="propeller logo"
        width={160}
        height={40}
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
