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
  { num: "01", name: "Prompt Builder", desc: "Structured fields for context, action, and examples." },
  { num: "02", name: "Variables System", desc: "Reusable prompts with dynamic data fields so the same prompt works across different roles, locations, and inputs." },
  { num: "03", name: "Contextual Preview", desc: "See your prompt as the end user would, inside the actual product surface." },
  { num: "04", name: "Evaluation Framework", desc: "Test prompt quality without writing a single line of code." },
  { num: "05", name: "Version History", desc: "Go back to any previous version at any point." },
  { num: "06", name: "Deploy Handoff", desc: "Everything an engineer needs to push to test or production, in one place." },
];

const stats = [
  { number: "2,000+", label: "hackathon projects supported" },
  { number: "34%", label: "weekly stickiness — the SaaS average is 13%" },
  { number: "3,808", label: "prompt generations in 30 days" },
];

const PromptEngineeringStudio = () => {
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
      <section className="relative pt-16 bg-foreground overflow-hidden">
        {/* Gradient mesh blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{
              width: 500, height: 500,
              top: "-10%", left: "-5%",
              background: "radial-gradient(circle, hsla(340,65%,45%,0.4) 0%, transparent 70%)",
              filter: "blur(80px)",
              animation: "mesh-drift-1 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 450, height: 450,
              bottom: "-5%", right: "0%",
              background: "radial-gradient(circle, hsla(340,60%,40%,0.35) 0%, transparent 70%)",
              filter: "blur(70px)",
              animation: "mesh-drift-2 10s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 400, height: 400,
              top: "15%", right: "15%",
              background: "radial-gradient(circle, hsla(220,50%,40%,0.3) 0%, transparent 70%)",
              filter: "blur(70px)",
              animation: "mesh-drift-3 7s ease-in-out infinite",
            }}
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36 relative z-10">
          <Section>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
              Designing the tool that taught Workday how to prompt.
            </h1>
            <div className="flex flex-wrap gap-3">
              {["Sole Designer", "2023–2024", "Team: 3 to 20+"].map((chip) => (
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
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE PROBLEM</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Every prompt test needed an engineering ticket.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Every change meant another wait. Product managers had ideas for AI features but no way to build or test them without pulling in an engineer. In 2023, nobody at Workday had a faster path.
            </p>
          </Section>
        </div>
      </section>

      {/* 3. The Insight */}
      <section className="bg-rose/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE INSIGHT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              This was not just a tooling gap. It was a knowledge gap.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              When I started, I barely understood prompt engineering myself. If I was going to design a tool that PMs could actually use, I had to learn it first, then figure out how to make that learning curve shorter for everyone else.
            </p>
          </Section>
        </div>
      </section>

      {/* 4. What I Built */}
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I BUILT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-10">
              Six features that took a prompt from idea to production.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* 5. A New Way of Working */}
      <section className="bg-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>PROCESS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              Seeing it built is faster than designing it blind.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              Understanding LLM evaluations was hard. Rather than wireframe something I did not fully grasp, an engineer built a working prototype in v0 so I could see how it functioned first. That changed how I work. For complex technical concepts, seeing the functionality first is faster than designing something I cannot fully understand yet.
            </p>
          </Section>
        </div>
      </section>

      {/* 6. The Numbers */}
      <section className="bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>IMPACT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-12">
              The results.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.number} className="text-center">
                  <p className="text-coral font-display font-bold text-4xl md:text-5xl mb-2">{s.number}</p>
                  <p className="font-body text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-muted-foreground text-sm text-center max-w-xl mx-auto">
              450 unique users across Workday. The framework it powered serves 750+ enterprise customers.
            </p>
          </Section>
        </div>
      </section>

      {/* 7. What Happened Next */}
      <section className="bg-rose/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>OUTCOME</PinkLabel>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The team was good enough at shipping AI that leadership moved us to Workday's highest priority project, the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.
            </p>
          </Section>
        </div>
      </section>

      {/* 8. What I Learned */}
      <section className="bg-foreground">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <Section>
            <p className="font-display italic text-white text-2xl md:text-3xl lg:text-4xl text-center leading-snug max-w-3xl mx-auto">
              "The fastest way to understand a new technology is to design for someone who knows even less than you do."
            </p>
          </Section>
        </div>
      </section>

      {/* 9. Footer Nav */}
      <section className="bg-white border-t border-border">
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
            Next Case Study: GenAI Text Framework &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PromptEngineeringStudio;
