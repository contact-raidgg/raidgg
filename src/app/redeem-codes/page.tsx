import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaginatedGrid from "@/components/PaginatedGrid";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "Game Redeem Codes — Updated Daily",
  description:
    "Get the latest working redeem codes for Free Fire, BGMI, COD Mobile, Roblox, Genshin Impact, Honkai Star Rail, and more. Updated daily with new codes.",
  path: "/redeem-codes/",
});

export default function RedeemCodesPage() {
  const category = getCategoryBySlug("redeem-codes")!;
  const posts = getPostsByCategory("redeem-codes");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Redeem Codes" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Game Redeem Codes — Updated Daily",
            description: "Get the latest working redeem codes for Free Fire, BGMI, COD Mobile, Roblox, Genshin Impact, Honkai Star Rail, and more. Updated daily with new codes.",
            url: "https://raidgg.com/redeem-codes/",
          })),
        }}
      />

      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Game Redeem Codes{" "}
          <span className="text-[var(--color-primary)]">&mdash; Updated Daily</span>
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
                href={`/redeem-codes/${sub.slug}/`}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {sub.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Latest {sub.name} redeem codes &rarr;
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <LazyAd slot="redeem-codes-top" format="leaderboard" />

      {/* All redeem code posts */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          Latest Redeem Code Posts
        </h2>
        <PaginatedGrid posts={posts} perPage={9} />
      </section>
    </div>
  );
}
