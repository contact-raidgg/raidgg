import type { RedeemCode } from "./types";

/**
 * Client-side HoYoverse code fetcher.
 * Runs in the browser — uses Fandom wiki APIs with CORS (&origin=*).
 */

const WIKI_URLS: Record<string, string> = {
  "genshin-impact":
    "https://genshin-impact.fandom.com/api.php?action=parse&page=Promotional_Code&prop=wikitext&format=json&origin=*",
  "honkai-star-rail":
    "https://honkai-star-rail.fandom.com/api.php?action=parse&page=Redemption_Code&prop=wikitext&format=json&origin=*",
  "zenless-zone-zero":
    "https://zenless-zone-zero.fandom.com/api.php?action=parse&page=Redemption_Code&prop=wikitext&format=json&origin=*",
  "honkai-impact":
    "https://honkaiimpact3.fandom.com/api.php?action=parse&page=Exchange_Rewards&prop=wikitext&format=json&origin=*",
  "wuthering-waves":
    "https://wutheringwaves.fandom.com/api.php?action=parse&page=Redemption_Code&prop=wikitext&format=json&origin=*",
};

export const HOYOVERSE_CLIENT_SLUGS = Object.keys(WIKI_URLS);

export async function fetchLiveCodes(gameSlug: string): Promise<RedeemCode[]> {
  const url = WIKI_URLS[gameSlug];
  if (!url) return [];

  try {
    const res = await fetch(url);
    if (!res.ok) return [];

    const data = (await res.json()) as any;
    const wikitext: string = data?.parse?.wikitext?.["*"] || "";

    return parseWikiCodes(wikitext);
  } catch {
    return [];
  }
}

// ── Wiki text parser (same logic as server-side) ─────────
function parseWikiCodes(wikitext: string): RedeemCode[] {
  const codes: RedeemCode[] = [];
  const lines = wikitext.split("\n");
  const codePattern = /\b([A-Z0-9]{6,20})\b/g;

  let inExpiredSection = false;

  for (const line of lines) {
    const lowerLine = line.toLowerCase();

    if (
      lowerLine.includes("active") &&
      (lowerLine.startsWith("==") || lowerLine.startsWith("{"))
    ) {
      inExpiredSection = false;
      continue;
    }
    if (
      lowerLine.includes("expired") &&
      (lowerLine.startsWith("==") || lowerLine.startsWith("{"))
    ) {
      inExpiredSection = true;
      continue;
    }

    if (!line.includes("|")) continue;

    const cells = line.split("||").map((c) => c.replace(/^\|/, "").trim());
    if (cells.length < 2) continue;

    const codeMatch = cells[0].match(codePattern);
    if (codeMatch && codeMatch[0].length >= 6) {
      const code = codeMatch[0];
      const reward = cells[1]
        .replace(/\[\[([^\]|]*\|)?([^\]]*)\]\]/g, "$2")
        .replace(/'''?/g, "")
        .replace(/<[^>]*>/g, "")
        .trim();

      if (code && reward && !reward.includes("{{")) {
        codes.push({
          code,
          reward: reward.slice(0, 100),
          status: inExpiredSection ? "expired" : "active",
        });
      }
    }
  }

  if (codes.length === 0) {
    for (const line of lines) {
      if (line.includes("expired") || line.includes("Expired")) continue;

      const matches = line.match(codePattern);
      if (matches) {
        for (const code of matches) {
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
