import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist, was removed, or the URL is wrong.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      {/* Glitch grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative inline-block mb-8">
        {/* 404 number */}
        <h1 className="font-heading text-[8rem] md:text-[12rem] font-bold leading-none tracking-wider text-[var(--color-surface-alt)]">
          404
        </h1>

        {/* GAME OVER overlay */}
        <span className="absolute inset-0 flex items-center justify-center font-heading text-4xl md:text-6xl font-bold tracking-widest text-[var(--color-danger)]">
          GAME OVER
        </span>
      </div>

      <p className="max-w-md text-lg text-[var(--color-text-muted)]">
        The page you&apos;re looking for doesn&apos;t exist, was removed, or the URL is wrong.
        Maybe the loot was already claimed.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-base)] transition-opacity hover:opacity-90"
        >
          Respawn at Home
        </Link>
        <Link
          href="/redeem-codes"
          className="rounded-lg border border-[var(--color-border)] px-6 py-3 font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
        >
          Get Redeem Codes
        </Link>
      </div>

      {/* Decorative scanline */}
      <div className="mt-12 h-px w-48 bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent" />
      <p className="mt-4 font-mono text-xs text-[var(--color-text-dim)]">
        ERROR_CODE: PAGE_NOT_FOUND // SECTOR_404
      </p>
    </div>
  );
}
