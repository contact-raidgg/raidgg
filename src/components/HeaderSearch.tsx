"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";

interface SearchPost {
  title: string;
  slug: string;
  category: string;
  subcategory?: string;
  tags: string[];
}

function getUrl(post: SearchPost): string {
  if (post.subcategory) return `/${post.category}/${post.subcategory}/${post.slug}/`;
  return `/${post.category}/${post.slug}/`;
}

const catLabels: Record<string, string> = {
  "redeem-codes": "Codes",
  "game-guides": "Guides",
  "pro-settings": "Settings",
  "gaming-gear": "Gear",
  "pc-builds": "PC",
  "gaming-phones": "Phones",
  "esports-news": "Esports",
  deals: "Deals",
};

export default function HeaderSearch({ posts }: { posts: SearchPost[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Ctrl+K shortcut
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function onClick(e: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    return posts
      .map((post) => {
        const text = `${post.title} ${post.tags.join(" ")} ${post.category} ${post.subcategory || ""}`.toLowerCase();
        let score = 0;
        for (const w of words) {
          if (post.title.toLowerCase().includes(w)) score += 3;
          else if (text.includes(w)) score += 1;
        }
        return { post, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((r) => r.post);
  }, [query, posts]);

  return (
    <>
      {/* Search trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="hidden lg:flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-dim)] hover:border-[var(--color-primary)] hover:text-[var(--color-text-muted)] transition-colors"
        aria-label="Search"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span>Search</span>
        <kbd className="ml-1 rounded border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-1 py-0.5 text-[10px] font-mono">
          Ctrl K
        </kbd>
      </button>

      {/* Mobile search icon */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden p-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
        aria-label="Search"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>

      {/* Search modal overlay */}
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/60 backdrop-blur-sm">
          <div
            ref={modalRef}
            className="w-full max-w-xl mx-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/50 overflow-hidden"
          >
            {/* Input */}
            <div className="flex items-center border-b border-[var(--color-border)] px-4">
              <svg className="w-5 h-5 text-[var(--color-text-dim)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search posts, guides, codes..."
                className="flex-1 bg-transparent px-3 py-4 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:outline-none"
              />
              <button
                onClick={() => { setOpen(false); setQuery(""); }}
                className="text-xs text-[var(--color-text-dim)] border border-[var(--color-border)] rounded px-1.5 py-0.5 hover:text-[var(--color-text-muted)]"
              >
                ESC
              </button>
            </div>

            {/* Results */}
            {query.length >= 2 && (
              <div className="max-h-[50vh] overflow-y-auto">
                {results.length > 0 ? (
                  results.map((post) => (
                    <Link
                      key={post.slug}
                      href={getUrl(post)}
                      onClick={() => { setOpen(false); setQuery(""); }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-surface-alt)] transition-colors border-b border-[var(--color-border)] last:border-0"
                    >
                      <svg className="w-4 h-4 text-[var(--color-text-dim)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14,2 14,8 20,8" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[var(--color-text)] truncate">
                          {post.title}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider">
                          {catLabels[post.category] || post.category}
                        </p>
                      </div>
                      <svg className="w-4 h-4 text-[var(--color-text-dim)] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6" />
                      </svg>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-8 text-center">
                    <p className="text-sm text-[var(--color-text-muted)]">No results for &ldquo;{query}&rdquo;</p>
                    <p className="text-xs text-[var(--color-text-dim)] mt-1">Try a game name or topic</p>
                  </div>
                )}
              </div>
            )}

            {query.length < 2 && (
              <div className="px-4 py-6 text-center">
                <p className="text-xs text-[var(--color-text-dim)]">Type at least 2 characters to search across all {posts.length} posts</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
