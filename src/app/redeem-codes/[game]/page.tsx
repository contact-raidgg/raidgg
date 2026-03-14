import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

interface PageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  const category = getCategoryBySlug("redeem-codes");
  if (!category?.subcategories) return [];
  return category.subcategories.map((sub) => ({ game: sub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game } = await params;
  const category = getCategoryBySlug("redeem-codes");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) return {};

  return buildMetadata({
    title: `${sub.name} Redeem Codes — Updated Daily`,
    description: `All ${sub.name} redeem code posts, guides, and rewards. Find today's working codes, redemption guides, and tips.`,
    path: `/redeem-codes/${game}`,
  });
}

export default async function GameRedeemCodesPage({ params }: PageProps) {
  const { game } = await params;
  const category = getCategoryBySlug("redeem-codes");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) notFound();

  const posts = getPostsBySubcategory("redeem-codes", game);
  const latestPost = posts[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Redeem Codes", href: "/redeem-codes" },
          { label: sub.name },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: `${sub.name} Redeem Codes — Updated Daily`,
            description: `All ${sub.name} redeem code posts, guides, and rewards.`,
            url: `https://raidgg.com/redeem-codes/${game}`,
          })),
        }}
      />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        {sub.name} Redeem Codes
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        All {sub.name} redeem code guides and daily updated codes.
      </p>

      {/* CTA to latest codes post */}
      {latestPost && (
        <Link
          href={getPostUrl(latestPost)}
          className="block mb-10 rounded-xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-6 hover:border-[var(--color-primary)] transition-colors"
        >
          <p className="text-xs font-medium text-[var(--color-primary)] mb-2 uppercase tracking-wider">
            Latest Codes — Updated Daily
          </p>
          <h2 className="font-heading text-xl font-bold text-[var(--color-text)] mb-2">
            {latestPost.title}
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            {latestPost.description}
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)]">
            View all {latestPost.codes?.length || 0} active codes &rarr;
          </span>
        </Link>
      )}

      <LazyAd slot={`redeem-${game}-mid`} format="leaderboard" />

      {/* All posts for this game */}
      {posts.length > 1 && (
        <section className="mt-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
            All {sub.name} Posts
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
