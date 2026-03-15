import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostsBySubcategory, getRelatedPosts, getAdjacentPosts } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateArticleSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import PostContent from "@/components/PostContent";

interface PageProps {
  params: Promise<{ game: string }>;
}

export async function generateStaticParams() {
  const category = getCategoryBySlug("redeem-codes");
  if (!category?.subcategories) return [];
  return category.subcategories.map((sub) => ({ game: sub.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game } = await params;
  const category = getCategoryBySlug("redeem-codes");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) return {};

  const posts = getPostsBySubcategory("redeem-codes", game);
  const post = posts[0];
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/redeem-codes/${game}`,
    ogImage: post.image,
    ogType: "article",
  });
}

export default async function GameRedeemCodesPage({ params }: PageProps) {
  const { game } = await params;
  const category = getCategoryBySlug("redeem-codes");
  const sub = category?.subcategories?.find((s) => s.slug === game);
  if (!sub) notFound();

  const posts = getPostsBySubcategory("redeem-codes", game);
  const post = posts[0];
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema({
            title: post.title,
            description: post.description,
            url: `${SITE_URL}/redeem-codes/${game}`,
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
        post={post}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Redeem Codes", href: "/redeem-codes" },
          { label: sub.name },
        ]}
        relatedPosts={related}
        prevPost={prev}
        nextPost={next}
      />
    </>
  );
}
