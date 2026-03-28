import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  { num: "01", name: "Cursor + Claude Code", desc: "I write and prototype code daily. This portfolio was built with both." },
  { num: "02", name: "Claude", desc: "Research, writing, pressure-testing design decisions, and thinking through edge cases before presenting to teams." },
  { num: "03", name: "Lovable", desc: "Rapid UI prototyping. When I need to show something fast, I build it instead of wireframing it." },
];

const HowIWorkSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-white" style={{ backgroundImage: "none" }} ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground">
            AI is not just what I design. It is how I work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

        <p
          className={`font-body text-muted-foreground text-sm text-center max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          I also maintain a personal AI knowledge base, meeting notes, project decisions, goals, and context, so I never lose the thread on complex work.
        </p>
      </div>
    </section>
  );
};

export default HowIWorkSection;
