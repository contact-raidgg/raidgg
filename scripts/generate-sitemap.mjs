import { writeFileSync } from "fs";

// Import content data dynamically
const { categories } = await import("../src/lib/categories.ts");
const { getAllPosts, getPostUrl } = await import("../src/lib/content.ts");

const BASE_URL = "https://raidgg.com";
const today = new Date().toISOString().split("T")[0];

const urls = [];

// Static pages
const staticPages = [
  { path: "/", priority: "1.0", freq: "daily" },
  { path: "/about/", priority: "0.3", freq: "monthly" },
  { path: "/contact/", priority: "0.3", freq: "monthly" },
  { path: "/privacy-policy/", priority: "0.2", freq: "yearly" },
  { path: "/disclaimer/", priority: "0.2", freq: "yearly" },
  { path: "/terms/", priority: "0.2", freq: "yearly" },
];

for (const p of staticPages) {
  urls.push(`  <url>\n    <loc>${BASE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`);
}

// Category pages
for (const cat of categories) {
  urls.push(`  <url>\n    <loc>${BASE_URL}/${cat.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>`);
  if (cat.subcategories) {
    for (const sub of cat.subcategories) {
      urls.push(`  <url>\n    <loc>${BASE_URL}/${cat.slug}/${sub.slug}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.7</priority>\n  </url>`);
    }
  }
}

// Post pages
const allPosts = getAllPosts();
for (const post of allPosts) {
  const url = getPostUrl(post);
  const lastmod = (post.updated || post.date).split("T")[0];
  urls.push(`  <url>\n    <loc>${BASE_URL}${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log(`Sitemap generated: ${urls.length} URLs`);
