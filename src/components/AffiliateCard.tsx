interface AffiliateCardProps {
  label: string;
  url: string;
  price?: string;
  platform: string;
}

export default function AffiliateCard({
  label,
  url,
  price,
  platform,
}: AffiliateCardProps) {
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <p className="font-heading text-lg font-semibold text-[var(--color-text)]">
        {label}
      </p>

      <div className="mt-2 flex items-center gap-3">
        {price && (
          <span className="text-xl font-bold text-[var(--color-primary)]">
            {price}
          </span>
        )}
        <span className="text-sm text-[var(--color-text-dim)]">
          on {platform}
        </span>
      </div>

      <a
        href={url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)]/15 px-5 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)]/25"
      >
        Check Price
        {/* External link icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>

      <p className="mt-3 text-[10px] text-[var(--color-text-dim)] leading-snug">
        As an affiliate, we may earn from qualifying purchases.
      </p>
    </div>
  );
}
