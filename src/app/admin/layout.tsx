export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--color-base)] text-[var(--color-text)]">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3">
        <div className="mx-auto max-w-5xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-heading text-lg font-bold">
              <span className="text-[var(--color-primary)]">RAID</span>
              <span className="gradient-text">GG</span>
            </span>
            <span className="text-xs text-[var(--color-text-dim)] border border-[var(--color-border)] rounded px-2 py-0.5">
              ADMIN
            </span>
          </div>
          <a
            href="/"
            className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-primary)]"
          >
            Back to Site
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
    </div>
  );
}
