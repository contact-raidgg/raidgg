import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

interface PageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  const category = getCategoryBySlug("game-guides");
  if (!category?.subcategories) return [];
  return category.subcategories.map((sub) => ({ game: sub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game } = await params;
  const category = getCategoryBySlug("game-guides");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) return {};

  return buildMetadata({
    title: `${sub.name} Guides — Tips, Tricks & Walkthroughs`,
    description: `Complete ${sub.name} guides with tips, tricks, settings, and walkthroughs to help you dominate.`,
    path: `/game-guides/${game}`,
  });
}

export default async function GameGuidesGamePage({ params }: PageProps) {
  const { game } = await params;
  const category = getCategoryBySlug("game-guides");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) notFound();

  const posts = getPostsBySubcategory("game-guides", game);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Game Guides", href: "/game-guides" },
          { label: sub.name },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: `${sub.name} Guides — Tips, Tricks & Walkthroughs`,
            description: `Complete ${sub.name} guides with tips, tricks, settings, and walkthroughs to help you dominate.`,
            url: `https://raidgg.com/game-guides/${game}`,
          })),
        }}
      />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        {sub.name} Guides
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        Tips, tricks, and walkthroughs for {sub.name}.
      </p>

      <LazyAd slot={`guides-${game}-top`} format="leaderboard" />

      {posts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-[var(--color-text-muted)]">
          No guides for {sub.name} yet. Check back soon!
        </p>
      )}
    </div>
  );
}
