import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

type CaseStudy = {
  title: string;
  description: string;
  image: string | null;
  imageAlt: string;
  bgStyle: React.CSSProperties;
  imageClass: string;
  accentLink: string;
  href: string | null;
};

const caseStudies: CaseStudy[] = [
  {
    title: "GenAI Text Framework",
    description:
      "Workday's first generative AI product. A horizontal foundation for text generation across 750+ enterprise customers, built to feel native on every surface it touched.",
    image: "/images/text-framework/text-framework-thumb.png",
    imageAlt: "GenAI Text Framework case study thumbnail showing the AI-assisted text generation interface in Workday",
    bgStyle: {
      background:
        "radial-gradient(circle at 30% 20%, hsla(210,70%,55%,1) 0%, hsla(220,60%,45%,1) 55%, hsla(230,70%,35%,1) 100%)",
    },
    imageClass:
      "w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.04]",
    accentLink: "text-coral",
    href: "/genai-text-framework",
  },
  {
    title: "Prompt Engineering Studio",
    description:
      "The developer tool that let Workday's non-technical teams build and test AI features without writing code. 450 internal users, 34% weekly stickiness.",
    image: "/images/genai-studio/compose-populated-one-segment.png",
    imageAlt: "Prompt Engineering Studio case study thumbnail showing the compose editor with structured prompt fields and AI output",
    bgStyle: {
      background:
        "radial-gradient(circle at 30% 20%, hsla(210,70%,55%,1) 0%, hsla(220,60%,45%,1) 55%, hsla(230,70%,35%,1) 100%)",
    },
    imageClass:
      "max-h-[90%] max-w-[92%] object-contain object-top drop-shadow-2xl rotate-[2deg] group-hover:rotate-0 group-hover:scale-[1.04] transition-transform duration-500",
    accentLink: "text-coral",
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
            Two stories from building Workday's first AI products.
          </p>
        </div>

        {/* Horizontal scroll on mobile, 3-col grid on desktop */}
        <div className="flex lg:grid lg:grid-cols-2 gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
          {caseStudies.map((study, i) => {
            const cardClasses = `group flex-shrink-0 w-[85vw] sm:w-[70vw] lg:w-auto snap-start bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } ${study.href ? "cursor-pointer" : "opacity-80"}`;

            const cardStyle = {
              transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
            };

            const cardInner = (
              <>
                {/* Branded hero composition */}
                <div
                  className="relative w-full h-[220px] rounded-t-2xl overflow-hidden flex items-center justify-center"
                  style={study.bgStyle}
                >
                  {/* Soft highlight overlay for depth */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 80% 85%, rgba(255,255,255,0.12) 0%, transparent 55%)",
                    }}
                  />
                  {study.image && (
                    <img
                      src={study.image}
                      alt={study.imageAlt}
                      className={study.imageClass}
                    />
                  )}
                  {!study.image && null}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {study.description}
                  </p>

                  {study.href ? (
                    <span className={`font-display font-semibold text-sm ${study.accentLink} group-hover:underline`}>
                      View Case Study →
                    </span>
                  ) : null}
                </div>
              </>
            );

            return study.href ? (
              <Link
                key={study.title}
                to={study.href}
                className={cardClasses}
                style={cardStyle}
                aria-label={`View case study: ${study.title}`}
              >
                {cardInner}
              </Link>
            ) : (
              <div key={study.title} className={cardClasses} style={cardStyle}>
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
