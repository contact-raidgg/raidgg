import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Terms of Service — RaidGG",
  description:
    "RaidGG terms of service governing your use of our gaming blog, including intellectual property, disclaimers, affiliate links, and limitation of liability.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
        Terms of Service
      </h1>

      <div className="prose-gaming space-y-6">
        <p className="text-sm text-[var(--color-text-dim)]">
          <strong>Last Updated:</strong> March 13, 2026
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          Welcome to RaidGG. By accessing or using the website located at raidgg.com (the
          &quot;Site&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;).
          If you do not agree to all of these Terms, you must not use the Site.
        </p>
        <p>
          These Terms constitute a legally binding agreement between you and RaidGG. We
          reserve the right to update or modify these Terms at any time. Your continued use
          of the Site after any changes indicates your acceptance of the revised Terms.
        </p>

        <h2>2. Use of the Site</h2>
        <p>
          You may use the Site for personal, non-commercial purposes. In using the Site, you
          agree to the following:
        </p>
        <ul>
          <li>
            <strong>No Unauthorized Reproduction</strong> &mdash; You may not reproduce,
            duplicate, copy, sell, or exploit any portion of the Site or its content for
            commercial purposes without our prior written consent.
          </li>
          <li>
            <strong>No Automated Access</strong> &mdash; You may not use bots, scrapers,
            crawlers, or other automated systems to access the Site in a manner that exceeds
            reasonable human use or places an undue burden on our infrastructure.
          </li>
          <li>
            <strong>No Unauthorized Access</strong> &mdash; You may not attempt to gain
            unauthorized access to any part of the Site, its servers, or any systems connected
            to the Site.
          </li>
          <li>
            <strong>No Harmful Activity</strong> &mdash; You may not use the Site to transmit
            spam, malware, viruses, or any other harmful content, or engage in any activity
            that could damage, disable, or impair the Site.
          </li>
          <li>
            <strong>No Impersonation</strong> &mdash; You may not impersonate RaidGG, its
            staff members, or any other person or entity.
          </li>
          <li>
            <strong>Age Requirement</strong> &mdash; You must be at least 13 years of age (or
            the applicable age of digital consent in your jurisdiction) to use the Site. If you
            are under this age, you must not access or use the Site.
          </li>
        </ul>
        <p>
          We reserve the right to restrict or terminate your access to the Site at our sole
          discretion, without notice, for conduct that we believe violates these Terms or is
          harmful to the Site, its users, or third parties.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All original content on RaidGG, including but not limited to articles, guides,
          reviews, graphics, logos, page layouts, and website design, is the intellectual
          property of RaidGG and is protected by applicable copyright and trademark laws.
        </p>
        <ul>
          <li>
            You may share links to our content and quote brief excerpts for non-commercial
            purposes with proper attribution and a link back to the original article.
          </li>
          <li>
            You may not reproduce, distribute, modify, or create derivative works from our
            content without prior written permission from RaidGG.
          </li>
          <li>
            Republishing our articles, guides, or reviews in full on other websites, apps, or
            publications is strictly prohibited without explicit authorization.
          </li>
        </ul>
        <p>
          Game names, logos, character images, and trademarks referenced on the Site belong to
          their respective owners and are used on RaidGG for editorial and informational
          purposes only. Their use does not imply any affiliation with or endorsement by the
          trademark holders.
        </p>

        <h2>4. User-Submitted Content</h2>
        <p>
          If you submit content to RaidGG, such as comments, tips, code reports, or messages
          through our contact channels, you grant us a non-exclusive, royalty-free, perpetual,
          worldwide license to use, display, modify, and distribute that content in connection
          with the Site and our services.
        </p>
        <p>
          You represent and warrant that you own or have the necessary rights to submit such
          content and that it does not infringe on the intellectual property or other rights of
          any third party.
        </p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>
          The Site and all content provided on it are offered on an &quot;as is&quot; and
          &quot;as available&quot; basis without warranties of any kind, either express or
          implied, including but not limited to implied warranties of merchantability, fitness
          for a particular purpose, and non-infringement.
        </p>
        <p>
          Without limiting the foregoing, RaidGG does not warrant that:
        </p>
        <ul>
          <li>The Site will be available at all times or operate without interruption or error.</li>
          <li>The content on the Site is complete, accurate, reliable, or current at all times.</li>
          <li>Redeem codes published on the Site will be valid or functional when you attempt to use them.</li>
          <li>Pro player settings or game guides will remain accurate after game updates or patches.</li>
          <li>Product prices, specifications, or availability listed on the Site reflect real-time information.</li>
          <li>The Site is free of viruses or other harmful components.</li>
        </ul>
        <p>
          You acknowledge that you use the Site and rely on its content at your own risk. For
          additional details, please review our{" "}
          <Link href="/disclaimer/" className="text-[var(--color-primary)] hover:underline">
            Disclaimer
          </Link>.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, RaidGG and its owners, operators,
          contributors, and affiliates shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from or related to your use of the Site,
          including but not limited to:
        </p>
        <ul>
          <li>Loss of data, revenue, profits, or business opportunities.</li>
          <li>Damages resulting from reliance on any content published on the Site.</li>
          <li>Damages arising from the use of expired or invalid redeem codes.</li>
          <li>Damages resulting from purchasing decisions based on our reviews or recommendations.</li>
          <li>Damages arising from your interactions with third-party websites linked from the Site.</li>
          <li>Damages caused by unauthorized access to your data or transmissions.</li>
        </ul>
        <p>
          In jurisdictions that do not allow the exclusion or limitation of certain damages,
          our liability shall be limited to the maximum extent permitted by law.
        </p>

        <h2>7. Affiliate Links &amp; Sponsored Content</h2>
        <p>
          The Site contains affiliate links to third-party products and services. When you
          click on an affiliate link and make a purchase, we may earn a commission at no
          additional cost to you. Our affiliate partnerships include the Amazon Associates
          Program and other affiliate networks.
        </p>
        <p>
          Affiliate relationships do not influence our editorial content or product
          recommendations. However, you should be aware that affiliate links are present on
          the Site and consider this when evaluating our content.
        </p>
        <p>
          The Site may also contain sponsored content or advertisements served through
          third-party ad networks such as Google AdSense. Sponsored content and advertisements
          are clearly identified and do not represent our endorsement of the advertised
          products or services unless explicitly stated.
        </p>

        <h2>8. External Links &amp; Third-Party Services</h2>
        <p>
          The Site may contain links to external websites and third-party services that are
          not owned or controlled by RaidGG. These links are provided for your convenience
          and information.
        </p>
        <ul>
          <li>
            We have no control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party websites or services.
          </li>
          <li>
            The inclusion of any link does not imply our endorsement or recommendation of the
            linked site.
          </li>
          <li>
            Your interactions with third-party websites are governed entirely by their own
            terms and policies.
          </li>
        </ul>
        <p>
          We strongly recommend reviewing the terms of service and privacy policy of every
          third-party website you visit through links on our Site.
        </p>

        <h2>9. Privacy</h2>
        <p>
          Your use of the Site is also governed by our{" "}
          <Link href="/privacy-policy/" className="text-[var(--color-primary)] hover:underline">
            Privacy Policy
          </Link>
          , which describes how we collect, use, and protect your personal information. By
          using the Site, you consent to the data practices described in our Privacy Policy.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless RaidGG and its owners, operators,
          contributors, and affiliates from and against any claims, liabilities, damages,
          losses, and expenses (including reasonable legal fees) arising from your use of the
          Site, your violation of these Terms, or your infringement of any third-party rights.
        </p>

        <h2>11. Changes to These Terms</h2>
        <p>
          We reserve the right to modify, update, or replace these Terms at any time at our
          sole discretion. When we make material changes, we will update the &quot;Last
          Updated&quot; date at the top of this page. It is your responsibility to review
          these Terms periodically.
        </p>
        <p>
          Your continued use of the Site after any changes to these Terms constitutes your
          acceptance of the revised Terms. If you do not agree with the updated Terms, you
          must stop using the Site.
        </p>

        <h2>12. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid by a court
          of competent jurisdiction, that provision shall be limited or eliminated to the
          minimum extent necessary, and the remaining provisions shall continue in full force
          and effect.
        </p>

        <h2>13. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India,
          without regard to conflict of law principles. Any disputes arising under or in
          connection with these Terms shall be subject to the exclusive jurisdiction of the
          courts located in India.
        </p>

        <h2>14. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms of Service, please contact
          us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
              contact@raidgg.com
            </a>
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <Link href="/contact/" className="text-[var(--color-primary)] hover:underline">
              raidgg.com/contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
