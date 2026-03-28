const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Geometric accent shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-coral/20 blur-3xl animate-float" />
      <div className="absolute bottom-32 left-[-60px] w-48 h-48 rounded-full bg-primary/15 blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 right-1/4 w-4 h-4 rounded-full bg-coral" />
      <div className="absolute bottom-48 right-20 w-3 h-3 rounded-full bg-primary" />

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
              className="bg-coral text-coral-foreground font-display font-bold px-8 py-4 rounded-lg text-lg hover:scale-105 transition-transform duration-200 shadow-lg shadow-coral/25"
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
