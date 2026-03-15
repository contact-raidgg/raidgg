import Link from "next/link";
import { getPostsByCategory, getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "Why should I copy pro player settings?",
    answer:
      "Pro players spend thousands of hours optimizing their settings for maximum performance. Their sensitivity, crosshair, keybinds, and graphics settings are fine-tuned for competitive play. Using their settings as a starting point gives you a proven baseline — then you can adjust to match your own playstyle and device.",
  },
  {
    question: "Should I use pro settings exactly or adjust them?",
    answer:
      "Use them as a starting point, not a copy-paste solution. Pro players use high-end gaming PCs or specific devices, so their settings may feel different on your hardware. Start with the pro's sensitivity and crosshair, play a few matches, then adjust gradually. Never change multiple settings at once — modify one thing at a time.",
  },
  {
    question: "What settings are included in each pro player profile?",
    answer:
      "Each profile includes: sensitivity settings (ADS, hip-fire, scoped), crosshair codes (for Valorant/CS2), keybind layouts, graphics settings, DPI and mouse settings, resolution, and the complete gear setup (mouse, keyboard, headset, monitor) the player uses.",
  },
  {
    question: "How often are pro player settings updated?",
    answer:
      "We update profiles when players publicly change their settings — usually after major tournaments, game patches, or when they share updates on stream. Each page shows the last verified date. Most pro players rarely make drastic changes, so settings stay relevant for months.",
  },
  {
    question: "Do mobile pro settings differ from PC pro settings?",
    answer:
      "Yes, significantly. Mobile games (BGMI, Free Fire, COD Mobile) use gyroscope sensitivity, touch control layouts, and device-specific graphics settings. PC games (Valorant, CS2, Fortnite, Apex) use mouse DPI, polling rate, and monitor refresh rate settings. We cover both mobile and PC pro players.",
  },
  {
    question: "Which pro player settings are most popular?",
    answer:
      "TenZ (Valorant), Jonathan (BGMI), Bugha (Fortnite), ZywOo (CS2), and ImperialHal (Apex Legends) are among the most searched pro player settings globally. In India, Jonathan, Neyoo (BGMI), and Ajjubhai (Free Fire) are the most popular.",
  },
  {
    question: "Can pro settings improve my aim?",
    answer:
      "Settings alone won't make you a pro, but the right sensitivity can remove inconsistency. A sensitivity that's too high causes overshooting, while too low limits your ability to react. Pro settings give you a competitive baseline. Combine them with aim training (Aim Lab, Kovaak's) for the best results.",
  },
];

export const metadata = buildMetadata({
  title: "Pro Player Settings 2026 — Sensitivity, Crosshair Codes & Gear",
  description:
    "Copy exact pro player settings for Valorant, BGMI, CS2, Fortnite, Free Fire, Apex Legends & COD Mobile. Sensitivity, crosshair codes, keybinds, DPI, and complete gear setups — verified and updated regularly.",
  path: "/pro-settings/",
});

