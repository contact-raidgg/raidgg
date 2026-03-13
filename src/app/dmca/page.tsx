import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = buildMetadata({
  title: "DMCA Policy — RaidGG",
  description:
    "RaidGG DMCA takedown policy. Learn how to file a copyright infringement notice or counter-notification under the Digital Millennium Copyright Act.",
  path: "/dmca/",
});

export default function DMCAPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "DMCA Policy" }]} />

      <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-8">
        DMCA Policy
      </h1>

      <div className="prose-gaming space-y-6">
        <p className="text-sm text-[var(--color-text-dim)]">
          <strong>Last Updated:</strong> March 14, 2026
        </p>

        <h2>What Is the DMCA?</h2>
        <p>
          The Digital Millennium Copyright Act (DMCA) is a United States copyright law that
          provides a process for copyright holders to request the removal of content that
          infringes on their intellectual property rights. RaidGG respects the intellectual
          property rights of others and expects our users to do the same.
        </p>
        <p>
          If you believe that content on RaidGG infringes upon your copyright, you may submit
          a DMCA takedown notice as described below. We will review all valid notices and take
          appropriate action, which may include removing the allegedly infringing content.
        </p>

        <h2>How to File a DMCA Takedown Notice</h2>
        <p>
          To file a DMCA takedown notice, please send a written notification to our designated
          agent that includes all of the following information:
        </p>

        <h3>Required Information for a Takedown Notice</h3>
        <ul>
          <li>
            <strong>Identification of the copyrighted work</strong> &mdash; A description of the
            copyrighted work that you claim has been infringed. If multiple copyrighted works are
            covered by a single notification, provide a representative list.
          </li>
          <li>
            <strong>Identification of the infringing material</strong> &mdash; The specific URL(s)
            or other information sufficient to allow us to locate the material on RaidGG that you
            claim is infringing.
          </li>
          <li>
            <strong>Your contact information</strong> &mdash; Your full legal name, mailing address,
            telephone number, and email address so we can contact you regarding your notice.
          </li>
          <li>
            <strong>Statement of good faith</strong> &mdash; A statement that you have a good faith
            belief that the use of the material in the manner complained of is not authorized by the
            copyright owner, its agent, or the law.
          </li>
          <li>
            <strong>Statement of accuracy</strong> &mdash; A statement, made under penalty of perjury,
            that the information in your notification is accurate and that you are the copyright owner
            or are authorized to act on behalf of the copyright owner.
          </li>
          <li>
            <strong>Signature</strong> &mdash; A physical or electronic signature of the copyright
            owner or a person authorized to act on their behalf.
          </li>
        </ul>

        <h2>Where to Send Your Notice</h2>
        <p>
          Please send your DMCA takedown notice to our designated agent via email:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
              contact@raidgg.com
            </a>
          </li>
          <li>
            <strong>Subject Line:</strong> DMCA Takedown Notice
          </li>
        </ul>
        <p>
          Please allow up to 5 business days for us to review and respond to your notice. We
          will acknowledge receipt and inform you of the actions taken.
        </p>

        <h2>Counter-Notification Process</h2>
        <p>
          If you believe that your content was removed or disabled as a result of a mistake or
          misidentification, you may submit a counter-notification. Your counter-notification
          must include the following:
        </p>
        <ul>
          <li>
            <strong>Identification of the removed material</strong> &mdash; A description of the
            material that was removed and the URL where it previously appeared.
          </li>
          <li>
            <strong>Statement under penalty of perjury</strong> &mdash; A statement, under penalty
            of perjury, that you have a good faith belief that the material was removed or disabled
            as a result of mistake or misidentification.
          </li>
          <li>
            <strong>Consent to jurisdiction</strong> &mdash; A statement that you consent to the
            jurisdiction of the federal district court for the judicial district in which your
            address is located, or if your address is outside the United States, any judicial
            district in which RaidGG may be found, and that you will accept service of process
            from the person who provided the original DMCA notification or their agent.
          </li>
          <li>
            <strong>Your contact information</strong> &mdash; Your full legal name, mailing address,
            telephone number, and email address.
          </li>
          <li>
            <strong>Signature</strong> &mdash; A physical or electronic signature.
          </li>
        </ul>
        <p>
          Send your counter-notification to{" "}
          <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
            contact@raidgg.com
          </a>{" "}
          with the subject line &quot;DMCA Counter-Notification.&quot;
        </p>
        <p>
          Upon receipt of a valid counter-notification, we will forward it to the original
          complainant. If the original complainant does not file a court action within 10
          business days, we may restore the removed content.
        </p>

        <h2>Repeat Infringers</h2>
        <p>
          RaidGG reserves the right to terminate access for users or contributors who are
          repeat copyright infringers. We will act on this policy at our discretion and in
          appropriate circumstances.
        </p>

        <h2>Disclaimer</h2>
        <p>
          This DMCA policy is provided for informational purposes and does not constitute
          legal advice. If you require legal guidance regarding copyright matters, please
          consult a qualified attorney.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions about this DMCA Policy, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@raidgg.com" className="text-[var(--color-primary)] hover:underline">
              contact@raidgg.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
