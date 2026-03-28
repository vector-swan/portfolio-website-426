import { FloralAccent1, FloralAccent3, FloralLeaf } from "@/components/FloralAccents";

const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft background accents */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-coral/15 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-[-60px] w-48 h-48 rounded-full bg-rose/20 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-rose/10 blur-3xl" />

      {/* Floral decorations */}
      <FloralAccent1 className="absolute top-28 right-16 w-28 h-28 text-rose animate-float opacity-60" />
      <FloralAccent3 className="absolute bottom-36 right-1/4 w-16 h-16 text-coral animate-float opacity-50" style={{ animationDelay: "3s" } as React.CSSProperties} />
      <FloralLeaf className="absolute top-48 right-[12%] w-10 h-16 text-primary/60 rotate-[30deg]" />
      <FloralLeaf className="absolute bottom-24 left-12 w-8 h-14 text-rose/50 -rotate-[20deg] animate-float" style={{ animationDelay: "4s" } as React.CSSProperties} />

      {/* Small dots */}
      <div className="absolute top-40 right-1/4 w-3 h-3 rounded-full bg-rose" />
      <div className="absolute bottom-48 right-20 w-2.5 h-2.5 rounded-full bg-coral/60" />
      <div className="absolute top-60 left-[15%] w-2 h-2 rounded-full bg-rose/50" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <p className="text-coral font-display font-bold text-lg md:text-xl tracking-wide mb-4">
              Mia · Senior Product Designer
            </p>
          </div>

          <h1
            className="font-display font-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight text-foreground mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Designing the AI experiences people will{" "}
            <span className="text-primary">actually</span> trust
          </h1>

          <p
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            3+ years shaping how humans interact with AI agents, generative models, and multi-surface systems.
          </p>

          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <button
              onClick={scrollToWork}
              className="bg-coral text-coral-foreground font-display font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-coral/25"
            >
              View My Work ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
