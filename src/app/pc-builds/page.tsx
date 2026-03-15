import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "How much should I spend on a gaming PC in 2026?",
    answer:
      "A capable 1080p gaming PC starts at $500. For 1440p 144Hz gaming, budget $750-$1000. For 1440p 165Hz+ with max settings, plan $1200-$1500. 4K gaming requires $2000+. We have builds at every price point with exact part lists and benchmarks.",
  },
  {
    question: "Is it cheaper to build a PC or buy a prebuilt?",
    answer:
      "Building is typically 15-25% cheaper than prebuilt for the same specs. You also get better component quality (PSU, motherboard, cooling) and full upgrade flexibility. Our guides include step-by-step assembly tips. Prebuilts make sense only if you value convenience over savings.",
  },
  {
    question: "What GPU is best for gaming in 2026?",
    answer:
      "For 1080p: NVIDIA RTX 4060 or AMD RX 7600 ($250-300). For 1440p: RTX 4070 Super or RX 7800 XT ($450-550). For 4K: RTX 4080 Super or RX 7900 XTX ($700-900). Intel Arc B580 is a great budget pick at $200. Check our build guides for specific recommendations at each budget.",
  },
  {
    question: "AMD or Intel for gaming in 2026?",
    answer:
      "Both are excellent. AMD Ryzen 7 7800X3D is the best pure gaming CPU thanks to 3D V-Cache. Intel Core i5-14600K offers better all-around performance (gaming + productivity) at a lower price. For budget builds, AMD Ryzen 5 7600 is unbeatable value. Our builds use whichever offers the best performance per dollar at each price point.",
  },
  {
    question: "How long will a gaming PC last before needing upgrades?",
    answer:
      "A mid-range build ($750-1000) typically lasts 3-4 years at 1080p high settings before needing a GPU upgrade. A high-end build ($1500+) lasts 4-5 years at 1440p. The GPU is always the first component that needs upgrading. RAM, CPU, and storage usually last 5-7 years.",
  },
  {
    question: "Do I need 32GB RAM for gaming?",
    answer:
      "16GB is still sufficient for pure gaming in 2026. However, 32GB is recommended if you stream, edit video, or play memory-heavy games (Starfield, Cities: Skylines 2). DDR5 prices have dropped significantly, so our mid-range and above builds include 32GB DDR5 by default.",
  },
  {
    question: "What parts do your build guides include?",
    answer:
      "Every build guide includes: CPU, GPU, motherboard, RAM, SSD storage, power supply, case, and CPU cooler — with exact model numbers and current prices. We also include benchmark numbers for popular games, assembly tips, and future upgrade paths.",
  },
];

const budgetFilters = [
  { label: "All Builds", value: "all" },
  { label: "Budget", value: "budget" },
  { label: "Mid-Range", value: "mid-range" },
  { label: "High-End", value: "high-end" },
  { label: "Streaming Setup", value: "streaming-setup" },
];

export const metadata = buildMetadata({
  title: "Best Gaming PC Builds 2026 — $500 to $2500+ Build Guides",
  description:
    "Complete gaming PC build guides for every budget in 2026. From $500 budget builds to $2500 4K rigs. Exact part lists, benchmarks, and assembly tips. Updated monthly with latest GPU and CPU pricing.",
  path: "/pc-builds/",
});

