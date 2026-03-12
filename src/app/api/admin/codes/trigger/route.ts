import { NextRequest, NextResponse } from "next/server";
import { fetchAllHoyoverseCodes } from "@/lib/hoyoverse-fetcher";
import { getCodesForGame, setCodesForGame, mergeCodes } from "@/lib/kv-codes";

function verifyAuth(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  if (!auth) return false;
  const password = auth.replace("Bearer ", "");
  return password === (process.env.ADMIN_PASSWORD || "raidgg2026admin");
}

// POST /api/admin/codes/trigger — manually trigger HoYoverse fetch
export async function POST(request: NextRequest) {
  if (!verifyAuth(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const results = await fetchAllHoyoverseCodes();
    const updated: string[] = [];

    for (const [gameSlug, newCodes] of Object.entries(results)) {
      if (newCodes.length > 0) {
        const existing = await getCodesForGame(gameSlug);
        const merged = mergeCodes(existing, newCodes);
        await setCodesForGame(gameSlug, merged, "auto");
        updated.push(`${gameSlug} (${newCodes.length} codes)`);
      }
    }

    return NextResponse.json({
      success: true,
      updated,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Fetch failed", details: String(err) },
      { status: 500 }
    );
  }
}
