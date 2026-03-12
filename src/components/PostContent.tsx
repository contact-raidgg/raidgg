import Link from "next/link";
import type { PostMeta, ContentBlock } from "@/lib/types";
import { formatDate } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RedeemCodeTable from "@/components/RedeemCodeTable";
import PostCard from "@/components/PostCard";
import LazyAd from "@/components/LazyAd";

// ── Rich Content Block Renderer ──────────────────────────

function RichHTML({ html }: { html: string }) {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2 className="font-heading text-2xl font-bold text-[var(--color-text)] mt-10 mb-4">
          {block.text}
        </h2>
      ) : (
        <h3 className="font-heading text-xl font-semibold text-[var(--color-text)] mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p
          className="text-[var(--color-text-muted)] leading-relaxed mb-4 [&_strong]:text-[var(--color-text)] [&_strong]:font-semibold [&_a]:text-[var(--color-primary)] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[var(--color-accent)]"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );

    case "list":
      const ListTag = block.style === "numbered" ? "ol" : "ul";
      return (
        <ListTag
          className={`mb-6 space-y-2 pl-6 text-[var(--color-text-muted)] ${
            block.style === "numbered" ? "list-decimal" : "list-disc"
          } [&_strong]:text-[var(--color-text)] [&_strong]:font-semibold [&_a]:text-[var(--color-primary)] [&_a]:underline`}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ListTag>
      );

    case "table":
      return (
        <div className="mb-6 overflow-x-auto rounded-lg border border-[var(--color-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface-alt)]">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-semibold text-[var(--color-text)]"
                    dangerouslySetInnerHTML={{ __html: h }}
                  />
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-t border-[var(--color-border)] hover:bg-[var(--color-surface)]"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 text-[var(--color-text-muted)] [&_strong]:text-[var(--color-text)] [&_strong]:font-semibold"
                      dangerouslySetInnerHTML={{ __html: cell }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout": {
      const styles = {
        tip: "border-[var(--color-primary)] bg-[var(--color-primary)]/5",
        warning: "border-[var(--color-warning)] bg-[var(--color-warning)]/5",
        info: "border-[var(--color-accent)] bg-[var(--color-accent)]/5",
      };
      const icons = { tip: "\u{1F4A1}", warning: "\u26A0\uFE0F", info: "\u2139\uFE0F" };
      const labels = { tip: "Pro Tip", warning: "Warning", info: "Info" };
      return (
        <div
          className={`mb-6 rounded-lg border-l-4 p-4 ${styles[block.variant]} [&_strong]:font-semibold [&_a]:text-[var(--color-primary)] [&_a]:underline`}
        >
          <p className="font-semibold text-[var(--color-text)] mb-1 text-sm">
            {icons[block.variant]} {labels[block.variant]}
          </p>
          <p
            className="text-sm text-[var(--color-text-muted)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </div>
      );
    }

    case "pros-cons":
      return (
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-[var(--color-success)]/30 bg-[var(--color-success)]/5 p-4">
            <p className="font-semibold text-[var(--color-success)] mb-2 text-sm">Pros</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
              {block.pros.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--color-success)] shrink-0">+</span>
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[var(--color-danger)]/30 bg-[var(--color-danger)]/5 p-4">
            <p className="font-semibold text-[var(--color-danger)] mb-2 text-sm">Cons</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-text-muted)]">
              {block.cons.map((c, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[var(--color-danger)] shrink-0">-</span>
                  <span dangerouslySetInnerHTML={{ __html: c }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "specs":
      return (
        <div className="mb-6 rounded-lg border border-[var(--color-border)] overflow-hidden">
          <p className="bg-[var(--color-surface-alt)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text)]">
            {block.label}
          </p>
          <div className="divide-y divide-[var(--color-border)]">
            {block.rows.map(([key, val], i) => (
              <div key={i} className="flex justify-between px-4 py-2.5 text-sm">
                <span className="text-[var(--color-text-dim)]">{key}</span>
                <span
                  className="font-medium text-[var(--color-text)] [&_strong]:text-[var(--color-primary)]"
                  dangerouslySetInnerHTML={{ __html: val }}
                />
              </div>
            ))}
          </div>
        </div>
      );

    case "internal-links":
      return (
        <div className="mb-6 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
          <p className="font-semibold text-[var(--color-text)] mb-3 text-sm">
            {block.title}
          </p>
          <ul className="space-y-2">
            {block.links.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-sm text-[var(--color-primary)] hover:text-[var(--color-accent)] underline underline-offset-2 transition-colors"
                >
                  {link.text} &rarr;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

// ── Main PostContent Component ──────────────────────────

interface PostContentProps {
  post: PostMeta;
  breadcrumbs: { label: string; href?: string }[];
  relatedPosts: PostMeta[];
}

export default function PostContent({
  post,
  breadcrumbs,
  relatedPosts,
}: PostContentProps) {
  const hasSections = post.sections && post.sections.length > 0;
  const hasBody = post.body && post.body.length > 0;

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[var(--color-text-dim)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.readTime && <span>{post.readTime} read</span>}
          <span>By {post.author}</span>
        </div>
        {post.description && (
          <p className="mt-4 text-lg text-[var(--color-text-muted)] leading-relaxed">
            {post.description}
          </p>
        )}
      </header>

      {post.image && (
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          width={800}
          height={450}
          loading="eager"
          decoding="async"
          className="w-full rounded-xl mb-8 aspect-video object-cover"
        />
      )}

      {/* Rich Structured Content (preferred) */}
      {hasSections && (
        <div className="mb-10">
          {post.sections!.map((block, i) => (
            <ContentBlockRenderer key={i} block={block} />
          ))}
        </div>
      )}

      {/* Legacy plain body paragraphs (fallback) */}
      {!hasSections && hasBody && (
        <div className="prose-gaming mb-10 space-y-4">
          {post.body!.map((paragraph, i) => (
            <p key={i} className="text-[var(--color-text-muted)] leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Redeem Code Table */}
      {post.codes && post.codes.length > 0 && (
        <section className="mb-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Active Codes
          </h2>
          <RedeemCodeTable
            codes={post.codes}
            game={post.game || post.title}
          />
        </section>
      )}

      <LazyAd slot={`post-${post.slug}-mid`} format="leaderboard" />

      {/* Affiliate Links / Product Cards */}
      {post.affiliateLinks && post.affiliateLinks.length > 0 && (
        <section className="my-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Our Top Picks
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {post.affiliateLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] transition-colors"
              >
                <div>
                  <p className="font-medium text-[var(--color-text)]">
                    {link.label}
                  </p>
                  <p className="text-xs text-[var(--color-text-dim)] mt-1">
                    {link.platform}
                  </p>
                </div>
                {link.price && (
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    {link.price}
                  </span>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Pro Settings Details */}
      {post.player && (
        <section className="my-10 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-3">
            {post.player}&apos;s Setup
          </h2>
          <p className="text-[var(--color-text-muted)]">
            Complete settings, sensitivity, and gear used by {post.player}.
            Settings are verified and updated regularly for accuracy.
          </p>
        </section>
      )}

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="my-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-surface-alt)] px-3 py-1 text-xs text-[var(--color-text-muted)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="my-10">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {post.faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] group"
              >
                <summary className="cursor-pointer px-5 py-4 font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                  {faq.question}
                </summary>
                <p className="px-5 pb-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      <LazyAd slot={`post-${post.slug}-bottom`} format="leaderboard" />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <h2 className="font-heading text-xl font-semibold text-[var(--color-text)] mb-6">
            Related Articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {relatedPosts.map((rp) => (
              <PostCard key={rp.slug} post={rp} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
