import { getPostsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "Gaming Gear",
  description:
    "Reviews and buying guides for mice, keyboards, headsets, monitors, and more.",
  path: "/gaming-gear/",
});

const tags = [
  { label: "All", value: "all" },
  { label: "Mice", value: "mice" },
  { label: "Keyboards", value: "keyboards" },
  { label: "Headsets", value: "headsets" },
  { label: "Monitors", value: "monitors" },
  { label: "Chairs", value: "chairs" },
  { label: "Controllers", value: "controllers" },
];

export default function GamingGearPage() {
  const posts = getPostsByCategory("gaming-gear");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gaming Gear" }]} />

      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Gaming Gear
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          Reviews and buying guides for mice, keyboards, headsets, monitors, and more.
        </p>
      </div>

      <FilterBar posts={posts} filters={tags} />

      <LazyAd slot="gear-bottom" format="leaderboard" />
    </div>
  );
}
