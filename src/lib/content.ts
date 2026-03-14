import { PostMeta } from "./types";

// Posts split by category for maintainability
import redeemCodesPosts from "./posts/redeem-codes";
import gameGuidesPosts from "./posts/game-guides";
import proSettingsPosts from "./posts/pro-settings";
import gamingGearPosts from "./posts/gaming-gear";
import pcBuildsPosts from "./posts/pc-builds";
import gamingPhonesPosts from "./posts/gaming-phones";
import esportsNewsPosts from "./posts/esports-news";
import dealsPosts from "./posts/deals";

const posts: PostMeta[] = [
  ...redeemCodesPosts,
  ...gameGuidesPosts,
  ...proSettingsPosts,
  ...gamingGearPosts,
  ...pcBuildsPosts,
  ...gamingPhonesPosts,
  ...esportsNewsPosts,
  ...dealsPosts,
];

export function getAllPosts(): PostMeta[] {
  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostsBySubcategory(
  category: string,
  subcategory: string
): PostMeta[] {
  return getAllPosts().filter(
    (p) => p.category === category && p.subcategory === subcategory
  );
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((p) => p.tags.includes(tag));
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter((p) => p.featured);
}

export function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(post: PostMeta): { prev: PostMeta | null; next: PostMeta | null } {
  const sameCategoryPosts = getAllPosts().filter((p) => p.category === post.category);
  const index = sameCategoryPosts.findIndex((p) => p.slug === post.slug);
  return {
    prev: index < sameCategoryPosts.length - 1 ? sameCategoryPosts[index + 1] : null,
    next: index > 0 ? sameCategoryPosts[index - 1] : null,
  };
}

export function getRelatedPosts(post: PostMeta, limit = 4): PostMeta[] {
  return getAllPosts()
    .filter(
      (p) =>
        p.slug !== post.slug &&
        (p.category === post.category ||
          p.tags.some((t) => post.tags.includes(t)))
    )
    .slice(0, limit);
}

