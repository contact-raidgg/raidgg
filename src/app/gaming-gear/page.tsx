import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "What gaming gear do I need as a beginner?",
    answer:
      "Start with a good gaming mouse and a decent headset — these have the biggest impact on gameplay. A mouse with a reliable sensor (PixArt 3395 or newer) and a headset with clear audio and a usable mic will improve your performance more than any other upgrade. Keyboard, monitor, and chair can be upgraded later.",
  },
  {
    question: "How do you test gaming gear?",
    answer:
      "We test every product in real gaming sessions across multiple games (FPS, battle royale, MOBA). We evaluate build quality, sensor accuracy, latency, comfort during long sessions, software features, and value for money. We also cross-reference with pro player preferences and community feedback.",
  },
  {
    question: "Is expensive gaming gear worth it?",
    answer:
      "Not always. A $30-50 gaming mouse with a good sensor can perform nearly as well as a $150 one. The biggest differences are in build quality, weight, and software. We recommend spending more on your mouse and monitor (these directly affect performance) and saving on keyboards and mousepads where budget options are excellent.",
  },
  {
    question: "What mouse do most pro players use?",
    answer:
      "Most FPS pros use lightweight wireless mice from Razer (DeathAdder V3, Viper V3), Logitech (G Pro X Superlight 2), or Zowie. The trend is toward ultralight mice (under 60g) with PixArt 3950 or Focus Pro 30K sensors. Mobile gamers use finger sleeves and screen protectors for better touch response.",
  },
  {
    question: "Do I need a gaming monitor or is a regular one fine?",
    answer:
      "For competitive PC gaming, a gaming monitor makes a real difference. A 144Hz or 165Hz monitor at 1080p/1440p provides smoother visuals and lower input lag than a 60Hz display. If you play BGMI or Free Fire on mobile, your phone's display matters more — look for 90Hz+ AMOLED panels.",
  },
  {
    question: "What gaming gear is best for mobile gamers?",
    answer:
      "Mobile gamers benefit most from: gaming earbuds with low latency Bluetooth, finger sleeves for sweat-free controls, a phone cooling fan to prevent thermal throttling, and a trigger/controller attachment. We cover mobile-specific gear in our gaming earbuds and gaming phones sections.",
  },
  {
    question: "How often do you update gear recommendations?",
    answer:
      "We update our gear lists when significant new products launch (typically every 3-6 months). Price changes and availability are checked monthly. Each article shows its last updated date so you know the information is current.",
  },
];

const tags = [
  { label: "All", value: "all" },
  { label: "Mice", value: "mice" },
  { label: "Keyboards", value: "keyboards" },
  { label: "Headsets", value: "headsets" },
  { label: "Monitors", value: "monitors" },
  { label: "Chairs", value: "chairs" },
  { label: "Controllers", value: "controllers" },
];

export const metadata = buildMetadata({
  title: "Best Gaming Gear 2026 — Mice, Keyboards, Headsets & Monitors Reviewed",
  description:
    "Expert reviews and buying guides for the best gaming mice, mechanical keyboards, headsets, monitors, mousepads, and chairs in 2026. Budget to premium picks tested in real gaming sessions.",
  path: "/gaming-gear/",
});

