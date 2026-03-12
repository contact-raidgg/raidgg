export interface PostMeta {
  title: string;
  slug: string;
  description: string;
  category: string;
  subcategory?: string;
  tags: string[];
  date: string;
  updated?: string;
  author: string;
  image?: string;
  imageAlt?: string;
  featured?: boolean;
  draft?: boolean;
  readTime?: string;
  // For redeem codes
  game?: string;
  codes?: RedeemCode[];
  // For pro settings
  player?: string;
  // For gaming gear / affiliate
  affiliateLinks?: AffiliateLink[];
  // Article body content — plain paragraphs (legacy)
  body?: string[];
  // Rich structured content blocks for SEO
  sections?: ContentBlock[];
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
  faqs?: FAQ[];
}

export interface FAQ {
  question: string;
  answer: string;
}

// ── Rich Content Block Types ──────────────────────────
export type ContentBlock =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; html: string }
  | { type: "list"; style: "bullet" | "numbered"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; variant: "tip" | "warning" | "info"; html: string }
  | { type: "pros-cons"; pros: string[]; cons: string[] }
  | { type: "specs"; label: string; rows: [string, string][] }
  | { type: "internal-links"; title: string; links: { text: string; href: string }[] }

export interface RedeemCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "new";
  expiry?: string;
}

export interface AffiliateLink {
  label: string;
  url: string;
  price?: string;
  platform: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories?: { name: string; slug: string }[];
}

export type CategorySlug =
  | "redeem-codes"
  | "game-guides"
  | "pro-settings"
  | "gaming-gear"
  | "pc-builds"
  | "gaming-phones"
  | "esports-news"
  | "deals";
