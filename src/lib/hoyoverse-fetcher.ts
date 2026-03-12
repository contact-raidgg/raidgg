import type { RedeemCode } from "./types";

/**
 * HoYoverse Code Fetcher
 *
 * Fetches active redeem codes for HoYoverse games from community wiki APIs.
 * Uses Fandom/wiki APIs which are publicly accessible and regularly updated.
 */

interface WikiCodeEntry {
  code: string;
  reward: string;
  expired: boolean;
}

// ── Genshin Impact ───────────────────────────────────────
async function fetchGenshinCodes(): Promise<RedeemCode[]> {
  try {
    // Fetch from the Genshin wiki's promotional codes page
    const res = await fetch(
      "https://genshin-impact.fandom.com/api.php?action=parse&page=Promotional_Code&prop=wikitext&format=json",
      { headers: { "User-Agent": "RaidGG-Bot/1.0" } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as any;
    const wikitext: string = data?.parse?.wikitext?.["*"] || "";

    return parseWikiCodes(wikitext);
  } catch {
    return [];
  }
}

// ── Honkai Star Rail ─────────────────────────────────────
async function fetchHSRCodes(): Promise<RedeemCode[]> {
  try {
    const res = await fetch(
      "https://honkai-star-rail.fandom.com/api.php?action=parse&page=Redemption_Code&prop=wikitext&format=json",
      { headers: { "User-Agent": "RaidGG-Bot/1.0" } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as any;
    const wikitext: string = data?.parse?.wikitext?.["*"] || "";

    return parseWikiCodes(wikitext);
  } catch {
    return [];
  }
}

// ── Zenless Zone Zero ────────────────────────────────────
async function fetchZZZCodes(): Promise<RedeemCode[]> {
  try {
    const res = await fetch(
      "https://zenless-zone-zero.fandom.com/api.php?action=parse&page=Redemption_Code&prop=wikitext&format=json",
      { headers: { "User-Agent": "RaidGG-Bot/1.0" } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as any;
    const wikitext: string = data?.parse?.wikitext?.["*"] || "";

    return parseWikiCodes(wikitext);
  } catch {
    return [];
  }
}

// ── Honkai Impact 3rd ────────────────────────────────────
async function fetchHonkai3rdCodes(): Promise<RedeemCode[]> {
  try {
    const res = await fetch(
      "https://honkaiimpact3.fandom.com/api.php?action=parse&page=Exchange_Rewards&prop=wikitext&format=json",
      { headers: { "User-Agent": "RaidGG-Bot/1.0" } }
    );
    if (!res.ok) return [];

    const data = (await res.json()) as any;
    const wikitext: string = data?.parse?.wikitext?.["*"] || "";

    return parseWikiCodes(wikitext);
  } catch {
    return [];
  }
}

// ── Wiki text parser ─────────────────────────────────────
function parseWikiCodes(wikitext: string): RedeemCode[] {
  const codes: RedeemCode[] = [];
  const lines = wikitext.split("\n");

  // Pattern 1: Table rows like | CODE || Reward || Status
  // Pattern 2: Lines containing code-like strings (uppercase alphanumeric 8+ chars)
  const codePattern = /\b([A-Z0-9]{6,20})\b/g;

  let inActiveSection = false;
  let inExpiredSection = false;

  for (const line of lines) {
    const lowerLine = line.toLowerCase();

    // Track sections
    if (lowerLine.includes("active") && (lowerLine.startsWith("==") || lowerLine.startsWith("{"))) {
      inActiveSection = true;
      inExpiredSection = false;
      continue;
    }
    if (lowerLine.includes("expired") && (lowerLine.startsWith("==") || lowerLine.startsWith("{"))) {
      inActiveSection = false;
      inExpiredSection = true;
      continue;
    }

    // Skip non-table lines
    if (!line.includes("|")) continue;

    // Extract code from table row
    const cells = line.split("||").map((c) => c.replace(/^\|/, "").trim());
    if (cells.length < 2) continue;

    const codeMatch = cells[0].match(codePattern);
    if (codeMatch && codeMatch[0].length >= 6) {
      const code = codeMatch[0];
      // Clean reward text (remove wiki markup)
      const reward = cells[1]
        .replace(/\[\[([^\]|]*\|)?([^\]]*)\]\]/g, "$2")
        .replace(/'''?/g, "")
        .replace(/<[^>]*>/g, "")
        .trim();

      if (code && reward && !reward.includes("{{")) {
        codes.push({
          code,
          reward: reward.slice(0, 100), // Limit length
          status: inExpiredSection ? "expired" : "active",
        });
      }
    }
  }

  // If no codes found from table parsing, try line-by-line code extraction
  if (codes.length === 0) {
    for (const line of lines) {
      if (line.includes("expired") || line.includes("Expired")) continue;

      const matches = line.match(codePattern);
      if (matches) {
        for (const code of matches) {
          // Filter out common non-code words
          if (code.length >= 8 && code.length <= 20 && !isCommonWord(code)) {
            codes.push({
              code,
              reward: "In-game rewards",
              status: "active",
            });
          }
        }
      }
    }
  }

  // Deduplicate
  const seen = new Set<string>();
  return codes.filter((c) => {
    if (seen.has(c.code)) return false;
    seen.add(c.code);
    return true;
  });
}

function isCommonWord(str: string): boolean {
  const common = [
    "CODE", "ACTIVE", "EXPIRED", "STATUS", "REWARD", "SERVER",
    "GLOBAL", "REDEEM", "DATE", "AVAILABLE", "REGION", "UPDATE",
    "VERSION", "EVENT", "SPECIAL", "LIMITED", "SOURCE", "NOTES",
  ];
  return common.includes(str);
}

// ── Public API ───────────────────────────────────────────

const HOYOVERSE_GAMES: Record<string, () => Promise<RedeemCode[]>> = {
  "genshin-impact": fetchGenshinCodes,
  "honkai-star-rail": fetchHSRCodes,
  "zenless-zone-zero": fetchZZZCodes,
  "honkai-impact": fetchHonkai3rdCodes,
};

export async function fetchHoyoverseCodes(
  gameSlug: string
): Promise<RedeemCode[]> {
  const fetcher = HOYOVERSE_GAMES[gameSlug];
  if (!fetcher) return [];

  try {
    return await fetcher();
  } catch {
    return [];
  }
}

export async function fetchAllHoyoverseCodes(): Promise<
  Record<string, RedeemCode[]>
> {
  const results: Record<string, RedeemCode[]> = {};

  await Promise.allSettled(
    Object.entries(HOYOVERSE_GAMES).map(async ([slug, fetcher]) => {
      try {
        const codes = await fetcher();
        if (codes.length > 0) {
          results[slug] = codes;
        }
      } catch {
        // Skip failed fetches
      }
    })
  );

  return results;
}

export const HOYOVERSE_GAME_SLUGS = Object.keys(HOYOVERSE_GAMES);
