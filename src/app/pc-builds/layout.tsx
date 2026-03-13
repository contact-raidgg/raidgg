import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "PC Builds — Gaming PC Build Guides for Every Budget",
  description:
    "Gaming PC build guides from budget to high-end. Complete part lists, benchmarks, and step-by-step assembly tips for 2026.",
  path: "/pc-builds/",
});

export default function PCBuildsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
