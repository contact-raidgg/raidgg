import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { getCategoryBySlug } from "@/lib/categories";
import { buildMetadata, generateArticleSchema, generateFAQSchema, SITE_URL } from "@/lib/seo";
import PostContent from "@/components/PostContent";

interface PageProps {
  params: Promise<{ game: string; slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts().filter(
    (p) => p.category === "pro-settings" && p.subcategory
  );
  return posts.map((p) => ({ game: p.subcategory!, slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "pro-settings" || post.subcategory !== game)
    return {};

  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    path: `/pro-settings/${game}/${slug}`,
    ogImage: post.image,
    ogType: "article",
  });
}

export default async function ProSettingsPostPage({ params }: PageProps) {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "pro-settings" || post.subcategory !== game)
    notFound();

  const category = getCategoryBySlug("pro-settings");
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
            url: `${SITE_URL}/pro-settings/${game}/${slug}`,
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
          { label: "Pro Settings", href: "/pro-settings" },
          { label: sub?.name || game, href: `/pro-settings/${game}` },
          { label: post.title },
        ]}
        relatedPosts={related}
      />
    </>
  );
}
