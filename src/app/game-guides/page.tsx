import Link from "next/link";
import { getPostsByCategory, getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "What types of game guides does RaidGG publish?",
    answer:
      "We publish sensitivity settings guides, character tier lists, best loadout guides, map callouts, landing spot strategies, keybind optimization, beginner guides, and advanced tips for ranking up. Every guide is written by experienced players and verified for accuracy.",
  },
  {
    question: "Which games do you cover guides for?",
    answer:
      "We currently cover BGMI, Free Fire, Valorant, COD Mobile, Genshin Impact, and Fortnite. Each game has multiple in-depth guides covering different aspects of gameplay — from sensitivity settings to advanced strategies.",
  },
  {
    question: "How often are guides updated?",
    answer:
      "We update guides after every major game patch or meta shift. Tier lists are updated within 48 hours of new character/weapon releases. Sensitivity guides are reviewed monthly. Each guide shows its last updated date so you know the information is current.",
  },
  {
    question: "Are the sensitivity settings in your guides tested?",
    answer:
      "Yes. Our sensitivity and settings guides are tested in-game before publishing. We also cross-reference with pro player settings and community feedback. The recommended settings work for most devices, but we include tips for adjusting based on your device and playstyle.",
  },
  {
    question: "Can I use these guides as a beginner?",
    answer:
      "Absolutely. We write guides for all skill levels — from complete beginners to competitive players. Each guide clearly states the difficulty level and includes step-by-step instructions. Our beginner guides start with the basics and build up to advanced concepts.",
  },
  {
    question: "Do you cover mobile and PC games?",
    answer:
      "Yes. BGMI, Free Fire, COD Mobile, and Genshin Impact guides cover mobile gameplay. Valorant and Fortnite guides cover PC gameplay. Some games like Genshin Impact and Fortnite have cross-platform guides that apply to both mobile and PC.",
  },
  {
    question: "How are tier lists ranked?",
    answer:
      "Our tier lists use a data-driven approach combining pick rates, win rates, pro player usage, and community consensus. Characters/weapons are ranked from S-tier (best) to D-tier (weakest). We explain why each item is in its tier so you can make informed decisions.",
  },
];

export const metadata = buildMetadata({
  title: "Game Guides 2026 — Tips, Sensitivity Settings & Tier Lists",
  description:
    "Expert game guides for BGMI, Free Fire, Valorant, COD Mobile, Genshin Impact & Fortnite. Sensitivity settings, tier lists, best loadouts, map callouts, and strategies to rank up fast.",
  path: "/game-guides/",
});

