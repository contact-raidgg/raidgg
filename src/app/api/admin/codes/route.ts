import { NextRequest, NextResponse } from "next/server";
import { getCodesForGame, setCodesForGame, getAllGameCodes } from "@/lib/kv-codes";

function verifyAuth(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  if (!auth) return false;
  const password = auth.replace("Bearer ", "");
  // In production, use Cloudflare secret. For now, env var.
  return password === (process.env.ADMIN_PASSWORD || "raidgg2026admin");
}

// GET /api/admin/codes?game=free-fire
export async function GET(request: NextRequest) {
  if (!verifyAuth(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const game = request.nextUrl.searchParams.get("game");

  if (game) {
    const codes = await getCodesForGame(game);
    return NextResponse.json({ game, codes });
  }

  // Return all games
  const allCodes = await getAllGameCodes();
  return NextResponse.json(allCodes);
}

// POST /api/admin/codes  { game, codes }
export async function POST(request: NextRequest) {
  if (!verifyAuth(request))
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const body = (await request.json()) as { game: string; codes: any[] };
    const { game, codes } = body;

    if (!game || !Array.isArray(codes)) {
      return NextResponse.json(
        { error: "Missing game or codes" },
        { status: 400 }
      );
    }

    await setCodesForGame(game, codes, "manual");
    return NextResponse.json({ success: true, game, count: codes.length });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to save codes", details: String(err) },
      { status: 500 }
    );
  }
}
