import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "Game Guides — Tips, Tricks & Walkthroughs",
  description:
    "In-depth game guides, tips, tricks, and walkthroughs for BGMI, Free Fire, Valorant, Genshin Impact, Fortnite, and more.",
  path: "/game-guides/",
});

export default function GameGuidesPage() {
  const category = getCategoryBySlug("game-guides")!;
  const posts = getPostsByCategory("game-guides");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Game Guides" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Game Guides — Tips, Tricks & Walkthroughs",
            description: "In-depth game guides, tips, tricks, and walkthroughs for BGMI, Free Fire, Valorant, Genshin Impact, Fortnite, and more.",
            url: "https://raidgg.com/game-guides/",
          })),
        }}
      />

      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Game Guides
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          {category.description}
        </p>
      </div>

      {/* Game subcategory cards */}
      {category.subcategories && (
        <section className="mb-12">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Browse by Game
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/game-guides/${sub.slug}/`}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {sub.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {sub.name} guides &amp; tips &rarr;
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <LazyAd slot="guides-top" format="leaderboard" />

      {/* All guide posts */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          Latest Guides
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
