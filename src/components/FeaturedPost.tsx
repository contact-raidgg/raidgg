import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { getPostUrl } from "@/lib/utils";

interface FeaturedPostProps {
  post: PostMeta;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  const href = getPostUrl(post);

  return (
    <Link
      href={href}
      className="group block card-hover rounded-xl overflow-hidden bg-[var(--color-surface)] md:grid md:grid-cols-2"
    >
      {/* Image / placeholder */}
      <div className="relative aspect-video md:aspect-auto md:h-full w-full">
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width={800}
            height={450}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full min-h-[240px] bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20" />
        )}

        {/* Featured badge with glow */}
        <span className="absolute top-4 left-4 rounded-full bg-[var(--color-warning)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-base)] shadow-[0_0_12px_rgba(255,214,10,0.5)]">
          Featured
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-center">
        {/* Category badge */}
        <span className="mb-3 inline-block w-fit rounded-full bg-[var(--color-primary)]/15 px-3 py-0.5 text-xs font-medium text-[var(--color-primary)]">
          {post.category.replace(/-/g, " ")}
        </span>

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight group-hover:text-[var(--color-primary)] transition-colors">
          {post.title}
        </h2>

        {post.description && (
          <p className="mt-3 text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
            {post.description}
          </p>
        )}

        <div className="mt-4 flex items-center gap-4 text-sm text-[var(--color-text-dim)]">
          <time dateTime={post.date}>{post.date}</time>
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </div>
    </Link>
  );
}
