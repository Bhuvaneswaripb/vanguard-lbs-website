/**
 * VANGUARD — LBSITW ESPORTS CLUB CENTRAL DATA CONFIGURATION
 * 
 * Instructions:
 * Edit the fields below to update content across the entire website.
 * All components retrieve their content directly from this single file.
 */

export const clubConfig = {
  name: "VANGUARD",
  fullName: "VANGUARD — LBSITW ESPORTS CLUB",
  institution: "LBS Institute of Technology for Women (LBSITW)",
  location: "Trivandrum, Kerala, India",
  tagline: "Pioneering Competitive Gaming & Digital Innovation",
  description: "Vanguard is the premier official esports organization and gaming community of LBSITW, dedicated to fostering elite competitive talent, tournament management, and cutting-edge gaming culture.",
  foundedYear: "2023",
  
  // Official Logo paths & Character assets (located in public/assets/)
  logoFull: "/assets/vanguard-logo.png",
  logoEmblem: "/assets/vanguard-emblem.png",
  logoOpaque: "/assets/vanguard-logo-opaque.png",
  femaleWarriorImg: "/assets/female-warrior.jpg"
};

/**
 * EDITABLE STATISTICS (THE ARENA / ABOUT SECTION)
 */
export const statisticsData = [
  { id: "players", label: "ACTIVE PLAYERS", value: 120, suffix: "+", description: "Registered roster across Valorant, BGMI, Rocket League & CS2" },
  { id: "events", label: "TOURNAMENTS HELD", value: 18, suffix: "", description: "Inter-college championships, LAN showcases & online scrims" },
  { id: "achievements", label: "PODIUM FINISHES", value: 24, suffix: "+", description: "State and national esports trophies & honorable mentions" },
  { id: "community", label: "COMMUNITY MEMBERS", value: 850, suffix: "+", description: "Active student gamers, streamers, casters & tactical analysts" }
];

/**
 * BATTLEFIELD (EVENTS SECTION)
 * Separate into upcoming and past events.
 */
export const eventsData = {
  upcoming: [
    {
      id: "vanguard-apex-2026",
      title: "VANGUARD APEX '26: VALORANT SHOWDOWN",
      type: "VALORANT",
      date: "OCTOBER 14-16, 2026",
      time: "18:00 IST",
      location: "LBSITW MAIN AUDITORIUM & TWITCH LIVE",
      status: "REGISTRATION OPEN",
      badge: "MAJOR TOURNAMENT",
      prizePool: "₹25,000 INR",
      description: "The flagship 5v5 tactical shooter tournament featuring top collegiate rosters competing across 3 intensive knockout rounds.",
      registrationUrl: "https://forms.google.com/placeholder-vanguard-apex",
      rulesUrl: "#",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "bgmi-survival-clash",
      title: "BGMI SURVIVAL CLASH: SEASON 4",
      type: "BGMI",
      date: "NOVEMBER 02, 2026",
      time: "16:00 IST",
      location: "VANGUARD DISCORD & YOUTUBE",
      status: "UPCOMING",
      badge: "MOBILE LEAGUE",
      prizePool: "₹15,000 INR",
      description: "Battle Royale chaos across Erangel and Miramar. 16 squads drop in, only one claims the championship dinner.",
      registrationUrl: "https://forms.google.com/placeholder-bgmi-clash",
      rulesUrl: "#",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rocket-league-3v3",
      title: "CYBER TURBO: ROCKET LEAGUE 3V3",
      type: "ROCKET LEAGUE",
      date: "DECEMBER 08, 2026",
      time: "17:30 IST",
      location: "ONLINE / VANGUARD ARENA",
      status: "ANNOUNCED",
      badge: "COLLISION ARENA",
      prizePool: "₹10,000 INR",
      description: "High-flying aerial physics, supersonic rocket cars, and intense goal-line action in this fast-paced 3v3 cup.",
      registrationUrl: "https://forms.google.com/placeholder-rocket-league",
      rulesUrl: "#",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
    }
  ],
  past: [
    {
      id: "inter-college-lan-2025",
      title: "VANGUARD INVITATIONAL LAN 2025",
      type: "MULTI-TITLES",
      date: "DECEMBER 12, 2025",
      location: "LBSITW CYBER COMPLEX",
      status: "COMPLETED",
      badge: "CHAMPIONSHIP LAN",
      winner: "TEAM VALKYRIE (LBSITW)",
      description: "Our landmark 2-day offline festival drawing over 400 attendees and 32 competing teams from across Kerala.",
      image: "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "chess-tactics-open",
      title: "MIND MATRIX: SPEED CHESS ARENA",
      type: "SPEED CHESS",
      date: "SEPTEMBER 20, 2025",
      location: "CHESS.COM VANGUARD CLUB",
      status: "COMPLETED",
      badge: "TACTICAL INTEL",
      winner: "ANANYA R. (CSE)",
      description: "3+0 Blitz battle testing strategic foresight, hyper-speed calculation, and resilience under extreme clock pressure.",
      image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80"
    }
  ]
};

