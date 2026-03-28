import { useScrollReveal } from "@/hooks/useScrollReveal";

const caseStudies = [
  {
    title: "Multi-Surface Agent Design",
    description:
      "Designed the end-to-end experience for an AI agent that operates across mobile, desktop, and ambient devices — with consistent context and graceful handoffs.",
    tags: ["AI Agent UX", "Multi-Surface", "Systems Design"],
    accent: "bg-primary",
  },
  {
    title: "GenAI Text Framework",
    description:
      "Built a design framework for generative text interfaces — addressing tone calibration, attribution, and user control across 4 product surfaces.",
    tags: ["Generative AI", "Content Design", "Framework"],
    accent: "bg-coral",
  },
  {
    title: "Prompt Engineering Studio",
    description:
      "Led design for an internal tool that lets non-technical teams craft, test, and iterate on prompts — reducing prompt iteration cycles by 60%.",
    tags: ["Developer Tools", "Prompt Design", "Internal Product"],
    accent: "bg-primary",
  },
];

const CaseStudiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-secondary/50" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Case studies from the intersection of design, AI, and real human needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              {/* Accent bar */}
              <div className={`h-1.5 ${study.accent} w-full`} />

              <div className="p-8">
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-secondary text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
