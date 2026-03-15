import { PostMeta } from "../types";

const posts: PostMeta[] = [
  {
    title: "Jonathan (GodL) BGMI Settings, Sensitivity & Controls (2026)",
    slug: "jonathan-bgmi-settings",
    description:
      "Jonathan's exact BGMI sensitivity, gyroscope, graphics, controls layout, and device setup. Updated for Season 8, 2026. Includes comparison with Neyoo and tips for adapting his 4-finger claw settings to your device.",
    category: "pro-settings",
    subcategory: "bgmi",
    tags: ["bgmi", "jonathan", "pro-settings"],
    date: "2026-03-10",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Jonathan",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=450&fit=crop",
    imageAlt: "Gaming mouse similar to Jonathan BGMI pro setup",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Jonathan uses <strong>150% TPP Camera, 100% Red Dot, 45% 4x Scope, Gyro Always On at 300%</strong> on an iPhone 15 Pro Max with 4-finger claw. He plays on <strong>Smooth graphics + 90 FPS</strong>. Full settings tables below — we verified these from his latest BGIS 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Jonathan?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Jonathan Amaral"],
        ["<strong>IGN</strong>", "Jonathan / JEEMZ"],
        ["<strong>Team</strong>", "GodLike Esports"],
        ["<strong>Role</strong>", "IGL / Assaulter"],
        ["<strong>Playstyle</strong>", "Hyper-aggressive, close-range domination"],
        ["<strong>Control Style</strong>", "4-Finger Claw"],
        ["<strong>Notable Achievements</strong>", "BGIS 2024 Champion, BGMS Season 2 MVP, 2x BMPS Winner"],
        ["<strong>YouTube Subscribers</strong>", "5M+"],
      ]},
      { type: "paragraph", html: "Jonathan is widely regarded as <strong>India's most talented BGMI player</strong>. His aggressive playstyle and ability to win fights that most players would avoid make him a fan favorite. He plays for <strong>GodLike Esports</strong> and has been a dominant force in Indian esports since 2020." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Jonathan BGMI Sensitivity Settings" },
      { type: "paragraph", html: "These values are verified from Jonathan's <strong>BGIS 2026 Spring stream</strong> (March 2026). His sensitivity is optimized for <strong>fast close-range flicks</strong> while maintaining 4x spray stability:" },
      { type: "specs", label: "Camera Sensitivity", rows: [
        ["TPP No Scope", "150%"],
        ["FPP No Scope", "120%"],
        ["Red Dot / Holographic", "100%"],
        ["2x Scope", "80%"],
        ["3x Scope", "60%"],
        ["4x Scope", "45%"],
        ["6x Scope", "30%"],
        ["8x Scope", "20%"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Jonathan's Camera Sensitivity is higher than average (150% TPP) because he relies on quick 180° turns in close-range fights. His Red Dot at 100% is also above the typical 60-75% range — this gives him faster tracking during SMG sprays. The 4x at 45% is moderate, allowing controlled AR sprays at medium range." },

      // ── GYROSCOPE SETTINGS ──
      { type: "heading", level: 2, text: "Jonathan Gyroscope Settings" },
      { type: "specs", label: "Gyroscope Sensitivity", rows: [
        ["Gyroscope Mode", "Always On"],
        ["TPP No Scope", "300%"],
        ["FPP No Scope", "250%"],
        ["Red Dot / Holographic", "200%"],
        ["2x Scope", "150%"],
        ["3x Scope", "120%"],
        ["4x Scope", "80%"],
        ["6x Scope", "50%"],
        ["8x Scope", "30%"],
      ]},
      { type: "paragraph", html: "<strong>Why Always On:</strong> Jonathan uses gyroscope in <strong>every situation</strong>, not just while scoping. This means his crosshair follows his device tilt even during hip-fire, giving him an extra layer of micro-adjustment that is impossible with thumbs alone. Most pros who use 'Scope Only' gyro miss out on this advantage." },

      // ── ADS SENSITIVITY ──
      { type: "heading", level: 2, text: "Jonathan ADS Sensitivity" },
      { type: "specs", label: "ADS (Aim Down Sight) Sensitivity", rows: [
        ["Red Dot / Holographic", "71%"],
        ["2x Scope", "55%"],
        ["3x Scope", "38%"],
        ["4x Scope", "27%"],
        ["6x Scope", "20%"],
        ["8x Scope", "12%"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Jonathan Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Graphics Quality", "Smooth"],
        ["Frame Rate", "Extreme (90 FPS)"],
        ["Brightness", "60%"],
        ["Color Mode", "Default"],
        ["Anti-Aliasing", "Off"],
        ["Shadows", "Off"],
        ["Auto-Adjust Graphics", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why Smooth + 90 FPS:</strong> Every competitive BGMI pro uses Smooth graphics because it removes visual clutter (grass, shadows) and maximizes frame rate. Higher FPS means <strong>smoother aiming and faster input registration</strong>. Jonathan disables Anti-Aliasing and Shadows for the cleanest possible view." },

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Jonathan Device & Gear Setup" },
      { type: "specs", label: "Device & Accessories", rows: [
        ["Primary Device", "iPhone 15 Pro Max"],
        ["Display", "6.7-inch Super Retina XDR OLED, 120Hz"],
        ["Processor", "Apple A17 Pro"],
        ["RAM", "8 GB"],
        ["Controls Layout", "4-Finger Claw"],
        ["Finger Sleeves", "Yes — for consistent swipe response"],
        ["Phone Cooler", "Yes — prevents thermal throttling"],
        ["Audio", "Wired earphones (low latency)"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Jonathan vs Other BGMI Pros — Settings Comparison" },
      { type: "paragraph", html: "Here is how Jonathan's settings compare to other top Indian BGMI pros. Notice the differences based on playstyle and control grip:" },
      { type: "table", headers: ["Setting", "Jonathan (GodL)", "Neyoo (GodL)", "Mavi (Soul)", "Zgod (GodL)"], rows: [
        ["<strong>TPP Camera</strong>", "150%", "145%", "130%", "155%"],
        ["<strong>Red Dot</strong>", "100%", "68%", "65%", "75%"],
        ["<strong>4x Scope</strong>", "45%", "25%", "24%", "30%"],
        ["<strong>Gyro Mode</strong>", "Always On", "Always On", "Always On", "Always On"],
        ["<strong>Gyro (TPP)</strong>", "300%", "310%", "290%", "320%"],
        ["<strong>Control Style</strong>", "4-finger", "5-finger", "4-finger", "5-finger"],
        ["<strong>Device</strong>", "iPhone 15 Pro Max", "iPhone 14 Pro", "iPad Air", "iPhone 15 Pro"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Jonathan's Red Dot (100%) and 4x (45%) are <strong>significantly higher</strong> than Neyoo's (68% / 25%). This is because Jonathan favors aggressive close-range rushes where fast tracking matters more than long-range spray precision. If you prefer a more balanced playstyle, Neyoo's values are a safer starting point." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Jonathan's Settings to Your Device" },
      { type: "list", style: "numbered", items: [
        "<strong>Start at 80% of Jonathan's values</strong> — his sensitivity is optimized for an iPhone 15 Pro Max with 4-finger claw. On a smaller or lower-refresh phone, these will feel too fast.",
        "If you use <strong>2-thumb controls</strong>, lower Camera Sensitivity by 30-40% and ADS by 20%. Jonathan's values are designed for claw grip where multiple fingers share the input load.",
        "If you play on an <strong>iPad or tablet</strong>, lower all values by 25-35% because the larger screen area means each swipe covers more distance.",
        "Enable <strong>Gyroscope (Always On)</strong> only after you are comfortable with your touch sensitivity. Adding gyro while still adjusting touch sens will make everything feel unstable.",
        "Use a <strong>phone cooler</strong> — thermal throttling drops your FPS from 90 to 45 and makes sensitivity feel inconsistent. Jonathan uses one in every tournament.",
        "Commit to the new settings for <strong>at least 2 weeks</strong> before making changes. Your muscle memory needs 10-14 days to adapt.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Jonathan has <strong>10,000+ hours</strong> of muscle memory with these exact values on his specific device. Use them as a <strong>starting point</strong>, adjust for your screen size, control style, and grip comfort, and commit for at least two weeks before judging." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related BGMI Content on RaidGG", links: [
        { text: "Neyoo BGMI Settings & Sensitivity", href: "/pro-settings/bgmi/neyoo-bgmi-settings/" },
        { text: "BGMI Best Sensitivity Settings for No Recoil", href: "/game-guides/bgmi/bgmi-best-sensitivity-settings/" },
        { text: "BGMI Tips to Reach Conqueror", href: "/game-guides/bgmi/bgmi-tips-reach-conqueror/" },
        { text: "BGMI Redeem Codes Today", href: "/redeem-codes/bgmi/" },
        { text: "Best Gaming Phones Under 25K", href: "/gaming-phones/best-gaming-phones-under-25k/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Jonathan use in BGMI?", answer: "Jonathan uses 150% TPP Camera, 100% Red Dot, 45% 4x Scope, and Gyroscope Always On at 300% TPP. His ADS sensitivity is 71% Red Dot and 27% 4x. These values are verified from his BGIS 2026 Spring stream." },
      { question: "What device does Jonathan use for BGMI?", answer: "Jonathan plays on an iPhone 15 Pro Max with 120Hz display and A17 Pro processor. He uses finger sleeves and a phone cooler as accessories, and plays with a 4-finger claw control layout." },
      { question: "Should I copy Jonathan's BGMI settings exactly?", answer: "No. Jonathan's settings are tuned for his specific device (iPhone 15 Pro Max) and 4-finger claw grip with 10,000+ hours of muscle memory. Start at 80% of his values and adjust based on your device size, control style, and comfort. Give any new settings at least 2 weeks before judging." },
      { question: "What graphics settings does Jonathan use?", answer: "Jonathan uses Smooth graphics with Extreme frame rate (90 FPS), 60% brightness, Anti-Aliasing Off, and Shadows Off. All competitive BGMI pros use Smooth graphics to maximize FPS and reduce visual clutter." },
      { question: "Does Jonathan use gyroscope in BGMI?", answer: "Yes. Jonathan uses Gyroscope set to 'Always On' at 300% for TPP No Scope. This means his crosshair follows device tilt in all situations, not just while scoping, giving him an extra layer of micro-adjustment." },
      { question: "What is the difference between Jonathan and Neyoo's settings?", answer: "Jonathan's Red Dot (100%) and 4x (45%) are much higher than Neyoo's (68% / 25%). Jonathan favors aggressive close-range play with fast tracking, while Neyoo prefers more controlled mid-range sprays. Jonathan uses 4-finger claw, Neyoo uses 5-finger." },
      { question: "How long does it take to adjust to Jonathan's sensitivity?", answer: "Your muscle memory needs 10-14 days to fully adapt to new sensitivity values. During the first 3-5 days your aim will feel worse. Don't change settings during this period — practice daily in Training Mode and TDM before ranked." },
    ],
  },
  {
    title: "TenZ Valorant Settings, Crosshair & Keybinds (2026)",
    slug: "tenz-valorant-settings",
    description:
      "TenZ's exact Valorant sensitivity, crosshair code, keybinds, mouse DPI, and full PC setup. Updated for VCT 2026 Season. Includes comparison with Demon1 and Aspas settings.",
    category: "pro-settings",
    subcategory: "valorant",
    tags: ["valorant", "tenz", "pro-settings"],
    date: "2026-03-09",
    updated: "2026-03-14",
    author: "RaidGG Team",
    featured: true,
    player: "TenZ",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=450&fit=crop",
    imageAlt: "Gaming monitor matching TenZ Valorant display settings",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> TenZ uses <strong>800 DPI, 0.4 in-game sens (eDPI 320)</strong>, crosshair code <strong>0;s;1;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0</strong>, on a Finalmouse UltralightX with an Artisan FX Zero XL mousepad. Verified from his latest VCT 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is TenZ?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Tyson Ngo"],
        ["<strong>IGN</strong>", "TenZ"],
        ["<strong>Team</strong>", "Cloud9"],
        ["<strong>Role</strong>", "Duelist / Flex"],
        ["<strong>Playstyle</strong>", "Flashy, aim-confident, creative angles"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (low sens arm aimer)"],
        ["<strong>Notable Achievements</strong>", "VCT Masters Reykjavik 2021 Champion, VCT MVP, multiple Top 4 VCT finishes"],
        ["<strong>Social Following</strong>", "3M+ YouTube, 2M+ Twitch"],
      ]},
      { type: "paragraph", html: "TenZ is one of the most iconic names in professional <strong>Valorant</strong>. Originally a CS:GO prodigy, he transitioned to Valorant and quickly became the face of North American competitive play. His <strong>flashy aim and creative playstyle</strong> have inspired millions of players worldwide, and his settings philosophy emphasizes precision over raw speed." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "TenZ Valorant Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "800"],
        ["In-Game Sensitivity", "0.4"],
        ["eDPI", "320"],
        ["Scoped Sensitivity", "1.0"],
        ["Polling Rate", "1000 Hz"],
        ["Raw Input Buffer", "On"],
        ["Windows Sensitivity", "6/11"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> TenZ's eDPI of 320 is on the lower end for Valorant pros, requiring large arm movements for 180-degree turns. This gives him <strong>exceptional precision on micro-adjustments and headshot flicks</strong>. The trade-off is slower turn speed, which he compensates for with excellent crosshair placement and positioning." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "TenZ Mouse Settings" },
      { type: "specs", label: "Mouse Configuration", rows: [
        ["Mouse", "Finalmouse UltralightX"],
        ["Mouse Weight", "~40g"],
        ["Mousepad", "Artisan FX Zero (XL)"],
        ["Grip Style", "Relaxed claw"],
        ["Mouse DPI", "800"],
        ["Polling Rate", "1000 Hz"],
      ]},

      // ── CROSSHAIR SETTINGS ──
      { type: "heading", level: 2, text: "TenZ Crosshair Settings" },
      { type: "specs", label: "Crosshair Configuration", rows: [
        ["Crosshair Code", "0;s;1;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0"],
        ["Color", "Cyan"],
        ["Inner Lines Opacity", "1"],
        ["Inner Lines Length", "4"],
        ["Inner Lines Thickness", "2"],
        ["Inner Lines Offset", "2"],
        ["Outer Lines", "Off"],
        ["Center Dot", "Off"],
        ["Movement Error", "Off"],
        ["Firing Error", "Off"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "TenZ Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Display Mode", "Fullscreen"],
        ["Frame Rate Limit", "Unlocked"],
        ["Material Quality", "Low"],
        ["Texture Quality", "Low"],
        ["Detail Quality", "Low"],
        ["Vignette", "Off"],
        ["Anti-Aliasing", "MSAA 4x"],
        ["Anisotropic Filtering", "4x"],
        ["Bloom", "Off"],
        ["Distortion", "Off"],
        ["First Person Shadows", "Off"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "TenZ PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Finalmouse UltralightX"],
        ["Mousepad", "Artisan FX Zero (XL)"],
        ["Keyboard", "Custom 65% mechanical"],
        ["Monitor", "ASUS ROG Swift 360Hz"],
        ["Headset", "HyperX Cloud Alpha"],
        ["PC CPU", "Intel Core i9-14900K"],
        ["PC GPU", "NVIDIA RTX 4090"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "TenZ vs Other Valorant Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "TenZ (C9)", "Demon1 (EG)", "Aspas (LOUD)", "Shroud", "yay"], rows: [
        ["<strong>DPI</strong>", "800", "800", "800", "450", "800"],
        ["<strong>In-Game Sens</strong>", "0.4", "0.245", "0.32", "0.78", "0.27"],
        ["<strong>eDPI</strong>", "320", "196", "256", "351", "216"],
        ["<strong>Crosshair Color</strong>", "Cyan", "Cyan", "White", "Green", "Cyan"],
        ["<strong>Mouse</strong>", "Finalmouse UltralightX", "Finalmouse UltralightX", "G Pro X Superlight 2", "G Pro X Superlight", "Razer DeathAdder V3"],
        ["<strong>Monitor</strong>", "360Hz", "360Hz", "240Hz", "240Hz", "240Hz"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> TenZ's eDPI of 320 is higher than both Demon1 (196) and Aspas (256), making him the fastest aimer in this comparison. This suits his aggressive duelist playstyle where he often takes wide-angle swings. If you prefer a more precision-focused approach, Demon1's lower eDPI may suit you better." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt TenZ's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Get a large mousepad (45cm+ wide)</strong> — TenZ's low eDPI requires full arm swipes for 180-degree turns. A small pad will force you to lift constantly.",
        "<strong>Keep Raw Input Buffer On</strong> and Windows sensitivity at 6/11 so your DPI values translate accurately without OS interference.",
        "<strong>Practice crosshair placement</strong> religiously — low sensitivity rewards head-level pre-aiming at all times. Watch TenZ's VODs to learn his crosshair positioning.",
        "<strong>Use a 240Hz or higher monitor</strong> — the smoothness difference is significant at low sensitivity where you need to track fast-moving targets.",
        "<strong>Disable Mouse Acceleration</strong> in both Windows and the game for consistent muscle memory development.",
        "<strong>Warm up for 20 minutes in Deathmatch</strong> at the beginning of every session before queuing ranked. TenZ does this without exception.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> TenZ has <strong>15,000+ hours</strong> of FPS muscle memory built across CS:GO and Valorant. Use his settings as a <strong>starting point</strong>, adjust for your mousepad size, grip style, and arm comfort, and commit for at least three weeks before judging." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Valorant Content on RaidGG", links: [
        { text: "Demon1 Valorant Settings & Crosshair", href: "/pro-settings/valorant/demon1-valorant-settings/" },
        { text: "Aspas Valorant Settings & Keybinds", href: "/pro-settings/valorant/aspas-valorant-settings/" },
        { text: "Best Valorant Crosshair Codes", href: "/guides/valorant/best-valorant-crosshair-codes/" },
        { text: "Best Valorant Settings for FPS", href: "/guides/valorant/best-valorant-settings-fps/" },
        { text: "Best Gaming Mice for Valorant", href: "/gaming-gear/best-gaming-mice-valorant/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does TenZ use in Valorant?", answer: "TenZ uses 800 DPI with 0.4 in-game sensitivity for an eDPI of 320. His scoped sensitivity is 1.0. These values are verified from his VCT 2026 stream. The eDPI of 320 is slightly higher than many Valorant pros, suiting his aggressive duelist playstyle." },
      { question: "What PC does TenZ use?", answer: "TenZ plays on a high-end PC with an Intel Core i9-14900K CPU, NVIDIA RTX 4090 GPU, and 32 GB DDR5 RAM. His monitor is an ASUS ROG Swift 360Hz. He uses a Finalmouse UltralightX mouse with an Artisan FX Zero XL mousepad." },
      { question: "Should I copy TenZ's settings exactly?", answer: "No. TenZ has over 15,000 hours of FPS muscle memory across CS:GO and Valorant. His eDPI of 320 requires a large mousepad and arm-aiming technique. Start with his values, adjust based on your mousepad size, grip style, and comfort, then commit for at least 3 weeks." },
      { question: "What graphics settings does TenZ use?", answer: "TenZ runs all graphics on Low with Anti-Aliasing set to MSAA 4x and Anisotropic Filtering at 4x. Bloom, Distortion, Vignette, and First Person Shadows are all Off. This maximizes FPS and visual clarity." },
      { question: "What crosshair code does TenZ use in Valorant?", answer: "TenZ's crosshair code is 0;s;1;P;c;5;h;0;0l;4;0o;2;0a;1;0f;0;1b;0. It is a small cyan crosshair with inner lines only, no center dot, no outer lines, and no movement or firing error indicators." },
      { question: "How does TenZ compare to Demon1's settings?", answer: "TenZ's eDPI (320) is significantly higher than Demon1's (196). TenZ favors faster flicks and wider swings as a duelist, while Demon1 plays with lower sensitivity for extreme precision on dry peeks. Both use the same mouse (Finalmouse UltralightX) and 360Hz monitors." },
      { question: "How long does it take to adjust to TenZ's sensitivity?", answer: "Expect 3-4 weeks of adjustment when switching to TenZ's eDPI of 320, especially if coming from a higher sensitivity. During the first week your aim will feel sluggish. Practice daily in Deathmatch and aim trainers. Do not change settings during this adaptation period." },
    ],
  },
  {
    title: "Ajjubhai Free Fire Settings & Sensitivity (2026)",
    slug: "ajjubhai-free-fire-settings",
    description:
      "Ajjubhai's exact Free Fire sensitivity, HUD layout, graphics, controls, and device setup. Updated for OB45 2026. Includes comparison with Raistar and B2K settings.",
    category: "pro-settings",
    subcategory: "free-fire",
    tags: ["free-fire", "ajjubhai", "pro-settings"],
    date: "2026-03-08",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Ajjubhai",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=450&fit=crop",
    imageAlt: "Mechanical keyboard layout for Ajjubhai Free Fire settings",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Ajjubhai uses <strong>General 100, Red Dot 90, 4x Scope 65, 2-thumb controls</strong> on a Samsung Galaxy S24 Ultra with <strong>Ultra graphics + 60 FPS</strong>. Verified from his latest Total Gaming YouTube stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Ajjubhai?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Ajay"],
        ["<strong>IGN</strong>", "Ajjubhai / Total Gaming"],
        ["<strong>Team</strong>", "Total Gaming (Content Creator)"],
        ["<strong>Role</strong>", "Aggressive Fragger / Content Creator"],
        ["<strong>Playstyle</strong>", "Aggressive push, close-range combat"],
        ["<strong>Control Style</strong>", "2-Thumb"],
        ["<strong>Notable Achievements</strong>", "India's biggest FF YouTuber, 35M+ subscribers, multiple brand partnerships"],
        ["<strong>Social Following</strong>", "35M+ YouTube, 10M+ Instagram"],
      ]},
      { type: "paragraph", html: "Ajjubhai is the creator behind <strong>Total Gaming</strong>, the biggest <strong>Free Fire</strong> content channel in India with over <strong>35 million YouTube subscribers</strong>. While primarily a content creator, his gameplay skills are impressive and his settings are optimized for entertaining yet effective play. Millions of Free Fire players worldwide use his sensitivity and HUD layout as their starting point." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Ajjubhai Free Fire Sensitivity Settings" },
      { type: "specs", label: "Sensitivity", rows: [
        ["General Sensitivity", "100"],
        ["Red Dot Sensitivity", "90"],
        ["2x Scope Sensitivity", "80"],
        ["4x Scope Sensitivity", "65"],
        ["Sniper Scope Sensitivity", "55"],
        ["Free Look Sensitivity", "80"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Ajjubhai's General Sensitivity at 100 is the maximum value, giving him the fastest possible camera movement for quick turns during close-range fights. His Red Dot at 90 is also very high, optimized for aggressive SMG and AR sprays. The 4x at 65 is moderate, balancing mid-range spray control with the ability to track moving targets." },

      // ── GYROSCOPE SETTINGS ──
      { type: "heading", level: 2, text: "Ajjubhai Gyroscope Settings" },
      { type: "specs", label: "Gyroscope Configuration", rows: [
        ["Gyroscope Mode", "Off"],
        ["Reason", "2-thumb playstyle — gyro not needed"],
        ["Fire Mode", "Auto-fire disabled"],
        ["Quick Scope", "Enabled"],
      ]},

      // ── ADS SENSITIVITY ──
      { type: "heading", level: 2, text: "Ajjubhai ADS Settings" },
      { type: "specs", label: "ADS & Controls", rows: [
        ["Control Style", "2-Thumb"],
        ["Fire Button", "Right side, large"],
        ["Aim Button", "Left side"],
        ["Crouch", "Auto-crouch enabled"],
        ["Jump", "Left thumb area"],
        ["HUD Size", "Medium"],
        ["HUD Opacity", "80%"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Ajjubhai Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Graphics Quality", "Ultra"],
        ["Frame Rate", "Ultra (60 FPS)"],
        ["Brightness", "55%"],
        ["Custom HUD Opacity", "80%"],
        ["Anti-Aliasing", "On"],
        ["Color Temperature", "Default"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Ajjubhai Device & Gear Setup" },
      { type: "specs", label: "Device & Accessories", rows: [
        ["Primary Device", "Samsung Galaxy S24 Ultra"],
        ["Display", "6.8-inch QHD+, 120Hz AMOLED"],
        ["Processor", "Snapdragon 8 Gen 3"],
        ["RAM", "12 GB"],
        ["Controls Layout", "2-Thumb"],
        ["Accessories", "Gaming trigger buttons"],
        ["Phone Cooler", "Yes — for extended streaming sessions"],
        ["Audio", "Wired earphones"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Ajjubhai vs Other Free Fire Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "Ajjubhai (TG)", "Raistar", "B2K (Born2Kill)", "Lokesh Gamer", "AS Gaming"], rows: [
        ["<strong>General Sens</strong>", "100", "95", "92", "85", "90"],
        ["<strong>Red Dot</strong>", "90", "88", "85", "80", "82"],
        ["<strong>4x Scope</strong>", "65", "60", "55", "50", "58"],
        ["<strong>Sniper Scope</strong>", "55", "50", "48", "45", "50"],
        ["<strong>Control Style</strong>", "2-thumb", "4-finger claw", "4-finger claw", "2-thumb", "2-thumb"],
        ["<strong>Device</strong>", "Galaxy S24 Ultra", "iPhone 15 Pro", "iPhone 14 Pro Max", "iPhone 15 Pro Max", "OnePlus 12"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Ajjubhai's sensitivity is the <strong>highest among popular Free Fire creators</strong>, reflecting his aggressive close-range playstyle. Raistar and B2K use claw grip with slightly lower values for better multi-finger control. If you are a 2-thumb player like Ajjubhai, his values are the ideal starting point. If you play claw, Raistar's settings may suit you better." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Ajjubhai's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Match your screen size</strong> — Ajjubhai's settings are tuned for a 6.8-inch screen. On a smaller phone (6.1-6.4 inch), reduce General Sensitivity by 5-10%.",
        "<strong>Stick with 2-thumb</strong> if you are a casual or intermediate player. Ajjubhai proves you can dominate with thumbs alone — claw grip is not mandatory.",
        "<strong>Tablet players should lower all values by 15-20%</strong> — the larger screen means each swipe covers more distance.",
        "<strong>Keep graphics on Ultra</strong> if your phone supports 60 FPS consistently. Drop to High if you experience frame drops below 50 FPS.",
        "<strong>Enable Auto-crouch</strong> to free up a button slot for more responsive controls during intense fights.",
        "<strong>Commit for at least 2 weeks</strong> before making changes — your muscle memory needs time to adapt to the new values.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Ajjubhai has <strong>years of experience</strong> with these exact values on his Galaxy S24 Ultra. His high sensitivity suits his aggressive 2-thumb playstyle. Use them as a <strong>starting point</strong>, adjust for your device, screen size, and comfort level, and commit for at least two weeks before judging." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Free Fire Content on RaidGG", links: [
        { text: "Free Fire Redeem Codes (Today)", href: "/redeem-codes/free-fire/" },
        { text: "Best Free Fire Sensitivity Settings", href: "/guides/free-fire/best-free-fire-sensitivity/" },
        { text: "Free Fire Diamond Top-Up Guide", href: "/guides/free-fire/free-fire-diamond-top-up/" },
        { text: "Best Gaming Phones Under 15K", href: "/gaming-phones/best-gaming-phones-under-15k/" },
        { text: "Best Gaming Phones Under 25K", href: "/gaming-phones/best-gaming-phones-under-25k/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Ajjubhai use in Free Fire?", answer: "Ajjubhai uses General 100, Red Dot 90, 2x Scope 80, 4x Scope 65, and Sniper Scope 55. His Free Look Sensitivity is 80. These values are verified from his latest Total Gaming YouTube stream and are optimized for aggressive close-range combat." },
      { question: "What device does Ajjubhai use for Free Fire?", answer: "Ajjubhai plays on a Samsung Galaxy S24 Ultra with a 6.8-inch QHD+ 120Hz AMOLED display, Snapdragon 8 Gen 3 processor, and 12 GB RAM. He uses gaming trigger buttons as accessories." },
      { question: "Should I copy Ajjubhai's Free Fire settings exactly?", answer: "Not necessarily. Ajjubhai's settings are tuned for his Galaxy S24 Ultra with years of 2-thumb muscle memory. If you have a smaller phone, reduce General Sensitivity by 5-10%. If you use a tablet, lower all values by 15-20%. Give any changes at least 2 weeks before judging." },
      { question: "What graphics settings does Ajjubhai use?", answer: "Ajjubhai uses Ultra graphics with Ultra frame rate (60 FPS), 55% brightness, Anti-Aliasing On, and default color temperature. His HUD opacity is set to 80%. If your device cannot maintain 60 FPS on Ultra, drop to High graphics." },
      { question: "Does Ajjubhai use gyroscope in Free Fire?", answer: "No. Ajjubhai does not use gyroscope. He plays with a simple 2-thumb control layout, making his settings very accessible for beginners and casual players who do not want to learn claw grip or gyroscope techniques." },
      { question: "How does Ajjubhai compare to Raistar's settings?", answer: "Ajjubhai has higher sensitivity across all scopes (General 100 vs 95, Red Dot 90 vs 88) and uses 2-thumb controls. Raistar uses 4-finger claw grip with slightly lower values for more precise multi-finger control. Ajjubhai's settings are better for 2-thumb players, while Raistar's suit claw grip users." },
      { question: "How long does it take to adjust to Ajjubhai's sensitivity?", answer: "Your muscle memory needs 10-14 days to adapt. During the first 3-5 days your aim may feel too fast or inconsistent. Practice in casual modes and training before playing ranked. Do not change settings during the adaptation period." },
    ],
  },
  {
    title: "Bugha Fortnite Settings & Keybinds (2026)",
    slug: "bugha-fortnite-settings",
    description:
      "Bugha's exact Fortnite sensitivity, keybinds, building binds, mouse DPI, and full PC setup. Updated for Chapter 6 Season 2, 2026. Includes comparison with Mongraal, MrSavage, and Clix.",
    category: "pro-settings",
    subcategory: "fortnite",
    tags: ["fortnite", "bugha", "pro-settings"],
    date: "2026-03-07",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Bugha",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=450&fit=crop",
    imageAlt: "Pro gaming mouse used in Bugha Fortnite setup",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Bugha uses <strong>400 DPI, X/Y Sensitivity 10%, Targeting 28%, Scope 37%</strong> on a Logitech G502 X Plus with Edit on Release enabled. He plays on <strong>1920x1080, View Distance Epic, all other settings Low</strong>. Verified from his latest FNCS 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Bugha?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Kyle Giersdorf"],
        ["<strong>IGN</strong>", "Bugha"],
        ["<strong>Team</strong>", "Sentinels"],
        ["<strong>Role</strong>", "Builder / All-rounder"],
        ["<strong>Playstyle</strong>", "Mechanical builder, fast edits, calculated aggression"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (low DPI arm aimer)"],
        ["<strong>Notable Achievements</strong>", "Fortnite World Cup 2019 Solo Champion ($3M), multiple FNCS placements"],
        ["<strong>Social Following</strong>", "5M+ YouTube, 4M+ Twitch"],
      ]},
      { type: "paragraph", html: "Bugha cemented his legacy by winning the <strong>Fortnite World Cup in 2019</strong>, becoming the most famous competitive Fortnite player of all time. His mechanical skill in building and editing is considered among the best in the world, and his settings are refined over <strong>thousands of hours of competitive play</strong> for maximum building speed and edit efficiency." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Bugha Fortnite Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "400"],
        ["X-Axis Sensitivity", "10.0%"],
        ["Y-Axis Sensitivity", "10.0%"],
        ["Targeting Sensitivity", "28%"],
        ["Scope Sensitivity", "37%"],
        ["Polling Rate", "1000 Hz"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Bugha's 400 DPI with 10% X/Y is a low sensitivity that requires full arm movements. This gives him <strong>precise crosshair control during box fights and edit plays</strong>. The low DPI means every mouse movement is deliberate — there is no room for accidental twitches. His Targeting Sensitivity at 28% is slightly higher to allow faster tracking while ADS." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "Bugha Mouse & Keybind Settings" },
      { type: "specs", label: "Building & Edit Keybinds", rows: [
        ["Wall", "Mouse Button 4"],
        ["Floor", "C"],
        ["Ramp", "Mouse Button 5"],
        ["Roof / Cone", "F"],
        ["Edit", "E (Edit on Release: On)"],
        ["Crouch", "Left Ctrl"],
        ["Sprint", "Always Sprint: On"],
        ["Building Edit Reset", "On"],
        ["Trap / Inventory", "T"],
      ]},

      // ── CROSSHAIR / ADS SETTINGS ──
      { type: "heading", level: 2, text: "Bugha ADS & Aim Settings" },
      { type: "specs", label: "ADS Configuration", rows: [
        ["Targeting Sensitivity", "28%"],
        ["Scope Sensitivity", "37%"],
        ["Edit on Release", "On"],
        ["Auto Sprint", "On"],
        ["Builder Pro", "On"],
        ["Confirm Edit on Release", "On"],
        ["Turbo Building", "On"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Bugha Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Display Mode", "Fullscreen"],
        ["Frame Rate Limit", "Unlimited"],
        ["3D Resolution", "100%"],
        ["View Distance", "Epic"],
        ["Shadows", "Off"],
        ["Anti-Aliasing & Super Resolution", "Off"],
        ["Textures", "Low"],
        ["Effects", "Low"],
        ["Post Processing", "Low"],
        ["Vsync", "Off"],
        ["Motion Blur", "Off"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Bugha PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Logitech G502 X Plus"],
        ["Mousepad", "Corsair MM300 Pro Extended"],
        ["Keyboard", "HyperX Alloy Origins 60"],
        ["Monitor", "BenQ ZOWIE XL2546K (240Hz)"],
        ["Headset", "HyperX Cloud II Wireless"],
        ["PC CPU", "Intel Core i9-13900K"],
        ["PC GPU", "NVIDIA RTX 4080"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Bugha vs Other Fortnite Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "Bugha (SEN)", "Mongraal", "MrSavage", "Clix", "EpikWhale"], rows: [
        ["<strong>DPI</strong>", "400", "400", "800", "800", "800"],
        ["<strong>X Sensitivity</strong>", "10%", "14%", "7%", "9.5%", "6.5%"],
        ["<strong>Y Sensitivity</strong>", "10%", "14%", "7%", "9.5%", "6.5%"],
        ["<strong>Targeting Sens</strong>", "28%", "28%", "30%", "25%", "28%"],
        ["<strong>Edit Key</strong>", "E", "F", "E", "E", "E"],
        ["<strong>Monitor</strong>", "240Hz", "240Hz", "240Hz", "240Hz", "240Hz"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Bugha and Mongraal both use 400 DPI but Mongraal has higher X/Y sensitivity (14% vs 10%), making Mongraal's aim faster for flick shots while Bugha's is more precise for controlled edits. MrSavage uses 800 DPI at 7% for a similar effective sensitivity but different feel. If you prefer faster building, Mongraal's values may suit you better." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Bugha's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Bind Wall to a mouse side button</strong> — this is the single most important change for building speed. Your thumb can press it without moving your WASD fingers.",
        "<strong>Enable Edit on Release</strong> in Fortnite settings — it confirms your edit the moment you release the key, saving critical milliseconds in box fights.",
        "<strong>Practice build sequences in Creative for at least 60 minutes daily</strong> before taking new keybinds to ranked or tournaments.",
        "<strong>Keep Shadows Off and Textures/Effects on Low</strong> to maximize frame rate during intense build fights where FPS drops are common.",
        "<strong>Use Always Sprint</strong> so you never accidentally walk during a rotation or fight approach.",
        "<strong>Set View Distance to Epic</strong> — unlike other visual settings, this one actually affects gameplay by letting you see structures and players at longer distances.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Bugha has <strong>20,000+ hours</strong> of Fortnite muscle memory with these exact keybinds. His building binds assume high finger dexterity built over years. Use them as a <strong>starting point</strong>, spend at least 2 weeks in Creative mode, and only bring them to ranked when they feel natural." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Fortnite Content on RaidGG", links: [
        { text: "Best Fortnite Keybinds for PC", href: "/guides/fortnite/best-fortnite-keybinds-pc/" },
        { text: "Best Fortnite Settings for Performance", href: "/guides/fortnite/best-fortnite-settings-performance/" },
        { text: "Fortnite Creative Edit Course Codes", href: "/guides/fortnite/fortnite-edit-course-codes/" },
        { text: "Best Gaming Mice for Fortnite", href: "/gaming-gear/best-gaming-mice-fortnite/" },
        { text: "Best PC Builds for Fortnite", href: "/pc-builds/best-pc-build-fortnite/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Bugha use in Fortnite?", answer: "Bugha uses 400 DPI with 10% X and Y sensitivity, 28% Targeting Sensitivity, and 37% Scope Sensitivity. This is a low sensitivity setup that requires a large mousepad and full arm movements for building and aiming." },
      { question: "What PC does Bugha use?", answer: "Bugha plays on a PC with Intel Core i9-13900K CPU, NVIDIA RTX 4080 GPU, and 32 GB DDR5 RAM. His monitor is a BenQ ZOWIE XL2546K (240Hz). He uses a Logitech G502 X Plus mouse and Corsair MM300 Pro Extended mousepad." },
      { question: "Should I copy Bugha's settings exactly?", answer: "No. Bugha has over 20,000 hours of Fortnite experience with these keybinds and sensitivity. His building binds require high finger dexterity. Start with his values as a baseline, practice in Creative mode for at least 2 weeks, and adjust based on what feels comfortable for your hand size and grip." },
      { question: "What graphics settings does Bugha use?", answer: "Bugha plays on 1920x1080 with View Distance on Epic, Shadows Off, Textures Low, Effects Low, Post Processing Low, Vsync Off, and Motion Blur Off. Only View Distance is kept high because it affects gameplay visibility." },
      { question: "What mouse does Bugha use for Fortnite?", answer: "Bugha uses the Logitech G502 X Plus with a Corsair MM300 Pro Extended mousepad. His mouse side buttons (MB4 and MB5) are bound to Wall and Ramp for quick building access without moving his WASD fingers." },
      { question: "How does Bugha compare to Mongraal's settings?", answer: "Both use 400 DPI, but Mongraal has higher X/Y sensitivity (14% vs Bugha's 10%). Mongraal's faster sens suits aggressive flick-heavy play, while Bugha's lower values provide more precise edits and aim control. Both use Edit on Release and mouse-button building binds." },
      { question: "How long does it take to adjust to Bugha's keybinds?", answer: "New keybinds take 2-3 weeks to feel natural. During the first week, your building will be significantly slower. Practice only in Creative and casual modes during this period. Do not play ranked or tournaments until the new binds feel automatic." },
    ],
  },
  {
    title: "ImperialHal Apex Legends Settings & Setup (2026)",
    slug: "imperialhal-apex-settings",
    description:
      "ImperialHal's exact Apex Legends sensitivity, controller settings, keybinds, video config, and full PC setup. Updated for ALGS 2026 Season. Includes comparison with Aceu and Genburten.",
    category: "pro-settings",
    subcategory: "apex-legends",
    tags: ["apex-legends", "imperialhal", "pro-settings"],
    date: "2026-03-06",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "ImperialHal",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=450&fit=crop",
    imageAlt: "Gaming monitor with ImperialHal Apex Legends settings",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> ImperialHal uses <strong>DPI 400, In-Game Sens 1.5, eDPI 600</strong> on MnK (recently switched from controller). He runs <strong>FOV 110, all graphics Low, Tritanopia color-blind mode</strong>. Verified from his latest ALGS 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is ImperialHal?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Philip Dosen"],
        ["<strong>IGN</strong>", "ImperialHal"],
        ["<strong>Team</strong>", "TSM"],
        ["<strong>Role</strong>", "IGL / Aggressive Fragger"],
        ["<strong>Playstyle</strong>", "Calculated aggression, elite game sense, clutch IGL"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (formerly controller)"],
        ["<strong>Notable Achievements</strong>", "Multiple ALGS Championships, ALGS MVP, most dominant Apex IGL"],
        ["<strong>Social Following</strong>", "2M+ Twitch, 1M+ YouTube"],
      ]},
      { type: "paragraph", html: "ImperialHal is widely considered the <strong>greatest competitive Apex Legends player of all time</strong>. As the long-time captain and IGL of TSM, his resume includes multiple ALGS Championships and a reputation for making clutch plays under extreme pressure. What sets ImperialHal apart is not raw mechanics but his extraordinary <strong>game sense, decision-making, and leadership</strong>." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "ImperialHal Apex Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "400"],
        ["In-Game Sensitivity", "1.5"],
        ["eDPI", "600"],
        ["ADS Multiplier", "1.0"],
        ["Polling Rate", "1000 Hz"],
        ["Raw Input", "On"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> ImperialHal's eDPI of 600 is moderate for Apex — fast enough for 180-degree turns in chaotic third-party fights, but precise enough for long-range beaming. His ADS multiplier of 1.0 means his hipfire and ADS feel consistent, reducing the mental context switch when aiming down sights." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "ImperialHal Mouse Settings" },
      { type: "specs", label: "Mouse Configuration", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mouse Weight", "~60g"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Grip Style", "Palm grip"],
        ["DPI", "400"],
        ["Polling Rate", "1000 Hz"],
      ]},

      // ── ADS / CROSSHAIR ──
      { type: "heading", level: 2, text: "ImperialHal ADS & Crosshair Settings" },
      { type: "specs", label: "ADS & Visual Settings", rows: [
        ["ADS Sensitivity Multiplier", "1.0"],
        ["Per-Optic ADS", "Default (1.0 across all)"],
        ["Crosshair Damage Feedback", "On"],
        ["Color Blind Mode", "Tritanopia"],
        ["Crosshair Color", "Enemy outlines enhanced via Tritanopia"],
        ["Field of View", "110"],
        ["FOV Ability Scaling", "Disabled"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "ImperialHal Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Display Mode", "Fullscreen"],
        ["V-Sync", "Disabled"],
        ["Anti-Aliasing", "None"],
        ["Texture Streaming Budget", "Low (2GB VRAM)"],
        ["Texture Filtering", "Bilinear"],
        ["Ambient Occlusion Quality", "Disabled"],
        ["Sun Shadow Coverage", "Low"],
        ["Spot Shadow Detail", "Disabled"],
        ["Model Detail", "Low"],
        ["Effects Detail", "Low"],
        ["FPS Cap", "Uncapped"],
        ["Boost Player Contrast", "Enabled"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "ImperialHal PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Keyboard", "Wooting 60HE"],
        ["Monitor", "BenQ ZOWIE XL2546K (240Hz)"],
        ["Headset", "HyperX Cloud Alpha Pro"],
        ["PC CPU", "Intel Core i9-14900K"],
        ["PC GPU", "NVIDIA RTX 4090"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "ImperialHal vs Other Apex Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "ImperialHal (TSM)", "Aceu (Retired)", "Genburten (DarkZero)", "NiceWigg", "Verhulst (TSM)"], rows: [
        ["<strong>Input</strong>", "MnK", "MnK", "Controller", "Controller", "Controller"],
        ["<strong>DPI / Look Sens</strong>", "400 DPI", "400 DPI", "Look 5", "Look 4", "Look 4"],
        ["<strong>In-Game / ADS Sens</strong>", "1.5 / 1.0x", "3.0 / 1.0x", "ADS 4", "ADS 3", "ADS 4"],
        ["<strong>eDPI</strong>", "600", "1200", "N/A (controller)", "N/A (controller)", "N/A (controller)"],
        ["<strong>FOV</strong>", "110", "110", "110", "110", "110"],
        ["<strong>Color Blind</strong>", "Tritanopia", "Off", "Deuteranopia", "Off", "Tritanopia"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> ImperialHal's eDPI of 600 is <strong>half of Aceu's 1200</strong>, reflecting their different playstyles. Hal plays calculated, position-heavy Apex where precision matters more than speed. Aceu's higher sensitivity suited his fast, movement-heavy playstyle. If you are learning to IGL, Hal's lower sensitivity gives you better control during intense callout moments." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt ImperialHal's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Set FOV to 110</strong> for maximum situational awareness — this is essential in Apex where third-party fights come from every direction.",
        "<strong>Enable Tritanopia color-blind mode</strong> even if you have normal vision — it makes enemy outlines and damage indicators significantly easier to spot against most backgrounds.",
        "<strong>Keep all graphics on Low</strong> — ImperialHal prioritizes frame rate and visual clarity over aesthetics. FPS stability wins fights.",
        "<strong>Enable Boost Player Contrast</strong> to make enemy character models stand out from environmental textures.",
        "<strong>Use an XL mousepad</strong> — at 400 DPI / 1.5 sens you need space for wide arm movements during close-range fights.",
        "<strong>Focus on game sense over mechanics</strong> — ImperialHal's biggest advantage is ring reading, rotation timing, and team coordination. Settings are only 5% of performance.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> ImperialHal has <strong>thousands of hours</strong> of competitive Apex experience as an IGL. His settings support a <strong>calculated, position-heavy playstyle</strong>. If you prefer Aceu-style movement play, you may want higher sensitivity. Use Hal's values as a starting point and adjust based on your role and playstyle." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Apex Legends Content on RaidGG", links: [
        { text: "Best Apex Legends Settings for PC", href: "/guides/apex-legends/best-apex-legends-settings-pc/" },
        { text: "Best Apex Legends Characters Tier List", href: "/guides/apex-legends/apex-legends-tier-list/" },
        { text: "Apex Legends Ranked Tips", href: "/guides/apex-legends/apex-legends-ranked-tips/" },
        { text: "Best Gaming Mice for FPS Games", href: "/gaming-gear/best-gaming-mice-fps/" },
        { text: "Best PC Builds for Apex Legends", href: "/pc-builds/best-pc-build-apex/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does ImperialHal use in Apex Legends?", answer: "ImperialHal uses 400 DPI with 1.5 in-game sensitivity for an eDPI of 600. His ADS multiplier is 1.0, meaning his hipfire and ADS sensitivity feel the same. These values are verified from his ALGS 2026 stream." },
      { question: "What PC does ImperialHal use?", answer: "ImperialHal plays on a PC with Intel Core i9-14900K CPU, NVIDIA RTX 4090 GPU, and 32 GB DDR5 RAM. His monitor is a BenQ ZOWIE XL2546K (240Hz). He uses a Logitech G Pro X Superlight 2 mouse with a Logitech G640 XL mousepad." },
      { question: "Should I copy ImperialHal's settings exactly?", answer: "No. ImperialHal's settings are tuned for his IGL playstyle that prioritizes precision and calculated positioning. If you prefer a more aggressive, movement-heavy playstyle like Aceu, you may want higher sensitivity. Use his values as a baseline and adjust for your preferred role." },
      { question: "What graphics settings does ImperialHal use?", answer: "ImperialHal runs all graphics on Low with Anti-Aliasing None, Ambient Occlusion Disabled, and Boost Player Contrast Enabled. He uses Tritanopia color-blind mode for better enemy visibility. FOV is set to 110 with FOV Ability Scaling Disabled." },
      { question: "Does ImperialHal use controller or mouse and keyboard?", answer: "ImperialHal recently switched from controller to mouse and keyboard. He now uses a Logitech G Pro X Superlight 2 at 400 DPI / 1.5 sens. Previously he used a DualSense Edge controller with Look Sensitivity 4 and Response Curve Classic." },
      { question: "How does ImperialHal compare to Aceu's settings?", answer: "ImperialHal's eDPI (600) is half of Aceu's (1200). Hal plays calculated, position-focused Apex where precision matters more. Aceu used higher sensitivity for fast movement plays. Both use 110 FOV and all Low graphics. Hal uses Tritanopia color-blind mode while Aceu does not." },
      { question: "How long does it take to adjust to ImperialHal's sensitivity?", answer: "Expect 2-3 weeks to fully adapt to a new Apex sensitivity. During the first week, your tracking and flicking will feel off. Practice in Firing Range and casual modes daily. Focus on consistent practice rather than changing settings again — ImperialHal's biggest lesson is to commit to your settings." },
    ],
  },
  {
    title: "Demon1 Valorant Settings, Crosshair & Sensitivity (2026)",
    slug: "demon1-valorant-settings",
    description:
      "Demon1's exact Valorant sensitivity, crosshair code, mouse DPI, eDPI, keybinds, and full PC setup. Updated for VCT 2026 Season. Includes comparison with TenZ and Aspas settings.",
    category: "pro-settings",
    subcategory: "valorant",
    tags: ["valorant", "demon1", "pro-settings", "sentinels"],
    date: "2026-03-11",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Demon1",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=450&fit=crop",
    imageAlt: "High-performance gaming mouse for Demon1 Valorant setup",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Demon1 uses <strong>800 DPI, 0.245 in-game sens (eDPI 196)</strong>, crosshair code <strong>0;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0</strong>, on a Finalmouse UltralightX with an Artisan FX Zero XL mousepad. Verified from his latest VCT 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Demon1?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Max Mazanov"],
        ["<strong>IGN</strong>", "Demon1"],
        ["<strong>Team</strong>", "Evil Geniuses"],
        ["<strong>Role</strong>", "Duelist / Entry Fragger"],
        ["<strong>Playstyle</strong>", "Aggressive entry, dry peek specialist, aim-confident"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (ultra-low sens arm aimer)"],
        ["<strong>Notable Achievements</strong>", "VCT Champions 2023, multiple VCT MVP awards, top-rated entry fragger"],
        ["<strong>Social Following</strong>", "500K+ Twitch, 300K+ YouTube"],
      ]},
      { type: "paragraph", html: "Demon1 burst onto the <strong>Valorant</strong> scene with an aggressive duelist playstyle that redefined entry fragging at the highest level. Playing for <strong>Evil Geniuses</strong>, he quickly became one of the most mechanically gifted players in the world, winning <strong>VCT Champions 2023</strong> and multiple MVP awards. With an <strong>eDPI of 196</strong>, his settings are tuned for the fast-paced, peek-heavy style that makes him so dangerous." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Demon1 Valorant Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "800"],
        ["In-Game Sensitivity", "0.245"],
        ["eDPI", "196"],
        ["Scoped Sensitivity", "1.0"],
        ["Polling Rate", "1000 Hz"],
        ["Raw Input Buffer", "On"],
        ["Windows Sensitivity", "6/11"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Demon1's eDPI of 196 is one of the <strong>lowest in professional Valorant</strong>. This ultra-low sensitivity requires massive arm movements but gives him pixel-perfect precision on dry peeks and headshot flicks. His entire playstyle is built around <strong>winning 50/50 aim duels</strong> through superior crosshair placement, and this sensitivity makes every micro-adjustment count." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "Demon1 Mouse Settings" },
      { type: "specs", label: "Mouse Configuration", rows: [
        ["Mouse", "Finalmouse UltralightX"],
        ["Mouse Weight", "~40g"],
        ["Mousepad", "Artisan FX Zero (XL)"],
        ["Grip Style", "Relaxed claw"],
        ["DPI", "800"],
        ["Polling Rate", "1000 Hz"],
      ]},

      // ── CROSSHAIR SETTINGS ──
      { type: "heading", level: 2, text: "Demon1 Crosshair Settings" },
      { type: "specs", label: "Crosshair Configuration", rows: [
        ["Crosshair Code", "0;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0"],
        ["Color", "Cyan"],
        ["Inner Lines Opacity", "1"],
        ["Inner Lines Length", "4"],
        ["Inner Lines Thickness", "2"],
        ["Inner Lines Offset", "2"],
        ["Outer Lines", "Off"],
        ["Center Dot", "Off"],
        ["Movement / Firing Error", "Off"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Demon1 Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Display Mode", "Fullscreen"],
        ["Frame Rate Limit", "Unlocked"],
        ["Material Quality", "Low"],
        ["Texture Quality", "Low"],
        ["Detail Quality", "Low"],
        ["UI Quality", "Low"],
        ["Vignette", "Off"],
        ["Anti-Aliasing", "MSAA 4x"],
        ["Anisotropic Filtering", "4x"],
        ["Bloom", "Off"],
        ["Distortion", "Off"],
        ["First Person Shadows", "Off"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Demon1 PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Finalmouse UltralightX"],
        ["Mousepad", "Artisan FX Zero (XL)"],
        ["Keyboard", "Wooting 60HE"],
        ["Monitor", "Alienware AW2524H (360Hz)"],
        ["Headset", "EPOS H6PRO"],
        ["PC CPU", "Intel Core i9-14900K"],
        ["PC GPU", "NVIDIA RTX 4090"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Demon1 vs Other Valorant Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "Demon1 (EG)", "TenZ (C9)", "Aspas (LOUD)", "Leo (DRX)", "Zekken (SEN)"], rows: [
        ["<strong>DPI</strong>", "800", "800", "800", "800", "800"],
        ["<strong>In-Game Sens</strong>", "0.245", "0.4", "0.32", "0.34", "0.36"],
        ["<strong>eDPI</strong>", "196", "320", "256", "272", "288"],
        ["<strong>Crosshair Color</strong>", "Cyan", "Cyan", "White", "Cyan", "White"],
        ["<strong>Mouse</strong>", "Finalmouse UltralightX", "Finalmouse UltralightX", "G Pro X Superlight 2", "Lamzu Atlantis Mini", "Finalmouse UltralightX"],
        ["<strong>Monitor</strong>", "360Hz", "360Hz", "240Hz", "240Hz", "360Hz"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Demon1's eDPI of 196 is the <strong>lowest among top Valorant duelists</strong>. TenZ (320) and Aspas (256) both play significantly faster. Demon1 compensates with exceptional crosshair placement and angle discipline — he rarely needs to make large flicks because his crosshair is already where enemies will appear. If you struggle with over-aiming, Demon1's ultra-low sensitivity may fix that." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Demon1's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Get an XL mousepad (45cm+ wide)</strong> — Demon1's eDPI of 196 requires massive arm swipes. A regular-sized pad is not enough.",
        "<strong>Practice counter-strafing daily</strong> in Deathmatch — at this sensitivity, you must stop completely before each shot or your bullets will miss.",
        "<strong>Pre-aim common head-level positions</strong> on every angle before swinging — never peek blind. Low sensitivity punishes lazy crosshair placement.",
        "<strong>Drop sensitivity gradually</strong> if coming from a higher eDPI. Reduce by 10% per week until you reach Demon1's range.",
        "<strong>Enable Raw Input Buffer</strong> in Valorant settings for the lowest possible input latency between your mouse and the game.",
        "<strong>Study Demon1's VODs for angle discipline</strong> — his aim duels are won by crosshair placement and timing, not raw reaction speed alone.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Demon1 has <strong>thousands of hours</strong> of Valorant muscle memory at this ultra-low eDPI. His 196 eDPI is extreme and requires a <strong>large desk, XL mousepad, and full arm-aiming technique</strong>. Use it as a starting point, but if you find yourself unable to turn fast enough in fights, increase the sensitivity slightly." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Valorant Content on RaidGG", links: [
        { text: "TenZ Valorant Settings & Crosshair", href: "/pro-settings/valorant/tenz-valorant-settings/" },
        { text: "Aspas Valorant Settings & Keybinds", href: "/pro-settings/valorant/aspas-valorant-settings/" },
        { text: "Best Valorant Crosshair Codes", href: "/guides/valorant/best-valorant-crosshair-codes/" },
        { text: "Best Gaming Mice for Valorant", href: "/gaming-gear/best-gaming-mice-valorant/" },
        { text: "Best Valorant Settings for FPS", href: "/guides/valorant/best-valorant-settings-fps/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Demon1 use in Valorant?", answer: "Demon1 uses 800 DPI with 0.245 in-game sensitivity for an eDPI of 196. This is one of the lowest sensitivities in professional Valorant, requiring large arm movements and an XL mousepad. His scoped sensitivity is 1.0." },
      { question: "What PC does Demon1 use?", answer: "Demon1 plays on a PC with Intel Core i9-14900K CPU, NVIDIA RTX 4090 GPU, and 32 GB DDR5 RAM. His monitor is an Alienware AW2524H (360Hz). He uses a Finalmouse UltralightX mouse with an Artisan FX Zero XL mousepad and a Wooting 60HE keyboard." },
      { question: "Should I copy Demon1's settings exactly?", answer: "No. Demon1's eDPI of 196 is extreme and requires a large desk, XL mousepad, and pure arm-aiming technique. Most players will find it too slow for turning in fights. Start with his values if you want precision-focused gameplay, but increase sensitivity slightly if you cannot complete 180-degree turns comfortably." },
      { question: "What graphics settings does Demon1 use?", answer: "Demon1 runs all graphics on Low with MSAA 4x Anti-Aliasing and 4x Anisotropic Filtering. Bloom, Distortion, Vignette, and First Person Shadows are Off. This maximizes FPS and removes visual clutter that could hide enemies." },
      { question: "What crosshair code does Demon1 use in Valorant?", answer: "Demon1's crosshair code is 0;P;c;5;h;0;m;1;0l;4;0o;2;0a;1;0f;0;1b;0. It is a small cyan crosshair with inner lines only (length 4, thickness 2, offset 2), no center dot, no outer lines, and no movement or firing error indicators." },
      { question: "How does Demon1 compare to TenZ's settings?", answer: "Demon1's eDPI (196) is significantly lower than TenZ's (320). Demon1 wins duels through pixel-perfect crosshair placement and dry peeks, while TenZ plays faster with wider swings. Both use the same mouse (Finalmouse UltralightX) and 360Hz monitors, but their playstyles are fundamentally different." },
      { question: "How long does it take to adjust to Demon1's sensitivity?", answer: "Expect 3-4 weeks of adjustment when switching to Demon1's ultra-low eDPI of 196. During the first week your aim will feel extremely sluggish. Drop sensitivity gradually (10% per week) rather than making one big change. Practice daily in Deathmatch and aim trainers during the transition." },
    ],
  },
  {
    title: "Neyoo BGMI Settings, Sensitivity & Device (2026)",
    slug: "neyoo-bgmi-settings",
    description:
      "Neyoo's exact BGMI sensitivity, gyroscope, 5-finger claw layout, graphics settings, and dual-device setup. Updated for BGIS 2026 Season. Includes comparison with Jonathan, Mavi, and Zgod settings.",
    category: "pro-settings",
    subcategory: "bgmi",
    tags: ["bgmi", "neyoo", "pro-settings", "godlike"],
    date: "2026-03-10",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Neyoo",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=450&fit=crop",
    imageAlt: "Mechanical keyboard used in Neyoo BGMI configuration",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Neyoo uses <strong>130% TPP Camera, 85% Red Dot, 35% 4x Scope, Gyro Always On at 280%</strong> with a 5-finger claw layout. He plays on <strong>iPad Pro M4 for tournaments</strong> and iPhone 16 Pro Max for ranked, running <strong>Smooth graphics + 90 FPS</strong>. Verified from his latest BGIS 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Neyoo?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Suraj Majumdar"],
        ["<strong>IGN</strong>", "Neyoo"],
        ["<strong>Team</strong>", "GodLike Esports"],
        ["<strong>Role</strong>", "Assaulter / Clutch Specialist"],
        ["<strong>Playstyle</strong>", "Calculated aggression, clutch specialist, consistent fragger"],
        ["<strong>Control Style</strong>", "5-Finger Claw"],
        ["<strong>Notable Achievements</strong>", "BGIS 2024 Champion, BGMS Season 2 MVP, multiple BMPS wins with GodLike"],
        ["<strong>Social Following</strong>", "2M+ YouTube, 1M+ Instagram"],
      ]},
      { type: "paragraph", html: "Neyoo is one of the most <strong>clutch-heavy players in Indian BGMI esports</strong>. Playing for <strong>GodLike Esports</strong> alongside Jonathan, he brings a unique blend of calculated aggression and consistency that makes him invaluable in high-pressure tournament situations. His <strong>5-finger claw layout</strong> gives him an edge in multi-tasking during fights, and his dual-device approach (iPad for LAN, phone for ranked) shows his adaptability." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Neyoo BGMI Sensitivity Settings" },
      { type: "paragraph", html: "These values are verified from Neyoo's <strong>BGIS 2026 stream</strong> (March 2026). His sensitivity is slightly lower than Jonathan's, reflecting his more <strong>calculated mid-range playstyle</strong>:" },
      { type: "specs", label: "Camera Sensitivity", rows: [
        ["TPP No Scope", "130%"],
        ["FPP No Scope", "110%"],
        ["Red Dot / Holographic", "85%"],
        ["2x Scope", "75%"],
        ["3x Scope", "60%"],
        ["4x Scope", "35%"],
        ["6x Scope", "20%"],
        ["8x Scope", "13%"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Neyoo's Camera Sensitivity (130% TPP) is lower than Jonathan's (150%) because he relies more on positioning and mid-range sprays rather than close-range rushes. His Red Dot at 85% is optimized for controlled AR tracking, and his 4x at 35% is tuned for stable spray transfers at medium range — his specialty." },

      // ── GYROSCOPE SETTINGS ──
      { type: "heading", level: 2, text: "Neyoo Gyroscope Settings" },
      { type: "specs", label: "Gyroscope Sensitivity", rows: [
        ["Gyroscope Mode", "Always On"],
        ["TPP No Scope", "280%"],
        ["FPP No Scope", "240%"],
        ["Red Dot / Holographic", "200%"],
        ["2x Scope", "160%"],
        ["3x Scope", "120%"],
        ["4x Scope", "80%"],
        ["6x Scope", "50%"],
        ["8x Scope", "30%"],
      ]},
      { type: "paragraph", html: "<strong>Why Always On:</strong> Like Jonathan, Neyoo uses gyroscope in <strong>every situation</strong> — not just while scoping. His gyro values are slightly lower than Jonathan's (280% vs 300% TPP), giving him smoother micro-adjustments during mid-range engagements. The 5-finger claw layout combined with Always On gyro gives him <strong>three layers of input</strong>: left thumb for movement, right thumb for aim, index fingers for fire/scope, and device tilt for recoil control." },

      // ── ADS SENSITIVITY ──
      { type: "heading", level: 2, text: "Neyoo ADS Sensitivity" },
      { type: "specs", label: "ADS (Aim Down Sight) Sensitivity", rows: [
        ["Red Dot / Holographic", "68%"],
        ["2x Scope", "50%"],
        ["3x Scope", "35%"],
        ["4x Scope", "25%"],
        ["6x Scope", "18%"],
        ["8x Scope", "10%"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Neyoo Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Graphics Quality", "Smooth"],
        ["Frame Rate", "Extreme (90 FPS)"],
        ["Brightness", "50%"],
        ["Color Mode", "Vivid"],
        ["Anti-Aliasing", "Off"],
        ["Shadows", "Off"],
        ["Style", "Colorful"],
      ]},
      { type: "paragraph", html: "<strong>Why Smooth + Vivid:</strong> Neyoo uses Smooth graphics like all competitive BGMI pros to maximize FPS. His unique choice of <strong>Vivid color mode with Colorful style</strong> increases color saturation, making enemy outlines and loot items pop more against the environment — a subtle but effective visibility advantage." },

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Neyoo Device & Gear Setup" },
      { type: "specs", label: "Device & Accessories", rows: [
        ["Tournament Device", "iPad Pro M4 (12.9-inch)"],
        ["Ranked / Practice Device", "iPhone 16 Pro Max"],
        ["Tournament Display", "12.9-inch Liquid Retina XDR, 120Hz"],
        ["Tournament Processor", "Apple M4"],
        ["Phone Processor", "Apple A18 Pro"],
        ["Controls Layout", "5-Finger Claw"],
        ["Finger Sleeves", "Yes — for consistent swipe response"],
        ["Phone Cooler", "Yes — for extended sessions"],
        ["Audio", "Wired earphones (low latency)"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Neyoo vs Other BGMI Pros — Settings Comparison" },
      { type: "paragraph", html: "Here is how Neyoo's settings compare to other top Indian BGMI pros. Notice the differences driven by control style and playstyle:" },
      { type: "table", headers: ["Setting", "Neyoo (GodL)", "Jonathan (GodL)", "Mavi (Soul)", "Zgod (GodL)", "Clutchgod"], rows: [
        ["<strong>TPP Camera</strong>", "130%", "150%", "130%", "155%", "140%"],
        ["<strong>Red Dot</strong>", "85%", "100%", "65%", "75%", "70%"],
        ["<strong>4x Scope</strong>", "35%", "45%", "24%", "30%", "28%"],
        ["<strong>Gyro Mode</strong>", "Always On", "Always On", "Always On", "Always On", "Always On"],
        ["<strong>Gyro (TPP)</strong>", "280%", "300%", "290%", "320%", "295%"],
        ["<strong>Control Style</strong>", "5-finger", "4-finger", "4-finger", "5-finger", "4-finger"],
        ["<strong>Device</strong>", "iPad Pro M4", "iPhone 15 Pro Max", "iPad Air", "iPhone 15 Pro", "iPhone 14 Pro"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Neyoo's sensitivity sits between Jonathan's aggressive highs and Mavi's controlled lows. His 5-finger claw layout gives him an extra input finger compared to Jonathan's 4-finger setup, which is why he can afford <strong>lower camera sensitivity</strong> — the additional finger handles actions that would otherwise require faster camera movement. If you already use 5-finger claw, Neyoo's values are the ideal starting point." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Neyoo's Settings to Your Device" },
      { type: "list", style: "numbered", items: [
        "<strong>Start at 85% of Neyoo's values</strong> — his sensitivity is calibrated for a 12.9-inch iPad Pro with 5-finger claw. On a phone, these values will feel different due to screen size.",
        "If you use <strong>4-finger claw</strong> instead of 5, increase Camera Sensitivity by 10-15% to compensate for the reduced finger count.",
        "If you use <strong>2-thumb controls</strong>, increase Camera Sensitivity by 25-30% and lower ADS by 10-15%. Neyoo's values assume multi-finger input sharing.",
        "If switching from <strong>phone to iPad</strong>, reduce all sensitivity values by 15-20% — the larger screen means each swipe covers more in-game distance.",
        "Enable <strong>Gyroscope (Always On)</strong> only after you are comfortable with your touch sensitivity and claw layout. Adding gyro too early causes instability.",
        "Commit to the new settings for <strong>at least 2-3 weeks</strong> before making changes. Neyoo's settings require time for muscle memory to develop, especially the 5-finger layout.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Neyoo has <strong>thousands of hours</strong> of competitive muscle memory with 5-finger claw on his specific devices. His settings are tuned for a <strong>calculated, mid-range playstyle</strong> with a dual-device setup. Use them as a <strong>starting point</strong>, adjust for your screen size, control style, and finger count, and commit for at least two weeks before judging." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related BGMI Content on RaidGG", links: [
        { text: "Jonathan BGMI Settings & Sensitivity", href: "/pro-settings/bgmi/jonathan-bgmi-settings/" },
        { text: "BGMI Best Sensitivity Settings for No Recoil", href: "/game-guides/bgmi/bgmi-best-sensitivity-settings/" },
        { text: "BGMI Tips to Reach Conqueror", href: "/game-guides/bgmi/bgmi-tips-reach-conqueror/" },
        { text: "BGMI Redeem Codes Today", href: "/redeem-codes/bgmi/" },
        { text: "Best Gaming Phones Under 25K", href: "/gaming-phones/best-gaming-phones-under-25k/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Neyoo use in BGMI?", answer: "Neyoo uses 130% TPP Camera, 85% Red Dot, 35% 4x Scope, and Gyroscope Always On at 280% TPP. His ADS sensitivity is 68% Red Dot and 25% 4x. These values are verified from his BGIS 2026 stream and are slightly lower than Jonathan's, reflecting his more calculated playstyle." },
      { question: "What device does Neyoo use for BGMI?", answer: "Neyoo uses an iPad Pro M4 (12.9-inch) for tournaments and an iPhone 16 Pro Max for ranked play and practice. He uses finger sleeves and a phone cooler as accessories and plays with a 5-finger claw control layout on both devices." },
      { question: "Should I copy Neyoo's BGMI settings exactly?", answer: "No. Neyoo's settings are tuned for his specific devices (iPad Pro M4 and iPhone 16 Pro Max) with a 5-finger claw grip and thousands of hours of muscle memory. If you use 4-finger claw, increase Camera Sensitivity by 10-15%. If you use 2-thumb, increase by 25-30%. Give any new settings at least 2-3 weeks before judging." },
      { question: "What graphics settings does Neyoo use?", answer: "Neyoo uses Smooth graphics with Extreme frame rate (90 FPS), 50% brightness, Vivid color mode, Colorful style, Anti-Aliasing Off, and Shadows Off. The Vivid + Colorful combination increases color saturation for better enemy visibility." },
      { question: "Does Neyoo use gyroscope in BGMI?", answer: "Yes. Neyoo uses Gyroscope set to 'Always On' at 280% for TPP No Scope. Combined with his 5-finger claw layout, this gives him three layers of input: thumbs for movement and aim, index fingers for fire and scope, and device tilt for recoil control and micro-adjustments." },
      { question: "How does Neyoo compare to Jonathan's settings?", answer: "Neyoo's Camera Sensitivity (130% TPP) is lower than Jonathan's (150%), and his Red Dot (85%) is lower than Jonathan's (100%). Neyoo uses 5-finger claw while Jonathan uses 4-finger. Neyoo plays more calculated mid-range fights, while Jonathan favors aggressive close-range rushes. Both use Gyroscope Always On." },
      { question: "How long does it take to adjust to Neyoo's sensitivity?", answer: "Your muscle memory needs 2-3 weeks to fully adapt to new sensitivity values, especially if also switching to 5-finger claw. During the first week your aim and movement will feel uncoordinated. Practice in TDM and casual modes daily before playing ranked. Do not change settings during the adaptation period." },
    ],
  },
  {
    title: "Aspas Valorant Settings, Crosshair & Keybinds (2026)",
    slug: "aspas-valorant-settings",
    description:
      "Aspas's exact Valorant sensitivity, crosshair code, mouse DPI, eDPI, keybinds, and full PC setup. Updated for VCT 2026 Season. Brazil's best Valorant player — includes comparison with TenZ and Demon1 settings.",
    category: "pro-settings",
    subcategory: "valorant",
    tags: ["valorant", "aspas", "pro-settings", "loud"],
    date: "2026-03-09",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "Aspas",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=450&fit=crop",
    imageAlt: "Gaming monitor displaying Aspas Valorant settings",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> Aspas uses <strong>800 DPI, 0.32 in-game sens (eDPI 256)</strong>, a small white crosshair with inner lines only, on a Logitech G Pro X Superlight 2 with a Logitech G640 XL mousepad. He plays on <strong>1920x1080, all graphics Low</strong>. Verified from his latest VCT 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is Aspas?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Erick Santos"],
        ["<strong>IGN</strong>", "aspas"],
        ["<strong>Team</strong>", "LOUD"],
        ["<strong>Role</strong>", "Duelist / Entry Fragger"],
        ["<strong>Playstyle</strong>", "Explosive entry, one-tap specialist, clutch-heavy"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (medium sens arm-wrist hybrid)"],
        ["<strong>Notable Achievements</strong>", "VCT LOCK//IN Champion 2023, VCT Champions finalist, Brazil's #1 Valorant player"],
        ["<strong>Social Following</strong>", "1.5M+ YouTube, 1M+ Twitch"],
      ]},
      { type: "paragraph", html: "Aspas is the <strong>undisputed best Valorant player from Brazil</strong> and one of the most feared duelists in the world. Playing for <strong>LOUD</strong>, he led his team to international glory at VCT LOCK//IN 2023 and has been a consistent threat at every VCT event since. His playstyle combines <strong>explosive entry fragging with clutch potential</strong>, and his eDPI of 256 sits in the sweet spot between speed and precision — making his settings an excellent starting point for aspiring duelists." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "Aspas Valorant Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "800"],
        ["In-Game Sensitivity", "0.32"],
        ["eDPI", "256"],
        ["Scoped Sensitivity", "1.0"],
        ["Polling Rate", "1000 Hz"],
        ["Raw Input Buffer", "On"],
        ["Windows Sensitivity", "6/11"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> Aspas's eDPI of 256 is a <strong>medium sensitivity</strong> that sits between Demon1's ultra-low 196 and TenZ's 320. This gives him enough speed for explosive entry swings while maintaining the precision needed for one-tap headshots. His arm-wrist hybrid aiming style means he uses arm movements for large turns and wrist flicks for micro-adjustments — the eDPI of 256 is perfectly balanced for both." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "Aspas Mouse Settings" },
      { type: "specs", label: "Mouse Configuration", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mouse Weight", "~60g"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Grip Style", "Palm-claw hybrid"],
        ["DPI", "800"],
        ["Polling Rate", "1000 Hz"],
      ]},

      // ── CROSSHAIR SETTINGS ──
      { type: "heading", level: 2, text: "Aspas Crosshair Settings" },
      { type: "specs", label: "Crosshair Configuration", rows: [
        ["Color", "White"],
        ["Inner Lines Opacity", "1"],
        ["Inner Lines Length", "4"],
        ["Inner Lines Thickness", "2"],
        ["Inner Lines Offset", "2"],
        ["Outer Lines", "Off"],
        ["Center Dot", "Off"],
        ["Movement / Firing Error", "Off"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "Aspas Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Display Mode", "Fullscreen"],
        ["Frame Rate Limit", "Unlocked"],
        ["Material Quality", "Low"],
        ["Texture Quality", "Low"],
        ["Detail Quality", "Low"],
        ["UI Quality", "Low"],
        ["Vignette", "Off"],
        ["Anti-Aliasing", "MSAA 4x"],
        ["Anisotropic Filtering", "4x"],
        ["Bloom", "Off"],
        ["Distortion", "Off"],
        ["First Person Shadows", "Off"],
      ]},

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "Aspas PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Keyboard", "HyperX Alloy Origins 65"],
        ["Monitor", "LG UltraGear 27GR95U (240Hz)"],
        ["Headset", "Logitech G Pro X 2"],
        ["PC CPU", "Intel Core i9-13900K"],
        ["PC GPU", "NVIDIA RTX 4080"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "Aspas vs Other Valorant Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "Aspas (LOUD)", "TenZ (C9)", "Demon1 (EG)", "Less (LOUD)", "Sacy"], rows: [
        ["<strong>DPI</strong>", "800", "800", "800", "800", "800"],
        ["<strong>In-Game Sens</strong>", "0.32", "0.4", "0.245", "0.35", "0.28"],
        ["<strong>eDPI</strong>", "256", "320", "196", "280", "224"],
        ["<strong>Crosshair Color</strong>", "White", "Cyan", "Cyan", "White", "Green"],
        ["<strong>Mouse</strong>", "G Pro X Superlight 2", "Finalmouse UltralightX", "Finalmouse UltralightX", "G Pro X Superlight 2", "G Pro X Superlight"],
        ["<strong>Monitor</strong>", "240Hz", "360Hz", "360Hz", "240Hz", "240Hz"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> Aspas's eDPI of 256 sits right in the <strong>middle ground</strong> between Demon1's ultra-low 196 and TenZ's faster 320. This makes his settings the most <strong>versatile starting point for new players</strong> — fast enough for entry fragging but precise enough for one-taps. His LOUD teammate Less plays at a similar 280 eDPI, confirming that medium sensitivity is the team's preference for aggressive play." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt Aspas's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Get a large mousepad (40cm+ wide)</strong> — Aspas's eDPI of 256 requires significant arm movement for 180-degree turns. A standard pad will limit your turning ability.",
        "<strong>Practice one-tap Deathmatch daily</strong> — Aspas's playstyle relies on stopping, aiming at head level, and firing a single precise shot. Train this habit before spraying.",
        "<strong>Focus on swing timing over raw aim</strong> — Aspas wins duels by choosing the right moment to peek, not just by out-aiming opponents. Watch his VODs to learn his timing.",
        "<strong>Keep Raw Input Buffer On</strong> and Windows sensitivity at 6/11 to ensure your DPI translates accurately without OS interference.",
        "<strong>Use a lightweight mouse under 65g</strong> — Aspas's entry fragging style requires fast swipe movements. A heavy mouse creates fatigue during long sessions.",
        "<strong>Warm up for 20-30 minutes in Deathmatch</strong> before every ranked session. Aspas does this without exception — aim activation is not optional at this level.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> Aspas has <strong>thousands of hours</strong> of Valorant muscle memory at this sensitivity. His eDPI of 256 is a great starting point, but adjust for your mousepad size, grip style, and arm comfort. Commit for at least <strong>three weeks</strong> before making changes — Aspas's biggest advantage is raw practice volume, not the settings themselves." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related Valorant Content on RaidGG", links: [
        { text: "TenZ Valorant Settings & Crosshair", href: "/pro-settings/valorant/tenz-valorant-settings/" },
        { text: "Demon1 Valorant Settings & Sensitivity", href: "/pro-settings/valorant/demon1-valorant-settings/" },
        { text: "Best Valorant Crosshair Codes", href: "/guides/valorant/best-valorant-crosshair-codes/" },
        { text: "Best Valorant Settings for FPS", href: "/guides/valorant/best-valorant-settings-fps/" },
        { text: "Best Gaming Mice for Valorant", href: "/gaming-gear/best-gaming-mice-valorant/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does Aspas use in Valorant?", answer: "Aspas uses 800 DPI with 0.32 in-game sensitivity for an eDPI of 256. His scoped sensitivity is 1.0. This medium eDPI balances flick speed with one-tap precision, making it one of the most versatile starting points for Valorant players." },
      { question: "What PC does Aspas use?", answer: "Aspas plays on a PC with Intel Core i9-13900K CPU, NVIDIA RTX 4080 GPU, and 32 GB DDR5 RAM. His monitor is an LG UltraGear 27GR95U (240Hz). He uses a Logitech G Pro X Superlight 2 mouse with a Logitech G640 XL mousepad." },
      { question: "Should I copy Aspas's settings exactly?", answer: "No. While Aspas's eDPI of 256 is one of the most balanced sensitivities in pro Valorant and a great starting point, he has thousands of hours of muscle memory. Adjust for your mousepad size, grip style, and arm comfort. Commit for at least 3 weeks before judging." },
      { question: "What graphics settings does Aspas use?", answer: "Aspas runs all graphics on Low with MSAA 4x Anti-Aliasing and 4x Anisotropic Filtering. Bloom, Distortion, Vignette, and First Person Shadows are Off. This maximizes FPS and visual clarity for spotting enemies." },
      { question: "What crosshair does Aspas use in Valorant?", answer: "Aspas uses a small white crosshair with inner lines only (opacity 1, length 4, thickness 2, offset 2). No center dot, no outer lines, and no movement or firing error indicators. The white color provides good visibility against most map backgrounds." },
      { question: "How does Aspas compare to TenZ's settings?", answer: "Aspas's eDPI (256) is lower than TenZ's (320), giving Aspas more precision on one-taps while TenZ has faster flick speed. Aspas uses a Logitech G Pro X Superlight 2 while TenZ uses a Finalmouse UltralightX. Both play duelist roles but Aspas favors timing-based entries while TenZ takes wider swing angles." },
      { question: "How long does it take to adjust to Aspas's sensitivity?", answer: "Expect 2-3 weeks of adjustment when switching to Aspas's eDPI of 256. During the first week your aim may feel sluggish if coming from higher sensitivity, or imprecise if coming from lower. Practice daily in Deathmatch and aim trainers. Do not change settings during this adaptation period." },
    ],
  },
  {
    title: "ZywOo CS2 Settings, Crosshair & Config (2026)",
    slug: "zywoo-cs2-settings",
    description:
      "ZywOo's exact CS2 sensitivity, crosshair config, viewmodel, video settings, and full PC setup. Updated for CS2 2026 Major Season. The #1 CS player's settings — includes comparison with s1mple, NiKo, and donk.",
    category: "pro-settings",
    subcategory: "cs2",
    tags: ["cs2", "zywoo", "pro-settings", "vitality"],
    date: "2026-03-08",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "ZywOo",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&h=450&fit=crop",
    imageAlt: "Pro gaming mouse matching ZywOo CS2 setup",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> ZywOo uses <strong>400 DPI, 2.0 in-game sens (eDPI 800)</strong>, Zoom Sensitivity 0.818, static green crosshair (size 2, gap -3), on a Logitech G Pro X Superlight 2 with a Logitech G640 XL mousepad. He runs <strong>1920x1080 16:9, all graphics Low, Boost Player Contrast On</strong>. Verified from his latest CS2 Major 2026 stream." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is ZywOo?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Mathieu Herbaut"],
        ["<strong>IGN</strong>", "ZywOo"],
        ["<strong>Team</strong>", "Team Vitality"],
        ["<strong>Role</strong>", "AWPer / Star Player"],
        ["<strong>Playstyle</strong>", "Passive AWP, clutch master, consistent rifler"],
        ["<strong>Control Style</strong>", "Mouse & Keyboard (medium sens arm aimer)"],
        ["<strong>Notable Achievements</strong>", "2x CS:GO Major Champion, 3x HLTV #1 Player, CS2 Major Champion, multiple Intel Grand Slam wins"],
        ["<strong>Social Following</strong>", "800K+ Twitch, 500K+ YouTube"],
      ]},
      { type: "paragraph", html: "ZywOo is widely considered the <strong>#1 Counter-Strike player of all time</strong>, alongside s1mple. Playing for <strong>Team Vitality</strong>, he has won multiple Major Championships and three HLTV #1 Player awards. His transition from CS:GO to CS2 was seamless, and he continues to dominate with <strong>remarkably consistent aim, game-changing clutch plays, and elite AWP mechanics</strong>. His settings philosophy is simple: find what works and never change it." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "ZywOo CS2 Sensitivity Settings" },
      { type: "specs", label: "Mouse & Sensitivity", rows: [
        ["DPI", "400"],
        ["In-Game Sensitivity", "2.0"],
        ["eDPI", "800"],
        ["Zoom Sensitivity Multiplier", "0.818"],
        ["Polling Rate", "1000 Hz"],
        ["Raw Input", "On"],
        ["Windows Sensitivity", "6/11"],
        ["Mouse Acceleration", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> ZywOo's eDPI of 800 is the <strong>CS2 sweet spot</strong> — the most common eDPI among top CS pros. It is fast enough for quick rifle duels and 180-degree turns, but precise enough for long-range AWP flicks. His Zoom Sensitivity of 0.818 follows the mathematical 360/FOV formula, ensuring his AWP muscle memory matches his rifle muscle memory perfectly." },

      // ── MOUSE SETTINGS ──
      { type: "heading", level: 2, text: "ZywOo Mouse Settings" },
      { type: "specs", label: "Mouse Configuration", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mouse Weight", "~60g"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Grip Style", "Palm grip"],
        ["DPI", "400"],
        ["Polling Rate", "1000 Hz"],
      ]},

      // ── CROSSHAIR SETTINGS ──
      { type: "heading", level: 2, text: "ZywOo Crosshair Settings" },
      { type: "specs", label: "Crosshair Configuration", rows: [
        ["Style", "Static (4)"],
        ["Color", "Green (1)"],
        ["Size", "2"],
        ["Thickness", "0"],
        ["Gap", "-3"],
        ["Dot", "Off (0)"],
        ["Outline", "Off (0)"],
        ["cl_crosshair_drawoutline", "0"],
        ["cl_crosshairgap", "-3"],
        ["cl_crosshairsize", "2"],
        ["cl_crosshairthickness", "0"],
        ["cl_crosshaircolor", "1"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "ZywOo Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Resolution", "1920x1080"],
        ["Aspect Ratio", "16:9"],
        ["Display Mode", "Fullscreen"],
        ["Refresh Rate", "360 Hz"],
        ["Global Shadow Quality", "Low"],
        ["Model / Texture Detail", "Low"],
        ["Effect Detail", "Low"],
        ["Shader Detail", "Low"],
        ["Multicore Rendering", "Enabled"],
        ["Multisampling Anti-Aliasing", "None"],
        ["FXAA Anti-Aliasing", "Disabled"],
        ["Texture Filtering Mode", "Bilinear"],
        ["Vertical Sync", "Disabled"],
        ["Motion Blur", "Disabled"],
        ["Boost Player Contrast", "Enabled"],
        ["FPS Max", "999"],
      ]},
      { type: "paragraph", html: "<strong>Why native 1080p:</strong> Unlike many CS2 pros who use stretched 4:3, ZywOo plays on native <strong>1920x1080 16:9</strong>. This gives him a wider field of view for spotting enemies at the edges of the screen — crucial for an AWPer who needs to hold wide angles. All quality settings are on Low to maximize frame rate, with <strong>Boost Player Contrast enabled</strong> for better enemy visibility." },

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "ZywOo PC & Gear Setup" },
      { type: "specs", label: "Full Setup", rows: [
        ["Mouse", "Logitech G Pro X Superlight 2"],
        ["Mousepad", "Logitech G640 (XL)"],
        ["Keyboard", "Logitech G Pro X Keyboard"],
        ["Monitor", "Zowie XL2566K (360Hz TN)"],
        ["Headset", "Logitech G Pro X 2 Wireless"],
        ["PC CPU", "Intel Core i9-14900K"],
        ["PC GPU", "NVIDIA RTX 4090"],
        ["RAM", "32 GB DDR5"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "ZywOo vs Other CS2 Pros — Settings Comparison" },
      { type: "table", headers: ["Setting", "ZywOo (Vitality)", "s1mple (Retired)", "NiKo (G2)", "donk (Spirit)", "m0NESY (G2)"], rows: [
        ["<strong>DPI</strong>", "400", "400", "400", "400", "400"],
        ["<strong>In-Game Sens</strong>", "2.0", "3.09", "1.38", "1.55", "1.75"],
        ["<strong>eDPI</strong>", "800", "1236", "552", "620", "700"],
        ["<strong>Zoom Sens</strong>", "0.818", "1.0", "0.9", "1.0", "0.818"],
        ["<strong>Resolution</strong>", "1920x1080", "1280x960 (4:3)", "1280x960 (4:3)", "1280x960 (4:3)", "1920x1080"],
        ["<strong>Mouse</strong>", "G Pro X Superlight 2", "Logitech G Pro X Superlight", "Zowie EC2", "Logitech G Pro X Superlight 2", "Finalmouse UltralightX"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> ZywOo's eDPI of 800 is <strong>higher than NiKo (552) and donk (620)</strong> but lower than s1mple's legendary 1236. ZywOo is one of the few elite AWPers who plays on native 1080p instead of stretched 4:3 — this gives him better peripheral vision at the cost of slightly smaller enemy models. If you AWP frequently, ZywOo's 0.818 Zoom Sensitivity ensures consistent muscle memory between rifles and the AWP." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt ZywOo's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Start with eDPI 800</strong> if you have no preference — it is the statistical average among CS2 pros and the most proven starting point for all skill levels.",
        "<strong>Use Zoom Sensitivity 0.818</strong> (the 360/FOV formula) so your AWP flick muscle memory transfers directly from your rifle sensitivity.",
        "<strong>Enable Boost Player Contrast</strong> in video settings — it makes enemy character models visibly brighter against dark backgrounds on most maps.",
        "<strong>Keep all graphics on Low</strong> except possibly Shader Detail on Medium if you want slightly better weapon skins. FPS stability matters more than visuals.",
        "<strong>Use a static crosshair</strong> and never change it — a dynamic crosshair creates visual noise that trains bad habits. ZywOo's tiny green crosshair is designed for precision.",
        "<strong>Commit to your settings permanently</strong> — ZywOo's biggest lesson is that he never changes his sensitivity. Every change resets months of muscle memory. Pick once and practice.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> ZywOo has <strong>10,000+ hours</strong> of Counter-Strike muscle memory with these exact values. His eDPI of 800 is considered the CS2 standard, but your comfort depends on mousepad size, desk space, and grip style. Use his values as a <strong>permanent baseline</strong> and resist the urge to change them — consistency is ZywOo's biggest advantage." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related CS2 Content on RaidGG", links: [
        { text: "Best CS2 Crosshair Codes", href: "/guides/cs2/best-cs2-crosshair-codes/" },
        { text: "Best CS2 Settings for FPS", href: "/guides/cs2/best-cs2-settings-fps/" },
        { text: "CS2 Launch Options Guide", href: "/guides/cs2/cs2-launch-options/" },
        { text: "Best Gaming Mice for CS2", href: "/gaming-gear/best-gaming-mice-cs2/" },
        { text: "Best PC Builds for CS2", href: "/pc-builds/best-pc-build-cs2/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does ZywOo use in CS2?", answer: "ZywOo uses 400 DPI with 2.0 in-game sensitivity for an eDPI of 800. His Zoom Sensitivity Multiplier is 0.818. This eDPI of 800 is the most common among CS2 professionals and provides an excellent balance between rifle precision and AWP flick speed." },
      { question: "What PC does ZywOo use?", answer: "ZywOo plays on a PC with Intel Core i9-14900K CPU, NVIDIA RTX 4090 GPU, and 32 GB DDR5 RAM. His monitor is a Zowie XL2566K (360Hz TN panel). He uses a Logitech G Pro X Superlight 2 mouse with a Logitech G640 XL mousepad." },
      { question: "Should I copy ZywOo's settings exactly?", answer: "ZywOo's eDPI of 800 is the CS2 standard and an excellent starting point. However, he has over 10,000 hours of muscle memory with these values. The most important lesson from ZywOo is not his specific numbers but his philosophy: pick reasonable settings and never change them. Consistency beats optimization." },
      { question: "What graphics settings does ZywOo use?", answer: "ZywOo runs 1920x1080 16:9 with all graphics on Low, Anti-Aliasing None, Boost Player Contrast Enabled, V-Sync Disabled, and Motion Blur Disabled. He is one of the few top pros who plays native 1080p instead of stretched 4:3 resolution." },
      { question: "What crosshair does ZywOo use in CS2?", answer: "ZywOo uses a small static green crosshair with size 2, gap -3, thickness 0, no dot, and no outline. The tight gap (-3) creates a nearly closed crosshair that acts as a precise aim point for headshots. Copy his settings with: cl_crosshairsize 2; cl_crosshairgap -3; cl_crosshairthickness 0; cl_crosshaircolor 1." },
      { question: "How does ZywOo compare to s1mple's settings?", answer: "ZywOo's eDPI (800) is significantly lower than s1mple's (1236). ZywOo plays on native 1080p while s1mple used stretched 4:3 (1280x960). ZywOo uses Zoom Sensitivity 0.818 while s1mple used 1.0. Both are considered the greatest CS players ever, proving that very different settings can produce elite results." },
      { question: "How long does it take to adjust to ZywOo's sensitivity?", answer: "Most players need 2-3 weeks to fully adapt to a new CS2 sensitivity. If coming from a very different eDPI, change gradually — adjust by 10% per week. ZywOo's philosophy is to never change settings at all, so once you settle on a number close to 800 eDPI, commit to it permanently and let your muscle memory develop over months." },
    ],
  },
  {
    title: "iFerg COD Mobile Settings & HUD Layout (2026)",
    slug: "iferg-cod-mobile-settings",
    description:
      "iFerg's exact COD Mobile sensitivity, 4-finger claw HUD layout, graphics settings, and full device setup. Updated for CODM Season 4, 2026. Includes comparison with other top COD Mobile content creators and pros.",
    category: "pro-settings",
    subcategory: "cod-mobile",
    tags: ["cod-mobile", "iferg", "pro-settings"],
    date: "2026-03-07",
    updated: "2026-03-14",
    author: "RaidGG Team",
    player: "iFerg",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&h=450&fit=crop",
    imageAlt: "Mechanical keyboard for iFerg COD Mobile settings",
    sections: [
      // ── QUICK SUMMARY ──
      { type: "callout", variant: "info", html: "<strong>Quick copy:</strong> iFerg uses <strong>Standard 85, ADS Iron Sight 75, ADS 4x 55, Gyroscope Off</strong> with a 4-finger claw layout on an iPad Pro M4. He runs <strong>Very High graphics + Max FPS (60)</strong> with Depth of Field and Bloom Off. Verified from his latest YouTube stream (March 2026)." },

      // ── PLAYER BIO ──
      { type: "heading", level: 2, text: "Who Is iFerg?" },
      { type: "table", headers: ["Info", "Details"], rows: [
        ["<strong>Real Name</strong>", "Ferg"],
        ["<strong>IGN</strong>", "iFerg / iFergYT"],
        ["<strong>Team</strong>", "Content Creator (Independent)"],
        ["<strong>Role</strong>", "Aggressive Slayer / Content Creator"],
        ["<strong>Playstyle</strong>", "Fast-paced aggression, highlight-reel plays, run-and-gun"],
        ["<strong>Control Style</strong>", "4-Finger Claw (iPad)"],
        ["<strong>Notable Achievements</strong>", "Most subscribed CODM YouTuber, multiple Legendary rank seasons, community tournament wins"],
        ["<strong>Social Following</strong>", "8M+ YouTube, 3M+ Instagram"],
      ]},
      { type: "paragraph", html: "iFerg is the <strong>most influential COD Mobile content creator in the world</strong>, with over 8 million YouTube subscribers. He bridges the gap between competitive play and entertainment, showcasing what is possible on mobile when you combine optimized settings with dedicated practice. His <strong>4-finger claw grip on iPad</strong> setup has been adopted by millions of CODM players worldwide, and his sensitivity values are considered the gold standard for aggressive mobile FPS gameplay." },

      // ── SENSITIVITY SETTINGS ──
      { type: "heading", level: 2, text: "iFerg COD Mobile Sensitivity Settings" },
      { type: "paragraph", html: "These values are verified from iFerg's <strong>latest YouTube stream</strong> (March 2026). His sensitivity is optimized for <strong>fast hip-fire tracking and quick scope-in shots</strong> on iPad:" },
      { type: "specs", label: "Sensitivity", rows: [
        ["Sensitivity Mode", "Standard"],
        ["Standard (Hip-Fire)", "85"],
        ["ADS (Iron Sight)", "75"],
        ["ADS (2x Scope)", "70"],
        ["ADS (3x Scope)", "65"],
        ["ADS (4x Scope)", "55"],
        ["ADS (6x Scope)", "45"],
        ["ADS (Sniper Scope)", "40"],
      ]},
      { type: "paragraph", html: "<strong>Why these work:</strong> iFerg's Standard sensitivity at 85 is high enough for fast hip-fire tracking during run-and-gun gameplay but not so high that it causes over-aiming. His ADS values decrease progressively for each scope level, with Sniper Scope at 40 providing stable long-range precision. The per-scope tuning is critical in CODM where you switch between weapons with wildly different scope magnifications." },

      // ── HUD / CONTROLS ──
      { type: "heading", level: 2, text: "iFerg HUD & Controls Layout" },
      { type: "specs", label: "Controls Configuration", rows: [
        ["Control Style", "4-Finger Claw (iPad)"],
        ["Left Fire Button", "Top-left corner (index finger)"],
        ["Right Fire Button", "Top-right corner (index finger)"],
        ["Aim (Left Thumb)", "Bottom-left joystick"],
        ["Camera (Right Thumb)", "Bottom-right joystick area"],
        ["Jump / Crouch", "Right thumb accessible"],
        ["ADS Button", "Dedicated (no tap-to-ADS)"],
        ["Gyroscope", "Off"],
      ]},

      // ── ADS / CROSSHAIR ──
      { type: "heading", level: 2, text: "iFerg ADS & Aim Settings" },
      { type: "specs", label: "ADS Configuration", rows: [
        ["ADS Mode", "Hold to ADS"],
        ["Hip-Fire Mode", "Auto-fire disabled"],
        ["Aim Assist", "On"],
        ["Quick Scope", "Enabled"],
        ["Fixed Joystick", "On"],
        ["Joystick Size", "Large"],
      ]},

      // ── GRAPHICS SETTINGS ──
      { type: "heading", level: 2, text: "iFerg Graphics Settings" },
      { type: "specs", label: "Video & Graphics", rows: [
        ["Graphics Quality", "Very High"],
        ["Frame Rate", "Max (60 FPS on iPad Pro)"],
        ["Depth of Field", "Off"],
        ["Bloom", "Off"],
        ["Style", "Default"],
        ["Auto Adjust Graphics", "Off"],
        ["Real-Time Shadows", "Off"],
        ["Ragdoll", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Why Very High + 60 FPS:</strong> Unlike mobile BR games where Smooth graphics are standard, CODM is less CPU-intensive and the iPad Pro M4 can handle Very High at a stable 60 FPS. iFerg keeps <strong>Depth of Field and Bloom Off</strong> for visual clarity, and disables <strong>Real-Time Shadows and Ragdoll</strong> to maintain consistent frame times during intense multiplayer firefights." },

      // ── DEVICE & GEAR ──
      { type: "heading", level: 2, text: "iFerg Device & Gear Setup" },
      { type: "specs", label: "Device & Accessories", rows: [
        ["Primary Device", "iPad Pro M4 (12.9-inch)"],
        ["Secondary Device", "iPhone 16 Pro Max"],
        ["Primary Display", "12.9-inch Liquid Retina XDR, 120Hz"],
        ["Primary Processor", "Apple M4"],
        ["RAM (iPad)", "16 GB"],
        ["Controls Layout", "4-Finger Claw"],
        ["Accessories", "Gaming trigger attachment, phone stand"],
        ["Phone Cooler", "Yes — for extended streaming"],
        ["Audio", "AirPods Pro (low latency mode)"],
      ]},

      // ── COMPARISON WITH OTHER PROS ──
      { type: "heading", level: 2, text: "iFerg vs Other COD Mobile Pros — Settings Comparison" },
      { type: "paragraph", html: "Here is how iFerg's settings compare to other top COD Mobile content creators and competitive players:" },
      { type: "table", headers: ["Setting", "iFerg", "HawksNest", "Bobby Plays", "ParkerTheSlayer", "Jokesta"], rows: [
        ["<strong>Standard Sens</strong>", "85", "80", "75", "90", "78"],
        ["<strong>ADS (Iron Sight)</strong>", "75", "70", "65", "80", "72"],
        ["<strong>ADS (4x)</strong>", "55", "50", "45", "60", "48"],
        ["<strong>Sniper Scope</strong>", "40", "35", "30", "45", "32"],
        ["<strong>Control Style</strong>", "4-finger claw", "4-finger claw", "2-thumb", "4-finger claw", "3-finger"],
        ["<strong>Device</strong>", "iPad Pro M4", "iPad Pro M2", "iPhone 15 Pro Max", "iPad Air M2", "iPhone 15 Pro"],
        ["<strong>Gyroscope</strong>", "Off", "Off", "Off", "Off", "Off"],
      ]},
      { type: "paragraph", html: "<strong>Key insight:</strong> iFerg's sensitivity is among the <strong>highest of the major CODM content creators</strong>, reflecting his aggressive run-and-gun playstyle. Bobby Plays uses lower values with 2-thumb controls for a more casual experience. ParkerTheSlayer is the only creator with higher sensitivity, matching his extremely aggressive slide-cancel playstyle. Most CODM creators do not use gyroscope, unlike mobile BR games." },

      // ── HOW TO ADAPT ──
      { type: "heading", level: 2, text: "How to Adapt iFerg's Settings to Your Setup" },
      { type: "list", style: "numbered", items: [
        "<strong>Start with claw grip gradually</strong> — move only the right fire button to the top corner first, using one index finger. Play with this for at least a week before adding a second top button.",
        "If you play on a <strong>phone instead of iPad</strong>, reduce Standard Sensitivity by 10-15%. Phone screens are smaller, so the same swipe covers more in-game distance.",
        "If you use <strong>2-thumb controls</strong>, increase Standard Sensitivity by 5-10% to compensate for the limited input speed of thumbs-only play.",
        "Turn off <strong>Depth of Field, Bloom, Real-Time Shadows, and Ragdoll</strong> regardless of your device — these settings reduce visual clarity and waste processing power.",
        "Customize <strong>per-scope sensitivity</strong> carefully — iFerg's descending values (85 > 75 > 70 > 65 > 55 > 45 > 40) ensure each scope level feels proportionally slower for precision.",
        "Practice in <strong>Shipment 24/7 or Free-For-All</strong> before taking new settings to ranked — these fast-paced modes give you the most aim practice per minute.",
      ]},
      { type: "callout", variant: "warning", html: "<strong>Don't copy settings blindly.</strong> iFerg has <strong>years of experience</strong> with 4-finger claw on an iPad Pro. His sensitivity is tuned for a 12.9-inch screen with fast claw input. Use his values as a <strong>starting point</strong>, adjust for your device size, control style, and grip comfort, and commit for at least two weeks before judging. Switching to claw grip takes 3-4 weeks to feel natural." },

      // ── INTERNAL LINKS ──
      { type: "internal-links", title: "Related COD Mobile Content on RaidGG", links: [
        { text: "Best COD Mobile Sensitivity Settings", href: "/guides/cod-mobile/best-cod-mobile-sensitivity/" },
        { text: "COD Mobile Best Guns Tier List", href: "/guides/cod-mobile/best-guns-tier-list/" },
        { text: "COD Mobile Redeem Codes (Today)", href: "/redeem-codes/cod-mobile/" },
        { text: "Best Gaming Phones Under 25K", href: "/gaming-phones/best-gaming-phones-under-25k/" },
        { text: "Best Gaming Phones Under 15K", href: "/gaming-phones/best-gaming-phones-under-15k/" },
      ]},
    ],
    faqs: [
      { question: "What sensitivity does iFerg use in COD Mobile?", answer: "iFerg uses Standard sensitivity 85, ADS Iron Sight 75, ADS 4x Scope 55, and Sniper Scope 40. He uses Standard sensitivity mode (not Advanced) with per-scope tuning. Gyroscope is Off. These values are optimized for aggressive run-and-gun play on iPad with 4-finger claw." },
      { question: "What device does iFerg use for COD Mobile?", answer: "iFerg primarily plays on an iPad Pro M4 (12.9-inch) with a 120Hz Liquid Retina XDR display and M4 processor. He also uses an iPhone 16 Pro Max for casual content. He uses a gaming trigger attachment and phone stand as accessories." },
      { question: "Should I copy iFerg's COD Mobile settings exactly?", answer: "No. iFerg's settings are tuned for a 12.9-inch iPad Pro with 4-finger claw grip and years of practice. If you play on a phone, reduce sensitivity by 10-15%. If you use 2-thumb controls, increase sensitivity by 5-10%. Give any new settings at least 2 weeks, and give claw grip 3-4 weeks to feel natural." },
      { question: "What graphics settings does iFerg use?", answer: "iFerg uses Very High graphics with Max frame rate (60 FPS), Depth of Field Off, Bloom Off, Real-Time Shadows Off, Ragdoll Off, and Default style. The iPad Pro M4 can handle Very High at stable 60 FPS, but lower-end devices should drop to Medium or High." },
      { question: "Does iFerg use gyroscope in COD Mobile?", answer: "No. iFerg does not use gyroscope in COD Mobile. Unlike BGMI and PUBG Mobile where gyroscope is common, most top CODM players and content creators play without gyroscope. iFerg's 4-finger claw layout provides enough input versatility without needing device tilt." },
      { question: "How does iFerg compare to other COD Mobile creators?", answer: "iFerg's sensitivity (Standard 85) is among the highest of major CODM creators. HawksNest uses 80, Bobby Plays uses 75, and Jokesta uses 78. iFerg and HawksNest both use 4-finger claw on iPad, while Bobby Plays uses 2-thumb on phone. All top CODM creators disable Depth of Field and Bloom." },
      { question: "How long does it take to adjust to iFerg's settings and claw grip?", answer: "New sensitivity values take 10-14 days to feel comfortable. However, switching to 4-finger claw grip takes 3-4 weeks to feel natural. Start by adding one top button (fire) and using one index finger for a week. Only add the second button once the first feels automatic. Practice in casual modes exclusively during the transition." },
    ],
  },
];

export default posts;
