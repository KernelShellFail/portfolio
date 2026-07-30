import { useState, useCallback, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Palette, FileJson, FileCode, Atom, Globe, Server, Route,
  Database, Table2, FileType, Layers, Terminal, Cpu, Coffee,
  GitBranch, GitFork, Link, Wind, Layout, Flame, Smartphone,
  Brain, Shapes, Sigma, Users, GraduationCap, BookOpen, Briefcase,
  RefreshCw, Target, UserCheck, Monitor, PenTool, ClipboardList,
  FolderOpen, Building2, ClipboardCheck, FileText, Sparkles, Rocket,
  Map, Clock, Award, HelpCircle, MessageSquare, Compass,
  ChevronDown, X, CheckCircle, ArrowRight, Star, Zap, School,
  UserPlus, Plus, Search, Download, ExternalLink, Mail, Heart,
  Quote, type LucideIcon,
} from "lucide-react";
import { SectionHeading, GlassCard, Button } from "../ui";
import { AnimatedCounter } from "../shared/AnimatedCounter";
import { cn } from "../../utils/cn";
import { personalData } from "../../constants/personalData";
import {
  technologies, techCategories, whoCanJoin, learningStyleSteps,
  whyLearnFromMe, teachingStats, howClassesWork, availableModes,
  studentBenefits, faqItems, type TechItem,
} from "../../constants/mentorship";

const iconMap: Record<string, LucideIcon> = {
  Code2, Palette, FileJson, FileCode, Atom, Globe, Server, Route,
  Database, Table2, FileType, Layers, Terminal, Cpu, Coffee,
  GitBranch, GitFork, Link, Wind, Layout, Flame, Smartphone,
  Brain, Shapes, Sigma, Users, GraduationCap, BookOpen, Briefcase,
  RefreshCw, Target, UserCheck, Monitor, PenTool, ClipboardList,
  FolderOpen, Building2, ClipboardCheck, FileText, Sparkles, Rocket,
  Map, Clock, Award, HelpCircle, MessageSquare, Compass, School,
  UserPlus, CheckCircle, ArrowRight, Star, Zap, Download, Plus,
  ExternalLink, Mail, Heart, Quote, Search,
};

const difficultyColors: Record<string, string> = {
  Beginner: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  Advanced: "text-rose-400 bg-rose-500/10 border-rose-500/20",
};

function getIcon(name: string): LucideIcon {
  return iconMap[name] || Code2;
}

