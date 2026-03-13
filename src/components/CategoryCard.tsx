import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: string;
  postCount: number;
}

export default function CategoryCard({
  name,
  slug,
  description,
  icon,
  postCount,
}: CategoryCardProps) {
  return (
    <Link
      href={`/${slug}/`}
      className="group block rounded-xl bg-[var(--color-surface)] p-6 border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
    >
      <div className="text-3xl mb-3">{icon}</div>

      <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
        {name}
      </h3>

      <p className="mt-1.5 text-sm text-[var(--color-text-muted)] line-clamp-2">
        {description}
      </p>

      <span className="mt-3 inline-block text-xs text-[var(--color-text-dim)]">
        {postCount} {postCount === 1 ? "post" : "posts"}
      </span>
    </Link>
  );
}
