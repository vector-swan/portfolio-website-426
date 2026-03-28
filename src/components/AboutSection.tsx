import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FloralAccent1, FloralLeaf } from "@/components/FloralAccents";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Floral bg accents */}
      <FloralAccent1 className="absolute -top-8 -left-8 w-36 h-36 text-rose/30" />
      <FloralLeaf className="absolute bottom-12 right-8 w-12 h-20 text-primary/20 rotate-[45deg]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Photo placeholder — asymmetric offset */}
          <div
            className={`md:col-span-5 md:col-start-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-rose/60" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-coral/80" />
              <FloralAccent1 className="absolute -top-6 -right-6 w-20 h-20 text-rose/40" />
            </div>
          </div>

          {/* Bio text */}
          <div
            className={`md:col-span-6 md:col-start-7 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              About
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              I'm a product designer who's spent the last three years deep in the weeds of{" "}
              <span className="text-foreground font-medium">AI agent design</span> — figuring out how to make
              autonomous systems feel transparent, controllable, and genuinely useful.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From multi-surface agent experiences to generative text frameworks, I obsess over the space where{" "}
              <span className="text-coral font-medium">human intent meets machine capability</span>. Currently
              designing at the frontier of responsible AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