/**
 * LIVE INTEL (ANNOUNCEMENTS SECTION)
 * Formatted as command center transmissions.
 */
export const announcementsData = [
  {
    id: "intel-001",
    codeName: "TRANSMISSION #042",
    title: "VANGUARD APEX '26 REGISTRATIONS ARE OFFICIALLY LIVE",
    date: "SEPTEMBER 14, 2026",
    category: "MAJOR NOTICE",
    status: "ACTIVE BROADCAST",
    summary: "Form your 5-player roster and lock in your team slot before slots reach full capacity.",
    fullDetails: "Registrations for Vanguard Apex '26 have opened to all LBSITW departments and invited collegiate rosters. The tournament bracket will feature double elimination, seed-based matchmaking, and live casting on Twitch.",
    actionUrl: "https://forms.google.com/placeholder-vanguard-apex",
    actionText: "REGISTER ROSTER NOW"
  },
  {
    id: "intel-002",
    codeName: "TRANSMISSION #041",
    title: "VANGUARD STREAM LAB & EDITING SUITE UNVEILED",
    date: "AUGUST 28, 2026",
    category: "FACILITY INTEL",
    status: "ARCHIVED",
    summary: "Dedicated high-performance streaming equipment installed in the LBSITW Innovation Wing.",
    fullDetails: "Our media and technical teams have upgraded the command station with RTX-powered rigs, dual monitors, hypercardioid mics, and dedicated high-speed fiber channels for broadcasts and student content creators.",
    actionUrl: "#",
    actionText: "READ SYSTEM SPECS"
  },
  {
    id: "intel-003",
    codeName: "TRANSMISSION #040",
    title: "EXECOM RECRUITMENT DRIVE FOR 2026-2027",
    date: "AUGUST 10, 2026",
    category: "RECRUITMENT",
    status: "CLOSED",
    summary: "Applications invited for Design, Media, Web, and Event Logistics operational leads.",
    fullDetails: "The VANGUARD Control Room expanded its executive operations. Congratulations to all newly onboarded core leads and team associates representing LBSITW Esports.",
    actionUrl: "#",
    actionText: "VIEW TEAM ROSTER"
  }
];

/**
 * HALL OF VICTORY (ACHIEVEMENTS TIMELINE)
 */
export const achievementsData = [
  {
    id: "ach-2026-1",
    year: "2026",
    title: "1ST PLACE — KERALA STATE FEMALE ESPORTS SUMMIT",
    competition: "State Esports Championship 2026",
    result: "GOLD MEDAL (VALORANT 5V5)",
    description: "Vanguard Valkyries dominated the grand finals 3-0 against top varsity teams, securing a flawless tournament streak.",
    highlightBadge: "STATE CHAMPIONS"
  },
  {
    id: "ach-2025-2",
    year: "2025",
    title: "RUNNERS UP — ALL-INDIA INTER-COLLEGIATE BGMI ARENA",
    competition: "National Cyber Cup 2025",
    result: "SILVER MEDAL & BEST FRAGGER AWARD",
    description: "Secured 2nd place in the survival leaderboard out of 128 competing collegiate squads nationwide.",
    highlightBadge: "NATIONAL FINALISTS"
  },
  {
    id: "ach-2025-1",
    year: "2025",
    title: "BEST STUDENT ORGANIZATIONAL BRAND AWARD",
    competition: "LBSITW Annual Excellence Awards",
    result: "COMMENDATION OF HONOR",
    description: "Awarded for exceptional event execution, digital branding, community engagement, and promoting esports in tech education.",
    highlightBadge: "CAMPUS HONOR"
  },
  {
    id: "ach-2024-1",
    year: "2024",
    title: "FOUNDING CHRONICLES & INAUGURAL INVITATIONAL",
    competition: "Vanguard Genesis Cup 2024",
    result: "100+ PARTICIPANTS",
    description: "Official launch of VANGUARD at LBSITW, establishing the institution's official esports flag.",
    highlightBadge: "FOUNDING MILESTONE"
  }
];

/**
 * CONTROL ROOM (EXECOM TEAM DIRECTORY)
 * Divided into departments. Uses clear placeholders.
 */
export const execomDepartments = ["ALL", "LEADERSHIP", "DESIGN TEAM", "MEDIA TEAM", "WEB TEAM"];

