import Section from "@/components/Section";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A modern personal portfolio website designed to showcase skills, projects, and professional profile with responsive design and clean UI.",
    tech: ["HTML", "CSS", "GitHub", "Vercel"],
    status: "Deployed",
    showLiveLink: false,
    liveLink: "",
  },
  {
    title: "Gym Website Project",
    description: "A responsive business-style gym website designed to showcase services, information, and modern UI layout.",
    tech: ["HTML", "CSS", "GitHub", "Vercel"],
    status: "Deployed",
    showLiveLink: true,
    liveLink: "https://ironparadisegym.vercel.app/",
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
              className="glass rounded-xl p-6 hover-lift glass-hover group relative overflow-hidden"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {project.status}
                </span>
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

              {project.showLiveLink && project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                  View Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
