import { useScrollReveal } from "@/hooks/useScrollReveal";

const caseStudies = [
  {
    title: "Multi-Surface Agent Design",
    description:
      "An end-to-end experience for an AI agent across mobile, desktop, and ambient — seamless handoffs, consistent context, one beautiful thread.",
    tags: ["AI Agent UX", "Multi-Surface", "Systems Design"],
    accent: "bg-primary",
  },
  {
    title: "GenAI Text Framework",
    description:
      "A design framework for generative text — tone calibration, transparent attribution, and graceful user control across four product surfaces.",
    tags: ["Generative AI", "Content Design", "Framework"],
    accent: "bg-coral",
  },
  {
    title: "Prompt Engineering Studio",
    description:
      "An internal tool empowering non-technical teams to craft, test, and refine prompts — cutting iteration time by 60%.",
    tags: ["Developer Tools", "Prompt Design", "Internal Product"],
    accent: "bg-rose",
  },
];

const CaseStudiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Selected <em className="italic">Work</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Stories from the intersection of design, AI, and real human connection.
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
