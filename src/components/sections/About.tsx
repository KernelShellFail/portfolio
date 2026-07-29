import { motion } from "framer-motion";
import { GraduationCap, Code2, Lightbulb, ShieldCheck } from "lucide-react";
import { personalData } from "../../constants/personalData";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { SectionHeading, GlassCard } from "../ui";

const stats = [
  { label: "Years Experience", value: personalData.stats.yearsExperience, suffix: "+" },
  { label: "Projects Built", value: personalData.stats.projectsCompleted, suffix: "+" },
  { label: "Technologies", value: personalData.stats.technologiesUsed, suffix: "+" },
  { label: "GitHub Contributions", value: personalData.stats.githubContributions, suffix: "+" },
];

const highlights = [
  {
    icon: Code2,
    title: "The Dev Philosophy",
    description: personalData.devPhilosophy,
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "The Creative Edge",
    description: personalData.creativeEdge,
    color: "from-pink-500/20 to-rose-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-400",
  },
  {
    icon: ShieldCheck,
    title: "QA Strategist",
    description: personalData.qaStatement,
    color: "from-emerald-500/20 to-green-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: `Currently pursuing a BCA (2023-2026) at VMV College, combining academic excellence with hands-on industry experience.`,
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Crafting Digital Solutions"
          subtitle={personalData.tagline}
        />

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-20">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-purple-500 to-pink-500 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={personalData.profileImage}
                  alt={personalData.fullName}
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-semibold text-foreground">{personalData.fullName}</p>
                  <p className="text-xs text-muted">{personalData.education}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-muted">
              {personalData.bio}
            </p>
            <p className="text-base leading-relaxed text-muted">
              {personalData.closingStatement}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <div className="text-3xl font-bold text-accent mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <GlassCard
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6"
            >
              <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                <item.icon size={20} className={item.iconColor} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
