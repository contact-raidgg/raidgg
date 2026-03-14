import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts, getAdjacentPosts } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateArticleSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import PostContent from "@/components/PostContent";

interface PageProps {
  params: Promise<{ game: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(
    (p) => p.category === "game-guides" && p.subcategory
  );
  return posts.map((p) => ({ game: p.subcategory!, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "game-guides" || post.subcategory !== game)
    return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/game-guides/${game}/${slug}`,
    ogImage: post.image,
    ogType: "article",
  });
}

export default async function GameGuidePostPage({ params }: PageProps) {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "game-guides" || post.subcategory !== game)
    notFound();

  const category = getCategoryBySlug("game-guides");
  const sub = category?.subcategories?.find((s) => s.slug === game);
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
            url: `${SITE_URL}/game-guides/${game}/${slug}`,
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
          { label: "Game Guides", href: "/game-guides" },
          { label: sub?.name || game, href: `/game-guides/${game}` },
          { label: post.title },
        ]}
        relatedPosts={related}
        prevPost={prev}
        nextPost={next}
      />
    </>
  );
}
