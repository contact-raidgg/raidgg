import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateArticleSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import PostContent from "@/components/PostContent";
import { getCodesForGame } from "@/lib/kv-codes";

// Fully static — rebuild to update codes

interface PageProps {
  params: Promise<{ game: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(
    (p) => p.category === "redeem-codes" && p.subcategory
  );
  return posts.map((p) => ({ game: p.subcategory!, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "redeem-codes" || post.subcategory !== game)
    return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/redeem-codes/${game}/${slug}`,
    ogImage: post.image,
    ogType: "article",
  });
}

export default async function RedeemCodePostPage({ params }: PageProps) {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "redeem-codes" || post.subcategory !== game)
    notFound();

  // Fetch live codes from KV (falls back to static codes)
  const liveCodes = await getCodesForGame(game);
  const postWithLiveCodes = {
    ...post,
    codes: liveCodes.length > 0 ? liveCodes : post.codes,
  };

  const category = getCategoryBySlug("redeem-codes");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  const related = getRelatedPosts(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: post.title,
            description: post.description,
            url: `${SITE_URL}/redeem-codes/${game}/${slug}`,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            author: post.author,
            image: post.image,
          })),
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(post.faqs)),
          }}
        />
      )}
      <PostContent
        post={postWithLiveCodes}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Redeem Codes", href: "/redeem-codes" },
          { label: sub?.name || game, href: `/redeem-codes/${game}` },
          { label: post.title },
        ]}
        relatedPosts={related}
      />
    </>
  );
}
