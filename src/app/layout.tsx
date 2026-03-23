import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";

const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
  display: "swap",
  preload: true,
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

const siteTitle =
  "Propeller — WebAssembly Orchestrator for Cloud-Edge Computing";
const siteDescription =
  "Open-source WebAssembly orchestrator for Cloud-Edge computing. Deploy Wasm workloads from cloud servers to microcontrollers with near-instant boot, OCI registry support, and sandboxed isolation.";
const ogTitle = "Propeller — WebAssembly Orchestrator for Cloud-Edge";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // Explicit canonical for the homepage.
  // Next.js combines metadataBase + alternates.canonical to produce the full URL.
  alternates: {
    canonical: "/",
  },
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
    url: baseUrl,
    siteName: "Propeller by Abstract Machines",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
        alt: "Propeller — WebAssembly Orchestrator for Cloud-Edge Computing",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: siteDescription,
    site: "@absmach",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
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
