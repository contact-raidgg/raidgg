import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { getPostUrl } from "@/lib/utils";

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const href = getPostUrl(post);

  return (
    <Link href={href} className="block card-hover rounded-xl overflow-hidden bg-[var(--color-surface)]">
      {/* Image / placeholder */}
      <div className="relative aspect-video w-full">
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width={640}
            height={360}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-border)]" />
        )}

        {/* Category badge */}
        <span className="absolute top-3 left-3 rounded-full bg-[var(--color-primary)]/15 px-3 py-0.5 text-xs font-medium text-[var(--color-primary)] backdrop-blur">
          {post.category.replace(/-/g, " ")}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] line-clamp-2 leading-snug">
          {post.title}
        </h3>

        {post.description && (
          <p className="mt-1.5 text-sm text-[var(--color-text-muted)] line-clamp-2">
            {post.description}
          </p>
        )}

        <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-dim)]">
          <time dateTime={post.date}>{post.date}</time>
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </div>
    </Link>
  );
}
