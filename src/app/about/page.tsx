import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About RaidGG — Our Story, Mission & Team",
  description:
    "Learn about RaidGG, a passionate gaming community delivering accurate redeem codes, in-depth game guides, pro player settings, gear reviews, and esports coverage to gamers worldwide.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
        About <span className="text-[var(--color-primary)]">Raid</span>
        <span className="gradient-text">GG</span>
      </h1>

      <div className="prose-gaming space-y-6">
        <h2>Our Story</h2>
        <p>
          RaidGG started with a simple frustration: every time we searched for a redeem code, a
          sensitivity guide, or an honest gear review, we had to wade through clickbait, outdated
          information, and sites that clearly never played the games they wrote about. We knew
          gamers deserved better.
        </p>
        <p>
          So in 2025, a group of dedicated gamers and tech enthusiasts came together to build
          something different &mdash; a single destination where players could find verified,
          up-to-date gaming content they could actually trust. That destination became RaidGG.
        </p>
        <p>
          Today, RaidGG serves hundreds of thousands of gamers worldwide, from competitive
          players in India and Southeast Asia to casual enthusiasts in the United States and
          United Kingdom. Every piece of content we publish is researched, tested, and verified
          by people who genuinely love gaming.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is straightforward: provide the most accurate, timely, and useful gaming
          content on the internet. We verify every redeem code before publishing, test every
          piece of gear we review, and update our guides whenever a new patch drops. If a code
          expires or a meta shifts, we update our content &mdash; not two weeks later, but the
          same day.
        </p>
        <p>
          We believe that great gaming content should be free, accessible, and honest. That
          means no paywalls, no misleading headlines, and complete transparency about our
          affiliate partnerships. When we recommend a product, it is because we genuinely believe
          it is worth your money &mdash; not because of a commission.
        </p>

        <h2>What We Cover</h2>
        <p>
          RaidGG covers the full spectrum of gaming content that players actually need:
        </p>
        <ul>
          <li>
            <strong>Redeem Codes</strong> &mdash; Daily updated, verified codes for 11+ games
            including Free Fire, BGMI, Genshin Impact, Honkai Star Rail, COD Mobile, PUBG Mobile,
            Roblox, Valorant, Apex Legends, Mobile Legends, and more. Every code is tested before
            we publish it.
          </li>
          <li>
            <strong>Game Guides</strong> &mdash; Comprehensive tips, tier lists, character builds,
            sensitivity calculators, beginner walkthroughs, and advanced strategies across popular
            mobile and PC titles.
          </li>
          <li>
            <strong>Pro Player Settings</strong> &mdash; Exact sensitivity, DPI, crosshair codes,
            keybinds, video settings, and hardware setups used by professional esports players.
            Updated after every major tournament and roster change.
          </li>
          <li>
            <strong>Esports News</strong> &mdash; Tournament results, roster moves, patch analysis,
            and industry developments from the competitive gaming world.
          </li>
          <li>
            <strong>Gaming Gear Reviews</strong> &mdash; Honest, hands-on reviews and buying guides
            for mice, keyboards, headsets, monitors, controllers, and accessories at every price
            point.
          </li>
          <li>
            <strong>PC Build Guides</strong> &mdash; Curated build recommendations for every budget,
            from entry-level gaming rigs under $500 to high-end streaming and content creation setups.
          </li>
          <li>
            <strong>Gaming Phones</strong> &mdash; Benchmarked and tested recommendations for the
            best gaming smartphones at every price range, with real-world gaming performance data.
          </li>
          <li>
            <strong>Deals &amp; Discounts</strong> &mdash; Weekly roundups of the best gaming deals
            on peripherals, components, games, and subscriptions so you never overpay.
          </li>
        </ul>

        <h2>The Team</h2>
        <p>
          Behind RaidGG is a team of dedicated gamers and tech enthusiasts who eat, sleep, and
          breathe gaming. Our writers are competitive players, hardware tinkerers, and esports
          fans who bring firsthand experience to every article. We do not outsource our content
          to people who have never held a controller or built a PC.
        </p>
        <p>
          Our editorial process is rigorous. Every redeem code is redeemed and verified before
          publishing. Every gear review involves real-world testing over days or weeks. Every
          pro settings article is cross-referenced with tournament VODs and official player
          streams. We hold ourselves to a standard of accuracy that we would want as readers.
        </p>
        <p>
          We also value our community. Reader feedback has shaped our content calendar, improved
          our guides, and caught errors we missed. RaidGG is not just a blog &mdash; it is a
          community built by gamers, for gamers.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Accuracy First</strong> &mdash; We verify everything before publishing and
            update content when things change.
          </li>
          <li>
            <strong>Transparency</strong> &mdash; We clearly disclose affiliate relationships
            and never let them influence our recommendations.
          </li>
          <li>
            <strong>Community Driven</strong> &mdash; Reader feedback shapes our content and
            helps us improve every day.
          </li>
          <li>
            <strong>Accessible</strong> &mdash; All our content is free and designed to load
            fast on any device, anywhere in the world.
          </li>
        </ul>

        <h2>Get in Touch</h2>
        <p>
          Have a tip, feedback, correction, or partnership inquiry? We would love to hear from
          you. Reach out at{" "}
          <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
            contact@raidgg.com
          </a>{" "}
          or visit our{" "}
          <Link href="/contact/" className="text-[var(--color-primary)] hover:underline">
            contact page
          </Link>{" "}
          for more ways to connect with the team.
        </p>
      </div>
    </div>
  );
}
