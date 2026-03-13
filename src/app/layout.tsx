import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RaidGG — Your Ultimate Gaming Command Center",
    template: "%s | RaidGG",
  },
  description:
    "RaidGG is your go-to gaming blog for daily redeem codes, in-depth game guides, pro player settings, gear reviews, PC builds, esports news, and the hottest deals.",
  metadataBase: new URL("https://raidgg.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "RaidGG",
    type: "website",
    locale: "en_US",
    url: "https://raidgg.com",
    title: "RaidGG — Your Ultimate Gaming Command Center",
    description:
      "Daily redeem codes, game guides, pro settings, gear reviews, PC builds, and esports news.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "RaidGG — Your Ultimate Gaming Command Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RaidGG — Your Ultimate Gaming Command Center",
    description:
      "Daily redeem codes, game guides, pro settings, gear reviews, and esports news.",
    images: ["/og-default.svg"],
    creator: "@raidgg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "RaidGG",
  url: "https://raidgg.com",
  description:
    "Your ultimate gaming command center. Daily redeem codes, game guides, pro settings, gear reviews, and esports news.",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://raidgg.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RaidGG",
  url: "https://raidgg.com",
  logo: "https://raidgg.com/favicon.svg",
  sameAs: [
    "https://x.com/raidgg",
    "https://youtube.com/@raidgg",
    "https://instagram.com/raidgg",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@raidgg.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RVGMEGP27C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-RVGMEGP27C');`,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${rajdhani.variable} font-sans antialiased bg-[var(--color-base)] text-[var(--color-text)]`}
        suppressHydrationWarning
      >
        <HeaderWrapper />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
