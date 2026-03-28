import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "Multi-Surface Agent Design",
    description:
      "An end-to-end experience for an AI agent across mobile, desktop, and ambient — seamless handoffs, consistent context, one beautiful thread.",
    tags: ["AI Agent UX", "Multi-Surface", "Systems Design"],
    accentGradient: "from-primary/60 to-primary/20",
    accentTag: "bg-primary/15 text-primary",
    accentLink: "text-primary",
    href: "/multi-surface-agent-design",
  },
  {
    title: "GenAI Text Framework",
    description:
      "A design framework for generative text — tone calibration, transparent attribution, and graceful user control across four product surfaces.",
    tags: ["Generative AI", "Content Design", "Framework"],
    accentGradient: "from-coral/60 to-coral/20",
    accentTag: "bg-coral/15 text-coral",
    accentLink: "text-coral",
    href: "/genai-text-framework",
  },
  {
    title: "Prompt Engineering Studio",
    description:
      "An internal tool empowering non-technical teams to craft, test, and refine prompts — cutting iteration time by 60%.",
    tags: ["Developer Tools", "Prompt Design", "Internal Product"],
    accentGradient: "from-rose/60 to-rose/20",
    accentTag: "bg-rose/15 text-rose",
    accentLink: "text-rose",
    href: "/prompt-engineering-studio",
  },
];

const CaseStudiesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
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

        {/* Horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className={`group flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-start bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 cursor-pointer flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              {/* Visual placeholder area */}
              <div className={`w-full h-[200px] bg-gradient-to-br ${study.accentGradient} rounded-t-2xl`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>

                {/* Tags — right below title */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${study.accentTag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {study.description}
                </p>

                {study.href ? (
                  <Link to={study.href} className={`font-display font-semibold text-sm ${study.accentLink} hover:underline`}>
                    View Case Study →
                  </Link>
                ) : (
                  <span className={`font-display font-semibold text-sm ${study.accentLink} opacity-50`}>
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
