import Section from "@/components/Section";
import { Code, Palette, Smartphone, GitBranch, Github, Globe } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code },
  { name: "CSS", icon: Palette },
  { name: "Responsive Design", icon: Smartphone },
  { name: "Git", icon: GitBranch },
  { name: "GitHub", icon: Github },
  { name: "Vercel Deployment", icon: Globe },
];

const Skills = () => {
  return (
    <Section id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12 text-sm">
          Technologies I work with
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="glass rounded-xl p-6 flex flex-col items-center gap-3 glass-hover hover-lift group cursor-default"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
