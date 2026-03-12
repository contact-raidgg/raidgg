import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Privacy Policy — RaidGG",
  description:
    "RaidGG privacy policy explaining how we collect, use, and protect your personal information, including details about Google AdSense, affiliate cookies, and your data rights.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
        Privacy Policy
      </h1>

      <div className="prose-gaming space-y-6">
        <p className="text-sm text-[var(--color-text-dim)]">
          <strong>Last Updated:</strong> March 13, 2026
        </p>
        <p>
          RaidGG (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
          raidgg.com (the &quot;Site&quot;). This Privacy Policy explains what information we
          collect, how we use it, who we share it with, and what rights you have regarding your
          data. By using the Site, you agree to the practices described in this policy.
        </p>

        <h2>1. Information We Collect</h2>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit RaidGG, our servers and third-party services automatically collect
          certain technical information, including:
        </p>
        <ul>
          <li>Your IP address and approximate geographic location.</li>
          <li>Browser type, version, and language preferences.</li>
          <li>Operating system and device type (desktop, mobile, tablet).</li>
          <li>Referring URL (the page that linked you to our Site).</li>
          <li>Pages viewed, time spent on each page, and navigation paths.</li>
          <li>Screen resolution and viewport size.</li>
          <li>Date and time of each visit.</li>
        </ul>
        <p>
          This data is collected to improve site performance, understand how visitors use our
          content, and deliver a better experience.
        </p>

        <h3>Information You Provide</h3>
        <p>
          If you contact us via email or subscribe to our newsletter, we may collect your email
          address, name, and any other information you voluntarily include in your message. We
          use this data solely to respond to your inquiry or send you requested updates.
        </p>

        <h2>2. Cookies &amp; Tracking Technologies</h2>
        <p>
          RaidGG uses cookies and similar technologies to enhance your browsing experience,
          analyze traffic, and serve advertisements. A cookie is a small text file stored on
          your device by your web browser. We use the following types of cookies:
        </p>
        <ul>
          <li>
            <strong>Essential Cookies</strong> &mdash; Required for the Site to function properly,
            such as remembering your cookie consent preferences. These cannot be disabled.
          </li>
          <li>
            <strong>Analytics Cookies</strong> &mdash; Help us understand how visitors interact
            with the Site, including which pages are most popular, how long visitors stay, and
            where traffic comes from. We use Google Analytics for this purpose. Google Analytics
            uses cookies to collect anonymized usage data. You can opt out of Google Analytics by
            installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>.
          </li>
          <li>
            <strong>Advertising Cookies</strong> &mdash; Used by advertising networks to serve
            relevant advertisements based on your browsing history and interests. See the
            Google AdSense section below for details.
          </li>
          <li>
            <strong>Affiliate Cookies</strong> &mdash; Set when you click affiliate links on our
            Site to track referrals. These cookies are used by affiliate networks such as
            Amazon Associates to attribute purchases to our recommendations.
          </li>
        </ul>
        <p>
          Most web browsers allow you to control cookies through their settings. You can
          block or delete cookies at any time, though doing so may affect the functionality of
          certain parts of the Site.
        </p>

        <h2>3. Google AdSense</h2>
        <p>
          RaidGG uses Google AdSense to display advertisements on the Site. Google AdSense uses
          cookies, including the DoubleClick cookie, to serve ads based on your visits to our
          Site and other websites across the internet. This is known as interest-based or
          personalized advertising.
        </p>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on the Site. Google&apos;s use
          of the DoubleClick cookie enables it and its partners to serve ads based on your visit
          to RaidGG and other sites on the internet. You may opt out of personalized advertising
          by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            Google Ads Settings
          </a>.
        </p>
        <p>
          For more information about how Google uses data when you use partner sites, visit{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            Google&apos;s Privacy &amp; Terms page
          </a>.
        </p>

        <h2>4. Affiliate Links &amp; Programs</h2>
        <p>
          RaidGG participates in affiliate marketing programs, which means we may earn a
          commission when you click on certain links and make a purchase. Our affiliate
          partnerships include, but are not limited to:
        </p>
        <ul>
          <li>
            <strong>Amazon Associates Program</strong> &mdash; RaidGG is a participant in the
            Amazon Services LLC Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising and linking to
            Amazon.com and affiliated international Amazon stores. When you click an Amazon
            affiliate link, Amazon may place cookies on your device to track the referral.
          </li>
          <li>
            <strong>Other Affiliate Networks</strong> &mdash; We may also participate in other
            affiliate programs for gaming peripherals, software, and digital products. Each
            network has its own cookie and privacy policy.
          </li>
        </ul>
        <p>
          Affiliate relationships do not affect our editorial independence. For more details,
          see our{" "}
          <Link href="/disclaimer/" className="text-[var(--color-primary)] hover:underline">
            Disclaimer
          </Link>.
        </p>

        <h2>5. Third-Party Services</h2>
        <p>
          We use the following third-party services that may collect data about you:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> &mdash; Website traffic analysis and user behavior
            tracking.
          </li>
          <li>
            <strong>Google AdSense</strong> &mdash; Display advertising and personalized ad
            delivery.
          </li>
          <li>
            <strong>Cloudflare</strong> &mdash; Content delivery, security, and performance
            optimization. Cloudflare may log IP addresses for security purposes.
          </li>
          <li>
            <strong>Amazon Associates</strong> &mdash; Affiliate link tracking and referral
            attribution.
          </li>
        </ul>
        <p>
          Each of these services operates under its own privacy policy. We encourage you to
          review their respective policies to understand how they handle your data.
        </p>
        <p>
          You can opt out of personalized advertising from many ad networks by visiting{" "}
          <a
            href="https://optout.aboutads.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            aboutads.info
          </a>{" "}
          or{" "}
          <a
            href="https://www.youronlinechoices.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline"
          >
            Your Online Choices
          </a>{" "}
          (for users in the EU/EEA).
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain automatically collected analytics data for up to 26 months. Newsletter
          subscriber data is retained until you unsubscribe. Email correspondence is retained
          for as long as necessary to address your inquiry, and no longer than 12 months
          after the last communication.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have the following rights regarding your
          personal data:
        </p>
        <ul>
          <li>
            <strong>Right to Access</strong> &mdash; Request a copy of the personal data we hold
            about you.
          </li>
          <li>
            <strong>Right to Correction</strong> &mdash; Request that we correct inaccurate or
            incomplete data.
          </li>
          <li>
            <strong>Right to Deletion</strong> &mdash; Request that we delete your personal data,
            subject to legal obligations.
          </li>
          <li>
            <strong>Right to Restrict Processing</strong> &mdash; Request that we limit how we
            use your data.
          </li>
          <li>
            <strong>Right to Data Portability</strong> &mdash; Request your data in a structured,
            commonly used format.
          </li>
          <li>
            <strong>Right to Object</strong> &mdash; Object to our processing of your data for
            certain purposes, including direct marketing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
            contact@raidgg.com
          </a>. We will respond to your request within 30 days.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          RaidGG is not directed at children under the age of 13 (or the applicable age of
          digital consent in your jurisdiction). We do not knowingly collect personal information
          from children. If you are a parent or guardian and believe that your child has provided
          us with personal data, please contact us at{" "}
          <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
            contact@raidgg.com
          </a>{" "}
          so we can take steps to delete that information.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          RaidGG serves a global audience. Your data may be transferred to and processed in
          countries other than your own, including countries that may not have the same data
          protection laws as your jurisdiction. By using the Site, you consent to such transfers.
          We take reasonable steps to ensure that your data is treated securely and in accordance
          with this Privacy Policy.
        </p>

        <h2>10. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect your data
          against unauthorized access, alteration, disclosure, or destruction. However, no
          method of internet transmission or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, technology, or legal requirements. When we make material changes, we will
          update the &quot;Last Updated&quot; date at the top of this page. We encourage you to
          review this policy periodically.
        </p>

        <h2>12. Contact</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or
          how we handle your data, please contact us:
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
