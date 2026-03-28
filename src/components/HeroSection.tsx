const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600, height: 600,
            top: "-15%", left: "-10%",
            background: "radial-gradient(circle, hsla(340,72%,72%,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "mesh-drift-1 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500, height: 500,
            bottom: "0%", right: "-5%",
            background: "radial-gradient(circle, hsla(340,65%,60%,0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "mesh-drift-2 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 450, height: 450,
            top: "20%", right: "10%",
            background: "radial-gradient(circle, hsla(220,60%,55%,0.25) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "mesh-drift-3 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400,
            bottom: "10%", left: "25%",
            background: "radial-gradient(circle, hsla(340,72%,72%,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "mesh-drift-4 11s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <p className="text-coral font-body font-medium text-base md:text-lg tracking-widest uppercase mb-4">
              Mia Donnell · Senior Product Designer
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