/* ─── Floating Background Shapes ─── */
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ─── Tech Card (Card 1) ─── */
function TechCard({ item, index }: { item: TechItem; index: number }) {
  const Icon = getIcon(item.icon);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative group"
    >
      <GlassCard className="p-4 cursor-pointer h-full">
        {item.popular && (
          <div className="absolute -top-2.5 -right-2.5 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-sm opacity-60" />
              <span className="relative flex items-center gap-1 px-2.5 py-0.5 bg-gradient-to-r from-amber-400 to-orange-500 text-[10px] font-bold text-black rounded-full shadow-lg">
                <Star className="w-2.5 h-2.5 fill-black" />
                Popular
              </span>
            </div>
          </div>
        )}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 transition-colors duration-300"
            style={{ backgroundColor: `${item.color}15`, color: item.color }}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-foreground truncate">{item.name}</h4>
            <div className="flex items-center gap-2 mt-1">
              <span className={cn("inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-medium border", difficultyColors[item.difficulty])}>
                {item.difficulty}
              </span>
              <span className="text-[10px] text-muted flex items-center gap-0.5">
                <Clock className="w-2.5 h-2.5" />
                {item.duration}
              </span>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

/* ─── Filter Bar ─── */
function FilterBar({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: string;
  onFilterChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label="Filter technologies by category">
      {techCategories.map((cat) => (
        <button
          key={cat.value}
          role="tab"
          aria-selected={activeFilter === cat.value}
          onClick={() => onFilterChange(cat.value)}
          className={cn(
            "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
            activeFilter === cat.value
              ? "bg-accent text-white shadow-lg shadow-accent/25"
              : "bg-white/[0.05] text-muted hover:text-foreground hover:bg-white/[0.1] border border-white/10"
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

/* ─── Who Can Join Card (Card 2) ─── */
function WhoCanJoinCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {whoCanJoin.map((item, i) => {
        const Icon = getIcon(item.icon);
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-accent/5 hover:border-accent/20 transition-all duration-300 cursor-default"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">{item.title}</h4>
              <p className="text-xs text-muted">{item.subtitle}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Learning Style Timeline (Card 3) ─── */
function LearningStyleCard() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-purple-500 to-transparent hidden md:block" aria-hidden="true" />
      <div className="space-y-0">
        {learningStyleSteps.map((step, i) => {
          const Icon = getIcon(step.icon);
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex items-start gap-4 pb-6 last:pb-0 group"
            >
              <div className="relative z-10 hidden md:flex w-10 h-10 rounded-full bg-surface border border-accent/30 items-center justify-center shrink-0 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                <Icon className="w-4 h-4 text-accent" />
              </div>
              <div className="flex-1 min-w-0 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] group-hover:bg-accent/5 group-hover:border-accent/20 transition-all duration-300">
                <div className="flex items-center gap-2 mb-0.5">
                  <div className="flex md:hidden w-6 h-6 rounded-full bg-accent/10 items-center justify-center">
                    <Icon className="w-3 h-3 text-accent" />
                  </div>
                  <h4 className="text-sm font-semibold text-foreground">{step.title}</h4>
                </div>
                <p className="text-xs text-muted mt-0.5">{step.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Why Learn From Me (Card 4) ─── */
function WhyLearnFromMeCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {whyLearnFromMe.map((item, i) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
        >
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-sm text-foreground">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Teaching Stats (Card 5) ─── */
function TeachingStatsCard() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {teachingStats.map((stat, i) => {
        const Icon = getIcon(stat.icon);
        return (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-accent/5 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <Icon className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl md:text-3xl font-bold text-foreground font-outfit">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs text-muted mt-1">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── How Classes Work (Card 6) ─── */
function HowClassesWorkCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
      {howClassesWork.map((step, i) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="relative"
        >
          <div className="text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-accent/5 hover:border-accent/20 transition-all duration-300 h-full">
            <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
              {step.step}
            </div>
            <h4 className="text-sm font-semibold text-foreground mb-1">{step.title}</h4>
            <p className="text-xs text-muted">{step.description}</p>
          </div>
          {i < howClassesWork.length - 1 && (
            <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10" aria-hidden="true">
              <ArrowRight className="w-5 h-5 text-accent/60" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Available Modes (Card 7) ─── */
function AvailableModesCard() {
  const modes = [availableModes.online, availableModes.offline];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {modes.map((mode, i) => {
        const Icon = getIcon(mode.icon);
        return (
          <motion.div
            key={mode.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">{mode.title}</h3>
              <ul className="space-y-2">
                {mode.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── Student Benefits (Card 8) ─── */
function StudentBenefitsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {studentBenefits.map((benefit, i) => {
        const Icon = getIcon(benefit.icon);
        return (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -2 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-accent/5 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">{benefit.title}</h4>
              <p className="text-xs text-muted mt-0.5">{benefit.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── FAQ Accordion (Card 9) ─── */
function FAQCard() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {faqItems.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={cn(
              "rounded-xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "border-accent/30 bg-accent/5"
                : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]"
            )}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="text-sm font-medium text-foreground pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-muted shrink-0 transition-transform duration-300",
                  isOpen && "rotate-180 text-accent"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4">
                    <p className="text-sm text-muted leading-relaxed">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-accent/[0.08] via-purple-500/[0.05] to-pink-500/[0.05] backdrop-blur-xl p-8 md:p-12 text-center"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Ready to Start Learning?
        </h3>
        <p className="text-lg text-muted max-w-xl mx-auto mb-8">
          Let&apos;s build your programming career together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href={`https://wa.me/${personalData.whatsapp}?text=Hi%20Basit!%20I%20want%20to%20book%20a%20free%20demo%20class.`}
            target="_blank"
            size="lg"
            className="shadow-lg shadow-accent/25 hover:shadow-accent/40"
          >
            <Zap className="w-4 h-4" />
            Book a Free Demo
          </Button>
          <Button
            href={`https://wa.me/${personalData.whatsapp}`}
            target="_blank"
            variant="secondary"
            size="lg"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Me
          </Button>
          <Button
            href={`mailto:${personalData.email}?subject=Programming%20Mentorship%20Inquiry`}
            variant="secondary"
            size="lg"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Button>
          <Button
            href={`${personalData.github}?tab=repositories`}
            target="_blank"
            variant="ghost"
            size="lg"
          >
            <ExternalLink className="w-4 h-4" />
            View Portfolio
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Request Custom Course Modal ─── */
function RequestCourseModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const topic = data.get("topic") as string;
    const message = data.get("message") as string;

    const text = `Hi Basit! I want to request a custom course.%0A%0AName: ${encodeURIComponent(name)}%0ATopic: ${encodeURIComponent(topic)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${personalData.whatsapp}?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Request custom course"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] bg-surface p-6 md:p-8 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-muted hover:text-foreground hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-lg font-semibold text-foreground">Request Sent!</p>
                <p className="text-sm text-muted mt-1">You will be redirected to WhatsApp.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-foreground mb-2">Request a Custom Course</h3>
                <p className="text-sm text-muted mb-6">
                  Tell me what you want to learn, and I will create a personalised curriculum for you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="modal-name" className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                    <input
                      id="modal-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-topic" className="block text-sm font-medium text-foreground mb-1.5">Course Topic</label>
                    <input
                      id="modal-topic"
                      name="topic"
                      type="text"
                      required
                      placeholder="e.g., Full Stack Web Development"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-message" className="block text-sm font-medium text-foreground mb-1.5">Your Requirements</label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      placeholder="Tell me about your goals, experience level, and preferred schedule..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <SendIcon className="w-4 h-4" />
                    Send Request
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const SendIcon = (props: React.ComponentProps<typeof ArrowRight>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

/* ─── Download Roadmap ─── */
function DownloadRoadmapButton() {
  const handleDownload = useCallback(() => {
    const content = `# Programming Mentorship Roadmap

## Frontend
- HTML5 (2 weeks)
- CSS3 (3 weeks)
- JavaScript (6 weeks)
- React (8 weeks)
- Next.js (6 weeks)
- Tailwind CSS (3 weeks)
- Bootstrap (3 weeks)

## Languages
- JavaScript (6 weeks)
- TypeScript (4 weeks)
- Python (8 weeks)
- C Programming (6 weeks)
- C++ (8 weeks)
- Java (8 weeks)

## Backend
- Node.js (6 weeks)
- Express.js (4 weeks)
- PHP (6 weeks)
- Laravel (8 weeks)
- REST APIs (3 weeks)

## Databases
- MongoDB (4 weeks)
- MySQL (4 weeks)
- Database Design (3 weeks)

## Tools & Concepts
- Git & GitHub (2 weeks)
- Firebase (4 weeks)
- Android Basics (6 weeks)
- DSA (12 weeks)
- Problem Solving (Ongoing)
- OOP (4 weeks)

---
Created by ${personalData.fullName}
Contact: ${personalData.email} | WhatsApp: ${personalData.whatsapp}
`;
    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mentorship-roadmap.md";
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <Button variant="ghost" size="sm" onClick={handleDownload}>
      <Download className="w-3.5 h-3.5" />
      Download Roadmap
    </Button>
  );
}

/* ─── Main Mentorship Section ─── */
export function Mentorship() {
  const [filter, setFilter] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);

  const filteredTechs = filter === "all"
    ? technologies
    : technologies.filter((t) => t.category === filter);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          name: personalData.fullName,
          givenName: personalData.name,
          familyName: personalData.lastName,
          email: personalData.email,
          telephone: personalData.phone,
          jobTitle: "Programming Mentor & Full Stack Developer",
          url: window.location.origin,
          knowsAbout: technologies.map((t) => t.name),
        },
        {
          "@type": "EducationalService",
          name: "Programming Mentorship by Basiturraza Taji",
          description: "Personalised one-to-one programming classes for beginners, college students, job seekers, and developers.",
          provider: { "@type": "Person", name: personalData.fullName },
          areaServed: "Nagpur, Maharashtra, India",
          availableChannel: [
            { "@type": "ServiceChannel", serviceUrl: `https://wa.me/${personalData.whatsapp}`, name: "WhatsApp" },
            { "@type": "ServiceChannel", serviceUrl: `mailto:${personalData.email}`, name: "Email" },
          ],
        },
      ],
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <>
      <section
        id="mentorship"
        className="relative py-24 lg:py-32 overflow-hidden"
        aria-label="Programming Mentorship"
      >
        <FloatingShapes />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <SectionHeading
            badge="Mentorship"
            title="👨‍🏫 Programming Mentor"
            subtitle="Learn Programming One-to-One from a Real Developer"
          />

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-6 h-6 text-accent/30 rotate-180" aria-hidden="true" />
              <p className="text-base md:text-lg text-muted leading-relaxed italic px-6">
                &ldquo;I provide personalised one-to-one programming classes for beginners, college students, job seekers, and developers who want to improve their skills through practical, project-based learning.&rdquo;
              </p>
              <Quote className="absolute -bottom-2 -right-2 w-6 h-6 text-accent/30" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Card 1: What I Teach */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-foreground">What I Teach</h3>
                <p className="text-sm text-muted mt-1">Browse topics or use the filter</p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <DownloadRoadmapButton />
                <Button variant="ghost" size="sm" onClick={() => setModalOpen(true)}>
                  <Plus className="w-3.5 h-3.5" />
                  Request Custom
                </Button>
              </div>
            </div>

            <FilterBar activeFilter={filter} onFilterChange={setFilter} />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {filteredTechs.map((tech, i) => (
                <TechCard key={tech.name} item={tech} index={i} />
              ))}
            </div>

            {/* Mobile only buttons */}
            <div className="flex sm:hidden items-center gap-2 mt-4">
              <DownloadRoadmapButton />
              <Button variant="ghost" size="sm" onClick={() => setModalOpen(true)}>
                <Plus className="w-3.5 h-3.5" />
                Request Custom
              </Button>
            </div>
          </GlassCard>

          {/* Card 2: Who Can Join */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Who Can Join?</h3>
            <WhoCanJoinCard />
          </GlassCard>

          {/* Card 3: Learning Style */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Learning Style</h3>
            <LearningStyleCard />
          </GlassCard>

          {/* Card 4 & 5: Why Learn From Me + Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Why Learn From Me?</h3>
              <WhyLearnFromMeCard />
            </GlassCard>
            <GlassCard className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Teaching Statistics</h3>
              <TeachingStatsCard />
            </GlassCard>
          </div>

          {/* Card 6: How Classes Work */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">How Classes Work</h3>
            <HowClassesWorkCard />
          </GlassCard>

          {/* Card 7: Available Modes */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Available Modes</h3>
            <AvailableModesCard />
          </GlassCard>

          {/* Card 8: Student Benefits */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Student Benefits</h3>
            <StudentBenefitsCard />
          </GlassCard>

          {/* Card 9: FAQ */}
          <GlassCard className="p-6 md:p-8 mb-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
            <FAQCard />
          </GlassCard>

          {/* Final CTA */}
          <CTASection />
        </div>
      </section>

      {/* Request Course Modal */}
      <RequestCourseModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}