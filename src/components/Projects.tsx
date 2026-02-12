import Section from "@/components/Section";
import { ExternalLink, Lock, Shield, Dumbbell, Globe } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  type: "locked" | "public";
  icon: "lock" | "dumbbell";
  badgeLabel: string;
  actionLabel: string;
  actionDisabled: boolean;
  liveLink?: string;
};

const projects: Project[] = [
  {
    title: "Civil Site Labor Management System",
    description:
      "A custom SaaS platform architected for a civil engineering firm. Manages labor tracking across multiple municipalities with strict data partitioning. Features secure role-based authentication, real-time payroll logic, and automated report generation.",
    tech: ["React", "Supabase", "Lovable/AI"],
    status: "NDA Protected",
    type: "locked",
    icon: "lock",
    badgeLabel: "NDA Protected",
    actionLabel: "Internal Tool Only",
    actionDisabled: true,
  },
  {
    title: "Gym Website Project",
    description:
      "A responsive business-style gym website designed to showcase services, membership plans, and modern UI layout. Built with clean code practices and deployed on Vercel for fast global delivery.",
    tech: ["HTML", "CSS", "GitHub", "Vercel"],
    status: "Deployed",
    type: "public",
    icon: "dumbbell",
    badgeLabel: "Live & Deployed",
    actionLabel: "View Live",
    actionDisabled: false,
  },
];

const iconMap = {
  lock: Lock,
  dumbbell: Dumbbell,
};

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
          {projects.map((project, i) => {
            const IconComp = iconMap[project.icon];
            const isLocked = project.type === "locked";
            const accentColor = isLocked ? "amber" : "primary";

            return (
              <div
                key={i}
                className={`glass rounded-xl p-6 group relative overflow-hidden transition-all duration-300 ${
                  isLocked
                    ? "border-amber-500/20 hover:border-amber-500/40"
                    : "border-primary/20 hover:border-primary/40"
                }`}
              >
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${
                    isLocked
                      ? "from-transparent via-amber-500/50 to-transparent"
                      : "from-transparent via-primary/50 to-transparent"
                  }`}
                />

                {/* Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-semibold border flex items-center gap-1 ${
                      isLocked
                        ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
                        : "bg-primary/15 text-primary border-primary/30"
                    }`}
                  >
                    {isLocked ? <Shield className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
                    {project.badgeLabel}
                  </span>
                </div>

                {/* Center icon */}
                <div className="flex justify-center mb-5">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      isLocked
                        ? "bg-amber-500/10 border border-amber-500/20"
                        : "bg-primary/10 border border-primary/20"
                    }`}
                  >
                    <IconComp className={`w-7 h-7 ${isLocked ? "text-amber-400" : "text-primary"}`} />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-3">{project.title}</h3>

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

                <button
                  disabled={project.actionDisabled}
                  className={`inline-flex items-center gap-2 text-xs px-4 py-2 rounded-md font-medium transition-colors ${
                    project.actionDisabled
                      ? "bg-muted text-muted-foreground cursor-not-allowed opacity-60"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {project.actionDisabled ? <Lock className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                  {project.actionLabel}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
