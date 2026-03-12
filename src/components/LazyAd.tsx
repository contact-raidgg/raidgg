"use client";

import { useEffect, useRef, useState } from "react";

interface LazyAdProps {
  slot: string;
  format: "banner" | "rectangle" | "leaderboard";
}

const sizeMap: Record<LazyAdProps["format"], string> = {
  banner: "h-[90px] max-w-[728px]",
  rectangle: "h-[250px] max-w-[300px]",
  leaderboard: "h-[90px] max-w-[970px]",
};

export default function LazyAd({ slot, format }: LazyAdProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-ad-slot={slot}
      className={`mx-auto w-full ${sizeMap[format]} flex items-center justify-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-surface-alt)]/50 text-xs text-[var(--color-text-dim)]`}
    >
      {visible ? (
        // TODO: Replace with actual AdSense script tag
        // <ins className="adsbygoogle" data-ad-client="ca-pub-XXXX" data-ad-slot={slot} ... />
        <span>Advertisement</span>
      ) : null}
    </div>
  );
}