export default function ProSettingsPage() {
  const category = getCategoryBySlug("pro-settings")!;
  const posts = getPostsByCategory("pro-settings");

  // Build game data with player names
  const gameData = (category.subcategories || []).map((sub) => {
    const gamePosts = getPostsBySubcategory("pro-settings", sub.slug);
    const players = gamePosts.map((p) => p.player).filter(Boolean);
    return { ...sub, posts: gamePosts, count: gamePosts.length, players };
  });

  const totalPlayers = posts.length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pro Settings" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Pro Player Settings 2026 — Sensitivity, Crosshair Codes & Gear",
            description: "Copy exact pro player settings for Valorant, BGMI, CS2, Fortnite, Free Fire, Apex Legends & COD Mobile.",
            url: "https://raidgg.com/pro-settings/",
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
          Pro Player Settings{" "}
          <span className="text-[var(--color-primary)]">&mdash; Sensitivity, Crosshair & Gear</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          Copy the exact settings of <strong className="text-[var(--color-text)]">{totalPlayers} professional players</strong> across{" "}
          <strong className="text-[var(--color-text)]">{gameData.length} games</strong> — including sensitivity, crosshair codes,
          keybinds, DPI, resolution, and complete gear setups. Every profile is verified from official streams
          and tournament broadcasts.
        </p>
      </div>

      {/* ── Players by Game ────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Browse Pro Settings by Game
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gameData.map((game) => (
            <div
              key={game.slug}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <Link href={`/pro-settings/${game.slug}/`} className="group">
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {game.name} Pro Settings
                </h3>
                <p className="text-xs text-[var(--color-text-dim)] mt-0.5 mb-3">
                  {game.count} {game.count === 1 ? "player" : "players"}
                </p>
              </Link>
              <ul className="space-y-1.5">
                {game.posts.slice(0, 3).map((post) => (
                  <li key={post.slug} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-[10px] font-bold text-[var(--color-primary)]">
                      {post.player?.charAt(0) || "?"}
                    </span>
                    <Link
                      href={getPostUrl(post)}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors line-clamp-1"
                    >
                      {post.player || post.title}
                    </Link>
                  </li>
                ))}
              </ul>
              {game.count > 3 && (
                <Link
                  href={`/pro-settings/${game.slug}/`}
                  className="mt-2 inline-block text-xs text-[var(--color-primary)] hover:underline"
                >
                  View all {game.count} players &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      <LazyAd slot="pro-settings-top" format="leaderboard" />

      {/* ── What's Included ────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          What Every Pro Settings Profile Includes
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-[var(--color-border)]">
            {[
              { title: "Sensitivity Settings", desc: "Hip-fire, ADS, scoped sensitivity for every zoom level. Gyroscope settings for mobile games." },
              { title: "Crosshair Codes", desc: "Exact crosshair codes for Valorant and CS2. Copy-paste ready with visual preview." },
              { title: "Keybinds & Controls", desc: "Complete keybind layouts for PC. Touch control layouts and claw setup for mobile." },
              { title: "DPI & Mouse Settings", desc: "Mouse DPI, polling rate, and in-game sensitivity. eDPI calculations included." },
              { title: "Graphics & Resolution", desc: "Resolution, aspect ratio, and graphics quality settings optimized for competitive FPS." },
              { title: "Complete Gear Setup", desc: "Mouse, keyboard, headset, monitor, mousepad — the exact hardware each pro uses." },
            ].map((item) => (
              <div key={item.title} className="bg-[var(--color-surface)] p-4">
                <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Players ───────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Featured Pro Players
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {posts.slice(0, 10).map((post) => (
            <Link
              key={post.slug}
              href={getPostUrl(post)}
              className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center hover:border-[var(--color-primary)] transition-all"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-lg font-bold text-[var(--color-primary)] mb-2">
                {post.player?.charAt(0) || "?"}
              </div>
              <p className="font-semibold text-sm text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                {post.player}
              </p>
              <p className="text-[10px] text-[var(--color-text-dim)] uppercase mt-0.5">
                {post.subcategory?.replace(/-/g, " ")}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <LazyAd slot="pro-settings-mid" format="banner" />

      {/* ── Game-by-Game Breakdown ─────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Pro Settings for Every Game
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Valorant Pro Settings</strong> — Valorant requires precise aim and
            consistent crosshair placement. We cover settings from top Valorant pros including TenZ, Demon1, and Aspas.
            Each profile includes their exact crosshair code, mouse sensitivity, eDPI, resolution, and the gear they use
            in VCT tournaments. Valorant pros typically use low sensitivity (200-400 eDPI) for precise micro-adjustments.{" "}
            <Link href="/pro-settings/valorant/" className="text-[var(--color-primary)] underline underline-offset-2">
              View Valorant pro settings &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">BGMI Pro Settings</strong> — Mobile battle royale requires different
            optimization than PC. We cover settings from Jonathan and Neyoo — two of India&apos;s most dominant BGMI players.
            Profiles include gyroscope sensitivity, camera sensitivity for every scope, touch control layout (claw vs thumbs),
            and graphics settings optimized for frame stability on popular devices like iQOO, OnePlus, and iPhone.{" "}
            <Link href="/pro-settings/bgmi/" className="text-[var(--color-primary)] underline underline-offset-2">
              View BGMI pro settings &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">CS2 Pro Settings</strong> — Counter-Strike demands the lowest
            latency and most precise aim. ZywOo&apos;s CS2 settings showcase the classic low-sensitivity, high-refresh-rate
            approach that dominates professional play. Includes crosshair codes, viewmodel settings, and launch options.{" "}
            <Link href="/pro-settings/cs2/" className="text-[var(--color-primary)] underline underline-offset-2">
              View CS2 pro settings &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Fortnite, Apex Legends, Free Fire & COD Mobile</strong> — Bugha&apos;s
            Fortnite keybinds are optimized for building speed. ImperialHal&apos;s Apex settings balance tracking aim with
            fast movement. Ajjubhai&apos;s Free Fire settings are tailored for mobile gameplay. iFerg&apos;s COD Mobile
            settings dominate ranked multiplayer.{" "}
            <Link href="/pro-settings/fortnite/" className="text-[var(--color-primary)] underline underline-offset-2">
              Fortnite
            </Link>{" | "}
            <Link href="/pro-settings/apex-legends/" className="text-[var(--color-primary)] underline underline-offset-2">
              Apex Legends
            </Link>{" | "}
            <Link href="/pro-settings/free-fire/" className="text-[var(--color-primary)] underline underline-offset-2">
              Free Fire
            </Link>{" | "}
            <Link href="/pro-settings/cod-mobile/" className="text-[var(--color-primary)] underline underline-offset-2">
              COD Mobile
            </Link>
          </p>
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
          <Link href="/gaming-gear/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Gear Reviews &rarr;
          </Link>
          <Link href="/redeem-codes/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Redeem Codes &rarr;
          </Link>
          <Link href="/esports-news/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Esports News &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
