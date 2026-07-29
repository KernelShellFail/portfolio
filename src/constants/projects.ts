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
