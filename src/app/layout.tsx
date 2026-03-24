import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/geo-constants";

const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  preload: true,
});

const siteTitle =
  "Propeller — WebAssembly Orchestrator for Cloud-Edge Computing";
const siteDescription =
  "Open-source WebAssembly orchestrator for Cloud-Edge computing. Deploy Wasm workloads from cloud servers to microcontrollers with near-instant boot, OCI registry support, and sandboxed isolation.";
const ogTitle = "Propeller — WebAssembly Orchestrator for Cloud-Edge";

const isNonProdBuild =
  !!process.env.NEXT_PUBLIC_BASE_URL &&
  process.env.NEXT_PUBLIC_BASE_URL !== SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  ...(isNonProdBuild && { robots: { index: false, follow: false } }),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Propeller",
    "WebAssembly",
    "Wasm",
    "Cloud-Edge",
    "orchestration",
    "IoT",
    "microcontrollers",
    "edge computing",
    "Zephyr RTOS",
    "WAMR",
    "Abstract Machines",
  ],
  appleWebApp: {
    title: "Propeller",
  },

  openGraph: {
    type: "website",
    title: ogTitle,
    description: siteDescription,
    url: SITE_URL,
    siteName: "Propeller by Abstract Machines",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        secureUrl: `${SITE_URL}/opengraph-image.jpg`,
        alt: "Propeller — WebAssembly Orchestrator for Cloud-Edge Computing",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@absmach",
    creator: "@absmach",
    title: ogTitle,
    description: siteDescription,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.jpg`,
        secureUrl: `${SITE_URL}/opengraph-image.jpg`,
        alt: "Propeller — WebAssembly Orchestrator for Cloud-Edge Computing",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={rubik.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
