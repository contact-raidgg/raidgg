import { buildMetadata, formatDate } from "@/lib/seo";
import Link from "next/link";
import { getPostsByCategory, getAllPosts } from "@/lib/content";
import { categories } from "@/lib/categories";
import { getPostUrl } from "@/lib/utils";
import type { PostMeta } from "@/lib/types";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import LazyAd from "@/components/LazyAd";
import SearchBar from "@/components/SearchBar";

export const metadata = buildMetadata({
  title: "RaidGG — Daily Redeem Codes, Game Guides & Pro Settings",
  description:
    "Daily redeem codes for Free Fire, BGMI, Genshin Impact & more. Plus game guides, pro settings, gear reviews, PC builds, gaming phones, and esports news. RaidGG is your one-stop gaming blog.",
  path: "/",
});

// Quick-access game list for the codes bar
const codeGames = [
  { name: "Free Fire", slug: "free-fire" },
  { name: "BGMI", slug: "bgmi" },
  { name: "Genshin Impact", slug: "genshin-impact" },
  { name: "COD Mobile", slug: "cod-mobile" },
  { name: "Roblox", slug: "roblox" },
  { name: "Honkai Star Rail", slug: "honkai-star-rail" },
  { name: "PUBG Mobile", slug: "pubg-mobile" },
  { name: "Wuthering Waves", slug: "wuthering-waves" },
  { name: "ZZZ", slug: "zenless-zone-zero" },
  { name: "Mobile Legends", slug: "mobile-legends" },
  { name: "Honkai Impact 3rd", slug: "honkai-impact" },
];

