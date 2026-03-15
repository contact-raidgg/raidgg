import Link from "next/link";
import { getPostsByCategory, getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema, formatDate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "What are game redeem codes?",
    answer:
      "Redeem codes (also called gift codes or promo codes) are special alphanumeric strings released by game developers that give you free in-game rewards like currency, skins, characters, and items. Each code can typically be used once per account and has an expiration date.",
  },
  {
    question: "How do I redeem codes in mobile games?",
    answer:
      "Most games have a 'Redeem Code' option in Settings or Profile. Some games (like Genshin Impact and Honkai Star Rail) also have an official redemption website. Enter the code exactly as shown — codes are case-sensitive. Rewards arrive in your in-game mailbox within minutes.",
  },
  {
    question: "Why do redeem codes expire?",
    answer:
      "Game developers set expiration dates to create urgency and prevent abuse. Livestream codes typically expire within 12-24 hours. Event codes last 1-2 weeks. Some codes also have a global claim limit (e.g., first 50,000 players only). Always redeem codes as soon as they are released.",
  },
  {
    question: "How often does RaidGG update redeem codes?",
    answer:
      "We update our redeem code pages multiple times daily. We monitor official social media channels, livestreams, in-game events, and community sources for all 11 games we cover. New codes are verified by our team before being published.",
  },
  {
    question: "Can I use the same code on multiple accounts?",
    answer:
      "Yes, most redeem codes work once per account. So if you have multiple game accounts, you can redeem the same code on each account separately. However, each individual account can only claim a code once.",
  },
  {
    question: "Which games have the most redeem codes?",
    answer:
      "Free Fire and Genshin Impact release the most codes — Free Fire can have 20+ active codes at a time from various events. HoYoverse games (Genshin, Honkai Star Rail, ZZZ) release 3 codes during each version livestream. BGMI and PUBG Mobile release codes during esports events.",
  },
  {
    question: "Are redeem codes free?",
    answer:
      "Yes, all redeem codes are completely free. They are released by game developers as promotions. Never pay for redeem codes — any website or person selling codes is a scam. All codes on RaidGG are free and sourced from official channels.",
  },
];

export const metadata = buildMetadata({
  title: "Game Redeem Codes Today (March 2026) — All Games, Updated Daily",
  description:
    "Today's working redeem codes for Free Fire, BGMI, Genshin Impact, COD Mobile, Roblox, Honkai Star Rail, PUBG Mobile, and more. All codes verified and updated daily. Copy codes instantly.",
  path: "/redeem-codes/",
});

