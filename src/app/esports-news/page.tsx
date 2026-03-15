import Link from "next/link";
import { getPostsByCategory, getPostsBySubcategory } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "What esports games does RaidGG cover?",
    answer:
      "We cover BGMI (Battlegrounds Mobile India), Valorant (VCT), Free Fire (FFWS), Fortnite (FNCS), and global esports news including CS2 Majors, League of Legends Worlds, and Dota 2 The International. Our primary focus is on games popular in India and Southeast Asia.",
  },
  {
    question: "How quickly do you publish tournament results?",
    answer:
      "We publish results within hours of matches ending. For major tournaments (VCT Masters, BGMI Pro League, FFWS), we update standings in real-time during broadcast days. Bookmark our tournament-specific pages for the fastest updates.",
  },
  {
    question: "What is BGMI Pro League?",
    answer:
      "BGMI Pro League (BMPL) is the official professional league for Battlegrounds Mobile India, organized by Krafton. It features the top 24 teams in India competing for prize pools of ₹2 Crore+. The league runs in Spring and Fall seasons, with LAN finals at the end of each season.",
  },
  {
    question: "What is VCT and how does Valorant esports work?",
    answer:
      "VCT (Valorant Champions Tour) is Riot Games' official competitive circuit. It has three tiers: International (Masters, Champions), Challengers (regional leagues), and Game Changers (women's). Teams earn circuit points through regional leagues and international events to qualify for Champions — the Valorant World Championship.",
  },
  {
    question: "Where can I watch esports tournaments live?",
    answer:
      "Most tournaments stream on YouTube and Twitch. BGMI events stream on Loco and YouTube. Valorant VCT streams on YouTube (VCT channel) and Twitch. Free Fire FFWS streams on YouTube and Booyah. We include stream links in each tournament article.",
  },
  {
    question: "Do esports tournaments drop redeem codes?",
    answer:
      "Yes! Many tournaments drop exclusive redeem codes during broadcasts. BGMI Pro League, VCT, and FFWS regularly release viewer reward codes. Check our redeem codes section during live broadcasts — we post codes within minutes of them being revealed.",
  },
  {
    question: "How do I get into competitive esports?",
    answer:
      "Start with ranked mode in your chosen game. For BGMI, compete in BGMI Open Challenge (open to all). For Valorant, grind ranked to Immortal+ and register for VCT Challengers qualifiers. For Free Fire, join Free Fire Pro League open qualifiers. Our game guides cover the settings and strategies used by pros.",
  },
];

export const metadata = buildMetadata({
  title: "Esports News 2026 — BGMI, Valorant, Free Fire & Fortnite Tournaments",
  description:
    "Latest esports news, tournament results, team standings, and roster changes for BGMI Pro League, VCT, Free Fire World Series, and FNCS. Updated during every major tournament.",
  path: "/esports-news/",
});

