import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gaming Gear — Reviews & Buying Guides",
  description:
    "Reviews and buying guides for gaming mice, keyboards, headsets, monitors, chairs, and controllers. Find the best gear for your setup.",
  path: "/gaming-gear",
});

export default function GamingGearLayout({ children }: { children: React.ReactNode }) {
  return children;
}