export const execomMembers = [
  {
    id: "exec-01",
    name: "[MEMBER NAME]",
    role: "CLUB LEAD",
    department: "LEADERSHIP",
    year: "4TH YEAR, CSE",
    tagline: "Directing strategic vision & campus operations",
    bio: "Pioneering collegiate esports culture at LBSITW with focus on high-impact tournament execution.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "lead@lbsitw.ac.in" }
  },
  {
    id: "exec-02",
    name: "[MEMBER NAME]",
    role: "CO-LEAD & OPERATIONS",
    department: "LEADERSHIP",
    year: "4TH YEAR, ECE",
    tagline: "Overseeing logistics, roster welfare & player scouting",
    bio: "Managing tournament operations, sponsor relations, and multi-team scheduling.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "colead@lbsitw.ac.in" }
  },
  {
    id: "exec-03",
    name: "[MEMBER NAME]",
    role: "HEAD OF DESIGN",
    department: "DESIGN TEAM",
    year: "3RD YEAR, IT",
    tagline: "Crafting atmospheric motion graphics & brand aesthetics",
    bio: "Architecting visual direction, stream overlays, promotional motion assets, and stadium graphics.",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "design@lbsitw.ac.in" }
  },
  {
    id: "exec-04",
    name: "[MEMBER NAME]",
    role: "WEB ARCHITECT & DEV LEAD",
    department: "WEB TEAM",
    year: "3RD YEAR, CSE",
    tagline: "Building digital platforms & arena user experiences",
    bio: "Specializing in React, WebGL animations, real-time tournament leaderboards, and UI design.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "web@lbsitw.ac.in" }
  },
  {
    id: "exec-05",
    name: "[MEMBER NAME]",
    role: "MEDIA & BROADCAST DIRECTOR",
    department: "MEDIA TEAM",
    year: "3RD YEAR, EEE",
    tagline: "Managing livestreams, shoutcasting & video content",
    bio: "Directing live production broadcasts, tournament replays, hype reels, and social clips.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "media@lbsitw.ac.in" }
  },
  {
    id: "exec-06",
    name: "[MEMBER NAME]",
    role: "SENIOR UI/UX ASSOCIATE",
    department: "WEB TEAM",
    year: "2ND YEAR, IT",
    tagline: "Designing sleek interfaces & digital interactions",
    bio: "Focused on frontend component systems, responsive design, and digital arena visual polish.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    socials: { linkedin: "https://linkedin.com", instagram: "https://instagram.com", email: "web-ui@lbsitw.ac.in" }
  }
];

/**
 * THE NETWORK (COMMUNITY SECTION - SOCIAL NODES)
 * Interactive node graph visualization data.
 */
export const communityNetwork = {
  centerNode: {
    id: "vanguard-core",
    label: "VANGUARD",
    sublabel: "LBSITW ESPORTS HUB",
    description: "Central command nexus for LBSITW competitive gaming",
    logoUrl: "/assets/vanguard-emblem.png"
  },
  nodes: [
    {
      id: "node-instagram",
      platform: "INSTAGRAM",
      handle: "@vanguard_lbsitw",
      url: "https://instagram.com/vanguard_lbsitw",
      color: "#e1306c",
      glowColor: "rgba(225, 48, 108, 0.4)",
      icon: "Instagram",
      metrics: "Highlights & Hype Reels",
      status: "LIVE"
    },
    {
      id: "node-linkedin",
      platform: "LINKEDIN",
      handle: "Vanguard Esports LBSITW",
      url: "https://linkedin.com/company/vanguard-lbsitw",
      color: "#0077b5",
      glowColor: "rgba(0, 119, 181, 0.4)",
      icon: "Linkedin",
      metrics: "Corporate & Event Reports",
      status: "CONNECTED"
    },
    {
      id: "node-youtube",
      platform: "YOUTUBE",
      handle: "Vanguard Esports Channel",
      url: "https://youtube.com/@vanguard_lbsitw",
      color: "#ff0000",
      glowColor: "rgba(255, 0, 0, 0.4)",
      icon: "Youtube",
      metrics: "Match VODs & Livestreams",
      status: "BROADCASTING"
    },
    {
      id: "node-discord",
      platform: "DISCORD ARENA",
      handle: "Vanguard LBSITW Server",
      url: "https://discord.gg/vanguard-lbsitw",
      color: "#5865f2",
      glowColor: "rgba(88, 101, 242, 0.4)",
      icon: "MessageSquare",
      metrics: "Voice Lobbies & Scrims",
      status: "ONLINE"
    },
    {
      id: "node-gform",
      platform: "GOOGLE FORM",
      handle: "Membership & Roster Form",
      url: "https://forms.google.com/placeholder-join-vanguard",
      color: "#0f9d58",
      glowColor: "rgba(15, 157, 88, 0.4)",
      icon: "FileText",
      metrics: "Roster Applications",
      status: "ACCEPTING"
    }
  ]
};
