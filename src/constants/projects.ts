export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  category: string;
  featured: boolean;
  status: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  lessonsLearned: string[];
}

export const projects: Project[] = [
  {
    id: "nagpur-ecommerce",
    title: "Nagpur E-Commerce",
    description:
      "A premium Next.js platform for mobile accessories featuring glassmorphic design, custom animations, and localised features for Nagpur, India.",
    longDescription:
      "A premium Next.js E-Commerce platform tailored for mobile accessories, featuring a stunning glassmorphic design, custom animations, and localized features for Nagpur, India. Built with a modern stack emphasising performance, aesthetics, and a seamless shopping experience.",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    liveUrl: "https://github.com/KernelShellFail/Nagpur-E-Commerce",
    githubUrl: "https://github.com/KernelShellFail/Nagpur-E-Commerce",
    image: "/images/some.jpg",
    category: "E-Commerce",
    featured: true,
    status: "Production Ready",
    features: [
      "Glassmorphic UI with custom animations",
      "Product catalog with search & filter",
      "Shopping cart & checkout flow",
      "Supabase backend integration",
      "Responsive mobile-first design",
      "Localised Nagpur delivery area",
    ],
    challenges: [
      "Implementing glassmorphic design without performance hits",
      "Building a seamless checkout with Supabase",
      "Handling local delivery zone logic",
    ],
    solutions: [
      "Used CSS backdrop-filter with hardware acceleration",
      "Leveraged Supabase real-time for cart sync",
      "Implemented geolocation-based delivery validation",
    ],
    lessonsLearned: [
      "Performance and aesthetics can coexist with careful CSS engineering",
      "Server components drastically reduce client JS bundle",
      "Supabase is a powerful alternative to traditional backends",
    ],
  },
  {
    id: "ishant-ecom",
    title: "Ishant E-Commerce",
    description:
      "A production-ready dark-themed tech accessories store with glassmorphism, glowing borders, and a high-performance Next.js frontend.",
    longDescription:
      "A complete, production-ready, premium dark-themed e-commerce experience tailored for a modern tech accessories startup. Combines the visual design language of Nothing (transparent cyberpunk), Linear (glowing borders), Vercel (fast transitions), and Apple minimalism with Next.js 15 App Router.",
    techStack: ["Next.js", "Tailwind CSS", "PocketBase", "TypeScript"],
    liveUrl: "https://github.com/KernelShellFail/ishant-ecom",
    githubUrl: "https://github.com/KernelShellFail/ishant-ecom",
    image: "/images/some.jpg",
    category: "E-Commerce",
    featured: true,
    status: "Production Ready",
    features: [
      "Dark-themed glassmorphism design system",
      "Glowing border animations and micro-interactions",
      "Next.js App Router with server components",
      "PocketBase backend for product management",
      "Responsive across all devices",
      "Optimised Core Web Vitals",
    ],
    challenges: [
      "Maintaining dark theme consistency across all pages",
      "Integrating PocketBase with Next.js server components",
      "Achieving smooth page transitions",
    ],
    solutions: [
      "Created a centralised theme token system in CSS",
      "Used PocketBase SDK with server-side data fetching",
      "Implemented View Transitions API for smooth navigation",
    ],
    lessonsLearned: [
      "A cohesive design system saves hours of rework",
      "PocketBase is excellent for rapid backend prototyping",
      "Dark mode e-commerce requires careful contrast planning",
    ],
  },
  {
    id: "food-delivery",
    title: "Food Delivery Management",
    description:
      "A multi-role web application connecting customers, restaurant owners, delivery partners, and administrators in a seamless food ecosystem.",
    longDescription:
      "A comprehensive, multi-role web application for managing food ordering and delivery. This system connects Customers, Restaurant Owners, Delivery Partners, and Administrators in a seamless ecosystem with role-specific dashboards and real-time order tracking.",
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://github.com/KernelShellFail/FoodDelivery",
    githubUrl: "https://github.com/KernelShellFail/FoodDelivery",
    image: "/images/some.jpg",
    category: "Full Stack",
    featured: true,
    status: "Development",
    features: [
      "Multi-role authentication system",
      "Restaurant browsing with menu view",
      "Cart management and order placement",
      "Delivery partner assignment",
      "Admin dashboard for monitoring",
      "Order history and status tracking",
    ],
    challenges: [
      "Designing a database schema supporting four distinct user roles",
      "Implementing real-time order status updates",
      "Managing concurrent order assignments for delivery partners",
    ],
    solutions: [
      "Normalised relational schema with role-based access control",
      "Used AJAX polling for order status refresh",
      "Implemented queue-based delivery assignment system",
    ],
    lessonsLearned: [
      "Multi-role systems require careful UX to avoid confusion",
      "Database indexing is critical for order query performance",
      "Session management must handle concurrent logins gracefully",
    ],
  },
  {
    id: "railway-management",
    title: "Railway Reservation System",
    description:
      "A PHP-based system for managing train schedules, routes, seat reservations, and passenger bookings with role-based admin controls.",
    longDescription:
      "A comprehensive PHP-based railway reservation system that allows administrators to manage trains and routes while passengers can search, book, and manage their tickets. Features secure authentication, seat availability tracking, and booking history.",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/KernelShellFail/RailwayManagement",
    githubUrl: "https://github.com/KernelShellFail/RailwayManagement",
    image: "/images/some.jpg",
    category: "Full Stack",
    featured: false,
    status: "Development",
    features: [
      "Admin train and route management",
      "Passenger seat search and booking",
      "Secure authentication with session management",
      "Seat availability tracking with PNR status",
      "Booking history and ticket cancellation",
      "Route management with timing and pricing",
    ],
    challenges: [
      "Implementing seat locking during active bookings",
      "Designing a flexible route management system",
      "Handling partial cancellations and refunds",
    ],
    solutions: [
      "Used temporary seat hold with expiry timestamps",
      "Created a station-route junction table for flexible routing",
      "Implemented pro-rata refund calculation logic",
    ],
    lessonsLearned: [
      "Concurrency control is essential for reservation systems",
      "Normalised route data simplifies complex queries",
      "Testing with realistic data volumes reveals edge cases",
    ],
  },
  {
    id: "player-auction",
    title: "Player Auction Platform",
    description:
      "A multi-game player auction platform supporting cricket, football, e-sports, and more with live bidding and budget management.",
    longDescription:
      "A comprehensive PHP-based player auction platform designed to support player auctions for any type of game including Cricket, Football, E-Sports, Kabaddi, and Fantasy Leagues. Features multi-role support for Admin, Team Owner, and Viewer modes with live bidding and budget tracking.",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://github.com/KernelShellFail/PlayerAuction",
    githubUrl: "https://github.com/KernelShellFail/PlayerAuction",
    image: "/images/some.jpg",
    category: "Full Stack",
    featured: false,
    status: "Development",
    features: [
      "Multi-game category support",
      "Live bidding system with timers",
      "Role-based access (Admin, Owner, Viewer)",
      "Team budget management",
      "Player database with stats",
      "Auction history and reports",
    ],
    challenges: [
      "Simulating live auction mechanics without WebSockets",
      "Budget constraint enforcement across multiple bids",
      "Supporting different rules for different game types",
    ],
    solutions: [
      "Used server-sent events for bid updates",
      "Implemented server-side budget validation on every bid",
      "Created a configurable rules engine per game category",
    ],
    lessonsLearned: [
      "State management complexity grows exponentially with roles",
      "Optimistic UI updates improve perceived performance",
      "Configurable systems are harder but more valuable",
    ],
  },
  {
    id: "impulse-guard",
    title: "Impulse Guard",
    description:
      "A Chrome extension and Node.js backend that curbs impulse buying by enforcing a waiting period and calculating time cost.",
    longDescription:
      "A Chrome Extension and Node.js backend system designed to curb impulse buying. By intercepting 'Buy Now' and 'Add to Cart' buttons on e-commerce sites (optimised for Amazon India), it introduces a friction layer that calculates the time cost of the item based on your hourly wage and enforces a mandatory waiting period.",
    techStack: ["JavaScript", "Node.js", "Chrome Extensions API", "Google Gemini AI"],
    liveUrl: "https://github.com/KernelShellFail/impulse-guard",
    githubUrl: "https://github.com/KernelShellFail/impulse-guard",
    image: "/images/some.jpg",
    category: "Browser Extension",
    featured: true,
    status: "Development",
    features: [
      "Intercepts buy buttons on e-commerce sites",
      "AI analysis via Google Gemini",
      "Time cost calculation based on hourly wage",
      "Mandatory waiting period enforcement",
      "Customisable spending limits",
      "Shopping behaviour analytics",
    ],
    challenges: [
      "DOM manipulation on frequently changing e-commerce pages",
      "Integrating Gemini AI with minimal latency",
      "Persisting user settings across browser sessions",
    ],
    solutions: [
      "Used MutationObserver for dynamic content detection",
      "Cached AI responses with aggressive TTL strategy",
      "Leveraged chrome.storage.sync for cross-device sync",
    ],
    lessonsLearned: [
      "Browser extension development has unique debugging challenges",
      "AI integration adds significant user value",
      "Privacy-first design is critical for extension adoption",
    ],
  },
  {
    id: "codepath",
    title: "CodePath",
    description:
      "An interactive educational platform to learn programming in 30 days with code examples, quizzes, and comprehensive learning paths.",
    longDescription:
      "A modern, interactive educational website designed to teach various programming languages and data structures. Built with responsive design, interactive code examples, syntax highlighting, learning quizzes, and comprehensive learning paths that guide beginners from zero to job-ready.",
    techStack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://github.com/KernelShellFail/CodePath",
    githubUrl: "https://github.com/KernelShellFail/CodePath",
    image: "/images/some.jpg",
    category: "Education",
    featured: true,
    status: "Development",
    features: [
      "30-day structured learning paths",
      "Interactive code examples with syntax highlighting",
      "Knowledge-check quizzes after each module",
      "Progress tracking across courses",
      "Multiple programming languages supported",
      "Glassmorphism UI with dark mode",
    ],
    challenges: [
      "Creating curriculum that works for different learning speeds",
      "Building interactive code blocks without a heavy editor",
      "Designing quizzes that genuinely test understanding",
    ],
    solutions: [
      "Modular lesson structure with optional deep-dives",
      "Used Prism.js for lightweight syntax highlighting",
      "Mixed question types: MCQ, fill-blanks, and code output",
    ],
    lessonsLearned: [
      "Teaching programming requires concrete examples, not theory",
      "Interactive elements dramatically improve retention",
      "Progress visualisation motivates continued learning",
    ],
  },
  {
    id: "discord-bot",
    title: "Truth or Dare Discord Bot",
    description:
      "A feature-rich Discord.js v14 bot with Prisma ORM, slash commands, and ESM support for interactive server games.",
    longDescription:
      "A Truth or Dare Discord Bot built with Discord.js v14 and ESM, featuring slash commands, Prisma ORM for persistent storage, CI/CD pipeline, and comprehensive moderation tools. Designed for community servers to run interactive and fun truth-or-dare sessions.",
    techStack: ["TypeScript", "Discord.js", "Prisma ORM", "Node.js"],
    liveUrl: "https://github.com/KernelShellFail/DiscordBot",
    githubUrl: "https://github.com/KernelShellFail/DiscordBot",
    image: "/images/some.jpg",
    category: "Bot",
    featured: false,
    status: "Production Ready",
    features: [
      "Slash command support (Discord.js v14)",
      "Prisma ORM with SQLite/PostgreSQL",
      "CI/CD with GitHub Actions",
      "Moderation and auto-mod features",
      "Customisable question pools",
      "Leaderboard and statistics tracking",
    ],
    challenges: [
      "Handling Discord API rate limits at scale",
      "Designing a scalable database schema for game state",
      "Implementing ESM across the entire codebase",
    ],
    solutions: [
      "Implemented queue-based command processing",
      "Used Prisma with connection pooling",
      "Fully migrated to ESM with proper package.json config",
    ],
    lessonsLearned: [
      "Discord bot development requires robust error handling",
      "ORM abstraction simplifies database migrations",
      "TypeScript catches category of runtime errors at build time",
    ],
  },
  {
    id: "her-birthday",
    title: "Her Birthday",
    description:
      "An interactive birthday gift website with cinematic transitions, particle effects, and glassmorphism elements.",
    longDescription:
      "A beautifully crafted interactive birthday gift website combining cinematic transitions, frosted glassmorphism elements, real-time particle mechanics, and multiple interactive surprises. Built with love for a special someone, featuring photo galleries, love letters, and animated countdowns.",
    techStack: ["JavaScript", "HTML", "CSS", "Canvas API"],
    liveUrl: "https://kernelshellfail.github.io/HerBirthday/",
    githubUrl: "https://github.com/KernelShellFail/HerBirthday",
    image: "/images/some.jpg",
    category: "Creative",
    featured: false,
    status: "Production Ready",
    features: [
      "Cinematic page transition animations",
      "Real-time particle effects system",
      "Glassmorphism design throughout",
      "Interactive photo gallery with lightbox",
      "Animated countdown timer",
      "Responsive and mobile-optimised",
    ],
    challenges: [
      "Achieving smooth 60fps canvas particle animations",
      "Creating cinematic transitions without a framework",
      "Ensuring all animations work on mobile devices",
    ],
    solutions: [
      "Used requestAnimationFrame with object pooling for particles",
      "Leveraged CSS animations with hardware acceleration",
      "Implemented touch-friendly interactions for mobile",
    ],
    lessonsLearned: [
      "Vanilla JS can achieve stunning results without frameworks",
      "Performance profiling is essential for animation-heavy pages",
      "Emotional design creates memorable user experiences",
    ],
  },
  {
    id: "rental-management-system",
    title: "Rental Management System",
    description:
      "A high-availability rental ecosystem featuring real-time availability tracking, dynamic reporting modules, and multi-tier user authentication.",
    longDescription:
      "Developed a comprehensive rental management platform that handles end-to-end property rental workflows. The system features real-time availability tracking, dynamic reporting modules, secure multi-tier user authentication, and an intuitive dashboard for property managers.",
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://kernelshellfail.github.io/Rental/",
    githubUrl: "https://github.com/KernelShellFail/Rental",
    image: "/images/some.jpg",
    category: "Full Stack",
    featured: true,
    status: "Production Ready",
    features: [
      "Real-time availability tracking",
      "Dynamic reporting modules",
      "Multi-tier user authentication",
      "Property management dashboard",
      "Tenant communication system",
      "Payment tracking",
    ],
    challenges: [
      "Implementing real-time availability without WebSockets",
      "Designing a secure multi-role auth system",
      "Optimizing complex SQL queries for reporting",
    ],
    solutions: [
      "Used efficient polling with server-sent events",
      "Built role-based access control with PHP sessions and JWT",
      "Implemented indexed views and query caching",
    ],
    lessonsLearned: [
      "Importance of database normalization for complex queries",
      "User experience drives adoption more than features",
      "Security must be baked in from day one",
    ],
  },
];