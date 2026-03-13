import type { RedeemCode } from "./types";
import { getPostsBySubcategory } from "./content";

/**
 * Get codes for a game from static content
 */
export function getCodesForGame(gameSlug: string): RedeemCode[] {
  const posts = getPostsBySubcategory("redeem-codes", gameSlug);
  return posts[0]?.codes ?? [];
}
