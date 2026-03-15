"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";

interface SearchPost {
  title: string;
  slug: string;
  category: string;
  subcategory?: string;
  tags: string[];
  description?: string;
}

function getPostUrl(post: SearchPost): string {
  if (post.category === "redeem-codes" && post.subcategory) {
    return `/${post.category}/${post.subcategory}/`;
  }
  if (post.subcategory) {
    return `/${post.category}/${post.subcategory}/${post.slug}/`;
  }
  return `/${post.category}/${post.slug}/`;
}

const categoryLabels: Record<string, string> = {
  "redeem-codes": "Redeem Codes",
  "game-guides": "Game Guides",
  "pro-settings": "Pro Settings",
  "gaming-gear": "Gaming Gear",
  "pc-builds": "PC Builds",
  "gaming-phones": "Phones",
  "esports-news": "Esports",
  deals: "Deals",
};

const categoryColors: Record<string, string> = {
  "redeem-codes": "text-[var(--color-primary)]",
  "game-guides": "text-[var(--color-accent)]",
  "pro-settings": "text-[var(--color-warning)]",
  "gaming-gear": "text-[var(--color-success)]",
  "pc-builds": "text-[var(--color-danger)]",
  "gaming-phones": "text-[var(--color-accent)]",
  "esports-news": "text-[var(--color-primary)]",
  deals: "text-[var(--color-success)]",
};

export default function SearchBar({ posts }: { posts: SearchPost[] }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Keyboard shortcut: Ctrl+K or /
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setFocused(false);
        inputRef.current?.blur();
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);

    return posts
      .map((post) => {
        const searchText = `${post.title} ${post.tags.join(" ")} ${post.category} ${post.subcategory || ""} ${post.description || ""}`.toLowerCase();
        let score = 0;
        for (const word of words) {
          if (post.title.toLowerCase().includes(word)) score += 3;
          else if (searchText.includes(word)) score += 1;
        }
        return { post, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((r) => r.post);
  }, [query, posts]);

  const showDropdown = focused && query.length >= 2;

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto">
      {/* Search input */}
      <div className="relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-dim)]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder="Search redeem codes, guides, settings, gear..."
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] pl-12 pr-20 py-3.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]/30 transition-colors"
        />
        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:inline-flex items-center gap-1 rounded-md border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-2 py-0.5 text-[10px] text-[var(--color-text-dim)] font-mono">
          Ctrl K
        </kbd>
      </div>

      {/* Results dropdown */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl shadow-black/40 z-50 overflow-hidden">
          {results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              <p className="px-4 py-2 text-xs text-[var(--color-text-dim)] uppercase tracking-wider border-b border-[var(--color-border)]">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </p>
              {results.map((post) => (
                <Link
                  key={post.slug}
                  href={getPostUrl(post)}
                  onClick={() => {
                    setFocused(false);
                    setQuery("");
                  }}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[var(--color-surface-alt)] transition-colors border-b border-[var(--color-border)] last:border-0"
                >
                  <svg
                    className="w-4 h-4 text-[var(--color-text-dim)] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14,2 14,8 20,8" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[var(--color-text)] truncate">
                      {post.title}
                    </p>
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-wider ${
                        categoryColors[post.category] || "text-[var(--color-text-dim)]"
                      }`}
                    >
                      {categoryLabels[post.category] || post.category}
                    </span>
                  </div>
                  <svg
                    className="w-4 h-4 text-[var(--color-text-dim)] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9,18 15,12 9,6" />
                  </svg>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center">
              <p className="text-sm text-[var(--color-text-muted)]">
                No results for &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-[var(--color-text-dim)] mt-1">
                Try searching for a game name, guide topic, or gear type
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
