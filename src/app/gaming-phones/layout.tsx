import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gaming Phones — Best Phones for Mobile Gaming",
  description:
    "Best gaming phones at every price point, benchmarked and tested for BGMI, Free Fire, Genshin Impact, and more.",
  path: "/gaming-phones/",
});

export default function GamingPhonesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
