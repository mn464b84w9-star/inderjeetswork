import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile picture */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500" />
            <img
              src={profileImg}
              alt="Inderjeet Singh - Web Developer"
              className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-2 border-border"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Inderjeet</span>{" "}
              <span className="gradient-text neon-text">Singh</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Aspiring Web Developer · AI & Data Science Student
            </p>
            <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-xl mx-auto">
              Engineering student passionate about web development, focused on building modern, responsive, and high-performance websites while continuously improving technical expertise.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all duration-200 neon-glow-strong hover-lift"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg glass glass-hover font-medium text-sm text-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
