import {
  Code2,
  Palette,
  ShieldCheck,
  Terminal,
  Coffee,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  color: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Full Stack PHP",
    description:
      "End-to-end web architecture using PHP 8.x, secure MySQL schemas, and reactive frontends.",
    badge: "LATEST STACK",
    color: "blue",
  },
  {
    icon: Palette,
    title: "Creative Suite",
    description:
      "High-fidelity branding assets and vector layouts via Adobe Illustrator & CorelDRAW.",
    badge: "EXPERT",
    color: "pink",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Exposing vulnerabilities through black-box testing and automated regression suites.",
    badge: "99.9% UPTIME",
    color: "green",
  },
  {
    icon: Terminal,
    title: "Python Solutions",
    description:
      "Rapid scripting, data processing pipelines, and scalable backend logic using Django or Flask.",
    badge: "AUTOMATION",
    color: "yellow",
  },
  {
    icon: Coffee,
    title: "OOP Architecture",
    description:
      "Building strictly typed, high-performance applications with Java and C++ design patterns.",
    badge: "ROBUST",
    color: "red",
  },
  {
    icon: Zap,
    title: "Modern Interface",
    description:
      "Crafting responsive, pixel-perfect layouts using Semantic HTML5, CSS3, and modern JavaScript.",
    badge: "UI / UX",
    color: "cyan",
  },
];
