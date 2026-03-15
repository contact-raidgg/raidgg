"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

interface SubLink {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  subs?: SubLink[];
}

const navLinks: NavItem[] = [
  {
    label: "Redeem Codes",
    href: "/redeem-codes/",
    subs: [
      { label: "Free Fire", href: "/redeem-codes/free-fire/" },
      { label: "BGMI", href: "/redeem-codes/bgmi/" },
      { label: "COD Mobile", href: "/redeem-codes/cod-mobile/" },
      { label: "Genshin Impact", href: "/redeem-codes/genshin-impact/" },
      { label: "Roblox", href: "/redeem-codes/roblox/" },
      { label: "Honkai Star Rail", href: "/redeem-codes/honkai-star-rail/" },
      { label: "PUBG Mobile", href: "/redeem-codes/pubg-mobile/" },
      { label: "Wuthering Waves", href: "/redeem-codes/wuthering-waves/" },
      { label: "ZZZ", href: "/redeem-codes/zenless-zone-zero/" },
      { label: "Mobile Legends", href: "/redeem-codes/mobile-legends/" },
      { label: "Honkai Impact 3rd", href: "/redeem-codes/honkai-impact/" },
    ],
  },
  {
    label: "Game Guides",
    href: "/game-guides/",
    subs: [
      { label: "BGMI Guides", href: "/game-guides/bgmi/" },
      { label: "Free Fire Guides", href: "/game-guides/free-fire/" },
      { label: "Valorant Guides", href: "/game-guides/valorant/" },
      { label: "COD Mobile Guides", href: "/game-guides/cod-mobile/" },
      { label: "Genshin Impact Guides", href: "/game-guides/genshin-impact/" },
      { label: "Fortnite Guides", href: "/game-guides/fortnite/" },
    ],
  },
  {
    label: "Pro Settings",
    href: "/pro-settings/",
    subs: [
      { label: "BGMI Pro Settings", href: "/pro-settings/bgmi/" },
      { label: "Valorant Pro Settings", href: "/pro-settings/valorant/" },
      { label: "Free Fire Pro Settings", href: "/pro-settings/free-fire/" },
      { label: "Fortnite Pro Settings", href: "/pro-settings/fortnite/" },
      { label: "CS2 Pro Settings", href: "/pro-settings/cs2/" },
      { label: "Apex Legends Settings", href: "/pro-settings/apex-legends/" },
      { label: "COD Mobile Settings", href: "/pro-settings/cod-mobile/" },
    ],
  },
  {
    label: "Gaming Gear",
    href: "/gaming-gear/",
  },
  {
    label: "PC Builds",
    href: "/pc-builds/",
  },
  {
    label: "Phones",
    href: "/gaming-phones/",
  },
  {
    label: "Esports",
    href: "/esports-news/",
    subs: [
      { label: "BGMI Esports", href: "/esports-news/bgmi/" },
      { label: "Valorant Esports", href: "/esports-news/valorant/" },
      { label: "Free Fire Esports", href: "/esports-news/free-fire/" },
      { label: "Fortnite Esports", href: "/esports-news/fortnite/" },
      { label: "Global Esports", href: "/esports-news/global/" },
    ],
  },
  {
    label: "Deals",
    href: "/deals/",
  },
];

export default function Header({ searchSlot }: { searchSlot?: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-base)]/95 backdrop-blur border-b border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 font-heading text-2xl font-bold tracking-wider">
          <span className="text-[var(--color-primary)]">RAID</span>
          <span className="gradient-text">GG</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="relative flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
                {item.subs && (
                  <svg className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" viewBox="0 0 12 12" fill="none">
                    <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 w-0 bg-[var(--color-primary)] transition-all group-hover:w-[calc(100%-24px)]" />
              </Link>

              {/* Dropdown */}
              {item.subs && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 pt-1 z-50">
                  <div className="w-56 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xl shadow-black/30 py-2">
                    {/* "View All" link */}
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-xs font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors uppercase tracking-wider"
                    >
                      View All {item.label} &rarr;
                    </Link>
                    <div className="my-1 border-t border-[var(--color-border)]" />
                    {item.subs.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-surface-alt)] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search + Theme + Mobile menu */}
        <div className="flex items-center gap-2">
          {searchSlot}
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--color-text)] transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] max-h-[80vh] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
            {navLinks.map((item) => (
              <div key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-2.5 font-medium text-sm"
                  >
                    {item.label}
                  </Link>
                  {item.subs && (
                    <button
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === item.href ? null : item.href
                        )
                      }
                      className="p-2 text-[var(--color-text-dim)] hover:text-[var(--color-primary)]"
                      aria-label={`Expand ${item.label} subcategories`}
                    >
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          mobileExpanded === item.href ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 5l3 3 3-3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Mobile subcategories */}
                {item.subs && mobileExpanded === item.href && (
                  <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2 border-[var(--color-primary)]/20 ml-2">
                    {item.subs.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors py-1.5"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
