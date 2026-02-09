import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-semibold text-foreground">Inderjeet Singh</p>
          <p className="text-xs text-muted-foreground">Web Developer</p>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Inderjeet Singh. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/mn464b84w9-star" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/inderjeet-singh-5b9b25395" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:theinderjeet52@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
