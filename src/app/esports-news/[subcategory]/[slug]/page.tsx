import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts, getAdjacentPosts } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateArticleSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import PostContent from "@/components/PostContent";

interface PageProps {
  params: Promise<{ subcategory: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(
    (p) => p.category === "esports-news" && p.subcategory
  );
  return posts.map((p) => ({ subcategory: p.subcategory!, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { subcategory, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "esports-news" || post.subcategory !== subcategory)
    return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/esports-news/${subcategory}/${slug}`,
    ogImage: post.image,
    ogType: "article",
  });
}

export default async function EsportsPostPage({ params }: PageProps) {
  const { subcategory, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "esports-news" || post.subcategory !== subcategory)
    notFound();

  const category = getCategoryBySlug("esports-news");
  const sub = category?.subcategories?.find((s) => s.slug === subcategory);
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
            url: `${SITE_URL}/esports-news/${subcategory}/${slug}`,
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
          { label: "Esports News", href: "/esports-news" },
          { label: sub?.name || subcategory, href: `/esports-news/${subcategory}` },
          { label: post.title },
        ]}
        relatedPosts={related}
        prevPost={prev}
        nextPost={next}
      />
    </>
  );
}
