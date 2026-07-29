export interface TechItem {
  name: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  popular: boolean;
  icon: string;
  color: string;
}

export const techCategories = [
  { value: "all", label: "All Topics" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "language", label: "Languages" },
  { value: "database", label: "Databases" },
  { value: "tool", label: "Tools" },
  { value: "mobile", label: "Mobile" },
  { value: "concept", label: "Concepts" },
] as const;

export const technologies: TechItem[] = [
  { name: "HTML5", category: "frontend", difficulty: "Beginner", duration: "2 weeks", popular: false, icon: "Code2", color: "#e34f26" },
  { name: "CSS3", category: "frontend", difficulty: "Beginner", duration: "3 weeks", popular: false, icon: "Palette", color: "#1572b6" },
  { name: "JavaScript", category: "language", difficulty: "Beginner", duration: "6 weeks", popular: true, icon: "FileJson", color: "#f7df1e" },
  { name: "TypeScript", category: "language", difficulty: "Intermediate", duration: "4 weeks", popular: false, icon: "FileCode", color: "#3178c6" },
  { name: "React", category: "frontend", difficulty: "Intermediate", duration: "8 weeks", popular: true, icon: "Atom", color: "#61dafb" },
  { name: "Next.js", category: "frontend", difficulty: "Intermediate", duration: "6 weeks", popular: false, icon: "Globe", color: "#000000" },
  { name: "Node.js", category: "backend", difficulty: "Intermediate", duration: "6 weeks", popular: false, icon: "Server", color: "#339933" },
  { name: "Express.js", category: "backend", difficulty: "Intermediate", duration: "4 weeks", popular: false, icon: "Route", color: "#68a063" },
  { name: "MongoDB", category: "database", difficulty: "Intermediate", duration: "4 weeks", popular: false, icon: "Database", color: "#47a248" },
  { name: "MySQL", category: "database", difficulty: "Beginner", duration: "4 weeks", popular: false, icon: "Table2", color: "#4479a1" },
  { name: "PHP", category: "backend", difficulty: "Intermediate", duration: "6 weeks", popular: false, icon: "FileType", color: "#777bb4" },
  { name: "Laravel", category: "backend", difficulty: "Advanced", duration: "8 weeks", popular: false, icon: "Layers", color: "#ff2d20" },
  { name: "Python", category: "language", difficulty: "Beginner", duration: "8 weeks", popular: true, icon: "Terminal", color: "#3776ab" },
  { name: "C Programming", category: "language", difficulty: "Intermediate", duration: "6 weeks", popular: false, icon: "Cpu", color: "#a8b9cc" },
  { name: "C++", category: "language", difficulty: "Intermediate", duration: "8 weeks", popular: false, icon: "Cpu", color: "#00599c" },
  { name: "Java", category: "language", difficulty: "Intermediate", duration: "8 weeks", popular: false, icon: "Coffee", color: "#ed8b00" },
  { name: "Data Structures & Algorithms", category: "concept", difficulty: "Advanced", duration: "12 weeks", popular: false, icon: "GitBranch", color: "#00bcd4" },
  { name: "Git & GitHub", category: "tool", difficulty: "Beginner", duration: "2 weeks", popular: false, icon: "GitFork", color: "#f05032" },
  { name: "REST APIs", category: "concept", difficulty: "Intermediate", duration: "3 weeks", popular: false, icon: "Link", color: "#ff6c37" },
  { name: "Tailwind CSS", category: "frontend", difficulty: "Beginner", duration: "3 weeks", popular: false, icon: "Wind", color: "#06b6d4" },
  { name: "Bootstrap", category: "frontend", difficulty: "Beginner", duration: "3 weeks", popular: false, icon: "Layout", color: "#7952b3" },
  { name: "Firebase", category: "tool", difficulty: "Intermediate", duration: "4 weeks", popular: false, icon: "Flame", color: "#ffca28" },
  { name: "Android Basics", category: "mobile", difficulty: "Intermediate", duration: "6 weeks", popular: false, icon: "Smartphone", color: "#3ddc84" },
  { name: "Problem Solving", category: "concept", difficulty: "Intermediate", duration: "Ongoing", popular: false, icon: "Brain", color: "#ff6b6b" },
  { name: "Object Oriented Programming", category: "concept", difficulty: "Intermediate", duration: "4 weeks", popular: false, icon: "Shapes", color: "#9b59b6" },
  { name: "Database Design", category: "concept", difficulty: "Intermediate", duration: "3 weeks", popular: false, icon: "Sigma", color: "#27ae60" },
];

export const whoCanJoin = [
  { title: "Complete Beginners", subtitle: "No experience needed", icon: "UserPlus" },
  { title: "School Students", subtitle: "Grades 8–12", icon: "School" },
  { title: "College Students", subtitle: "BCA, B.Tech, B.Sc", icon: "GraduationCap" },
  { title: "MCA / BCA Students", subtitle: "Master your degree", icon: "BookOpen" },
  { title: "Working Professionals", subtitle: "Upskill & grow", icon: "Briefcase" },
  { title: "Career Switchers", subtitle: "Transition into tech", icon: "RefreshCw" },
  { title: "Freelancers", subtitle: "Build real skills", icon: "Globe" },
  { title: "Interview Preparation", subtitle: "Crack your dream job", icon: "Target" },
];

