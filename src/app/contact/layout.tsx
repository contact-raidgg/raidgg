import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the RaidGG team. Send us tips, feedback, partnership inquiries, or questions.",
  path: "/contact/",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
