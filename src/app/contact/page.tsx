import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact RaidGG — Get in Touch With Our Team",
  description:
    "Reach the RaidGG team for general inquiries, business partnerships, content corrections, or advertising opportunities. We typically respond within 24-48 hours.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
        Contact Us
      </h1>
      <p className="text-[var(--color-text-muted)] mb-10 max-w-2xl">
        We love hearing from our readers. Whether you have a question, a content suggestion,
        a business proposal, or spotted an error in one of our articles, we want to know about it.
      </p>

      {/* Email cards */}
      <div className="grid gap-4 sm:grid-cols-2 mb-10">
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-2">
            General Inquiries
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            Questions, feedback, content suggestions, or code reports.
          </p>
          <a
            href="mailto:contact@raidgg.com"
            className="inline-block text-[var(--color-primary)] font-medium hover:underline"
          >
            contact@raidgg.com
          </a>
        </div>

        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="font-heading text-lg font-semibold text-[var(--color-text)] mb-2">
            Business &amp; Advertising
          </h2>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            Partnerships, sponsorships, advertising, and collaboration proposals.
          </p>
          <a
            href="mailto:business@raidgg.com"
            className="inline-block text-[var(--color-primary)] font-medium hover:underline"
          >
            business@raidgg.com
          </a>
        </div>
      </div>

      {/* Inquiry categories */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          What Can We Help With?
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-[var(--color-text)] mb-1">
              General Questions &amp; Feedback
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Have a question about one of our guides? Want to suggest a game or topic we should
              cover? Found a redeem code we missed? Drop us a line at{" "}
              <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
                contact@raidgg.com
              </a>{" "}
              and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-4">
            <h3 className="font-semibold text-[var(--color-text)] mb-1">
              Content Corrections
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Accuracy is our top priority. If you notice an expired redeem code, an outdated
              pro player setting, an incorrect product spec, or any other error, please email us
              at{" "}
              <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
                contact@raidgg.com
              </a>{" "}
              with the article URL and details of the correction. We typically fix reported errors
              within 24 hours.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-4">
            <h3 className="font-semibold text-[var(--color-text)] mb-1">
              Business &amp; Advertising Inquiries
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Interested in advertising on RaidGG, sponsoring content, or exploring a partnership?
              We work with gaming brands, peripheral manufacturers, game publishers, and esports
              organizations. Reach out at{" "}
              <a href="mailto:business@raidgg.com" className="text-[var(--color-primary)] hover:underline">
                business@raidgg.com
              </a>{" "}
              with details about your proposal and we will respond within 48 hours.
            </p>
          </div>

          <div className="border-t border-[var(--color-border)] pt-4">
            <h3 className="font-semibold text-[var(--color-text)] mb-1">
              Partnership &amp; Collaboration
            </h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              Are you a content creator, streamer, or gaming community looking to collaborate?
              We are always open to guest posts, cross-promotions, and community events. Email{" "}
              <a href="mailto:business@raidgg.com" className="text-[var(--color-primary)] hover:underline">
                business@raidgg.com
              </a>{" "}
              and tell us about yourself and your ideas.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
          Send Us a Message
        </h2>
        <ContactForm />
      </div>

      {/* Response time */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 mb-10">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-3">
          Response Time
        </h2>
        <p className="text-[var(--color-text-muted)]">
          We aim to respond to all emails within <strong className="text-[var(--color-text)]">24&ndash;48 hours</strong>.
          During major game updates or events, response times may be slightly longer as our
          team prioritizes getting updated content live. Business inquiries are typically
          addressed within 2 business days.
        </p>
      </div>

      {/* Social & additional links */}
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
        <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-3">
          Follow Us
        </h2>
        <p className="text-[var(--color-text-muted)] mb-4">
          Stay connected with RaidGG across social media for the latest updates, breaking
          redeem codes, and gaming news:
        </p>
        <ul className="space-y-2 text-[var(--color-text-muted)]">
          <li>
            <strong className="text-[var(--color-text)]">Twitter / X:</strong>{" "}
            <a
              href="https://twitter.com/raidgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              @raidgg
            </a>
          </li>
          <li>
            <strong className="text-[var(--color-text)]">YouTube:</strong>{" "}
            <a
              href="https://youtube.com/@raidgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              @raidgg
            </a>
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Discord:</strong>{" "}
            <a
              href="https://discord.gg/raidgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              discord.gg/raidgg
            </a>
          </li>
          <li>
            <strong className="text-[var(--color-text)]">Instagram:</strong>{" "}
            <a
              href="https://instagram.com/raidgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              @raidgg
            </a>
          </li>
        </ul>
      </div>

      <p className="mt-8 text-sm text-[var(--color-text-dim)]">
        For legal inquiries, please review our{" "}
        <Link href="/privacy-policy/" className="text-[var(--color-primary)] hover:underline">
          Privacy Policy
        </Link>
        ,{" "}
        <Link href="/terms/" className="text-[var(--color-primary)] hover:underline">
          Terms of Service
        </Link>
        , and{" "}
        <Link href="/disclaimer/" className="text-[var(--color-primary)] hover:underline">
          Disclaimer
        </Link>
        .
      </p>
    </div>
  );
}
