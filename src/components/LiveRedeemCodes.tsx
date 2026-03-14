"use client";

import { useEffect, useState } from "react";
import type { RedeemCode } from "@/lib/types";
import { fetchLiveCodes, HOYOVERSE_CLIENT_SLUGS } from "@/lib/hoyoverse-client";
import RedeemCodeTable from "./RedeemCodeTable";

interface LiveRedeemCodesProps {
  gameSlug: string;
  gameName: string;
  fallbackCodes: RedeemCode[];
}

export default function LiveRedeemCodes({
  gameSlug,
  gameName,
  fallbackCodes,
}: LiveRedeemCodesProps) {
  const isLiveSupported = HOYOVERSE_CLIENT_SLUGS.includes(gameSlug);
  const [codes, setCodes] = useState<RedeemCode[]>(fallbackCodes);
  const [loading, setLoading] = useState(isLiveSupported);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!isLiveSupported) return;

    let cancelled = false;

    fetchLiveCodes(gameSlug).then((liveCodes) => {
      if (cancelled) return;
      if (liveCodes.length > 0) {
        setCodes(liveCodes);
        setIsLive(true);
      }
      setLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [gameSlug, isLiveSupported]);

  if (loading) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-primary)] border-t-transparent" />
          <p className="text-sm text-[var(--color-text-muted)]">
            Fetching latest {gameName} codes...
          </p>
        </div>
      </div>
    );
  }

  if (codes.length === 0) {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
        <p className="text-[var(--color-text-muted)] text-sm">
          No active codes available right now. Check back soon &mdash; we update
          this page as new codes are released.
        </p>
      </div>
    );
  }

  return (
    <div>
      {isLive && (
        <div className="mb-3 flex items-center gap-2 text-xs text-[var(--color-success)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
          </span>
          Live — codes fetched just now
        </div>
      )}
      <RedeemCodeTable codes={codes} game={gameName} />
    </div>
  );
}
