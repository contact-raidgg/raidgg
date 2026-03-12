import { getPostsByCategory } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import FilterBar from "@/components/FilterBar";
import LazyAd from "@/components/LazyAd";

export const metadata = buildMetadata({
  title: "PC Builds",
  description:
    "Gaming PC build guides for every budget — from $500 budget rigs to no-compromise machines.",
  path: "/pc-builds/",
});

const budgetFilters = [
  { label: "All Builds", value: "all" },
  { label: "Budget", value: "budget" },
  { label: "Mid-Range", value: "mid-range" },
  { label: "High-End", value: "high-end" },
  { label: "Streaming Setup", value: "streaming-setup" },
];

export default function PCBuildsPage() {
  const posts = getPostsByCategory("pc-builds");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "PC Builds" }]} />

      <div className="mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-[var(--color-text)]">
          PC Builds
        </h1>
        <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">
          Gaming PC build guides for every budget &mdash; from $500 budget rigs to no-compromise machines.
        </p>
      </div>

      <FilterBar posts={posts} filters={budgetFilters} />

      <LazyAd slot="pc-builds-bottom" format="leaderboard" />
    </div>
  );
}