export default function GamingGearPage() {
  const posts = getPostsByCategory("gaming-gear");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gaming Gear" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Best Gaming Gear 2026 — Mice, Keyboards, Headsets & Monitors Reviewed",
            description: "Expert reviews and buying guides for the best gaming gear in 2026.",
            url: "https://raidgg.com/gaming-gear/",
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
          Best Gaming Gear 2026{" "}
          <span className="text-[var(--color-primary)]">&mdash; Reviews & Buying Guides</span>
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
          Hands-on reviews and curated buying guides for the <strong className="text-[var(--color-text)]">best gaming mice,
          mechanical keyboards, headsets, monitors, mousepads, and chairs</strong> in 2026. Every product is tested in
          real gaming sessions across FPS, battle royale, and competitive titles. Budget picks to premium gear — we
          help you find the best value at every price point.
        </p>
      </div>

      {/* ── Category Quick Links ───────────────────────── */}
      <section className="mb-8">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Gear Categories
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Gaming Mice", desc: "Lightweight wireless mice, sensor comparisons, shape guides", tag: "mice" },
            { title: "Mechanical Keyboards", desc: "Switch types, hot-swappable boards, budget to enthusiast", tag: "keyboards" },
            { title: "Gaming Headsets", desc: "Wired and wireless, open-back vs closed, under $100 picks", tag: "headsets" },
            { title: "Gaming Monitors", desc: "144Hz-360Hz panels, 1080p vs 1440p, IPS vs VA", tag: "monitors" },
            { title: "Mousepads", desc: "Speed vs control surfaces, desk mats, artisan alternatives", tag: "mousepads" },
            { title: "Gaming Chairs", desc: "Ergonomic designs, mesh vs foam, under $300 picks", tag: "chairs" },
            { title: "Mobile Gear", desc: "Gaming earbuds, finger sleeves, phone coolers, triggers", tag: "mobile" },
            { title: "Controllers", desc: "PC controllers, hall-effect sticks, fight sticks", tag: "controllers" },
          ].map((item) => (
            <div
              key={item.tag}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <h3 className="font-semibold text-[var(--color-text)] text-sm">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── All Gear Posts with Filter ──────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          All Gear Reviews & Guides
        </h2>
        <FilterBar posts={posts} filters={tags} />
      </section>

      <LazyAd slot="gear-mid" format="leaderboard" />

      {/* ── How We Review ──────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          How We Review Gaming Gear
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { step: "1", title: "Research", desc: "We analyze specs, pro player usage, community reviews, and compare against competing products before selecting what to review." },
            { step: "2", title: "Testing", desc: "Every product is tested for 40+ hours in real gaming sessions across Valorant, BGMI, CS2, and Fortnite. No spec-sheet reviews." },
            { step: "3", title: "Comparison", desc: "We compare directly against category leaders. Side-by-side sensor tests, weight comparisons, and comfort evaluations." },
            { step: "4", title: "Verdict", desc: "Clear recommendation with specific use-cases. Who it's best for, who should skip it, and budget alternatives." },
          ].map((item) => (
            <div key={item.step} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="font-heading text-2xl font-bold text-[var(--color-primary)] mb-1">{item.step}</p>
              <h3 className="font-semibold text-[var(--color-text)] text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Buying Guide Content ───────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Gaming Gear Buying Guide — What Actually Matters
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">Gaming Mice</strong> — The sensor is everything. Look for mice with
            PixArt 3395, 3950, or Focus Pro 30K sensors — these track flawlessly on any surface. Weight under 70g is
            ideal for FPS games. Wireless latency is now equal to wired in top-tier mice from Razer, Logitech, and
            Pulsar. Shape is personal — try ergo (DeathAdder) vs ambi (Viper) to find what suits your grip style.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Mechanical Keyboards</strong> — For gaming, switch type matters most.
            Linear switches (Cherry MX Red, Gateron Yellow) are preferred for FPS games due to smooth, fast keypresses.
            Tactile switches (Brown, Holy Panda) are better for mixed gaming and typing. Hot-swappable boards let you
            change switches later. Budget pick: a $50 hot-swap board outperforms $150 non-swappable keyboards.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Gaming Headsets</strong> — Prioritize sound clarity over bass.
            Competitive FPS games require clear directional audio to hear footsteps and callouts. Closed-back headsets
            (HyperX Cloud II, SteelSeries Arctis) isolate noise. Open-back (Sennheiser PC38X) offer wider soundstage.
            For mobile gaming, low-latency Bluetooth earbuds (under 60ms) are ideal.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Gaming Monitors</strong> — For competitive PC gaming, 1080p at 240Hz
            beats 4K at 60Hz every time. The sweet spot in 2026 is a <strong className="text-[var(--color-text)]">27-inch
            1440p IPS panel at 165-180Hz</strong> — sharp enough for immersion, fast enough for competitive play. Look for
            monitors with less than 5ms GtG response time and G-Sync/FreeSync support.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Gaming Chairs vs Office Chairs</strong> — Ergonomic office chairs
            (mesh-back, lumbar support) often outperform gaming chairs for long sessions. Gaming chairs look good but
            frequently lack proper lumbar support. Our under-$300 guide covers the best options from both worlds. If you
            game 4+ hours daily, invest in a chair with adjustable lumbar and armrests.
          </p>
        </div>
      </section>

      <LazyAd slot="gear-bottom" format="banner" />

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
          <Link href="/pro-settings/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Pro Player Settings &rarr;
          </Link>
          <Link href="/pc-builds/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            PC Build Guides &rarr;
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
