import { useScrollReveal } from "@/hooks/useScrollReveal";


const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <GeometricAccent className="absolute top-8 right-12 w-24 h-24 text-foreground/20" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div
            className={`md:col-span-5 md:col-start-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/80 via-rose/50 to-coral/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-rose/60" />
            </div>
          </div>

          <div
            className={`md:col-span-6 md:col-start-7 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              <em className="italic">A little</em> about me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              I'm a product designer who's spent the last three years deep in the world of{" "}
              <span className="text-foreground font-medium">AI agent design</span> — shaping how autonomous systems
              can feel transparent, human, and genuinely delightful.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              From multi-surface agent experiences to generative text frameworks, I live in the space where{" "}
              <span className="text-coral font-medium">human intuition meets machine intelligence</span>. Currently
              designing at the frontier of responsible AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
