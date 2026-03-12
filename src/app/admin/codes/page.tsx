"use client";

import { useState, useEffect } from "react";

interface RedeemCode {
  code: string;
  reward: string;
  status: "active" | "expired" | "new";
  expiry?: string;
}

const ALL_GAMES = [
  { slug: "free-fire", name: "Free Fire", auto: false },
  { slug: "bgmi", name: "BGMI", auto: false },
  { slug: "cod-mobile", name: "COD Mobile", auto: false },
  { slug: "genshin-impact", name: "Genshin Impact", auto: true },
  { slug: "roblox", name: "Roblox", auto: false },
  { slug: "honkai-star-rail", name: "Honkai Star Rail", auto: true },
  { slug: "pubg-mobile", name: "PUBG Mobile", auto: false },
  { slug: "wuthering-waves", name: "Wuthering Waves", auto: false },
  { slug: "zenless-zone-zero", name: "Zenless Zone Zero", auto: true },
  { slug: "mobile-legends", name: "Mobile Legends", auto: false },
  { slug: "honkai-impact", name: "Honkai Impact 3rd", auto: true },
];

export default function AdminCodesPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [selectedGame, setSelectedGame] = useState(ALL_GAMES[0].slug);
  const [codes, setCodes] = useState<RedeemCode[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // New code form
  const [newCode, setNewCode] = useState("");
  const [newReward, setNewReward] = useState("");
  const [newStatus, setNewStatus] = useState<"active" | "new">("new");

  // Auto-fetch status
  const [fetching, setFetching] = useState(false);
  const [fetchResult, setFetchResult] = useState("");

  // Check saved password
  useEffect(() => {
    const saved = localStorage.getItem("raidgg_admin_pw");
    if (saved) {
      setPassword(saved);
      setAuthed(true);
    }
  }, []);

  const login = () => {
    localStorage.setItem("raidgg_admin_pw", password);
    setAuthed(true);
    setMessage("");
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${password}`,
  };

  // Load codes for selected game
  const loadCodes = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/codes?game=${selectedGame}`,
        { headers }
      );
      if (res.status === 401) {
        setAuthed(false);
        localStorage.removeItem("raidgg_admin_pw");
        return;
      }
      const data = (await res.json()) as { codes?: RedeemCode[] };
      setCodes(data.codes || []);
    } catch {
      setMessage("Failed to load codes");
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authed) loadCodes();
  }, [authed, selectedGame]);

  // Save codes
  const saveCodes = async (updatedCodes: RedeemCode[]) => {
    try {
      const res = await fetch("/api/admin/codes", {
        method: "POST",
        headers,
        body: JSON.stringify({ game: selectedGame, codes: updatedCodes }),
      });
      if (res.ok) {
        setCodes(updatedCodes);
        setMessage("Saved!");
        setTimeout(() => setMessage(""), 2000);
      } else {
        setMessage("Save failed");
      }
    } catch {
      setMessage("Save failed");
    }
  };

  // Add new code
  const addCode = () => {
    if (!newCode.trim() || !newReward.trim()) return;
    const updated = [
      { code: newCode.trim().toUpperCase(), reward: newReward.trim(), status: newStatus },
      ...codes,
    ];
    saveCodes(updated);
    setNewCode("");
    setNewReward("");
  };

  // Remove a code
  const removeCode = (codeStr: string) => {
    saveCodes(codes.filter((c) => c.code !== codeStr));
  };

  // Toggle status
  const toggleStatus = (codeStr: string) => {
    const updated = codes.map((c) => {
      if (c.code !== codeStr) return c;
      const nextStatus: Record<string, RedeemCode["status"]> = {
        active: "expired",
        expired: "new",
        new: "active",
      };
      return { ...c, status: nextStatus[c.status] };
    });
    saveCodes(updated);
  };

  // Trigger HoYo auto-fetch
  const triggerAutoFetch = async () => {
    setFetching(true);
    setFetchResult("");
    try {
      const res = await fetch("/api/admin/codes/trigger", {
        method: "POST",
        headers,
      });
      const data = (await res.json()) as {
        success?: boolean;
        updated?: string[];
        error?: string;
      };
      if (data.success) {
        setFetchResult(
          `Fetched: ${data.updated?.join(", ") || "No new codes found"}`
        );
        loadCodes(); // Refresh
      } else {
        setFetchResult(`Error: ${data.error || "Unknown error"}`);
      }
    } catch {
      setFetchResult("Fetch failed");
    }
    setFetching(false);
  };

  // ── Login Screen ────────────────────────────
  if (!authed) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-full max-w-sm rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h1 className="font-heading text-xl font-bold text-center mb-6">
            Admin Login
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            placeholder="Enter admin password"
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary)]"
          />
          <button
            onClick={login}
            className="mt-4 w-full rounded-lg bg-[var(--color-primary)] py-2.5 text-sm font-semibold text-[var(--color-base)]"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ── Main Admin Panel ────────────────────────
  const currentGame = ALL_GAMES.find((g) => g.slug === selectedGame);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold">Redeem Codes Manager</h1>
        {message && (
          <span className="text-sm font-medium text-[var(--color-success)]">
            {message}
          </span>
        )}
      </div>

      {/* HoYo Auto-Fetch */}
      <div className="rounded-lg border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text)]">
              HoYoverse Auto-Fetch
            </p>
            <p className="text-xs text-[var(--color-text-dim)] mt-1">
              Genshin Impact, Honkai Star Rail, ZZZ, Honkai Impact 3rd
            </p>
          </div>
          <button
            onClick={triggerAutoFetch}
            disabled={fetching}
            className="rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-base)] disabled:opacity-50"
          >
            {fetching ? "Fetching..." : "Fetch Now"}
          </button>
        </div>
        {fetchResult && (
          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            {fetchResult}
          </p>
        )}
      </div>

      {/* Game Selector */}
      <div className="flex flex-wrap gap-2">
        {ALL_GAMES.map((game) => (
          <button
            key={game.slug}
            onClick={() => setSelectedGame(game.slug)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
              selectedGame === game.slug
                ? "border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                : "border-[var(--color-border)] text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
            }`}
          >
            {game.name}
            {game.auto && (
              <span className="ml-1 text-[10px] text-[var(--color-success)]">
                AUTO
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Add New Code */}
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
        <p className="text-sm font-semibold text-[var(--color-text)] mb-3">
          Add Code to {currentGame?.name}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value.toUpperCase())}
            placeholder="CODE (e.g., FFGAMING2026)"
            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-2 text-sm font-mono text-[var(--color-primary)] placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary)]"
          />
          <input
            type="text"
            value={newReward}
            onChange={(e) => setNewReward(e.target.value)}
            placeholder="Reward (e.g., 500 Diamonds + Loot Crate)"
            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary)]"
          />
          <select
            value={newStatus}
            onChange={(e) =>
              setNewStatus(e.target.value as "active" | "new")
            }
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-3 py-2 text-sm text-[var(--color-text)]"
          >
            <option value="new">New</option>
            <option value="active">Active</option>
          </select>
          <button
            onClick={addCode}
            className="rounded-lg bg-[var(--color-success)] px-4 py-2 text-sm font-semibold text-[var(--color-base)] whitespace-nowrap"
          >
            + Add
          </button>
        </div>
      </div>

      {/* Current Codes */}
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-alt)] flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--color-text)]">
            {currentGame?.name} — {codes.length} code
            {codes.length !== 1 ? "s" : ""}
          </p>
          {loading && (
            <span className="text-xs text-[var(--color-text-dim)]">
              Loading...
            </span>
          )}
        </div>

        {codes.length === 0 ? (
          <div className="px-4 py-8 text-center text-sm text-[var(--color-text-dim)]">
            No codes yet. Add one above or trigger auto-fetch.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] text-left">
                <th className="px-4 py-2 text-xs text-[var(--color-text-dim)]">
                  Code
                </th>
                <th className="px-4 py-2 text-xs text-[var(--color-text-dim)]">
                  Reward
                </th>
                <th className="px-4 py-2 text-xs text-[var(--color-text-dim)]">
                  Status
                </th>
                <th className="px-4 py-2 text-xs text-[var(--color-text-dim)]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {codes.map((item) => (
                <tr
                  key={item.code}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="px-4 py-2.5">
                    <code className="font-mono text-[var(--color-primary)]">
                      {item.code}
                    </code>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--color-text-muted)]">
                    {item.reward}
                  </td>
                  <td className="px-4 py-2.5">
                    <button
                      onClick={() => toggleStatus(item.code)}
                      className={`rounded-full px-2 py-0.5 text-xs font-medium capitalize ${
                        item.status === "active"
                          ? "bg-[var(--color-success)]/15 text-[var(--color-success)]"
                          : item.status === "new"
                          ? "bg-[var(--color-warning)]/15 text-[var(--color-warning)]"
                          : "bg-[var(--color-danger)]/15 text-[var(--color-danger)]"
                      }`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="px-4 py-2.5">
                    <button
                      onClick={() => removeCode(item.code)}
                      className="text-xs text-[var(--color-danger)] hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Where to Find Codes (Reference) */}
      {!currentGame?.auto && (
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
          <p className="text-sm font-semibold text-[var(--color-text)] mb-2">
            Where to find {currentGame?.name} codes:
          </p>
          <ul className="space-y-1 text-xs text-[var(--color-text-muted)]">
            {getCodeSources(selectedGame).map((src, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-[var(--color-primary)]">-</span>
                {src}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function getCodeSources(slug: string): string[] {
  const sources: Record<string, string[]> = {
    "free-fire": [
      "Official Garena Twitter/X: @FreeFire",
      "Garena redemption site: reward.ff.garena.com",
      "Official Instagram: @faborofficial",
      "Free Fire YouTube livestreams",
    ],
    bgmi: [
      "Official BGMI Instagram: @battlegroundsmobile_in",
      "BGMI Discord server announcements",
      "YouTube livestream codes during events",
      "Official website: battlegroundsmobileindia.com",
    ],
    "cod-mobile": [
      "Reddit: r/CallOfDutyMobile (pinned posts)",
      "Official Twitter: @PlayCODMobile",
      "Official Discord server",
      "YouTube community posts",
    ],
    roblox: [
      "Twitter: @Roblox and game-specific accounts",
      "YouTube gaming creators (codes in descriptions)",
      "Official Roblox blog for event codes",
      "Game-specific Discord servers",
    ],
    "pubg-mobile": [
      "Official PUBG Mobile website",
      "Facebook: PUBG Mobile Official",
      "Twitter: @PUBGMOBILE",
      "YouTube livestream events",
    ],
    "wuthering-waves": [
      "Official Discord server announcements",
      "Twitter: @WutheringWaves",
      "Reddit: r/WutheringWaves",
      "Official HoYoLAB-style community",
    ],
    "mobile-legends": [
      "Official Instagram: @mobilelegendsbangbang",
      "Official Facebook page",
      "YouTube: Mobile Legends Bang Bang",
      "Twitter: @MobileLegendsOL",
    ],
  };
  return sources[slug] || ["Check official social media channels"];
}
