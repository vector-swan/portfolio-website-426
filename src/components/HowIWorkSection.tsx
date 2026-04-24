import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  { num: "01", name: "Cursor + Claude Code", desc: "I write and prototype code daily. This portfolio was built with both." },
  { num: "02", name: "Claude & Gemini", desc: "Research, writing, pressure-testing design decisions, and thinking through edge cases before presenting to teams." },
  { num: "03", name: "AI Makers Club", desc: "I co-founded a bi-weekly community at Workday where designers build with AI tools together. I enjoy teaching others as much as I enjoy learning from them." },
];


const HowIWorkSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" style={{ background: "#F9EEF2", backgroundImage: "none" }} ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground">
            I work in AI. I build with AI. I design for AI.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {tools.map((t, i) => (
            <div
              key={t.num}
              className={`bg-rose/10 rounded-xl p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms" }}
            >
              <span className="text-coral font-display font-bold text-lg">{t.num}</span>
              <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{t.name}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIWorkSection;
