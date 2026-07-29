export interface Skill {
  name: string;
  level: number;
  color: string;
  category: SkillCategory;
  yearsUsed: number;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Languages"
  | "Creative"
  | "Tools"
  | "Database";

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5 / CSS3",
    level: 95,
    color: "#f97316",
    category: "Frontend",
    yearsUsed: 3,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    color: "#06b6d4",
    category: "Frontend",
    yearsUsed: 2,
  },
  {
    name: "JavaScript",
    level: 88,
    color: "#eab308",
    category: "Frontend",
    yearsUsed: 3,
  },
  {
    name: "React",
    level: 80,
    color: "#61dafb",
    category: "Frontend",
    yearsUsed: 1,
  },

  // Backend
  {
    name: "PHP 8.x",
    level: 95,
    color: "#8b5cf6",
    category: "Backend",
    yearsUsed: 3,
  },
  {
    name: "Django / Flask",
    level: 78,
    color: "#22c55e",
    category: "Backend",
    yearsUsed: 1,
  },
  {
    name: "REST APIs",
    level: 85,
    color: "#3b82f6",
    category: "Backend",
    yearsUsed: 2,
  },

  // Languages
  {
    name: "Python",
    level: 90,
    color: "#eab308",
    category: "Languages",
    yearsUsed: 3,
  },
  {
    name: "C++",
    level: 80,
    color: "#6366f1",
    category: "Languages",
    yearsUsed: 2,
  },
  {
    name: "Java",
    level: 80,
    color: "#ef4444",
    category: "Languages",
    yearsUsed: 2,
  },

  // Creative
  {
    name: "Adobe Illustrator",
    level: 90,
    color: "#f97316",
    category: "Creative",
    yearsUsed: 3,
  },
  {
    name: "CorelDRAW",
    level: 88,
    color: "#22c55e",
    category: "Creative",
    yearsUsed: 3,
  },
  {
    name: "UI / UX Design",
    level: 85,
    color: "#ec4899",
    category: "Creative",
    yearsUsed: 2,
  },

  // Database
  {
    name: "MySQL",
    level: 92,
    color: "#3b82f6",
    category: "Database",
    yearsUsed: 3,
  },
  {
    name: "SQL / NoSQL",
    level: 80,
    color: "#06b6d4",
    category: "Database",
    yearsUsed: 2,
  },

  // Tools
  {
    name: "Git / GitHub",
    level: 88,
    color: "#f97316",
    category: "Tools",
    yearsUsed: 3,
  },
  {
    name: "QA / Testing",
    level: 88,
    color: "#22c55e",
    category: "Tools",
    yearsUsed: 2,
  },
];

export const skillCategories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Languages",
  "Database",
  "Creative",
  "Tools",
];
