import type { Metadata } from "next";

export const SITE_URL = "https://raidgg.com";
export const SITE_NAME = "RaidGG";
export const SITE_DESCRIPTION =
  "Your ultimate gaming command center. Daily redeem codes, game guides, pro settings, gear reviews, PC builds, and esports news.";
export const DEFAULT_OG_IMAGE = "/og-default.svg";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Build a complete Metadata object with OG, Twitter, canonical, etc.
 */
export function buildMetadata(params: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(params.path);
  const image = params.ogImage || DEFAULT_OG_IMAGE;

  return {
    title: params.title,
    description: params.description,
    alternates: {
      canonical: absoluteUrl(params.path),
    },
    openGraph: {
      title: params.title,
      description: params.description,
      url,
      type: params.ogType || "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: params.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: params.title,
      description: params.description,
      images: [image],
    },
    ...(params.noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

// ── JSON-LD Schema Generators ───────────────────────────────

export function generateArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: {
      "@type": "Organization",
      name: params.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    ...(params.image && {
      image: {
        "@type": "ImageObject",
        url: params.image.startsWith("http")
          ? params.image
          : `${SITE_URL}${params.image}`,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": params.url,
    },
  };
}

export function generateCollectionPageSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: params.name,
    description: params.description,
    url: params.url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
