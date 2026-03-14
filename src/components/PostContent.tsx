import Link from "next/link";
import type { PostMeta, ContentBlock } from "@/lib/types";
import { formatDate } from "@/lib/seo";
import { getPostUrl } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import LiveRedeemCodes from "@/components/LiveRedeemCodes";
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
    case "heading": {
      const id = block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return block.level === 2 ? (
        <h2 id={id} className="font-heading text-2xl font-bold text-[var(--color-text)] mt-10 mb-4 scroll-mt-20">
          {block.text}
        </h2>
      ) : (
        <h3 id={id} className="font-heading text-xl font-semibold text-[var(--color-text)] mt-8 mb-3 scroll-mt-20">
          {block.text}
        </h3>
      );
    }

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

// ── Table of Contents ──────────────────────────────────

function TableOfContents({ sections }: { sections: ContentBlock[] }) {
  const headings = sections.filter(
    (b): b is Extract<ContentBlock, { type: "heading" }> => b.type === "heading"
  );
  if (headings.length < 3) return null;

  return (
    <nav className="mb-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
      <p className="font-heading text-sm font-semibold text-[var(--color-text)] mb-3">
        Table of Contents
      </p>
      <ul className="space-y-1.5 text-sm list-disc pl-5">
        {headings.map((h, i) => (
          <li key={i} className={h.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${h.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ── Main PostContent Component ──────────────────────────

interface PostContentProps {
  post: PostMeta;
  breadcrumbs: { label: string; href?: string }[];
  relatedPosts: PostMeta[];
  prevPost?: PostMeta | null;
  nextPost?: PostMeta | null;
}

export default function PostContent({
  post,
  breadcrumbs,
  relatedPosts,
  prevPost,
  nextPost,
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
          {post.updated && post.updated !== post.date && (
            <span className="flex items-center gap-1">
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 3.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 7.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
              Updated: <time dateTime={post.updated}>{formatDate(post.updated)}</time>
            </span>
          )}
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

      {/* Redeem Code Table — shown FIRST for code pages (users want codes immediately) */}
      {post.codes !== undefined && (
        <section className="mb-10">
          <h2 id="active-codes" className="font-heading text-xl font-semibold text-[var(--color-text)] mb-4 scroll-mt-20">
            Active Codes
          </h2>
          <LiveRedeemCodes
            gameSlug={post.subcategory || ""}
            gameName={post.game || post.title}
            fallbackCodes={post.codes}
          />
        </section>
      )}

      {/* Table of Contents */}
      {hasSections && <TableOfContents sections={post.sections!} />}

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

      {/* Author Box */}
      <section className="my-10 flex items-start gap-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-lg font-bold text-[var(--color-primary)]">
          {post.author.charAt(0)}
        </div>
        <div>
          <p className="font-heading font-semibold text-[var(--color-text)]">
            {post.author}
          </p>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">
            {post.author === "RaidGG Team"
              ? "The RaidGG editorial team verifies every code, tests every product, and updates content daily to deliver accurate gaming information you can trust."
              : `Contributing writer at RaidGG covering ${post.category.replace(/-/g, " ")}.`}
          </p>
        </div>
      </section>

      <LazyAd slot={`post-${post.slug}-bottom`} format="leaderboard" />

      {/* Prev / Next Navigation */}
      {(prevPost || nextPost) && (
        <nav className="my-10 grid gap-4 sm:grid-cols-2" aria-label="Post navigation">
          {prevPost ? (
            <Link
              href={getPostUrl(prevPost)}
              className="group flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs text-[var(--color-text-dim)] mb-1">&larr; Previous</span>
              <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] line-clamp-2 transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : <div />}
          {nextPost ? (
            <Link
              href={getPostUrl(nextPost)}
              className="group flex flex-col items-end text-right rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 hover:border-[var(--color-primary)] transition-colors"
            >
              <span className="text-xs text-[var(--color-text-dim)] mb-1">Next &rarr;</span>
              <span className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-primary)] line-clamp-2 transition-colors">
                {nextPost.title}
              </span>
            </Link>
          ) : <div />}
        </nav>
      )}

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