export default function GameGuidesPage() {
  const category = getCategoryBySlug("game-guides")!;
  const posts = getPostsByCategory("game-guides");

  // Build game data with post counts
  const gameData = (category.subcategories || []).map((sub) => {
    const gamePosts = getPostsBySubcategory("game-guides", sub.slug);
    return { ...sub, posts: gamePosts, count: gamePosts.length };
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Game Guides" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Game Guides 2026 — Tips, Sensitivity Settings & Tier Lists",
            description: "Expert game guides for BGMI, Free Fire, Valorant, COD Mobile, Genshin Impact & Fortnite.",
            url: "https://raidgg.com/game-guides/",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ── Header ─────────────────────────────────────── */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
          Game Guides{" "}
          <span className="text-[var(--color-primary)]">&mdash; Tips, Settings & Strategies</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)]">{posts.length}+ in-depth guides</strong> covering sensitivity settings,
          character tier lists, best loadouts, map callouts, and ranking strategies for{" "}
          <strong className="text-[var(--color-text)]">{gameData.length} games</strong>. Every guide is written by experienced
          players, tested in-game, and updated after every major patch.
        </p>
      </div>

      {/* ── Game Cards with Post Previews ──────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Browse Guides by Game
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameData.map((game) => (
            <div
              key={game.slug}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <Link href={`/game-guides/${game.slug}/`} className="group">
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {game.name} Guides
                </h3>
                <p className="text-xs text-[var(--color-text-dim)] mt-0.5 mb-3">
                  {game.count} {game.count === 1 ? "guide" : "guides"}
                </p>
              </Link>
              <ul className="space-y-1.5">
                {game.posts.slice(0, 3).map((post) => (
                  <li key={post.slug}>
                    <Link
                      href={getPostUrl(post)}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors line-clamp-1"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {game.count > 3 && (
                <Link
                  href={`/game-guides/${game.slug}/`}
                  className="mt-2 inline-block text-xs text-[var(--color-primary)] hover:underline"
                >
                  View all {game.count} guides &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <LazyAd slot="guides-top" format="leaderboard" />

      {/* ── What We Cover ──────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          What Our Guides Cover
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Sensitivity & Settings",
              desc: "Optimized sensitivity settings, graphics configurations, and control layouts tested for each game. Includes device-specific recommendations for low-end and high-end phones.",
            },
            {
              title: "Character & Weapon Tier Lists",
              desc: "Data-driven tier lists updated after every patch. Rankings based on pick rates, win rates, pro player usage, and our team's testing. S-tier to D-tier with explanations.",
            },
            {
              title: "Best Loadouts & Builds",
              desc: "Meta loadouts for every game mode. Weapon attachments, character abilities, and gear combinations optimized for competitive play and ranked matches.",
            },
            {
              title: "Map Callouts & Strategy",
              desc: "Complete map callouts with visual references. Landing spot tier lists, rotation strategies, and positioning guides for every competitive map.",
            },
            {
              title: "Ranking & Progression",
              desc: "Step-by-step guides to climb ranked ladders. From Bronze to Conqueror in BGMI, Iron to Radiant in Valorant, and everything in between.",
            },
            {
              title: "Beginner Guides",
              desc: "New to a game? Our beginner guides cover the fundamentals — movement, aiming, economy, team composition, and the first 50 hours of gameplay.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Game-by-Game Breakdown ─────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Guides for Every Game We Cover
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">BGMI Guides</strong> — Battlegrounds Mobile India is the most competitive
            mobile battle royale in India. Our BGMI guides cover the best sensitivity settings for zero recoil, landing spot strategies
            for Erangel, Miramar, and Sanhok, tips to push from Diamond to Conqueror, and weapon tier lists updated for every season.
            We also cover TDM strategies and clan war tactics.{" "}
            <Link href="/game-guides/bgmi/" className="text-[var(--color-primary)] underline underline-offset-2">
              Browse BGMI guides &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Free Fire Guides</strong> — Free Fire is the most-downloaded battle royale
            globally. Our guides cover the best character combinations for every playstyle (aggressive rush, support, passive),
            how to earn free diamonds without spending money, sensitivity settings for Clash Squad and BR mode, and strategies for
            ranked mode. We also cover the latest OB update changes.{" "}
            <Link href="/game-guides/free-fire/" className="text-[var(--color-primary)] underline underline-offset-2">
              Browse Free Fire guides &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Valorant Guides</strong> — Valorant is the premier tactical FPS on PC.
            Our Valorant guides include crosshair codes used by pro players (TenZ, Demon1, Aspas), complete map callouts for every
            competitive map, agent tier lists updated for each Act, lineups for Sova/Brimstone/Viper, and detailed economy
            management guides.{" "}
            <Link href="/game-guides/valorant/" className="text-[var(--color-primary)] underline underline-offset-2">
              Browse Valorant guides &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Genshin Impact Guides</strong> — Our Genshin guides cover the complete
            character tier list updated for every version, beginner guides for Adventure Rank progression, team composition
            recommendations for Spiral Abyss, and farming routes for all materials. We also cover build guides for top-tier
            characters with artifact and weapon recommendations.{" "}
            <Link href="/game-guides/genshin-impact/" className="text-[var(--color-primary)] underline underline-offset-2">
              Browse Genshin guides &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">COD Mobile & Fortnite</strong> — COD Mobile guides cover the best loadouts
            for multiplayer and Battle Royale, weapon attachment builds, and ranked mode tips. Fortnite guides include the best
            landing spots for each season, optimal keybind layouts for building, and strategies for Arena mode.{" "}
            <Link href="/game-guides/cod-mobile/" className="text-[var(--color-primary)] underline underline-offset-2">
              COD Mobile guides
            </Link>{" | "}
            <Link href="/game-guides/fortnite/" className="text-[var(--color-primary)] underline underline-offset-2">
              Fortnite guides
            </Link>
          </p>
        </div>
      </section>

      <LazyAd slot="guides-mid" format="banner" />

      {/* ── Popular Guides ─────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Most Popular Guides
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {posts.slice(0, 6).map((post) => (
            <Link
              key={post.slug}
              href={getPostUrl(post)}
              className="group flex gap-3 rounded-lg bg-[var(--color-surface)] p-3 border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all"
            >
              <div className="shrink-0 w-16 h-12 rounded-md overflow-hidden">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    width={64}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-border)]" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--color-text)] line-clamp-2 leading-snug group-hover:text-[var(--color-primary)] transition-colors">
                  {post.title}
                </h3>
                <span className="text-[10px] text-[var(--color-text-dim)] uppercase">
                  {post.subcategory?.replace(/-/g, " ") || post.category.replace(/-/g, " ")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] group"
            >
              <summary className="cursor-pointer px-5 py-4 font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors text-sm">
                {faq.question}
              </summary>
              <p className="px-5 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Cross-Pillar Links ─────────────────────────── */}
      <section className="my-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-3">
          More from RaidGG
        </h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/redeem-codes/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Redeem Codes &rarr;
          </Link>
          <Link href="/pro-settings/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Pro Player Settings &rarr;
          </Link>
          <Link href="/gaming-gear/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Gear Reviews &rarr;
          </Link>
          <Link href="/esports-news/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Esports News &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
