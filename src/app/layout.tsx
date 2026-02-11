import { Rubik } from "next/font/google";
import { Provider } from "@/components/provider";
import "./global.css";
import type { Metadata } from "next";

const rubik = Rubik({
  subsets: ["latin"],
  style: "normal",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://propeller.absmach.eu";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Propeller",
  description: "Deploy Wasm from Cloud to Microcontrollers",
  keywords: ["Propeller", "WebAssembly", "WASM", "Cloud", "Microcontrollers"],
  appleWebApp: {
    title: "Propeller",
  },

  openGraph: {
    type: "website",
    title: "Propeller",
    description: "Deploy Wasm from Cloud to Microcontrollers",
    url: baseUrl,
    siteName: "Propeller",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
        alt: "Propeller",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propeller",
    description: "Deploy Wasm from Cloud to Microcontrollers",
    images: [
      {
        url: `${baseUrl}/opengraph-image.jpg`,
        secureUrl: `${baseUrl}/opengraph-image.jpg`,
        alt: "Propeller",
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
