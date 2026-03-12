export default function PageSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="h-4 w-48 rounded bg-[var(--color-surface-alt)] mb-8" />

      {/* Title skeleton */}
      <div className="h-10 w-80 rounded bg-[var(--color-surface-alt)] mb-3" />
      <div className="h-5 w-96 max-w-full rounded bg-[var(--color-surface-alt)] mb-10" />

      {/* Card grid skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl bg-[var(--color-surface)] overflow-hidden"
          >
            <div className="aspect-video bg-[var(--color-surface-alt)]" />
            <div className="p-4 space-y-3">
              <div className="h-5 w-3/4 rounded bg-[var(--color-surface-alt)]" />
              <div className="h-4 w-full rounded bg-[var(--color-surface-alt)]" />
              <div className="h-3 w-24 rounded bg-[var(--color-surface-alt)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
