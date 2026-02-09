import Section from "@/components/Section";
import { GraduationCap, Code, Rocket } from "lucide-react";

const highlights = [
  { icon: Code, text: "Learning modern web technologies" },
  { icon: Rocket, text: "Building real-world projects" },
  { icon: GraduationCap, text: "Improving deployment & dev skills" },
];

const About = () => {
  return (
    <Section id="about">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12 text-sm">
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Inderjeet Singh is a B.Tech student specializing in Artificial Intelligence and Data Science at Bikaner Technical University (2023–2027). He is passionate about web development and continuously improving his technical skills. His goal is to build modern, responsive, and professional websites while gaining expertise in development and deployment technologies.
            </p>
            <div className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education card */}
          <div className="glass rounded-xl p-6 hover-lift glass-hover neon-glow">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Education</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Degree</p>
                <p className="text-foreground font-medium">B.Tech in AI & Data Science</p>
              </div>
              <div>
                <p className="text-muted-foreground">Institution</p>
                <p className="text-foreground font-medium">Bikaner Technical University</p>
              </div>
              <div>
                <p className="text-muted-foreground">Duration</p>
                <p className="text-foreground font-medium">2023 – 2027</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
