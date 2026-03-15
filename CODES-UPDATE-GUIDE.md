# How to Update Redeem Codes on RaidGG

## Quick Overview

| Game | Auto-Updated? | Manual Update Needed? |
|------|--------------|----------------------|
| Genshin Impact | Yes (Fandom wiki API) | No — live codes fetched automatically |
| Honkai Star Rail | Yes (Fandom wiki API) | No — live codes fetched automatically |
| Zenless Zone Zero | Yes (Fandom wiki API) | No — live codes fetched automatically |
| Wuthering Waves | Yes (Fandom wiki API) | No — live codes fetched automatically |
| Honkai Impact 3rd | Yes (Fandom wiki API) | No — live codes fetched automatically |
| **Free Fire** | No | **Yes — update manually** |
| **BGMI** | No | **Yes — update manually** |
| **COD Mobile** | No | **Yes — update manually** |
| **Roblox** | No | **Yes — update manually** |
| **PUBG Mobile** | No | **Yes — update manually** |
| **Mobile Legends** | No | **Yes — update manually** |

## How Auto-Update Works (HoYoverse Games)

The 5 HoYoverse games fetch REAL codes from Fandom wikis when a user visits the page.
- File: `src/lib/hoyoverse-client.ts`
- The component `src/components/LiveRedeemCodes.tsx` shows a "Live" badge when codes are fetched
- Fallback codes (in `src/lib/posts/redeem-codes.ts`) are shown to Google and while loading
- **You don't need to do anything for these 5 games** — codes update automatically

## How to Manually Update Codes (6 Non-HoYoverse Games)

### Step 1: Find Real Codes

| Game | Where to Find Codes |
|------|-------------------|
| Free Fire | Instagram @freefireofficial, Twitter @FreeFire, YouTube livestreams, reward.ff.garena.com |
| BGMI | Instagram @battlegroundsmobilein_official, Twitter @ABORATORY_BGMI, esports streams on Loco/YouTube |
| COD Mobile | Twitter @PlayCODMobile, Reddit r/CallOfDutyMobile, in-game events |
| Roblox | roblox.com/promocodes (official), Twitter @Roblox, event pages |
| PUBG Mobile | Twitter @PUBGMOBILE, Facebook Pubg Mobile, midasbuy.com |
| Mobile Legends | Instagram @mobilelegendsgame, Twitter @MobileLegendsOL, in-game events |

### Step 2: Edit the File

Open: `src/lib/posts/redeem-codes.ts`

Find the game's `codes:` array (search for the game name). It looks like:

```ts
codes: [
  { code: "FFIC33NTEUKA", reward: "100 Diamonds + Dragon Bundle", status: "new" },
  { code: "ZZATXB24QES8", reward: "AK47 Skin + Loot Crate", status: "active" },
],
```

### Step 3: Update Codes

- Change `code:` to the real code string (case-sensitive, copy exactly)
- Change `reward:` to what the code gives
- Set `status:` to one of:
  - `"new"` — just released (shows yellow badge)
  - `"active"` — confirmed working (shows green badge)
  - `"expired"` — no longer works (shows red badge)

### Step 4: Deploy

```bash
npx wrangler deploy
```

## Update Schedule (Recommended)

| Day | Task |
|-----|------|
| Daily | Check Free Fire and BGMI social media for new codes |
| Monday/Thursday | Full code check for all 6 manual games |
| During livestreams | Update HoYoverse fallback codes within 1 hour (for Google SEO) |
| Weekly | Mark expired codes as `status: "expired"` and remove very old ones |

## Tips

- **Never invent codes.** Only add codes you've verified from official sources.
- **Mark expired codes** — don't just delete them. Users trust pages that show expired codes honestly.
- **Update the `updated:` date** on each post when you change codes (e.g., `updated: "2026-03-16"`).
- **The `date:` field** is the original publish date — never change it. Only change `updated:`.
