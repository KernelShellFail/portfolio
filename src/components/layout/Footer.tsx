import { Link } from "react-router-dom";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import { personalData } from "../../constants/personalData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="text-lg font-bold text-foreground">
              <span className="text-accent">&lt;</span>
              Basit
              <span className="text-accent">/&gt;</span>
            </Link>
            <p className="text-sm text-muted mt-1">
              Building digital solutions that survive the real world.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-muted hover:text-foreground hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2.5 rounded-xl text-muted hover:text-foreground hover:bg-white/5 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3 rounded-xl border border-white/[0.08] text-muted hover:text-accent hover:border-accent/30 transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-muted flex items-center justify-center gap-1">
            © {new Date().getFullYear()} {personalData.fullName}. Built with
            <Heart size={12} className="text-red-500 fill-red-500" />
            and React.
          </p>
        </div>
      </div>
    </footer>
  );
}
