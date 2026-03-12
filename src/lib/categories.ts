import { Category } from "./types";

export const categories: Category[] = [
  {
    name: "Redeem Codes",
    slug: "redeem-codes",
    description:
      "Latest working redeem codes for Free Fire, BGMI, Genshin Impact, and more. Updated daily!",
    icon: "🎁",
    subcategories: [
      { name: "Free Fire", slug: "free-fire" },
      { name: "BGMI", slug: "bgmi" },
      { name: "COD Mobile", slug: "cod-mobile" },
      { name: "Roblox", slug: "roblox" },
      { name: "Genshin Impact", slug: "genshin-impact" },
      { name: "Honkai Star Rail", slug: "honkai-star-rail" },
      { name: "PUBG Mobile", slug: "pubg-mobile" },
      { name: "Wuthering Waves", slug: "wuthering-waves" },
      { name: "Zenless Zone Zero", slug: "zenless-zone-zero" },
      { name: "Mobile Legends", slug: "mobile-legends" },
      { name: "Honkai Impact 3rd", slug: "honkai-impact" },
    ],
  },
  {
    name: "Game Guides",
    slug: "game-guides",
    description:
      "In-depth guides, tips, tricks, and walkthroughs for popular games.",
    icon: "📖",
    subcategories: [
      { name: "BGMI", slug: "bgmi" },
      { name: "Free Fire", slug: "free-fire" },
      { name: "Valorant", slug: "valorant" },
      { name: "COD Mobile", slug: "cod-mobile" },
      { name: "Genshin Impact", slug: "genshin-impact" },
      { name: "Fortnite", slug: "fortnite" },
    ],
  },
  {
    name: "Pro Settings",
    slug: "pro-settings",
    description:
      "Copy the exact settings, sensitivity, and crosshair of pro players.",
    icon: "⚙️",
    subcategories: [
      { name: "BGMI", slug: "bgmi" },
      { name: "Free Fire", slug: "free-fire" },
      { name: "Valorant", slug: "valorant" },
      { name: "Fortnite", slug: "fortnite" },
      { name: "Apex Legends", slug: "apex-legends" },
      { name: "CS2", slug: "cs2" },
      { name: "COD Mobile", slug: "cod-mobile" },
    ],
  },
  {
    name: "Gaming Gear",
    slug: "gaming-gear",
    description:
      "Reviews and buying guides for mice, keyboards, headsets, monitors, and more.",
    icon: "🎮",
  },
  {
    name: "PC Builds",
    slug: "pc-builds",
    description:
      "Gaming PC build guides for every budget — from budget to high-end.",
    icon: "🖥️",
  },
  {
    name: "Gaming Phones",
    slug: "gaming-phones",
    description:
      "Best gaming phones at every price point, benchmarked and tested.",
    icon: "📱",
  },
  {
    name: "Esports News",
    slug: "esports-news",
    description:
      "Latest esports tournament results, roster changes, and industry news.",
    icon: "🏆",
    subcategories: [
      { name: "BGMI", slug: "bgmi" },
      { name: "Valorant", slug: "valorant" },
      { name: "Free Fire", slug: "free-fire" },
      { name: "Fortnite", slug: "fortnite" },
      { name: "Global", slug: "global" },
    ],
  },
  {
    name: "Deals",
    slug: "deals",
    description: "Hot gaming deals on gear, games, and accessories.",
    icon: "🔥",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
