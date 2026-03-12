import type { RedeemCode } from "./types";
import { getPostsBySubcategory } from "./content";

/**
 * Get Cloudflare KV binding (returns null in dev or if unavailable)
 */
async function getKV(): Promise<KVNamespace | null> {
  try {
    const { getCloudflareContext } = await import("@opennextjs/cloudflare");
    const ctx = await getCloudflareContext({ async: true });
    return (ctx.env as any).REDEEM_CODES ?? null;
  } catch {
    return null;
  }
}

/**
 * Read codes for a game from KV, falling back to static content.ts
 */
export async function getCodesForGame(gameSlug: string): Promise<RedeemCode[]> {
  try {
    const kv = await getKV();
    if (kv) {
      const data = await kv.get<RedeemCode[]>(gameSlug, "json");
      if (data && data.length > 0) return data;
    }
  } catch {
    // KV unavailable — fall through to static
  }

  // Fallback: get codes from latest static post
  const posts = getPostsBySubcategory("redeem-codes", gameSlug);
  return posts[0]?.codes ?? [];
}

/**
 * Write codes for a game to KV
 */
export async function setCodesForGame(
  gameSlug: string,
  codes: RedeemCode[],
  source: "manual" | "auto" = "manual"
): Promise<void> {
  const kv = await getKV();
  if (!kv) throw new Error("KV not available");

  await kv.put(gameSlug, JSON.stringify(codes), {
    metadata: { updatedAt: new Date().toISOString(), source },
  });
}

/**
 * Get all game codes from KV
 */
export async function getAllGameCodes(): Promise<
  Record<string, { codes: RedeemCode[]; updatedAt?: string; source?: string }>
> {
  const kv = await getKV();
  if (!kv) return {};

  const list = await kv.list();
  const result: Record<string, { codes: RedeemCode[]; updatedAt?: string; source?: string }> = {};

  for (const key of list.keys) {
    const data = await kv.get<RedeemCode[]>(key.name, "json");
    const meta = key.metadata as any;
    if (data) {
      result[key.name] = {
        codes: data,
        updatedAt: meta?.updatedAt,
        source: meta?.source,
      };
    }
  }
  return result;
}

/**
 * Merge codes: keep existing manual codes, update/add incoming codes
 */
export function mergeCodes(
  existing: RedeemCode[],
  incoming: RedeemCode[]
): RedeemCode[] {
  const codeMap = new Map<string, RedeemCode>();

  for (const c of existing) codeMap.set(c.code, c);
  for (const c of incoming) codeMap.set(c.code, c);

  return Array.from(codeMap.values());
}
