import { ExternalLink, ArrowRight } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { projects } from "../../constants/projects";
import { SectionHeading, GlassCard, Badge, Button } from "../ui";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="Featured Work"
          subtitle="Real-world solutions I've built and deployed"
        />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <GlassCard
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="overflow-hidden"
              hover={false}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[200px] lg:min-h-full bg-gradient-to-br from-accent/20 via-purple-500/10 to-pink-500/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-3">
                          <span className="text-2xl font-bold text-accent">{project.title.charAt(0)}</span>
                        </div>
                        <p className="text-sm text-muted font-medium">{project.category}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  {project.featured && (
                    <Badge className="mb-4 w-fit">⭐ Featured Project</Badge>
                  )}

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <ArrowRight size={12} className="text-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="primary" href={project.liveUrl} target="_blank" size="sm">
                      <ExternalLink size={14} />
                      Live Demo
                    </Button>
                    <Button variant="secondary" href={project.githubUrl} target="_blank" size="sm">
                      <Github size={14} />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
