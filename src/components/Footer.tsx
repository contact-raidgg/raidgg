import Link from "next/link";

const footerColumns = [
  {
    title: "Redeem Codes",
    links: [
      { label: "Free Fire Codes", href: "/redeem-codes/free-fire/" },
      { label: "BGMI Codes", href: "/redeem-codes/bgmi/" },
      { label: "Genshin Impact Codes", href: "/redeem-codes/genshin-impact/" },
      { label: "COD Mobile Codes", href: "/redeem-codes/cod-mobile/" },
      { label: "Roblox Codes", href: "/redeem-codes/roblox/" },
      { label: "Honkai Star Rail Codes", href: "/redeem-codes/honkai-star-rail/" },
      { label: "PUBG Mobile Codes", href: "/redeem-codes/pubg-mobile/" },
      { label: "Wuthering Waves Codes", href: "/redeem-codes/wuthering-waves/" },
      { label: "ZZZ Codes", href: "/redeem-codes/zenless-zone-zero/" },
      { label: "Mobile Legends Codes", href: "/redeem-codes/mobile-legends/" },
      { label: "Honkai Impact 3rd Codes", href: "/redeem-codes/honkai-impact/" },
    ],
  },
  {
    title: "Game Guides",
    links: [
      { label: "BGMI Guides", href: "/game-guides/bgmi/" },
      { label: "Free Fire Guides", href: "/game-guides/free-fire/" },
      { label: "Valorant Guides", href: "/game-guides/valorant/" },
      { label: "COD Mobile Guides", href: "/game-guides/cod-mobile/" },
      { label: "Genshin Impact Guides", href: "/game-guides/genshin-impact/" },
      { label: "Fortnite Guides", href: "/game-guides/fortnite/" },
    ],
  },
  {
    title: "Pro Settings",
    links: [
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
    title: "Esports",
    links: [
      { label: "BGMI Esports", href: "/esports-news/bgmi/" },
      { label: "Valorant Esports", href: "/esports-news/valorant/" },
      { label: "Free Fire Esports", href: "/esports-news/free-fire/" },
      { label: "Fortnite Esports", href: "/esports-news/fortnite/" },
      { label: "Global Esports", href: "/esports-news/global/" },
    ],
  },
  {
    title: "Hardware & Deals",
    links: [
      { label: "Gaming Gear", href: "/gaming-gear/" },
      { label: "PC Builds", href: "/pc-builds/" },
      { label: "Gaming Phones", href: "/gaming-phones/" },
      { label: "Best Deals", href: "/deals/" },
    ],
  },
];

const legalLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Disclaimer", href: "/disclaimer/" },
  { label: "Terms of Service", href: "/terms/" },
];

const socialLinks = [
  {
    label: "Twitter/X",
    href: "https://x.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
      </svg>
    ),
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-base)]">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top section: Brand + Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-8 border-b border-[var(--color-border)]">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-0.5 font-heading text-2xl font-bold tracking-wider"
            >
              <span className="text-[var(--color-primary)]">RAID</span>
              <span className="gradient-text">GG</span>
            </Link>
            <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">
              Your ultimate source for gaming redeem codes, pro player settings,
              game guides, esports coverage, and the best gaming gear reviews.
              Updated daily for 50+ games.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-[var(--color-text)] mb-3 uppercase tracking-wider">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Popular games bar */}
        <div className="mt-10 pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs font-semibold text-[var(--color-text-dim)] uppercase tracking-wider mb-3">
            Popular Games
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Free Fire",
              "BGMI",
              "Valorant",
              "Genshin Impact",
              "COD Mobile",
              "Fortnite",
              "Roblox",
              "Honkai Star Rail",
              "PUBG Mobile",
              "CS2",
              "Apex Legends",
              "Mobile Legends",
              "Wuthering Waves",
              "Zenless Zone Zero",
            ].map((game) => (
              <span
                key={game}
                className="rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-text-dim)]"
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <nav className="flex flex-wrap items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-text-muted)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="text-xs text-[var(--color-text-dim)]">
              &copy; {new Date().getFullYear()} RaidGG. All rights reserved. Not
              affiliated with any game publisher.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