export default function PCBuildsPage() {
  const posts = getPostsByCategory("pc-builds");

  // Group builds by budget tier
  const budgetBuilds = posts.filter((p) => p.tags.includes("budget"));
  const midBuilds = posts.filter((p) => p.tags.includes("mid-range"));
  const highBuilds = posts.filter((p) => p.tags.includes("high-end"));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PC Builds" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Best Gaming PC Builds 2026 — $500 to $2500+",
            description: "Complete gaming PC build guides for every budget in 2026.",
            url: "https://raidgg.com/pc-builds/",
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
          Best Gaming PC Builds 2026{" "}
          <span className="text-[var(--color-primary)]">&mdash; Every Budget Covered</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)]">{posts.length} complete build guides</strong> from{" "}
          <strong className="text-[var(--color-text)]">$500 budget rigs to $2500+ 4K machines</strong>. Every build
          includes exact part lists with current pricing, benchmark numbers for popular games, assembly tips, and
          future upgrade paths. Updated monthly with the latest GPU and CPU pricing.
        </p>
      </div>

      {/* ── Quick Budget Guide ─────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Pick Your Budget
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "Budget", price: "$500 - $750", target: "1080p 60-100 FPS", games: "Valorant, Fortnite, BGMI (emu)", color: "var(--color-success)" },
            { tier: "Mid-Range", price: "$750 - $1200", target: "1080p 144Hz / 1440p 60Hz", games: "All games high settings", color: "var(--color-primary)" },
            { tier: "High-End", price: "$1200 - $2000", target: "1440p 144Hz+ max settings", games: "Cyberpunk, Starfield, CS2", color: "var(--color-accent)" },
            { tier: "4K / Ultra", price: "$2000+", target: "4K 60Hz+ / 1440p 240Hz", games: "Everything at max + streaming", color: "var(--color-warning)" },
          ].map((item) => (
            <div
              key={item.tier}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <p className="font-heading text-lg font-bold" style={{ color: item.color }}>
                {item.price}
              </p>
              <h3 className="font-semibold text-[var(--color-text)] text-sm mt-1">{item.tier}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.target}</p>
              <p className="text-[10px] text-[var(--color-text-dim)] mt-1">{item.games}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── All Builds with Filter ─────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          All Build Guides
        </h2>
        <FilterBar posts={posts} filters={budgetFilters} />
      </section>

      <LazyAd slot="pc-builds-mid" format="leaderboard" />

      {/* ── Build Guide Content ────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          How to Choose the Right Gaming PC Build
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Start with your target resolution and frame rate.</strong> This determines
            everything else. If you play competitive FPS games (Valorant, CS2, Fortnite), you want 144Hz+ at the highest
            frame rate possible — a $750 build handles this at 1080p. If you play AAA games and want visual fidelity,
            plan for 1440p with a $1200+ build. 4K gaming requires $2000+ for a smooth experience.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">The GPU gets 35-45% of your budget.</strong> The graphics card is the single
            most important component for gaming performance. In 2026, the best value GPUs are the NVIDIA RTX 4060 ($250 for 1080p),
            RTX 4070 Super ($450 for 1440p), and AMD RX 7800 XT ($430 for 1440p). Never overspend on CPU at the expense of GPU.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Don&apos;t cheap out on the power supply.</strong> A quality 80+ Bronze or Gold
            PSU protects your entire system. We recommend 550W for budget builds, 650W for mid-range, and 750W+ for high-end.
            Every build guide includes a PSU recommendation matched to the system&apos;s power draw with overhead for upgrades.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Plan for upgrades.</strong> A smart build leaves room to grow. All our
            builds use motherboards that support future CPU upgrades (AM5 for AMD, LGA 1700 for Intel). We include SSD expansion
            slots and note which components to upgrade first when your build starts showing its age.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Streaming and content creation?</strong> If you stream on Twitch or YouTube
            while gaming, you need more CPU and RAM. Our streaming PC setup guide covers dedicated streaming builds and
            single-PC setups. The RTX 4060 and above include NVENC encoder which handles streaming with zero performance loss.
          </p>
        </div>
      </section>

      {/* ── What's In Each Guide ───────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          What Every Build Guide Includes
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
          <div className="divide-y divide-[var(--color-border)]">
            {[
              { title: "Complete Part List", desc: "CPU, GPU, motherboard, RAM, SSD, PSU, case, and cooler — with exact model numbers and current Amazon/Newegg prices." },
              { title: "Game Benchmarks", desc: "FPS numbers for Valorant, CS2, Fortnite, GTA V, Cyberpunk 2077, and other popular titles at the target resolution." },
              { title: "Assembly Tips", desc: "Key build tips specific to that build's components — cable management, cooler installation, BIOS settings to enable." },
              { title: "Upgrade Path", desc: "Which component to upgrade first when you want more performance, and what future parts are compatible with your build." },
              { title: "Alternative Parts", desc: "Budget alternatives and premium upgrades for every component, so you can adjust the build to your exact budget." },
            ].map((item) => (
              <div key={item.title} className="px-5 py-4">
                <p className="font-semibold text-[var(--color-text)] text-sm">{item.title}</p>
                <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LazyAd slot="pc-builds-bottom" format="banner" />

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
          <Link href="/gaming-gear/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Gear Reviews &rarr;
          </Link>
          <Link href="/pro-settings/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Pro Player Settings &rarr;
          </Link>
          <Link href="/deals/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Deals &rarr;
          </Link>
          <Link href="/gaming-phones/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Phones &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
