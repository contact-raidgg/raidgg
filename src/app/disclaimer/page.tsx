import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Disclaimer — RaidGG",
  description:
    "RaidGG disclaimer covering affiliate disclosure, gaming content accuracy, redeem code validity, pro settings updates, and external links.",
  path: "/disclaimer/",
});

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
        Disclaimer
      </h1>

      <div className="prose-gaming space-y-6">
        <p className="text-sm text-[var(--color-text-dim)]">
          <strong>Last Updated:</strong> March 13, 2026
        </p>
        <p>
          The information provided on RaidGG (raidgg.com) is for general informational and
          entertainment purposes only. By using this website, you acknowledge and agree to the
          following disclaimers.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          RaidGG participates in various affiliate marketing programs. This means that when you
          click on certain product links on our site and make a purchase, we may earn a
          commission at no additional cost to you. These affiliate partnerships include, but
          are not limited to:
        </p>
        <ul>
          <li>
            <strong>Amazon Associates Program</strong> &mdash; RaidGG is a participant in the
            Amazon Services LLC Associates Program, an affiliate advertising program designed
            to provide a means for sites to earn advertising fees by advertising and linking
            to Amazon.com and its international storefronts (Amazon.in, Amazon.co.uk, etc.).
            As an Amazon Associate, we earn from qualifying purchases.
          </li>
          <li>
            <strong>Other Affiliate Networks</strong> &mdash; We also participate in affiliate
            programs with various gaming peripheral brands, PC component retailers, digital
            storefronts, and other e-commerce platforms.
          </li>
        </ul>
        <p>
          <strong>Editorial Independence:</strong> Our affiliate relationships do not influence
          our editorial content. Product recommendations, reviews, and buying guides are based
          on our own research, testing, and expertise. We only recommend products that we
          genuinely believe offer value to our readers. However, you should consider the
          presence of affiliate links when evaluating our recommendations.
        </p>
        <p>
          Affiliate links are clearly distinguishable on our site. Product prices, availability,
          and specifications displayed on RaidGG are sourced from affiliate networks and may
          not reflect real-time pricing. Always verify the final price on the retailer&apos;s
          website before making a purchase.
        </p>

        <h2>Redeem Codes Disclaimer</h2>
        <p>
          RaidGG publishes daily updated redeem codes for various games including Free Fire,
          BGMI, Genshin Impact, Honkai Star Rail, COD Mobile, PUBG Mobile, Roblox, Valorant,
          Apex Legends, Mobile Legends, and other titles. While we make every effort to verify
          each code before publishing:
        </p>
        <ul>
          <li>
            Redeem codes may <strong>expire without prior notice</strong> from the game publisher.
            A code that was valid at the time of publishing may no longer work when you attempt
            to redeem it.
          </li>
          <li>
            Some codes are <strong>region-specific</strong> and may only work in certain countries
            or on certain servers.
          </li>
          <li>
            Codes may have <strong>usage limits</strong> and may stop working once a certain
            number of players have redeemed them.
          </li>
          <li>
            We <strong>do not generate or create</strong> redeem codes. All codes published on
            RaidGG are sourced from official game channels, developer social media accounts,
            livestreams, and other legitimate sources.
          </li>
          <li>
            RaidGG is <strong>not responsible</strong> for any issues arising from the use of
            redeem codes, including but not limited to account restrictions or failed redemptions.
          </li>
        </ul>
        <p>
          We update our code articles frequently and clearly mark expired codes. If you find a
          code that is no longer working, please{" "}
          <Link href="/contact/" className="text-[var(--color-primary)] hover:underline">
            let us know
          </Link>{" "}
          so we can update the article promptly.
        </p>

        <h2>Pro Settings &amp; Game Guides Disclaimer</h2>
        <p>
          RaidGG publishes detailed breakdowns of professional player settings, including
          sensitivity, DPI, crosshair codes, keybinds, video settings, and hardware
          configurations. Please be aware of the following:
        </p>
        <ul>
          <li>
            Professional players <strong>frequently change their settings</strong>. The settings
            published on RaidGG reflect what was in use at the time of our last verification,
            typically sourced from tournament VODs, official streams, or player social media
            accounts.
          </li>
          <li>
            Copying a pro player&apos;s settings <strong>does not guarantee improved performance</strong>.
            Settings are highly personal and depend on factors like your hardware, hand size,
            grip style, mousepad, and personal preference.
          </li>
          <li>
            Game updates and patches may <strong>alter how certain settings behave</strong>,
            making previously published information outdated until we update the article.
          </li>
          <li>
            Our game guides and tier lists represent <strong>our editorial opinion</strong> based
            on research, gameplay experience, and community data. The gaming meta evolves
            constantly, and tier rankings may shift with new patches.
          </li>
        </ul>

        <h2>No Affiliation With Game Publishers</h2>
        <p>
          RaidGG is an <strong>independent gaming blog</strong> and is not affiliated with,
          endorsed by, sponsored by, or officially connected to any game developer, publisher,
          or platform. This includes, but is not limited to:
        </p>
        <ul>
          <li>Garena (Free Fire)</li>
          <li>Krafton (BGMI, PUBG Mobile)</li>
          <li>Activision / Activision Blizzard (Call of Duty)</li>
          <li>Riot Games (Valorant, League of Legends)</li>
          <li>miHoYo / HoYoverse (Genshin Impact, Honkai Star Rail)</li>
          <li>Epic Games (Fortnite)</li>
          <li>Roblox Corporation (Roblox)</li>
          <li>Respawn Entertainment / EA (Apex Legends)</li>
          <li>Moonton (Mobile Legends: Bang Bang)</li>
        </ul>
        <p>
          All game names, logos, images, trademarks, and registered trademarks are the property
          of their respective owners. Their use on RaidGG is solely for informational and
          editorial purposes under fair use principles.
        </p>

        <h2>Product Reviews &amp; Gear Recommendations</h2>
        <p>
          Our gaming gear reviews, PC build guides, and phone recommendations are based on our
          own research, testing, and editorial judgment. Please note:
        </p>
        <ul>
          <li>
            Product specifications, prices, and availability are <strong>subject to change</strong>{" "}
            and may vary by region and retailer.
          </li>
          <li>
            Individual experiences with products may vary. Our reviews reflect <strong>our
            testing conditions</strong> and may not represent your specific use case.
          </li>
          <li>
            Our content is <strong>not professional purchasing advice</strong>. Always conduct
            your own research and consider your specific needs and budget before making
            purchasing decisions.
          </li>
        </ul>

        <h2>External Links Disclaimer</h2>
        <p>
          RaidGG contains links to external third-party websites, including game official sites,
          online retailers, social media platforms, and other resources. We provide these links
          for your convenience and reference.
        </p>
        <ul>
          <li>
            We are <strong>not responsible</strong> for the content, accuracy, privacy policies,
            or practices of any third-party websites.
          </li>
          <li>
            The inclusion of a link does not imply our endorsement of the linked site or its
            content.
          </li>
          <li>
            Visiting external links is <strong>at your own risk</strong>. We recommend reviewing
            the privacy policy and terms of service of any third-party site you visit.
          </li>
        </ul>

        <h2>Advertising Disclaimer</h2>
        <p>
          RaidGG displays advertisements through Google AdSense and potentially other
          advertising networks. The advertisements displayed on our site are served by
          third-party ad networks and do not represent our endorsement of the advertised
          products or services. We have limited control over the specific ads displayed to
          individual users.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          RaidGG and its team members shall not be held liable for any damages, losses, or
          issues arising from the use of information published on this website, including but
          not limited to expired redeem codes, inaccurate game settings, product purchase
          decisions, or interactions with third-party websites linked from our content.
        </p>

        <h2>Contact</h2>
        <p>
          If you have concerns about any content on RaidGG or believe any information requires
          correction, please contact us at{" "}
          <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
            contact@raidgg.com
          </a>{" "}
          or visit our{" "}
          <Link href="/contact/" className="text-[var(--color-primary)] hover:underline">
            contact page
          </Link>. We take accuracy seriously and will address valid concerns promptly.
        </p>
      </div>
    </div>
  );
}
