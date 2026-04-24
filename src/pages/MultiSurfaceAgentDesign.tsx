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

const surfaces = [
  { name: "Web", desc: "Full UI available. Complex tasks like updating bank account info stay here where data is fully secured." },
  { name: "Mobile", desc: "Sensitive data actions are intentionally limited. Not everything should be done on a phone." },
  { name: "Slack", desc: "Conversational only. If a task needs form inputs it cannot live here." },
  { name: "Microsoft Teams", desc: "Similar limits to Slack but with the ability to host certain modal experiences on Workday's own server for security." },
  { name: "Sana", desc: "Still evolving. Some tasks start here and need to complete in Workday. Handoffs are the current work in progress." },
];

const MultiSurfaceAgentDesign = () => {
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
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(215,80%,62%,0.35) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(225,70%,28%,0.5) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(205,75%,65%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "10%", left: "25%", background: "radial-gradient(circle, hsla(235,65%,25%,0.45) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36 relative z-10">
          <Section>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
              Workday's first AI agent. Five surfaces. One consistent experience.
            </h1>
            <div className="flex flex-wrap gap-3">
              {["Lead Designer", "2024–Present", "5 surfaces, 5 teams"].map((chip) => (
                <span
                  key={chip}
                  className="text-xs text-white/80 font-body border border-white/20 rounded-full px-4 py-1.5"
                >
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
              Five teams. Five surfaces. Nobody talking to each other.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Workday's Self-Service Agent was being built across web, mobile, Slack, Microsoft Teams, and Sana (recently acquired AI platform) at the same time. Each surface had its own team, its own designer, and nobody was coordinating. Users would end up with five different versions of the same AI experience depending on where they logged in. That breaks trust fast.
            </p>
          </Section>
        </div>
      </section>

      {/* 3. My Role */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>MY ROLE</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Lead designer and coordinator across all five surfaces.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              I was the lead designer on the Self-Service Agent and took on the job of getting all five teams aligned. This was less about designing screens and more about coordinating people, making sure the components, responses, and patterns that had already been established were being applied consistently everywhere.
            </p>
          </Section>
        </div>
      </section>

      {/* 4. The Insight */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE INSIGHT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Agents are not a UI element. They are a layer on top of everything.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The surfaces look different, the interactions feel different, and users bring different expectations to each one. Starting with visual consistency gave all five teams something concrete to align on before we got into the harder stuff: tone of voice, response types, error handling, what to do when the agent cannot complete a task.
            </p>
          </Section>
        </div>
      </section>

      {/* 5. What Made Each Surface Different */}
      <section className="relative overflow-hidden" style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(230,65%,30%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,60%,40%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 relative z-10">
          <Section>
            <PinkLabel>SURFACES</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-10">
              Same agent. Five completely different constraints.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {surfaces.map((s, i) => (
                <div
                  key={s.name}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 ${i === surfaces.length - 1 ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)]" : ""}`}
                >
                  <h3 className="text-coral font-display font-bold text-lg mb-2">{s.name}</h3>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 6. The Hard Design Problem */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>KEY DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Not everything should be conversational.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A lot of teams want to make everything into a chat experience because that feels like AI. But simple tasks work well in conversation. Complex tasks with multiple steps and sensitive data add risk every time there is another exchange. Knowing when to keep something conversational and when to send someone to a proper UI was one of the most important calls on this project.
            </p>
          </Section>
        </div>
      </section>

      {/* 7. The Coordination Work */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>PROCESS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              The design work and the coordination work were equally important.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Five designers. Four product teams. Bi-weekly syncs. A tracking system to see where each surface stood against the established patterns. Without both the design and the coordination, nothing ships consistently.
            </p>
            <div className="mt-10 rounded-xl p-6" style={{ background: "#F9EEF2" }}>
              <p className="text-coral font-body font-medium text-xs tracking-widest uppercase mb-2">AI IN MY PROCESS</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                I used Claude to map surface constraints and identify where established patterns would break before bringing recommendations to the team. Running through the logic conversationally helped me catch gaps I would have missed working through a document alone.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* 8. What I Learned */}
      <section className="relative overflow-hidden" style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute rounded-full" style={{ width: 500, height: 500, top: "-10%", right: "5%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
          <div className="absolute rounded-full" style={{ width: 400, height: 400, bottom: "5%", left: "10%", background: "radial-gradient(circle, hsla(240,55%,35%,0.2) 0%, transparent 70%)", filter: "blur(60px)", animation: "mesh-drift-4 15s ease-in-out infinite" }} />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="py-24 md:py-32 border-b border-white/10">
            <Section>
              <p className="font-display italic text-white text-2xl md:text-3xl lg:text-4xl text-center leading-snug max-w-3xl mx-auto">
                "The same request feels different depending on where you make it. That context shift matters. Designing for agents means designing for that feeling, not just the function."
              </p>
            </Section>
          </div>
          <div className="py-16 md:py-20">
            <Section>
              <p className="font-body text-white/70 text-base md:text-lg text-center max-w-2xl mx-auto leading-relaxed">
                AI adds a new layer to every product decision: tone of voice, how different queries trigger different responses, what happens when something goes wrong. The way to make it manageable is to start with shared frameworks and build from there.
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* 9. Footer Nav */}
      <section className="bg-white border-t border-border" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <Link
            to="/#case-studies"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Work
          </Link>
          <Link
            to="/genai-text-framework"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Previous: GenAI Text Framework
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MultiSurfaceAgentDesign;
