"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Connect to newsletter backend (e.g. Mailchimp, ConvertKit)
    setSubmitted(true);
  };

  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <h3 className="font-heading text-lg font-semibold text-[var(--color-text)]">
        Stay in the loop
      </h3>
      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
        Get the latest codes &amp; deals in your inbox.
      </p>

      {submitted ? (
        <p className="mt-4 text-sm font-medium text-[var(--color-success)]">
          Thanks for subscribing!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
          />
          <button
            type="submit"
            className="rounded-lg bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-base)] transition-opacity hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
