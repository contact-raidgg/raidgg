import { getPostsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "Gaming Phones",
  description:
    "Best gaming phones at every price point, benchmarked and tested for mobile gaming performance.",
  path: "/gaming-phones/",
});

const priceFilters = [
  { label: "All Phones", value: "all" },
  { label: "Under 15K", value: "under-15k" },
  { label: "Under 25K", value: "under-25k" },
  { label: "Under 40K", value: "under-40k" },
  { label: "Flagship", value: "flagship" },
];

export default function GamingPhonesPage() {
  const posts = getPostsByCategory("gaming-phones");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gaming Phones" }]} />

      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          Gaming Phones
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          Best gaming phones at every price point, benchmarked and tested for mobile gaming performance.
        </p>
      </div>

      <FilterBar posts={posts} filters={priceFilters} />

      <LazyAd slot="phones-bottom" format="leaderboard" />
    </div>
  );
}
