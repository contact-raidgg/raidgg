import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import { getFeaturedPosts, getPostsByCategory, getAllPosts } from "@/lib/content";
import { categories } from "@/lib/categories";
import { getPostUrl } from "@/lib/utils";
import type { PostMeta } from "@/lib/types";
import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import LazyAd from "@/components/LazyAd";
import SearchBar from "@/components/SearchBar";

export const metadata = buildMetadata({
  title: "RaidGG — Your Ultimate Gaming Command Center",
  description:
    "Daily redeem codes for Free Fire, BGMI, Genshin Impact & more. Plus game guides, pro settings, gear reviews, PC builds, gaming phones, and esports news. RaidGG is your one-stop gaming blog.",
  path: "/",
});

// Quick-access game list for the codes bar
const codeGames = [
  { name: "Free Fire", slug: "free-fire", icon: "🔥" },
  { name: "BGMI", slug: "bgmi", icon: "🎯" },
  { name: "Genshin", slug: "genshin-impact", icon: "⭐" },
  { name: "COD Mobile", slug: "cod-mobile", icon: "🎖️" },
  { name: "Roblox", slug: "roblox", icon: "🧱" },
  { name: "HSR", slug: "honkai-star-rail", icon: "🚂" },
  { name: "PUBG Mobile", slug: "pubg-mobile", icon: "🪖" },
  { name: "Wuthering Waves", slug: "wuthering-waves", icon: "🌊" },
  { name: "ZZZ", slug: "zenless-zone-zero", icon: "⚡" },
  { name: "MLBB", slug: "mobile-legends", icon: "💎" },
  { name: "Honkai 3rd", slug: "honkai-impact", icon: "🔮" },
];

export default function HomePage() {
  const featured = getFeaturedPosts().slice(0, 3);
  const allPosts = getAllPosts();
  const redeemPosts = getPostsByCategory("redeem-codes").slice(0, 4);
  const guidePosts = getPostsByCategory("game-guides").slice(0, 4);
  const proSettingsPosts = getPostsByCategory("pro-settings").slice(0, 4);
  const gearPosts = getPostsByCategory("gaming-gear").slice(0, 3);
  const pcBuildPosts = getPostsByCategory("pc-builds").slice(0, 3);
  const phonePosts = getPostsByCategory("gaming-phones").slice(0, 3);
  const esportsPosts = getPostsByCategory("esports-news").slice(0, 3);
  const dealPosts = getPostsByCategory("deals").slice(0, 3);

  const totalPosts = allPosts.length;
  const totalGames = new Set(allPosts.map((p) => p.subcategory).filter(Boolean)).size;

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
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--color-base)]">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Radial glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-[120px]" />
        {/* Radial glow bottom */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-[var(--color-accent)]/5 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-16">
          {/* Top: Logo + tagline */}
          <div className="text-center">
            <h1 className="scanlines relative font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider">
              <span className="text-[var(--color-primary)] glow-primary">RAID</span>
              <span className="gradient-text">GG</span>
            </h1>
            <p className="mt-4 font-heading text-lg md:text-xl font-semibold text-[var(--color-text)] tracking-wide">
              Your Ultimate Gaming Command Center
            </p>
            <p className="mt-2 max-w-xl mx-auto text-sm text-[var(--color-text-muted)] leading-relaxed">
              Daily redeem codes, game guides, pro settings, gear reviews &mdash; everything to level up your game.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mt-8">
            <SearchBar posts={searchPosts} />
          </div>

          {/* Stats + CTA row */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-3">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{totalPosts}+</p>
                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider mt-1">Articles</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-accent)]">{totalGames}+</p>
                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider mt-1">Games</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-success)]">8</p>
                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider mt-1">Categories</p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-3 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-[var(--color-warning)]">Daily</p>
                <p className="text-[10px] text-[var(--color-text-dim)] uppercase tracking-wider mt-1">Updates</p>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3">
              <Link
                href="/redeem-codes/"
                className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-[var(--color-base)] transition-opacity hover:opacity-90"
              >
                Get Redeem Codes
              </Link>
              <Link
                href="/game-guides/"
                className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                Browse Guides
              </Link>
              <Link
                href="/pro-settings/"
                className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Pro Settings
              </Link>
              <Link
                href="/gaming-gear/"
                className="rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-success)] hover:text-[var(--color-success)]"
              >
                Gaming Gear
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Codes Bar ──────────────────────────────── */}
      <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-4 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-3 min-w-max">
            <span className="text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider whitespace-nowrap">
              Quick Codes:
            </span>
            {codeGames.map((game) => (
              <Link
                key={game.slug}
                href={`/redeem-codes/${game.slug}/`}
                className="flex items-center gap-1.5 rounded-full bg-[var(--color-surface-alt)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors whitespace-nowrap border border-[var(--color-border)] hover:border-[var(--color-primary)]/30"
              >
                <span>{game.icon}</span>
                {game.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 space-y-16">
        {/* ── Featured Posts ───────────────────────────── */}
        <section>
          <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] mb-6">
            <span className="text-[var(--color-primary)]">//</span> Featured
          </h2>
          <div className="space-y-6">
            {featured.map((post) => (
              <FeaturedPost key={post.slug} post={post} />
            ))}
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