export const learningStyleSteps = [
  { title: "Personal One-to-One Classes", description: "Undivided attention every session", icon: "UserCheck" },
  { title: "Live Screen Sharing", description: "See every line of code in real time", icon: "Monitor" },
  { title: "Real Coding Practice", description: "Write code, not just watch", icon: "PenTool" },
  { title: "Assignments", description: "Reinforce concepts with homework", icon: "ClipboardList" },
  { title: "Mini Projects", description: "Apply what you have learned", icon: "FolderOpen" },
  { title: "Major Projects", description: "Build portfolio-worthy applications", icon: "Building2" },
  { title: "Interview Questions", description: "Ace technical rounds", icon: "ClipboardCheck" },
  { title: "Resume Guidance", description: "Craft an ATS-friendly resume", icon: "FileText" },
  { title: "Portfolio Building", description: "Showcase your best work", icon: "Sparkles" },
  { title: "GitHub Guidance", description: "Learn version control professionally", icon: "GitFork" },
  { title: "Deployment Training", description: "Go live with your projects", icon: "Rocket" },
  { title: "Career Roadmap", description: "Plan your tech journey", icon: "Map" },
];

export const whyLearnFromMe = [
  "Real Project Experience",
  "Industry Best Practices",
  "Hands-on Coding Focus",
  "Individual Attention",
  "Flexible Scheduling",
  "Offline & Online Classes",
  "Lifetime Guidance Support",
  "Study Notes Included",
  "Recorded Sessions (optional)",
  "Affordable Fees",
];

export const teachingStats = [
  { label: "Students Mentored", value: 50, suffix: "+", icon: "Users" },
  { label: "Hours Taught", value: 1200, suffix: "+", icon: "Clock" },
  { label: "Projects Built", value: 100, suffix: "+", icon: "Layers" },
  { label: "Programming Languages", value: 12, suffix: "", icon: "Terminal" },
  { label: "Success Rate", value: 95, suffix: "%", icon: "Award" },
];

export const howClassesWork = [
  { step: 1, title: "Contact Me", description: "Reach out via WhatsApp, email, or the form below" },
  { step: 2, title: "Free Discussion", description: "We discuss your goals, experience, and availability" },
  { step: 3, title: "Learning Plan", description: "I create a custom syllabus tailored to your needs" },
  { step: 4, title: "Live Classes", description: "We start one-to-one sessions with real coding" },
  { step: 5, title: "Build Real Projects", description: "Apply everything through practical projects" },
];

export const availableModes = {
  online: {
    title: "Online Classes",
    icon: "Monitor",
    features: ["Google Meet", "Zoom", "Discord", "Screen Sharing", "Remote Coding"],
  },
  offline: {
    title: "Offline Classes",
    icon: "Building2",
    features: ["One-to-One Sessions", "Personal Guidance", "Hands-on Learning", "Dedicated Setup"],
  },
};

export const studentBenefits = [
  { title: "Certificate of Completion", description: "Optional course certificate", icon: "Award" },
  { title: "Source Code", description: "Access to all code written", icon: "Code2" },
  { title: "Assignments", description: "Practice exercises", icon: "ClipboardList" },
  { title: "Study Notes", description: "Comprehensive reference material", icon: "FileText" },
  { title: "Practice Questions", description: "Test your understanding", icon: "HelpCircle" },
  { title: "Doubt Solving", description: "Unlimited Q&A support", icon: "MessageSquare" },
  { title: "GitHub Repository", description: "Version-controlled portfolio", icon: "GitFork" },
  { title: "Portfolio Projects", description: "Real projects for your resume", icon: "Sparkles" },
  { title: "Career Advice", description: "Guidance beyond coding", icon: "Compass" },
  { title: "Mock Interviews", description: "Practice technical rounds", icon: "Target" },
];

export const faqItems = [
  {
    question: "Do I need prior programming knowledge?",
    answer: "Not at all. I teach complete beginners from scratch. The course will be tailored to your current level, whether you are starting from zero or looking to advance existing skills.",
  },
  {
    question: "Can absolute beginners join?",
    answer: "Yes. Many of my students started with no coding experience. I guide you step by step from the fundamentals to building real-world projects.",
  },
  {
    question: "Will real projects be included?",
    answer: "Absolutely. Every student builds multiple mini-projects and at least one major project. You will graduate with a portfolio-ready application.",
  },
  {
    question: "Do you teach one-to-one or in groups?",
    answer: "I teach exclusively one-to-one. Every session is personalized to your learning pace, goals, and schedule. No pre-recorded content or generic classes.",
  },
  {
    question: "Can the curriculum be customised?",
    answer: "Yes. During our free discussion, I assess your goals and design a custom learning plan. You can also request changes at any point during the course.",
  },
  {
    question: "Will I receive study notes and materials?",
    answer: "Yes. You will get comprehensive notes, code snippets, assignment sheets, and access to a private GitHub repository with all learning resources.",
  },
  {
    question: "What if I miss a session?",
    answer: "Sessions can be rescheduled with prior notice. Recorded sessions are also available on request so you can review anytime.",
  },
  {
    question: "How long does it take to become job-ready?",
    answer: "It depends on your starting level and dedication. On average, beginners reach job-ready level within 4–6 months of consistent learning with me.",
  },
];