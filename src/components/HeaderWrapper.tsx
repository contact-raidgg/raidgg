import { getAllPosts } from "@/lib/content";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";

export default function HeaderWrapper() {
  const posts = getAllPosts().map((p) => ({
    title: p.title,
    slug: p.slug,
    category: p.category,
    subcategory: p.subcategory,
    tags: p.tags,
  }));

  return <Header searchSlot={<HeaderSearch posts={posts} />} />;
}
