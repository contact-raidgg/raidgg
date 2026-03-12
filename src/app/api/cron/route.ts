import { NextRequest, NextResponse } from "next/server";
import { fetchAllHoyoverseCodes } from "@/lib/hoyoverse-fetcher";
import { getCodesForGame, setCodesForGame, mergeCodes } from "@/lib/kv-codes";

// GET /api/cron?secret=... — Called by external cron (Cloudflare Worker or cron-job.org)
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const expectedSecret = process.env.ADMIN_PASSWORD || "raidgg2026admin";

  if (secret !== expectedSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const results = await fetchAllHoyoverseCodes();
    const updated: string[] = [];

    for (const [gameSlug, newCodes] of Object.entries(results)) {
      if (newCodes.length > 0) {
        const existing = await getCodesForGame(gameSlug);
        const merged = mergeCodes(existing, newCodes);
        await setCodesForGame(gameSlug, merged, "auto");
        updated.push(`${gameSlug}: ${newCodes.length} codes`);
      }
    }

    return NextResponse.json({
      success: true,
      updated,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Cron failed", details: String(err) },
      { status: 500 }
    );
  }
}
