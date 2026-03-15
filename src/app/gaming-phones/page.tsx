import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "Which is the best gaming phone under ₹15,000 in 2026?",
    answer:
      "The best gaming phones under ₹15,000 typically feature Snapdragon 6 Gen 1 or MediaTek Dimensity 7200 processors, 90Hz displays, and 5000mAh+ batteries. Key models include the Poco M6 Pro, Realme Narzo 70, and Samsung Galaxy A25. Check our under-15K guide for the latest tested picks with BGMI and Free Fire benchmarks.",
  },
  {
    question: "What specs matter most for mobile gaming?",
    answer:
      "In order of importance: 1) Processor (Snapdragon 8 Gen 3 or Dimensity 9300 for best performance), 2) RAM (8GB minimum, 12GB ideal), 3) Display refresh rate (90Hz minimum, 120Hz recommended), 4) Cooling system (vapor chamber > graphite sheet), 5) Battery (5000mAh+ for 3-4 hour gaming sessions). Storage speed also affects load times.",
  },
  {
    question: "Is a dedicated gaming phone worth buying?",
    answer:
      "Dedicated gaming phones (ROG Phone, Red Magic) offer the best raw performance, trigger buttons, and cooling fans. But mainstream flagships (OnePlus, iQOO, Samsung S series) handle gaming nearly as well with better cameras and everyday usability. Gaming phones are worth it only if competitive mobile gaming is your primary use case.",
  },
  {
    question: "How do you test phones for gaming?",
    answer:
      "We test every phone with BGMI, Free Fire, Genshin Impact, and COD Mobile at max graphics settings. We measure average FPS, frame drops, thermal throttling after 30-minute sessions, and battery drain per hour of gameplay. We also test touch response latency and speaker quality for gaming audio.",
  },
  {
    question: "Snapdragon vs MediaTek — which is better for gaming?",
    answer:
      "In 2026, both are excellent. Snapdragon 8 Gen 3 leads in GPU performance and game optimization (most games are tuned for Adreno GPUs first). MediaTek Dimensity 9300 matches in CPU performance and is more power-efficient. For budget phones (under ₹20K), MediaTek Dimensity chips often offer better value.",
  },
  {
    question: "Can budget phones run BGMI and Genshin Impact?",
    answer:
      "BGMI runs at 40-60 FPS on medium settings on phones as low as ₹10,000 (Snapdragon 680/Helio G99). Genshin Impact is more demanding — you need at least a Snapdragon 778G or Dimensity 8100 (₹15,000+ range) for a smooth 30 FPS at medium. Our under-15K guide lists which games each phone can handle.",
  },
  {
    question: "How much RAM do I need for mobile gaming?",
    answer:
      "8GB RAM is the minimum for smooth gaming in 2026 — BGMI and Genshin use 3-4GB RAM while running. 12GB is ideal for multitasking (gaming + Discord + streaming). 16GB is overkill for pure gaming but helpful if you record or stream gameplay. Virtual RAM features add 2-4GB using storage but aren't as fast as physical RAM.",
  },
];

const priceFilters = [
  { label: "All Phones", value: "all" },
  { label: "Under 15K", value: "under-15k" },
  { label: "Under 25K", value: "under-25k" },
  { label: "Under 40K", value: "under-40k" },
  { label: "Flagship", value: "flagship" },
];

export const metadata = buildMetadata({
  title: "Best Gaming Phones 2026 — Under ₹15K, ₹25K, ₹40K & Flagship Picks",
  description:
    "Best gaming phones at every budget in India. Tested with BGMI, Free Fire & Genshin Impact. Under ₹15K, ₹25K, ₹40K picks plus flagship comparisons. FPS benchmarks, battery tests, and buying advice.",
  path: "/gaming-phones/",
});

