"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/types";
import PostCard from "./PostCard";

interface PaginatedGridProps {
  posts: PostMeta[];
  perPage?: number;
}

export default function PaginatedGrid({ posts, perPage = 9 }: PaginatedGridProps) {
  const [visible, setVisible] = useState(perPage);
  const shown = posts.slice(0, visible);
  const hasMore = visible < posts.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setVisible((v) => v + perPage)}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-2.5 text-sm font-medium text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Show More ({posts.length - visible} remaining)
          </button>
        </div>
      )}
    </>
  );
}