export default function EsportsNewsPage() {
  const category = getCategoryBySlug("esports-news")!;
  const posts = getPostsByCategory("esports-news");

  // Build scene data with post counts
  const sceneData = (category.subcategories || []).map((sub) => {
    const scenePosts = getPostsBySubcategory("esports-news", sub.slug);
    return { ...sub, posts: scenePosts, count: scenePosts.length };
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Esports News" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Esports News 2026 — BGMI, Valorant, Free Fire & Fortnite Tournaments",
            description: "Latest esports news, tournament results, team standings, and roster changes.",
            url: "https://raidgg.com/esports-news/",
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
          Esports News{" "}
          <span className="text-[var(--color-primary)]">&mdash; Tournaments, Results & Standings</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          Live coverage of <strong className="text-[var(--color-text)]">BGMI Pro League, VCT Masters, Free Fire World Series,
          and Fortnite Championship Series</strong>. Tournament results, team standings, roster changes,
          and prize pool breakdowns — updated during every major event. We cover the games that matter
          most to Indian and Southeast Asian esports fans.
        </p>
      </div>

      {/* ── Esports Scenes ─────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Browse by Esports Scene
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sceneData.map((scene) => (
            <div
              key={scene.slug}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
            >
              <Link href={`/esports-news/${scene.slug}/`} className="group">
                <h3 className="font-heading text-lg font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                  {scene.name} Esports
                </h3>
                <p className="text-xs text-[var(--color-text-dim)] mt-0.5 mb-3">
                  {scene.count} {scene.count === 1 ? "article" : "articles"}
                </p>
              </Link>
              <ul className="space-y-1.5">
                {scene.posts.slice(0, 2).map((post) => (
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
              <Link
                href={`/esports-news/${scene.slug}/`}
                className="mt-2 inline-block text-xs text-[var(--color-primary)] hover:underline"
              >
                All {scene.name} esports &rarr;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <LazyAd slot="esports-top" format="leaderboard" />

      {/* ── Latest Articles ─────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          Latest Esports Coverage
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 6).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* ── Major Tournaments 2026 ─────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Major Esports Tournaments in 2026
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-surface-alt)]">
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Tournament</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Game</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Region</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Prize Pool</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  { name: "BGMI Pro League Spring", game: "BGMI", region: "India", prize: "₹2 Crore+" },
                  { name: "BGMI Master Series S3", game: "BGMI", region: "India", prize: "₹1.5 Crore+" },
                  { name: "VCT Masters Bangkok", game: "Valorant", region: "Global", prize: "$1,000,000" },
                  { name: "VCT Champions 2026", game: "Valorant", region: "Global", prize: "$2,250,000" },
                  { name: "Free Fire World Series", game: "Free Fire", region: "Global", prize: "$2,000,000" },
                  { name: "FNCS Spring Major", game: "Fortnite", region: "Global", prize: "$2,000,000+" },
                  { name: "CS2 Major Copenhagen", game: "CS2", region: "Global", prize: "$1,250,000" },
                ].map((t) => (
                  <tr key={t.name} className="hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">{t.name}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{t.game}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{t.region}</td>
                    <td className="px-4 py-3 text-[var(--color-primary)] font-medium">{t.prize}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <LazyAd slot="esports-mid" format="banner" />

      {/* ── Scene-by-Scene Breakdown ───────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Esports Scenes We Cover
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">BGMI Esports</strong> — India&apos;s biggest mobile esports scene.
            We cover BGMI Pro League (BMPL), BGMI Master Series (BGMS), Krafton India Esports, and third-party
            tournaments. Top teams include GodLike, Soul, Orangutan, and Enigma Gaming. Our coverage includes
            match results, overall standings, point tables, and roster changes. Krafton regularly drops exclusive
            redeem codes during BGMI events.{" "}
            <Link href="/esports-news/bgmi/" className="text-[var(--color-primary)] underline underline-offset-2">
              BGMI esports coverage &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Valorant Esports (VCT)</strong> — Riot&apos;s Valorant Champions Tour is
            the premier tactical FPS esports circuit. We cover VCT International events (Masters, Champions), Pacific and
            Americas leagues, and Challengers. Top teams include Sentinels, Gen.G, DRX, and Paper Rex. Our VCT coverage
            includes match results, bracket updates, team compositions, and player performance stats.{" "}
            <Link href="/esports-news/valorant/" className="text-[var(--color-primary)] underline underline-offset-2">
              Valorant esports coverage &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Free Fire Esports</strong> — Free Fire has one of the largest
            mobile esports audiences globally, especially in Southeast Asia, Latin America, and India. We cover the
            Free Fire World Series (FFWS), Free Fire Pro League, and regional championships. Garena drops exclusive
            redeem codes during every FFWS broadcast — check our codes section during live events.{" "}
            <Link href="/esports-news/free-fire/" className="text-[var(--color-primary)] underline underline-offset-2">
              Free Fire esports coverage &rarr;
            </Link>
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Fortnite & Global Esports</strong> — We cover the Fortnite Championship
            Series (FNCS) including cash cups, Major events, and the FNCS Grand Finals. Our global section covers
            cross-game stories like esports earnings rankings, industry news, org signings, and the biggest plays
            across all competitive titles.{" "}
            <Link href="/esports-news/fortnite/" className="text-[var(--color-primary)] underline underline-offset-2">
              Fortnite esports
            </Link>{" | "}
            <Link href="/esports-news/global/" className="text-[var(--color-primary)] underline underline-offset-2">
              Global esports news
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
          <Link href="/redeem-codes/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Redeem Codes &rarr;
          </Link>
          <Link href="/pro-settings/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Pro Player Settings &rarr;
          </Link>
          <Link href="/game-guides/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Game Guides &rarr;
          </Link>
          <Link href="/deals/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Deals &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
