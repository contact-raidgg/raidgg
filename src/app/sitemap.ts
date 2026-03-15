import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { categories } from "@/lib/categories";

export const dynamic = "force-static";

const SITE_URL = "https://raidgg.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "daily", priority: 1.0 },
    { url: `${SITE_URL}/about/`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/contact/`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/privacy-policy/`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/disclaimer/`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/terms/`, changeFrequency: "monthly", priority: 0.3 },
    { url: `${SITE_URL}/dmca/`, changeFrequency: "monthly", priority: 0.3 },
  ];

  // Category hub pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${SITE_URL}/${cat.slug}/`,
    changeFrequency: ["redeem-codes", "esports-news", "deals"].includes(cat.slug)
      ? "daily"
      : "weekly",
    priority: 0.9,
  }));

  // Subcategory pages
  const subcategoryPages: MetadataRoute.Sitemap = categories.flatMap((cat) =>
    (cat.subcategories || []).map((sub) => ({
      url: `${SITE_URL}/${cat.slug}/${sub.slug}/`,
      changeFrequency: cat.slug === "redeem-codes" ? ("daily" as const) : ("weekly" as const),
      priority: 0.8,
    }))
  );

  // Post pages (exclude redeem-codes — their canonical URL is the subcategory page)
  const postPages: MetadataRoute.Sitemap = posts
    .filter((post) => post.category !== "redeem-codes")
    .map((post) => {
      const hasSubcategory = post.subcategory;
      const url = hasSubcategory
        ? `${SITE_URL}/${post.category}/${post.subcategory}/${post.slug}/`
        : `${SITE_URL}/${post.category}/${post.slug}/`;

      return {
        url,
        lastModified: post.updated || post.date,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      };
    });

  return [...staticPages, ...categoryPages, ...subcategoryPages, ...postPages];
}
