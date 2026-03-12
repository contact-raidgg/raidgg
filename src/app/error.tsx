"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 text-center">
      <h1 className="font-heading text-3xl font-bold text-[var(--color-text)] mb-4">
        Something went wrong
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-[var(--color-primary)] px-6 py-3 font-semibold text-[var(--color-base)] hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
