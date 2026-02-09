import Section from "@/components/Section";
import { Phone, Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "7357987320", href: "tel:7357987320" },
  { icon: Mail, label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { icon: Linkedin, label: "LinkedIn", value: "LinkedIn Profile", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "GitHub Profile", href: "https://github.com" },
];

const Contact = () => {
  return (
    <Section id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-12 text-sm">
          Feel free to reach out
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 glass-hover hover-lift group"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
