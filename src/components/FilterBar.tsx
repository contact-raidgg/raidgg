"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/types";
import PostCard from "./PostCard";

interface FilterOption {
  label: string;
  value: string;
}

interface FilterBarProps {
  posts: PostMeta[];
  filters: FilterOption[];
}

export default function FilterBar({ posts, filters }: FilterBarProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? posts
      : posts.filter((p) => p.tags.includes(active));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === f.value
                ? "bg-[var(--color-primary)] text-[var(--color-base)]"
                : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-[var(--color-text-muted)]">
          No posts matching this filter. Check back soon!
        </p>
      )}
    </>
  );
}
