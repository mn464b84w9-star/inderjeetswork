import Section from "@/components/Section";
import { User, Building2, RefreshCw } from "lucide-react";

const services = [
  {
    icon: User,
    title: "Portfolio Website Development",
    description: "Create modern personal portfolio websites for students and professionals.",
  },
  {
    icon: Building2,
    title: "Business Website Development",
    description: "Build responsive and professional websites for businesses.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Improve and modernize existing websites with clean UI and responsive design.",
  },
];

const Services = () => {
  return (
    <Section id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12 text-sm">
          What I can do for you
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center hover-lift glass-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
