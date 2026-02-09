import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section = ({ children, className = "", id, delay = 0 }: SectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} ref={ref} className={`py-20 md:py-28 ${className}`}>
      <div
        className="animate-in"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
