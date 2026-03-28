import { FloralAccent1, FloralAccent3, FloralLeaf } from "@/components/FloralAccents";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft warm background accents */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-rose/15 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-[-60px] w-48 h-48 rounded-full bg-rose/20 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-coral/8 blur-3xl" />

      {/* Floral decorations */}
      <FloralAccent1 className="absolute top-28 right-16 w-28 h-28 text-rose animate-float opacity-50" />
      <FloralAccent3 className="absolute bottom-36 right-1/4 w-16 h-16 text-coral/40 animate-float" style={{ animationDelay: "3s" }} />
      <FloralLeaf className="absolute top-48 right-[12%] w-10 h-16 text-primary/40 rotate-[30deg]" />
      <FloralLeaf className="absolute bottom-24 left-12 w-8 h-14 text-rose/40 -rotate-[20deg] animate-float" style={{ animationDelay: "4s" }} />

      {/* Soft dots */}
      <div className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-rose/60" />
      <div className="absolute bottom-48 right-20 w-2.5 h-2.5 rounded-full bg-coral/40" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <p className="text-coral font-body font-medium text-base md:text-lg tracking-widest uppercase mb-4">
              Mia · Senior Product Designer
            </p>
          </div>

          <h1
            className="font-display font-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] tracking-tight text-foreground mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Designing the AI experiences people will{" "}
            <em className="text-primary italic">actually</em> trust
          </h1>

          <p
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 opacity-0 animate-fade-up leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Three years of shaping how people connect with AI agents, generative models, and the systems that power them.
          </p>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <button
              onClick={scrollToWork}
              className="bg-coral text-coral-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-coral/20"
            >
              See My Work ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
