import Link from "next/link";
import { getPostsByCategory } from "@/lib/content";
import { buildMetadata, generateCollectionPageSchema, generateFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/PostCard";
import AffiliateCard from "@/components/AffiliateCard";
import LazyAd from "@/components/LazyAd";

const faqs = [
  {
    question: "How often do you update gaming deals?",
    answer:
      "We update our deals section weekly with fresh picks. During major sale events (Amazon Great Indian Festival, Flipkart Big Billion Days, Steam seasonal sales), we update daily. Each deal post shows its published and last updated date so you know the prices are current.",
  },
  {
    question: "Where do you find gaming deals?",
    answer:
      "We track deals across Amazon India, Flipkart, Steam, Epic Games Store, Croma, and Reliance Digital. We also monitor brand-specific sales from Razer, Logitech, HyperX, and Corsair. Our team manually verifies each deal — we only list genuine discounts, not inflated original prices.",
  },
  {
    question: "Are the prices and discounts verified?",
    answer:
      "Yes. We check every price against the product's historical pricing to ensure the discount is genuine. We use price tracking tools and manual verification. If a product's 'original price' was inflated before a sale, we flag it or skip it entirely.",
  },
  {
    question: "Do you earn money from deal links?",
    answer:
      "Yes, some links are affiliate links — we earn a small commission if you purchase through them at no extra cost to you. This helps fund our site. We never let affiliate commissions influence our recommendations — we list the best deals regardless of affiliate status.",
  },
  {
    question: "When are the best times to buy gaming gear in India?",
    answer:
      "The best sale events in India are: Amazon Great Indian Festival (October), Flipkart Big Billion Days (October), Amazon Prime Day (July), and Republic Day sales (January). For PC components, Diwali season often has the deepest discounts. Steam Summer and Winter sales offer the best game deals globally.",
  },
  {
    question: "Should I wait for a sale or buy now?",
    answer:
      "If the product is at its historical lowest price, buy now. If a major sale event is within 2-3 weeks, wait. We note in our deal posts whether a price is a historical low or if it's likely to drop further. For gaming peripherals, prices rarely drop more than 20-30% even during big sales.",
  },
  {
    question: "Do you cover gaming laptop deals?",
    answer:
      "Yes. We publish dedicated gaming laptop deal roundups during major sales. We cover laptops across all budgets — from ₹50,000 entry-level gaming laptops to ₹1,50,000+ high-end machines. Each listing includes key specs (GPU, CPU, RAM, display) so you can compare quickly.",
  },
];

export const metadata = buildMetadata({
  title: "Best Gaming Deals 2026 — Amazon, Flipkart, Steam Discounts",
  description:
    "This week's best gaming deals on mice, keyboards, headsets, monitors, gaming laptops, and PC games. Amazon India, Flipkart, and Steam deals tracked and verified. Updated weekly.",
  path: "/deals/",
});

export default function DealsPage() {
  const posts = getPostsByCategory("deals");
  const allAffiliateLinks = posts.flatMap((p) => p.affiliateLinks || []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Deals" }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCollectionPageSchema({
            name: "Best Gaming Deals 2026 — Amazon, Flipkart, Steam Discounts",
            description: "This week's best gaming deals on peripherals, components, games, and accessories.",
            url: "https://raidgg.com/deals/",
          })),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />

      {/* ── Header ─────────────────────────────────────── */}
      <div className="mb-8">
        <div className="flex items-start gap-3">
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
              Best Gaming Deals{" "}
              <span className="text-[var(--color-primary)]">&mdash; Save on Gear, Games & More</span>
            </h1>
            <p className="mt-3 max-w-3xl text-[var(--color-text-muted)] leading-relaxed">
              Verified discounts on <strong className="text-[var(--color-text)]">gaming mice, keyboards, headsets, monitors,
              gaming laptops, and PC games</strong> from Amazon India, Flipkart, Steam, and more. Every deal is price-checked
              against historical data — we only list genuine discounts. Updated weekly, daily during major sale events.
            </p>
          </div>
          <span className="shrink-0 mt-2 rounded-full bg-[var(--color-success)]/15 px-3 py-1 text-xs font-semibold text-[var(--color-success)]">
            Updated Weekly
          </span>
        </div>
      </div>

      {/* ── Deal Categories ────────────────────────────── */}
      <section className="mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Deals by Category
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Gaming Peripherals", desc: "Mice, keyboards, headsets, mousepads, controllers", stores: "Amazon, Flipkart" },
            { title: "PC Components", desc: "GPUs, CPUs, RAM, SSDs, PSUs, cases", stores: "Amazon, Newegg, MD Computers" },
            { title: "Gaming Laptops", desc: "Budget to high-end gaming laptops", stores: "Amazon, Flipkart, Croma" },
            { title: "PC Games", desc: "Steam, Epic Games Store, Humble Bundle", stores: "Steam, Epic, GOG" },
            { title: "Monitors & Displays", desc: "Gaming monitors, portable displays", stores: "Amazon, Flipkart" },
            { title: "Gaming Chairs & Desks", desc: "Ergonomic chairs, standing desks, mounts", stores: "Amazon, Flipkart" },
            { title: "Mobile Gaming Gear", desc: "Gaming earbuds, phone coolers, triggers", stores: "Amazon, Flipkart" },
            { title: "Subscriptions", desc: "Xbox Game Pass, PS Plus, EA Play", stores: "Microsoft, Sony, EA" },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <h3 className="font-semibold text-[var(--color-text)] text-sm">{item.title}</h3>
              <p className="text-xs text-[var(--color-text-muted)] mt-1">{item.desc}</p>
              <p className="text-[10px] text-[var(--color-text-dim)] mt-1">{item.stores}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Top Affiliate Picks ────────────────────────── */}
      {allAffiliateLinks.length > 0 && (
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Top Picks This Week
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allAffiliateLinks.map((link) => (
              <AffiliateCard
                key={link.label}
                label={link.label}
                url={link.url}
                price={link.price}
                platform={link.platform}
              />
            ))}
          </div>
        </section>
      )}

      <LazyAd slot="deals-mid" format="leaderboard" />

      {/* ── All Deal Posts ──────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
          Latest Deal Roundups
        </h2>
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-[var(--color-text-muted)]">No deals right now. Check back soon!</p>
        )}
      </section>

      {/* ── Sale Calendar ──────────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Major Sale Events Calendar 2026
        </h2>
        <div className="rounded-lg border border-[var(--color-border)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--color-surface-alt)]">
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Sale Event</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Platform</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Typical Timing</th>
                  <th className="px-4 py-3 text-left font-semibold text-[var(--color-text)]">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  { name: "Amazon Great Indian Festival", platform: "Amazon India", time: "October", best: "Peripherals, laptops, monitors" },
                  { name: "Flipkart Big Billion Days", platform: "Flipkart", time: "October", best: "Phones, laptops, accessories" },
                  { name: "Amazon Prime Day", platform: "Amazon", time: "July", best: "Gaming gear, SSDs, headsets" },
                  { name: "Republic Day Sale", platform: "Amazon + Flipkart", time: "January", best: "Electronics, monitors, chairs" },
                  { name: "Steam Summer Sale", platform: "Steam", time: "June-July", best: "PC games (60-90% off)" },
                  { name: "Steam Winter Sale", platform: "Steam", time: "December", best: "PC games, bundles" },
                  { name: "Epic Mega Sale", platform: "Epic Games", time: "May-June", best: "PC games + $10 coupon" },
                ].map((s) => (
                  <tr key={s.name} className="hover:bg-[var(--color-surface)]">
                    <td className="px-4 py-3 font-medium text-[var(--color-text)]">{s.name}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{s.platform}</td>
                    <td className="px-4 py-3 text-[var(--color-primary)] font-medium">{s.time}</td>
                    <td className="px-4 py-3 text-[var(--color-text-muted)]">{s.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── How We Find Deals ──────────────────────────── */}
      <section className="my-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          How We Find & Verify Gaming Deals
        </h2>
        <div className="space-y-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
          <p>
            <strong className="text-[var(--color-text)]">We track prices, not just discounts.</strong> A &ldquo;50% off&rdquo;
            badge means nothing if the original price was inflated a week before the sale. We use historical price
            data to verify that every deal we list is a genuine discount from the product&apos;s normal selling price.
            If a deal isn&apos;t actually cheaper than its 30-day average, we skip it.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Amazon and Flipkart are our primary sources for India.</strong> These two
            platforms run the biggest sales and have the widest gaming gear selection in India. We also track Croma,
            Reliance Digital, and MD Computers for PC components that aren&apos;t always available on Amazon. For
            international readers, we cover Steam, Epic Games Store, Humble Bundle, and Newegg deals.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Gaming-specific curation.</strong> We don&apos;t list every deal on the
            internet — only products relevant to gamers. This means gaming mice, mechanical keyboards, gaming headsets,
            monitors, GPUs, SSDs, gaming laptops, and PC games. We also list gaming chairs, phone coolers, and
            controller deals. Everything is filtered through a &ldquo;would a gamer actually buy this?&rdquo; lens.
          </p>
          <p>
            <strong className="text-[var(--color-text)]">Affiliate transparency.</strong> Some links on this page are affiliate
            links. If you buy through them, we earn a small commission at no extra cost to you. This revenue helps
            us keep the site running. We never let affiliate relationships influence which products we recommend —
            the best deal wins, regardless of commission rate.
          </p>
        </div>
      </section>

      <LazyAd slot="deals-bottom" format="banner" />

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
          <Link href="/pc-builds/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            PC Build Guides &rarr;
          </Link>
          <Link href="/gaming-phones/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Gaming Phones &rarr;
          </Link>
          <Link href="/redeem-codes/" className="text-sm text-[var(--color-primary)] hover:underline underline-offset-2">
            Redeem Codes &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
