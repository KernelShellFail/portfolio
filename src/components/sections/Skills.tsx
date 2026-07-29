import { useState } from "react";
import { motion } from "framer-motion";
import { skills, skillCategories, type SkillCategory } from "../../constants/skills";
import { SectionHeading } from "../ui";
import { cn } from "../../utils/cn";
import { useInView } from "../../hooks/useInView";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | "All">("All");
  const { ref, isInView } = useInView(0.1);

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Tech Proficiency"
          subtitle="Technologies and tools I work with daily"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={cn(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
              activeCategory === "All"
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "text-muted hover:text-foreground border border-white/[0.08] hover:border-accent/30"
            )}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat
                  ? "bg-accent text-white shadow-lg shadow-accent/25"
                  : "text-muted hover:text-foreground border border-white/[0.08] hover:border-accent/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
                  <p className="text-[11px] text-muted mt-0.5">
                    {skill.category} · {skill.yearsUsed}+ years
                  </p>
                </div>
                <span className="text-sm font-bold text-accent">{skill.level}%</span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