export default function GamingPhonesPage() {
  const posts = getPostsByCategory("gaming-phones");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gaming Phones" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Best Gaming Phones 2026 — Under ₹15K, ₹25K, ₹40K & Flagship Picks",
            description: "Best gaming phones at every budget in India. FPS benchmarks, battery tests, and buying advice.",
            url: "https://raidgg.com/gaming-phones/",
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
          Best Gaming Phones 2026{" "}
          <span className="text-[var(--color-primary)]">&mdash; Tested & Benchmarked</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          <strong className="text-[var(--color-text)]">{posts.length} in-depth guides</strong> covering the best gaming
          phones at every price point in India — from{" "}
          <strong className="text-[var(--color-text)]">under ₹15,000 budget picks to flagship gaming beasts</strong>.
          Every phone is tested with BGMI, Free Fire, Genshin Impact, and COD Mobile. We measure FPS, thermal
          throttling, battery drain, and touch latency so you know exactly what to expect.
        </p>
      </div>

      {/* ── Budget Tier Cards ──────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Pick Your Budget
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { tier: "Under ₹15,000", target: "BGMI Medium, Free Fire High", chip: "Snapdragon 6 Gen 1 / Dimensity 7200", color: "var(--color-success)" },
            { tier: "Under ₹25,000", target: "BGMI High, Genshin 30fps", chip: "Snapdragon 7+ Gen 2 / Dimensity 8200", color: "var(--color-primary)" },
            { tier: "Under ₹40,000", target: "BGMI Ultra, Genshin 60fps", chip: "Snapdragon 8s Gen 3 / Dimensity 9200", color: "var(--color-accent)" },
            { tier: "Flagship", target: "Max settings, 120fps capable", chip: "Snapdragon 8 Gen 3 / Dimensity 9300", color: "var(--color-warning)" },
          ].map((item) => (
            <div
              key={item.tier}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <h3 className="font-heading font-bold text-lg" style={{ color: item.color }}>
                {item.tier}
              </h3>
              <p className="text-xs text-[var(--color-text)] mt-1 font-medium">{item.target}</p>
              <p className="text-[10px] text-[var(--color-text-dim)] mt-1">{item.chip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── All Phone Posts with Filter ─────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          All Gaming Phone Guides
        </h2>
        <FilterBar posts={posts} filters={priceFilters} />
      </section>

      <LazyAd slot="phones-mid" format="leaderboard" />

      {/* ── What We Test ───────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          How We Test Gaming Phones
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "FPS Benchmarks", desc: "30-minute BGMI, Free Fire, and Genshin sessions at max settings. We record average FPS, 1% lows, and frame drop frequency." },
            { title: "Thermal Testing", desc: "Surface temperature measured every 5 minutes during gaming. We note when throttling begins and how much performance drops." },
            { title: "Battery Drain", desc: "Battery percentage consumed per hour of gaming at max brightness. We test with and without Wi-Fi/mobile data." },
            { title: "Touch Latency", desc: "Screen response time tested with high-speed camera. Lower latency = faster in-game reactions. Critical for competitive BGMI/Free Fire." },
            { title: "Display Quality", desc: "Brightness, color accuracy, and refresh rate consistency during gameplay. 120Hz is meaningless if the phone drops to 60Hz under load." },
            { title: "Speaker & Audio", desc: "Speaker loudness, stereo separation, and clarity during gaming. We also test 3.5mm jack and Bluetooth latency with gaming earbuds." },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Buying Guide Content ───────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Gaming Phone Buying Guide — What Actually Matters
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Processor is king for mobile gaming.</strong> The Snapdragon 8 Gen 3
            and Dimensity 9300 are the best mobile gaming chips in 2026. For budget gaming, Snapdragon 6 Gen 1 and Dimensity
            7200 handle BGMI and Free Fire smoothly at medium-high settings. Avoid phones with older Helio G series chips
            if you play Genshin Impact — they struggle to maintain 30 FPS.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">12GB RAM is the sweet spot.</strong> BGMI uses 3-4GB RAM during gameplay,
            and Android itself needs 3-4GB. With 8GB total, you have minimal headroom for background apps. 12GB ensures smooth
            multitasking between gaming, Discord, and WhatsApp. 16GB is overkill unless you record or stream gameplay.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Don&apos;t ignore cooling.</strong> A phone that hits 45°C after 15 minutes
            of BGMI will throttle CPU performance by 20-30%, tanking your FPS. Phones with vapor chamber cooling (iQOO, OnePlus
            Ace series) stay cooler than those with basic graphite sheets. External cooling fans (₹500-1500) can add 5-10 minutes
            of peak performance.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Display: 120Hz AMOLED is the minimum for competitive gaming.</strong> The
            difference between 60Hz and 120Hz is immediately visible in fast-paced games. AMOLED panels offer better contrast
            (see enemies in dark areas) and lower touch latency than IPS LCD. Look for 240Hz or 360Hz touch sampling rate for
            the most responsive controls.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Battery: plan for 5000mAh minimum.</strong> A heavy BGMI session drains
            15-20% per hour on flagships, more on budget phones. 5000mAh gives you 4-5 hours of continuous gaming. Fast charging
            (67W+) is equally important — 15 minutes of charging should give you another hour of gaming.
          </p>
        </div>
      </section>

      <LazyAd slot="phones-bottom" format="banner" />

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
          <Link href="/redeem-codes/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Redeem Codes &rarr;
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