export default function HomePage() {
  const allPosts = getAllPosts();
  const redeemPosts = getPostsByCategory("redeem-codes").slice(0, 4);
  const guidePosts = getPostsByCategory("game-guides").slice(0, 4);
  const proSettingsPosts = getPostsByCategory("pro-settings").slice(0, 4);
  const gearPosts = getPostsByCategory("gaming-gear").slice(0, 3);
  const pcBuildPosts = getPostsByCategory("pc-builds").slice(0, 3);
  const phonePosts = getPostsByCategory("gaming-phones").slice(0, 3);
  const esportsPosts = getPostsByCategory("esports-news").slice(0, 3);
  const dealPosts = getPostsByCategory("deals").slice(0, 3);

  // Hero featured post (latest redeem codes — highest intent)
  const heroPost = redeemPosts[0];
  // Side posts for hero grid (mix of categories)
  const heroPosts = [redeemPosts[1], guidePosts[0], proSettingsPosts[0], esportsPosts[0]].filter(Boolean);

  // Count codes updated today
  const totalActiveCodes = redeemPosts.reduce((sum, p) => sum + (p.codes?.filter(c => c.status !== "expired").length || 0), 0);

  // Search data (lightweight: only what's needed for search)
  const searchPosts = allPosts.map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    subcategory: p.subcategory,
    tags: p.tags,
    description: p.description,
  }));

  return (
    <>
      {/* ── Trending Games Strip (first thing after header) ── */}
      <section className="border-b border-[var(--color-border)] py-2 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest whitespace-nowrap mr-1">
              Codes
            </span>
            {codeGames.map((game) => (
              <Link
                key={game.slug}
                href={`/redeem-codes/${game.slug}/`}
                className="rounded-full px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/8 transition-colors whitespace-nowrap"
              >
                {game.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero: Content-First ─────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-4 md:pt-8 md:pb-6">
        {/* H1 + Live Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-text)] leading-tight">
              Daily Redeem Codes, Game Guides & Pro Settings
            </h1>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Verified codes, expert guides, and pro player settings for 11+ games — updated daily.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-success)]" />
            </span>
            <span className="text-xs font-semibold text-[var(--color-success)]">
              {totalActiveCodes}+ active codes today
            </span>
          </div>
        </div>

        {/* Search Bar — compact */}
        <div className="mb-6">
          <SearchBar posts={searchPosts} />
        </div>

        {/* Hero Content Grid: 1 large + 4 compact */}
        <div className="grid gap-4 lg:grid-cols-5">
          {/* Large featured card */}
          {heroPost && (
            <Link
              href={getPostUrl(heroPost)}
              className="group lg:col-span-3 block rounded-xl overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all"
            >
              <div className="relative aspect-video w-full">
                {heroPost.image ? (
                  <img
                    src={heroPost.image}
                    alt={heroPost.imageAlt || heroPost.title}
                    width={800}
                    height={450}
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20" />
                )}
                <span className="absolute top-3 left-3 rounded-full bg-[var(--color-primary)]/15 px-3 py-0.5 text-xs font-medium text-[var(--color-primary)] backdrop-blur">
                  {heroPost.category.replace(/-/g, " ")}
                </span>
              </div>
              <div className="p-4 md:p-5">
                <h2 className="font-heading text-lg md:text-xl font-bold text-[var(--color-text)] leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {heroPost.title}
                </h2>
                {heroPost.description && (
                  <p className="mt-2 text-sm text-[var(--color-text-muted)] line-clamp-2">
                    {heroPost.description}
                  </p>
                )}
                <div className="mt-3 flex items-center gap-3 text-xs text-[var(--color-text-dim)]">
                  <time dateTime={heroPost.updated || heroPost.date}>
                    {formatDate(heroPost.updated || heroPost.date)}
                  </time>
                  {heroPost.readTime && <span>{heroPost.readTime}</span>}
                  {heroPost.codes && heroPost.codes.length > 0 && (
                    <span className="text-[var(--color-success)] font-medium">
                      {heroPost.codes.filter(c => c.status !== "expired").length} active codes
                    </span>
                  )}
                </div>
              </div>
            </Link>
          )}

          {/* Side compact posts */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {heroPosts.map((post) => (
              <Link
                key={post.slug}
                href={getPostUrl(post)}
                className="group flex gap-3 rounded-lg bg-[var(--color-surface)] p-3 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all"
              >
                <div className="shrink-0 w-20 h-16 rounded-md overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      width={80}
                      height={64}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-border)]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-sm font-semibold text-[var(--color-text)] line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-[var(--color-text-dim)]">
                    <span className="font-medium text-[var(--color-primary)] uppercase">
                      {post.category.replace(/-/g, " ")}
                    </span>
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8 space-y-14">
        {/* ── Today's Codes Quick Access ─────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
              <span className="text-[var(--color-primary)]">//</span> Today&apos;s Codes
            </h2>
            <Link
              href="/redeem-codes/"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              All games &rarr;
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {redeemPosts.map((post) => {
              const activeCodes = post.codes?.filter(c => c.status !== "expired").length || 0;
              const newCodes = post.codes?.filter(c => c.status === "new").length || 0;
              return (
                <Link
                  key={post.slug}
                  href={getPostUrl(post)}
                  className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {post.game || post.title.split(" ")[0]}
                    </span>
                    {newCodes > 0 && (
                      <span className="rounded-full bg-[var(--color-success)]/15 px-2 py-0.5 text-[10px] font-bold text-[var(--color-success)] uppercase">
                        {newCodes} new
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">
                    {activeCodes} <span className="text-xs font-normal text-[var(--color-text-muted)]">active codes</span>
                  </p>
                  <p className="mt-1 text-[10px] text-[var(--color-text-dim)]">
                    Updated {formatDate(post.updated || post.date)}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <LazyAd slot="home-mid-1" format="leaderboard" />

        {/* ── Latest Redeem Codes ──────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)]">
              <span className="text-[var(--color-primary)]">//</span> Latest Redeem Codes
            </h2>
            <Link
              href="/redeem-codes/"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {redeemPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* ── Popular Guides ──────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)]">
              <span className="text-[var(--color-primary)]">//</span> Popular Game Guides
            </h2>
            <Link
              href="/game-guides/"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {guidePosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <LazyAd slot="home-mid-2" format="banner" />

        {/* ── Pro Player Settings ─────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)]">
              <span className="text-[var(--color-accent)]">//</span> Pro Player Settings
            </h2>
            <Link
              href="/pro-settings/"
              className="text-sm text-[var(--color-accent)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {proSettingsPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* ── Gaming Gear + PC Builds Row ─────────────── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gaming Gear */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
                <span className="text-[var(--color-primary)]">//</span> Gaming Gear
              </h2>
              <Link
                href="/gaming-gear/"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {gearPosts.map((post) => (
                <CompactPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* PC Builds */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
                <span className="text-[var(--color-primary)]">//</span> PC Builds
              </h2>
              <Link
                href="/pc-builds/"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {pcBuildPosts.map((post) => (
                <CompactPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </div>

        <LazyAd slot="home-mid-3" format="leaderboard" />

        {/* ── Gaming Phones + Esports News Row ────────── */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Gaming Phones */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
                <span className="text-[var(--color-accent)]">//</span> Gaming Phones
              </h2>
              <Link
                href="/gaming-phones/"
                className="text-sm text-[var(--color-accent)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {phonePosts.map((post) => (
                <CompactPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>

          {/* Esports News */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl font-bold text-[var(--color-text)]">
                <span className="text-[var(--color-warning)]">//</span> Esports News
              </h2>
              <Link
                href="/esports-news/"
                className="text-sm text-[var(--color-warning)] hover:underline"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="space-y-4">
              {esportsPosts.map((post) => (
                <CompactPostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        </div>

        {/* ── Hot Deals ──────────────────────────────── */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-2xl font-bold text-[var(--color-text)]">
              <span className="text-[var(--color-danger)]">//</span> Hot Deals
            </h2>
            <Link
              href="/deals/"
              className="text-sm text-[var(--color-danger)] hover:underline"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dealPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <LazyAd slot="home-mid-4" format="banner" />

        {/* ── Explore All Categories ──────────────────── */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] mb-6">
            <span className="text-[var(--color-primary)]">//</span> Explore Categories
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                name={cat.name}
                slug={cat.slug}
                description={cat.description}
                icon={cat.icon}
                postCount={allPosts.filter((p) => p.category === cat.slug).length}
              />
            ))}
          </div>
        </section>

        {/* ── SEO Content Section ─────────────────────── */}
        <section className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] mb-4">
            About RaidGG — Your Go-To Gaming Blog
          </h2>
          <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
            <p>
              <strong className="text-[var(--color-text)]">RaidGG</strong> is a gaming blog built for players who want to stay ahead of the competition. Whether you play <strong className="text-[var(--color-text)]">Free Fire, BGMI, Valorant, Genshin Impact, COD Mobile, Fortnite, PUBG Mobile</strong>, or any of the hottest titles in 2026, we have the content you need to dominate.
            </p>
            <p>
              Our <strong className="text-[var(--color-text)]">daily redeem codes</strong> section is updated multiple times a day with verified working codes for 11+ games. Every code is tested before posting, and expired codes are clearly marked so you never waste time. We cover Free Fire redeem codes, BGMI redeem codes, Genshin Impact codes, Honkai Star Rail codes, and many more.
            </p>
            <p>
              Looking to improve your gameplay? Our <strong className="text-[var(--color-text)]">game guides</strong> cover everything from sensitivity settings and character tier lists to landing spot strategies and keybind optimization. Copy the exact <strong className="text-[var(--color-text)]">pro player settings</strong> from legends like TenZ, Jonathan, Bugha, and Aspas — complete with crosshair codes, sensitivity values, and gear recommendations.
            </p>
            <p>
              For hardware enthusiasts, we publish <strong className="text-[var(--color-text)]">gaming gear reviews</strong> (mice, keyboards, headsets, monitors), <strong className="text-[var(--color-text)]">PC build guides</strong> at every budget from $500 to $2000+, and <strong className="text-[var(--color-text)]">gaming phone comparisons</strong> covering the best devices under ₹15K, ₹25K, and ₹40K. Our deals section tracks the best discounts on Amazon, Flipkart, and Steam.
            </p>
            <p>
              Stay connected with the competitive scene through our <strong className="text-[var(--color-text)]">esports news</strong> coverage — from VCT Masters and BGMI Pro League to Free Fire World Series and Fortnite Championship Series. RaidGG is your one-stop destination for everything gaming.
            </p>
          </div>
        </section>

        {/* ── Newsletter ──────────────────────────────── */}
        <section className="max-w-xl mx-auto">
          <NewsletterSignup />
        </section>
      </div>
    </>
  );
}

// ── Compact Post Card (for sidebar-style lists) ──────────

function CompactPostCard({ post }: { post: PostMeta }) {
  const href = getPostUrl(post);

  return (
    <Link
      href={href}
      className="group flex gap-4 rounded-lg bg-[var(--color-surface)] p-3 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all"
    >
      {/* Small thumbnail / gradient */}
      <div className="shrink-0 w-20 h-16 rounded-md overflow-hidden">
        {post.image ? (
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            width={80}
            height={64}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-border)]" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading text-sm font-semibold text-[var(--color-text)] line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
          {post.title}
        </h3>
        <div className="mt-1 flex items-center gap-2 text-xs text-[var(--color-text-dim)]">
          <span className="rounded-full bg-[var(--color-surface-alt)] px-2 py-0.5">
            {post.category.replace(/-/g, " ")}
          </span>
          {post.readTime && <span>{post.readTime}</span>}
        </div>
      </div>
    </Link>
  );
}
