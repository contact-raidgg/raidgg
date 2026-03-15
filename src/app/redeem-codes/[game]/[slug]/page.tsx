import { redirect } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import type { Metadata } from "next";

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
  const { game } = await params;
  // Canonical points to the game page — this page redirects there
  return {
    alternates: {
      canonical: `/redeem-codes/${game}`,
    },
  };
}

export default async function RedeemCodePostPage({ params }: PageProps) {
  const { game, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.category !== "redeem-codes" || post.subcategory !== game) {
    redirect(`/redeem-codes/${game}/`);
  }

  // Redirect to the canonical game page which now shows full content
  redirect(`/redeem-codes/${game}/`);
}
