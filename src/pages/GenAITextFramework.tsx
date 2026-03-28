import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
};

const PinkLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-coral font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
    {children}
  </p>
);

const features = [
  { num: "01", name: "Floating AI Action Button (FAAB)", desc: "A universal entry point that works across Workday's XO and bespoke product surfaces regardless of the use case." },
  { num: "02", name: "Generation Menu", desc: "Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine." },
  { num: "03", name: "Preview Popover", desc: "Users see the AI output before it touches their work. Review, edit, regenerate, or dismiss. Nothing gets inserted without their approval." },
];

const stats = [
  { number: "750+", label: "enterprise customers using the framework" },
  { number: "4,000+", label: "individual users generating content" },
  { number: "7", label: "features in GA with 8 more in development" },
];

const GenAITextFramework = () => {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
          <Link to="/" className="font-display font-bold text-xl text-foreground">
            Mia Donnell<span className="text-coral">.</span>
          </Link>
          <div className="hidden sm:flex gap-8">
            <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link>
            <Link to="/#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Expertise</Link>
            <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative pt-16 overflow-hidden" style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(230,65%,30%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,60%,40%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "10%", left: "25%", background: "radial-gradient(circle, hsla(240,55%,35%,0.2) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36 relative z-10">
          <Section>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
              Workday's first generative AI feature. Built to work anywhere.
            </h1>
            <div className="flex flex-wrap gap-3">
              {["Lead Designer", "2023–2024", "Workday's first shipped AI product"].map((chip) => (
                <span key={chip} className="text-xs text-white/80 font-body border border-white/20 rounded-full px-4 py-1.5">
                  {chip}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE PROBLEM</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              There was no pattern for AI in Workday. We had to build one.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Workday had a tool to build AI prompts internally but no way for actual users to experience generative AI in the product. AI was new to the company, new to the industry, and there was no playbook. We needed a pattern that could plug into any text field across Workday, job descriptions, feedback, forms, regardless of the use case.
            </p>
          </Section>
        </div>
      </section>

      {/* 3. The Insight */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE INSIGHT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              It had to feel native, not bolted on.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Workday is built on forms and fields. For AI text generation to work here it had to be invisible infrastructure, not a feature dropped into the middle of someone's workflow. The framework needed to feel like it belonged in whatever surface it lived in.
            </p>
          </Section>
        </div>
      </section>

      {/* 4. What I Built */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I BUILT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-10">
              Three parts that became the foundation for every text generation feature at Workday.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.num} className="bg-rose/10 rounded-xl p-6">
                  <span className="text-coral font-display font-bold text-lg">{f.num}</span>
                  <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">{f.name}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 5. The Human-in-the-Loop Decision */}
      <section className="relative overflow-hidden" style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(230,65%,30%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,60%,40%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 relative z-10">
          <Section>
            <PinkLabel>KEY DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              See it before it lands.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              The preview popover was the most important call on this project. AI output is unpredictable. Users needed to feel in control before trusting it. Seeing the result first, before it lands in their document, is what made adoption possible. Without that step, one bad output would have killed confidence in the whole feature. As new use cases emerged, some flows opened content in a separate screen, making the popover redundant. Knowing when to skip it without breaking the core trust pattern was one of the harder design problems on this project.
            </p>
          </Section>
        </div>
      </section>

      {/* 6. Navigating Legal and Responsible AI */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>RESPONSIBLE AI</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Getting the disclosure language right mattered.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              This was new territory for the company legally. I worked directly with Workday's legal team to get AI disclosure language approved. That copy went through multiple rounds of revision. It sounds like a small thing but getting that language right was required before anything could ship.
            </p>
          </Section>
        </div>
      </section>

      {/* 7. The Numbers */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>IMPACT</PinkLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.number} className="text-center">
                  <p className="text-coral font-display font-bold text-4xl md:text-5xl mb-2">{s.number}</p>
                  <p className="font-body text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <p className="font-display italic text-muted-foreground text-sm">"Very fast, easy, good information."</p>
              <p className="font-display italic text-muted-foreground text-sm">"Gets the ball rolling quickly."</p>
              <p className="font-display italic text-muted-foreground text-sm">"Helps get a good start on a new job description in a new industry."</p>
            </div>
          </Section>
        </div>
      </section>

      {/* 8. What Happened Next */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>OUTCOME</PinkLabel>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The framework shipped as Workday's first generative AI product. It became the backend for the Prompt Engineering Studio, giving teams a connected path from prompt creation to end-user experience. It has since been handed to a new team to continue building on.
            </p>
          </Section>
        </div>
      </section>

      {/* 9. What I Learned */}
      <section className="relative overflow-hidden" style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 500, height: 500, top: "-10%", right: "5%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "5%", left: "10%", background: "radial-gradient(circle, hsla(240,55%,35%,0.2) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36 relative z-10">
          <Section>
            <p className="font-display italic text-white text-2xl md:text-3xl lg:text-4xl text-center leading-snug max-w-3xl mx-auto">
              "AI design is not about the UI. It is about what happens when the output is wrong, unexpected, or just not quite right. Every trust pattern in this framework exists because of that question."
            </p>
          </Section>
        </div>
      </section>

      {/* 10. Footer Nav */}
      <section className="bg-white border-t border-border" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <Link
            to="/#case-studies"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Work
          </Link>
          <Link
            to="/multi-surface-agent-design"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Next Case Study: Multi-Surface Agent Design &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GenAITextFramework;
