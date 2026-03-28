import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}
      ref={ref}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(340,72%,72%,0.2) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(260,60%,70%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,70%,70%,0.15) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "10%", left: "25%", background: "radial-gradient(circle, hsla(340,65%,65%,0.15) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            The future of AI design is human-centered.
          </h2>
          <p className="text-coral font-body font-medium text-base md:text-lg tracking-widest uppercase mb-6">
            Let's build it together.
          </p>
          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
            I'm drawn to ambitious, human-centered AI challenges. If you're building something at the edge of
            what's possible, I'd love to be part of the story.
          </p>

          <div className="flex flex-row gap-6 items-center">
            <a
              href="mailto:miaddonnell@gmail.com"
              className="bg-coral text-coral-foreground font-medium px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform duration-200"
            >
              Say Hello
            </a>
            <a href="https://www.linkedin.com/in/miadonnell/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
              LinkedIn
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">
              Read.cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
