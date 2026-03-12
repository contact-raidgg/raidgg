"use client";

import { useState } from "react";
import type { RedeemCode } from "@/lib/types";

interface RedeemCodeTableProps {
  codes: RedeemCode[];
  game: string;
}

function StatusBadge({ status }: { status: RedeemCode["status"] }) {
  const styles: Record<RedeemCode["status"], string> = {
    active:
      "bg-[var(--color-success)]/15 text-[var(--color-success)]",
    expired:
      "bg-[var(--color-danger)]/15 text-[var(--color-danger)]",
    new: "bg-[var(--color-warning)]/15 text-[var(--color-warning)] animate-pulse",
  };

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function RedeemCodeTable({ codes, game }: RedeemCodeTableProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [redeemOpen, setRedeemOpen] = useState(false);

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch {
      // Fallback: ignore
    }
  };

  return (
    <div>
      <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-alt)]">
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Code
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Reward
              </th>
              <th className="px-4 py-3 text-sm font-semibold text-[var(--color-primary)]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {codes.map((item) => (
              <tr
                key={item.code}
                className="border-b border-[var(--color-border)] last:border-b-0"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-[var(--color-surface-alt)] px-2 py-0.5 font-mono text-sm text-[var(--color-primary)]">
                      {item.code}
                    </code>
                    <button
                      onClick={() => handleCopy(item.code)}
                      className="rounded px-2 py-0.5 text-xs text-[var(--color-text-dim)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface-alt)] transition-colors"
                      aria-label={`Copy code ${item.code}`}
                    >
                      {copiedCode === item.code ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-[var(--color-text-muted)]">
                  {item.reward}
                </td>
                <td className="px-4 py-3">
                  <StatusBadge status={item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How to redeem collapsible */}
      <div className="mt-4">
        <button
          onClick={() => setRedeemOpen(!redeemOpen)}
          className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
        >
          <span className={`transition-transform ${redeemOpen ? "rotate-90" : ""}`}>
            &#9654;
          </span>
          How to redeem {game} codes
        </button>

        {redeemOpen && (
          <div className="mt-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <ol className="list-decimal list-inside space-y-1.5">
              <li>Open {game} and go to the Settings or Profile menu.</li>
              <li>Look for a &quot;Redeem Code&quot; or &quot;Gift Code&quot; option.</li>
              <li>Enter the code exactly as shown above and tap Confirm.</li>
              <li>Check your in-game mailbox or inventory for rewards.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