export default function RedeemCodesPage() {
  const category = getCategoryBySlug("redeem-codes")!;
  const posts = getPostsByCategory("redeem-codes");

  // Build game data with code counts
  const gameData = (category.subcategories || []).map((sub) => {
    const gamePosts = getPostsBySubcategory("redeem-codes", sub.slug);
    const latestPost = gamePosts[0];
    const activeCodes = latestPost?.codes?.filter((c) => c.status !== "expired").length || 0;
    const newCodes = latestPost?.codes?.filter((c) => c.status === "new").length || 0;
    const updated = latestPost?.updated || latestPost?.date || "";
    return { ...sub, activeCodes, newCodes, updated, latestPost };
  });

  const totalActiveCodes = gameData.reduce((sum, g) => sum + g.activeCodes, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Redeem Codes" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Game Redeem Codes Today — All Games, Updated Daily",
            description: "Today's working redeem codes for Free Fire, BGMI, Genshin Impact, COD Mobile, Roblox, Honkai Star Rail, PUBG Mobile, and 4 more games.",
            url: "https://raidgg.com/redeem-codes/",
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
          Game Redeem Codes Today{" "}
          <span className="text-[var(--color-primary)]">&mdash; All Games, Updated Daily</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          We track <strong className="text-[var(--color-text)]">{totalActiveCodes}+ active redeem codes</strong> across{" "}
          <strong className="text-[var(--color-text)]">11 games</strong> including Free Fire, BGMI, Genshin Impact, COD Mobile,
          Roblox, Honkai Star Rail, PUBG Mobile, and more. Every code is verified by our team before publishing.
          Expired codes are marked so you never waste time.
        </p>
      </div>

      {/* ── Live Code Dashboard ────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Active Codes by Game
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gameData.map((game) => (
            <Link
              key={game.slug}
              href={`/redeem-codes/${game.slug}/`}
              className="group flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] transition-all"
            >
              <div>
                <h3 className="font-heading font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {game.name}
                </h3>
                <p className="text-xs text-[var(--color-text-dim)] mt-0.5">
                  Updated {game.updated ? formatDate(game.updated) : "recently"}
                </p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-xl font-bold text-[var(--color-primary)]">{game.activeCodes}</p>
                <p className="text-[10px] text-[var(--color-text-dim)]">
                  {game.activeCodes === 1 ? "code" : "codes"}
                  {game.newCodes > 0 && (
                    <span className="ml-1 text-[var(--color-success)] font-semibold">
                      ({game.newCodes} new)
                    </span>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <LazyAd slot="redeem-codes-top" format="leaderboard" />

      {/* ── How Redeem Codes Work ──────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          How Game Redeem Codes Work
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="font-heading text-3xl font-bold text-[var(--color-primary)] mb-2">1</p>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">Find Your Game</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Choose your game from the list above. We cover 11 games including Free Fire, BGMI, Genshin Impact,
              COD Mobile, Roblox, PUBG Mobile, and all HoYoverse titles.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="font-heading text-3xl font-bold text-[var(--color-primary)] mb-2">2</p>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">Copy the Code</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Each game page shows all active codes with a one-tap copy button. Codes are case-sensitive — always
              copy-paste instead of typing manually to avoid errors.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
            <p className="font-heading text-3xl font-bold text-[var(--color-primary)] mb-2">3</p>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">Redeem & Collect</h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Enter the code in your game&apos;s redemption section or on the official website. Rewards like diamonds,
              primogems, skins, and currency arrive in your in-game mailbox within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Game-by-Game Breakdown ─────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Redeem Codes for Every Game We Cover
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Free Fire Redeem Codes</strong> — Garena releases Free Fire codes through
            official social media, livestreams during OB updates, esports tournaments (FFWS, Pro League), and in-game events.
            Free Fire typically has the <strong className="text-[var(--color-text)]">most active codes</strong> of any mobile game, with
            rewards including diamonds, weapon skins, character bundles, vouchers, and emotes.{" "}
            <Link href="/redeem-codes/free-fire/" className="text-[var(--color-primary)] underline underline-offset-2">
              View Free Fire codes &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">BGMI Redeem Codes</strong> — Krafton releases BGMI codes during
            esports events (Pro League, Masters Series), version updates, and social media milestones. Codes give UC,
            outfits, weapon skins, and crate coupons. BGMI codes follow the same format as PUBG Mobile codes.{" "}
            <Link href="/redeem-codes/bgmi/" className="text-[var(--color-primary)] underline underline-offset-2">
              View BGMI codes &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Genshin Impact Codes</strong> — HoYoverse releases 3 codes during every
            version livestream (worth ~300 Primogems total), plus additional codes during social media milestones and web events.
            Livestream codes expire within 12-24 hours, so claim them fast.{" "}
            <Link href="/redeem-codes/genshin-impact/" className="text-[var(--color-primary)] underline underline-offset-2">
              View Genshin codes &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Honkai Star Rail, ZZZ & Wuthering Waves</strong> — All three follow a similar
            pattern: 3 codes during version livestreams plus occasional social media codes. We fetch live codes from official sources
            for these games to ensure you always see the latest.{" "}
            <Link href="/redeem-codes/honkai-star-rail/" className="text-[var(--color-primary)] underline underline-offset-2">
              HSR codes
            </Link>{" | "}
            <Link href="/redeem-codes/zenless-zone-zero/" className="text-[var(--color-primary)] underline underline-offset-2">
              ZZZ codes
            </Link>{" | "}
            <Link href="/redeem-codes/wuthering-waves/" className="text-[var(--color-primary)] underline underline-offset-2">
              Wuthering Waves codes
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">COD Mobile, PUBG Mobile, Roblox & Mobile Legends</strong> — These games release
            codes through official social media, creator collaborations, and seasonal events. Roblox promo codes are unique because they
            provide avatar items that work across all Roblox experiences.{" "}
            <Link href="/redeem-codes/cod-mobile/" className="text-[var(--color-primary)] underline underline-offset-2">
              COD Mobile
            </Link>{" | "}
            <Link href="/redeem-codes/pubg-mobile/" className="text-[var(--color-primary)] underline underline-offset-2">
              PUBG Mobile
            </Link>{" | "}
            <Link href="/redeem-codes/roblox/" className="text-[var(--color-primary)] underline underline-offset-2">
              Roblox
            </Link>{" | "}
            <Link href="/redeem-codes/mobile-legends/" className="text-[var(--color-primary)] underline underline-offset-2">
              Mobile Legends
            </Link>
          </p>
        </div>
      </section>

      <LazyAd slot="redeem-codes-mid" format="banner" />

      {/* ── Tips Section ───────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Tips to Never Miss a Redeem Code
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="divide-y divide-[var(--color-border)]">
            {[
              { title: "Bookmark this page", desc: "We update codes for all 11 games multiple times daily. One bookmark gives you access to every active code." },
              { title: "Redeem livestream codes immediately", desc: "HoYoverse and Garena livestream codes expire within 12-24 hours. Set reminders for upcoming livestreams." },
              { title: "Always copy-paste codes", desc: "Codes are case-sensitive. One wrong character and the code fails. Use the copy button on each game page." },
              { title: "Check code status before redeeming", desc: "We mark every code as 'active', 'new', or 'expired' so you know exactly which codes still work." },
              { title: "Link your account", desc: "Guest accounts cannot redeem codes in most games. Link your account to Google, Facebook, or Apple ID first." },
            ].map((tip) => (
              <div key={tip.title} className="px-5 py-4">
                <p className="font-semibold text-[var(--color-text)] text-sm">{tip.title}</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{tip.desc}</p>
              </div>
            ))}
          </div>
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
          <Link href="/game-guides/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Game Guides &rarr;
          </Link>
          <Link href="/pro-settings/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Pro Player Settings &rarr;
          </Link>
          <Link href="/gaming-gear/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Gear Reviews &rarr;
          </Link>
          <Link href="/deals/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Deals &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
