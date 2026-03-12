import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

interface PageProps {
  params: Promise<{ subcategory: string }>;
}

export async function generateStaticParams() {
  const category = getCategoryBySlug("esports-news");
  if (!category?.subcategories) return [];
  return category.subcategories.map((sub) => ({ subcategory: sub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subcategory } = await params;
  const category = getCategoryBySlug("esports-news");
  const sub = category?.subcategories?.find((s) => s.slug === subcategory);
  if (!sub) return {};

  return buildMetadata({
    title: `${sub.name} Esports News — Results & Updates`,
    description: `Latest ${sub.name} esports news, tournament results, roster changes, and standings.`,
    path: `/esports-news/${subcategory}`,
  });
}

export default async function EsportsSubcategoryPage({ params }: PageProps) {
  const { subcategory } = await params;
  const category = getCategoryBySlug("esports-news");
  const sub = category?.subcategories?.find((s) => s.slug === subcategory);
  if (!sub) notFound();

  const posts = getPostsBySubcategory("esports-news", subcategory);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Esports News", href: "/esports-news" },
          { label: sub.name },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: `${sub.name} Esports News — Results & Updates`,
            description: `Latest ${sub.name} esports news, tournament results, roster changes, and standings.`,
            url: `https://raidgg.com/esports-news/${subcategory}`,
          })),
        }}
      />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        {sub.name} Esports News
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        Latest tournament results, roster moves, and updates from the {sub.name} esports scene.
      </p>

      <LazyAd slot={`esports-${subcategory}-top`} format="leaderboard" />

      {posts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-[var(--color-text-muted)]">
          No {sub.name} news yet. Check back soon!
        </p>
      )}
    </div>
  );
}
