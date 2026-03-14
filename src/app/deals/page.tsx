import { getPostsByCategory } from "@/lib/content";
import { buildMetadata, generateCollectionPageSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PaginatedGrid from "@/components/PaginatedGrid";
import AffiliateCard from "@/components/AffiliateCard";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "Gaming Deals — Best Discounts This Week",
  description:
    "This week's best gaming deals on peripherals, components, games, and accessories. Updated weekly with the hottest discounts.",
  path: "/deals/",
});

export default function DealsPage() {
  const posts = getPostsByCategory("deals");
  const allAffiliateLinks = posts.flatMap((p) => p.affiliateLinks || []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Deals" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Gaming Deals — Best Discounts This Week",
            description: "This week's best gaming deals on peripherals, components, games, and accessories. Updated weekly with the hottest discounts.",
            url: "https://raidgg.com/deals/",
          })),
        }}
      />

      <div className="mb-10 flex items-start gap-4">
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
            Gaming Deals
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
            Hot gaming deals on gear, games, and accessories. We track the best discounts so you don&apos;t miss out.
          </p>
        </div>
        <span className="shrink-0 mt-1 rounded-full bg-[var(--color-success)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-success)]">
          Updated Weekly
        </span>
      </div>

      {/* Featured affiliate picks */}
      {allAffiliateLinks.length > 0 && (
        <section className="mb-12">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Top Picks This Week
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allAffiliateLinks.map((link) => (
              <AffiliateCard
                key={link.label}
                label={link.label}
                url={link.url}
                price={link.price}
                platform={link.platform}
              />
            ))}
          </div>
        </section>
      )}

      <LazyAd slot="deals-mid" format="leaderboard" />

      {/* All deal posts */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          All Deal Posts
        </h2>
        {posts.length > 0 ? (
          <PaginatedGrid posts={posts} perPage={9} />
        ) : (
          <p className="text-[var(--color-text-muted)]">No deals right now. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
