import { useScrollReveal } from "@/hooks/useScrollReveal";

const tools = [
  { num: "01", name: "Cursor + Claude Code", desc: "I write and prototype code daily. This portfolio was built with both." },
  { num: "02", name: "Claude", desc: "Research, writing, pressure-testing design decisions, and thinking through edge cases before presenting to teams." },
  { num: "03", name: "Lovable", desc: "Rapid UI prototyping. When I need to show something fast, I build it instead of wireframing it." },
];

const timeline = [
  { num: "01", title: "Daily AI practice", body: "I use AI every day, not just in the products I design but in how I do my job. I keep a personal knowledge base that tracks meeting notes, open decisions, project context, and goals across everything I am working on. It means I can move faster and think more clearly across multiple complex projects at once." },
  { num: "02", title: "Building to learn", body: "Outside of work I build small agents to stay sharp. Project Coach is a side project I built to help with goal setting and accountability. I also built a job search agent for my husband, a practical tool that helped him manage applications, prep for interviews, and track follow-ups. Neither is polished. Both taught me things I brought back into my actual design work." },
  { num: "03", title: "AI Makers Club", body: "I co-founded a group at Workday where designers learn to build with tools like Lovable and v0. Teaching others how to use AI tools has made me better at using them myself." },
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

        <hr className="border-border mb-14" />

        <div
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
        >
          <div className="space-y-0">
            {timeline.map((item, i, arr) => (
              <div key={item.num} className="flex gap-6">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="flex items-center justify-center rounded-full font-display font-bold text-sm"
                    style={{
                      width: 36,
                      height: 36,
                      minWidth: 36,
                      background: "#FDF0F5",
                      border: "2px solid #E05C8A",
                      color: "#E05C8A",
                    }}
                  >
                    {item.num}
                  </div>
                  {i < arr.length - 1 && (
                    <div className="flex-1 w-px bg-border my-2" />
                  )}
                </div>
                <div className={i === arr.length - 1 ? "pb-0" : "pb-8"}>
                  <p className="font-body font-medium text-foreground text-sm mb-1">{item.title}</p>
                  <p className="font-body text-muted-foreground text-[13px] leading-[1.6]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl px-6 py-4" style={{ background: "#FDF0F5" }}>
            <p className="font-display font-semibold text-base md:text-lg italic" style={{ color: "#72243E" }}>
              "I do not just design AI experiences. I live inside them."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
