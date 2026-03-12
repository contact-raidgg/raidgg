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
  const category = getCategoryBySlug("pro-settings");
  if (!category?.subcategories) return [];
  return category.subcategories.map((sub) => ({ game: sub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game } = await params;
  const category = getCategoryBySlug("pro-settings");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) return {};

  return buildMetadata({
    title: `${sub.name} Pro Settings — Sensitivity & Keybinds`,
    description: `Copy the exact ${sub.name} settings, sensitivity, crosshair, and keybinds of professional players.`,
    path: `/pro-settings/${game}`,
  });
}

export default async function ProSettingsGamePage({ params }: PageProps) {
  const { game } = await params;
  const category = getCategoryBySlug("pro-settings");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) notFound();

  const posts = getPostsBySubcategory("pro-settings", game);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Pro Settings", href: "/pro-settings" },
          { label: sub.name },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: `${sub.name} Pro Settings — Sensitivity & Keybinds`,
            description: `Copy the exact ${sub.name} settings, sensitivity, crosshair, and keybinds of professional players.`,
            url: `https://raidgg.com/pro-settings/${game}`,
          })),
        }}
      />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        {sub.name} Pro Settings
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        Exact settings, sensitivity, and keybinds from top {sub.name} pros.
      </p>

      <LazyAd slot={`pro-${game}-top`} format="leaderboard" />

      {posts.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-[var(--color-text-muted)]">
          No pro settings for {sub.name} yet. Check back soon!
        </p>
      )}
    </div>
  );
}
