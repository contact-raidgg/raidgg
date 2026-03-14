import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LiveRedeemCodes from "@/components/LiveRedeemCodes";
import LazyAd from "@/components/LazyAd";

// Fully static — rebuild to update codes

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
    description: `Get the latest working ${sub.name} redeem codes. Free rewards, diamonds, UC, primogems, and more. Updated daily.`,
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

  const displayCodes = latestPost?.codes ?? [];

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
            description: `Get the latest working ${sub.name} redeem codes. Free rewards, diamonds, UC, primogems, and more. Updated daily.`,
            url: `https://raidgg.com/redeem-codes/${game}`,
          })),
        }}
      />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-2">
        {sub.name} Redeem Codes
      </h1>
      <p className="text-[var(--color-text-muted)] mb-8">
        All the latest working {sub.name} redeem codes, updated daily with new rewards.
      </p>

      {/* Show code table — live fetch for supported games, static for others */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Today&apos;s Active Codes
        </h2>
        <LiveRedeemCodes
          gameSlug={game}
          gameName={latestPost?.game || sub.name}
          fallbackCodes={displayCodes}
        />
      </section>

      {/* FAQ Schema for posts with FAQs */}
      {latestPost?.faqs && latestPost.faqs.length > 0 && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(generateFAQSchema(latestPost.faqs)),
            }}
          />
          <section className="mb-10">
            <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {latestPost.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] group"
                >
                  <summary className="cursor-pointer px-5 py-4 font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                    {faq.question}
                  </summary>
                  <p className="px-5 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </>
      )}

      <LazyAd slot={`redeem-${game}-mid`} format="leaderboard" />

      {/* All posts for this game */}
      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          All {sub.name} Code Posts
        </h2>
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color-text-muted)]">No posts yet. Check back soon!</p>
        )}
      </section>
    </div>
  );
}
