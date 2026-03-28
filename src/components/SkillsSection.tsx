import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  "AI Agent UX",
  "Conversational Design",
  "Multi-Surface Design",
  "Design Systems",
  "Responsible AI",
  "Generative UI",
  "Prompt Design",
  "User Research",
  "Prototyping",
  "Systems Thinking",
];

const SkillsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div
            className={`md:col-span-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              The things I think about every day — and have shipped real products around.
            </p>
          </div>

          <div
            className={`md:col-span-7 md:col-start-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => {
                const isPrimary = i % 3 === 0;
                return (
                  <span
                    key={skill}
                    className={`font-display font-bold text-sm md:text-base px-5 py-2.5 rounded-full transition-all duration-200 hover:scale-105 cursor-default ${
                      isPrimary
                        ? "bg-primary text-primary-foreground"
                        : i % 3 === 1
                        ? "bg-coral text-coral-foreground"
                        : "bg-foreground text-background"
                    }`}
                    style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
