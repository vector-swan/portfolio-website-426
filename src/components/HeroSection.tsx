
const HeroSection = () => {
  const scrollToWork = () => {
    document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.18] blur-[120px] bg-[radial-gradient(circle,hsl(340_72%_72%)_0%,transparent_70%)] top-[-10%] left-[-5%] animate-[mesh-drift-1_24s_ease-in-out_infinite]" />
        <div className="absolute w-[450px] h-[450px] rounded-full opacity-[0.15] blur-[110px] bg-[radial-gradient(circle,hsl(340_65%_60%)_0%,transparent_70%)] bottom-[5%] right-[-8%] animate-[mesh-drift-2_28s_ease-in-out_infinite]" />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.12] blur-[100px] bg-[radial-gradient(circle,hsl(220_60%_55%)_0%,transparent_70%)] top-[30%] right-[15%] animate-[mesh-drift-3_22s_ease-in-out_infinite]" />
        <div className="absolute w-[350px] h-[350px] rounded-full opacity-[0.14] blur-[100px] bg-[radial-gradient(circle,hsl(340_72%_72%)_0%,transparent_70%)] bottom-[-5%] left-[20%] animate-[mesh-drift-4_26s_ease-in-out_infinite]" />
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
