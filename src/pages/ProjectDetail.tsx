import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Lightbulb } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { projects } from "../constants/projects";
import { Button } from "../components/ui";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project not found</h2>
          <p className="text-muted mb-6">The project you're looking for doesn't exist.</p>
          <Link to="/" className="text-accent hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-28 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-foreground mb-4"
        >
          {project.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-lg text-muted leading-relaxed mb-8"
        >
          {project.longDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-accent/10 text-accent border border-accent/20"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {project.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {project.challenges.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, i) => (
                <div key={challenge} className="p-5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                  <p className="text-sm font-medium text-foreground mb-1">
                    <span className="text-red-400">Challenge:</span> {challenge}
                  </p>
                  {project.solutions[i] && (
                    <p className="text-sm text-muted">
                      <span className="text-emerald-400">Solution:</span> {project.solutions[i]}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {project.lessonsLearned.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-10"
          >
            <h2 className="text-xl font-semibold text-foreground mb-4">Lessons Learned</h2>
            <div className="space-y-3">
              {project.lessonsLearned.map((lesson) => (
                <div key={lesson} className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/10 bg-amber-500/5">
                  <Lightbulb size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted">{lesson}</span>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-3 pt-8 border-t border-white/[0.08]"
        >
          <Button variant="primary" href={project.liveUrl} target="_blank">
            <ExternalLink size={14} />
            Live Demo
          </Button>
          <Button variant="secondary" href={project.githubUrl} target="_blank">
            <Github size={14} />
            Source Code
          </Button>
        </motion.div>
      </div>
    </motion.main>
  );
}
