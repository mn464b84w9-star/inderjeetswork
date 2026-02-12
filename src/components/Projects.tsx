import Section from "@/components/Section";
import { ExternalLink, Lock, ShieldCheck } from "lucide-react";

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12 text-sm">
          Some of my recent work
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Gym Website Project */}
          <div className="glass rounded-xl p-6 hover-lift glass-hover group relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-foreground">Gym Website Project</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                Deployed
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A responsive business-style gym website designed to showcase services, information, and modern UI layout.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "GitHub", "Vercel"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <a href="https://ironparadisegym.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
              View Live <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Civil Site Labor Management System — NDA Protected */}
          <div className="glass rounded-xl p-6 relative overflow-hidden border border-muted/30">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

            {/* NDA Badge */}
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-yellow-500/15 text-yellow-400 font-semibold border border-yellow-500/20 uppercase tracking-wider">
                <ShieldCheck className="w-3 h-3" /> NDA Protected
              </span>
            </div>

            {/* Lock Icon */}
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 border border-muted mb-4">
              <Lock className="w-6 h-6 text-muted-foreground/60" />
            </div>

            <h3 className="text-lg font-semibold text-foreground mb-1">
              Civil Site Labor Management System
            </h3>
            <p className="text-xs text-muted-foreground/60 mb-3 font-medium">Private Client Project</p>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A custom SaaS platform architected for a civil engineering firm. Manages labor tracking across multiple municipalities with strict data partitioning. Features secure role-based authentication, real-time payroll logic, and automated report generation.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Supabase", "Lovable AI"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <button
              disabled
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-muted/40 text-muted-foreground/50 font-medium cursor-not-allowed border border-muted/30"
            >
              <Lock className="w-3 h-3" /> Internal Tool Only
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
