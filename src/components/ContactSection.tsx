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
        <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(230,65%,30%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,60%,40%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
        <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "10%", left: "25%", background: "radial-gradient(circle, hsla(240,55%,35%,0.2) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            I build things that matter at scale.
          </h2>
          <p className="font-body font-medium text-base md:text-lg tracking-widest uppercase mb-10" style={{ color: "hsl(210,80%,78%)" }}>
            Let's talk.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
