import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

const siteTitle = "nvshink | Kotlin Multiplatform Developer";
const siteDescription =
  "Portfolio of a Kotlin Multiplatform developer: applications, libraries and local-first technical projects.";
const [repositoryOwner = "nvshink", repositoryName = "nvshink.github.io"] =
  (process.env.GITHUB_REPOSITORY ?? "nvshink/nvshink.github.io").split("/");
const isUserSiteRepository = repositoryName.endsWith(".github.io");
const basePath = isUserSiteRepository ? "" : `/${repositoryName}`;
const siteUrl = `https://${repositoryOwner}.github.io${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    type: "website",
    images: [
      {
        url: assetPath("/opengraph-image.png"),
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [assetPath("/opengraph-image.png")],
  },
  icons: {
    icon: assetPath("/favicon.ico"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
