import Section from "@/components/Section";
import { ExternalLink, Lock, Shield } from "lucide-react";

const projects = [
  {
    title: "Civil Site Labor Management System",
    description:
      "A custom SaaS platform architected for a civil engineering firm. Manages labor tracking across multiple municipalities with strict data partitioning. Features secure role-based authentication, real-time payroll logic, and automated report generation.",
    tech: ["React", "Supabase", "Lovable/AI"],
    status: "NDA Protected",
    type: "locked" as const,
  },
  {
    title: "Gym Website Project",
    description:
      "A responsive business-style gym website designed to showcase services, information, and modern UI layout.",
    tech: ["HTML", "CSS", "GitHub", "Vercel"],
    status: "Deployed",
    type: "public" as const,
    showLiveLink: true,
  },
];

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
          {projects.map((project, i) => (
            <div
              key={i}
              className={`glass rounded-xl p-6 group relative overflow-hidden ${
                project.type === "locked"
                  ? "border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                  : "hover-lift glass-hover"
              }`}
            >
              {/* Top accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                  project.type === "locked"
                    ? "from-transparent via-amber-500/50 to-transparent"
                    : "from-transparent via-primary/50 to-transparent"
                }`}
              />

              {/* NDA badge for locked projects */}
              {project.type === "locked" && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-amber-500/15 text-amber-400 font-semibold border border-amber-500/30 flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    NDA Protected
                  </span>
                </div>
              )}

              {/* Lock icon for locked projects */}
              {project.type === "locked" && (
                <div className="flex justify-center mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                    <Lock className="w-7 h-7 text-amber-400" />
                  </div>
                </div>
              )}

              <div className={`flex items-start justify-between mb-3 ${project.type === "locked" ? "pr-0" : ""}`}>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                {project.type !== "locked" && (
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.type === "locked" ? (
                <button
                  disabled
                  className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-md bg-muted text-muted-foreground cursor-not-allowed opacity-60 font-medium"
                >
                  <Lock className="w-3 h-3" />
                  Internal Tool Only
                </button>
              ) : (
                project.showLiveLink && (
                  <button className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                    View Live <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
