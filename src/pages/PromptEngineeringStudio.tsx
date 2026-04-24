import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

// ── Shared primitives ────────────────────────────────────────────────────────

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

const PinkLabel = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <p className={`font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3 ${light ? "text-[hsl(210,80%,78%)]" : "text-coral"}`}>
    {children}
  </p>
);

const BlueBg = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative overflow-hidden ${className}`} style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(215,80%,62%,0.35) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(225,70%,28%,0.5) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(205,75%,65%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
    </div>
    <div className="relative z-10">{children}</div>
  </section>
);

// ── ClickImg — unified zoomable image ────────────────────────────────────────

type LightboxState = { src: string; alt: string; caption?: string } | null;

const ClickImg = ({
  src,
  alt,
  caption,
  imgClassName = "",
  fill = false,
  onOpen,
}: {
  src: string;
  alt: string;
  caption?: string;
  imgClassName?: string;
  fill?: boolean;
  onOpen: (src: string, alt: string, caption?: string) => void;
}) => (
  <button
    type="button"
    onClick={() => onOpen(src, alt, caption)}
    className={`block w-full cursor-zoom-in group overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ${fill ? "h-full" : ""}`}
    aria-label={`View full size: ${alt}`}
  >
    <img
      src={src}
      alt={alt}
      className={`block w-full transition-transform duration-300 ease-out group-hover:scale-[1.03] ${fill ? "h-full object-cover" : "h-auto"} ${imgClassName}`}
    />
  </button>
);

// ── Data ─────────────────────────────────────────────────────────────────────

const features = [
  {
    num: "01",
    name: "Prompt Builder",
    desc: "Structured fields for Action, Context, and Example, with rewritten hint text and copy-pasteable guide examples based on research findings. The copy-pasteable examples were what finally got hesitant users moving.",
  },
  {
    num: "02",
    name: "Evaluation Framework",
    desc: "Structured prompt testing before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing was deliberate: it gave PMs a bridge from software QA concepts they already knew.",
  },
  {
    num: "03",
    name: "Version History",
    desc: "Go back to any previous version at any point. Came directly from research: participants wanted to see which prompt version generated which output. Without that link, iterating felt arbitrary.",
  },
  {
    num: "04",
    name: "Deploy Handoff + Deploy Alerts",
    desc: "Everything an engineer needs to push to test or production in one place, plus two warning systems (Curly Braces Warning, Variables with Hyphens) that catch technical issues before they silently break in production. Syntax errors in prompts fail silently. These alerts are a quality gate between the Studio and production.",
  },
];

const allStats = [
  { number: "450", label: "unique internal users" },
  { number: "34%", label: "weekly stickiness, more than 2x the SaaS average of 13%" },
  { number: "3,808", label: "prompt generations in the first 30 days" },
  { number: "~6,200", label: "generation runs per month by June 2025" },
  { number: "8/8", label: "users preferred the new Evaluate workflow over manual testing" },
  { number: "17", label: "active use cases on the platform by mid-2025" },
];

// ── Page ─────────────────────────────────────────────────────────────────────

const PromptEngineeringStudio = () => {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (src: string, alt: string, caption?: string) =>
    setLightbox({ src, alt, caption });

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
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-44 md:pb-20">
          <Section>
            <h1 className="text-white/50 font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
              Prompt Engineering Studio
            </h1>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Designing the tool that taught Workday how to prompt.
            </h2>
            <p className="font-body text-white/50 text-sm md:text-base">
              Sole Designer · Founding&nbsp;&nbsp;|&nbsp;&nbsp;2023–2025&nbsp;&nbsp;|&nbsp;&nbsp;Team: 3 to 20+
            </p>
          </Section>
        </div>
      </BlueBg>

      {/* 2. The Problem */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE PROBLEM</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Every prompt test needed an engineering ticket.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              Before this tool existed, PMs had no independent path to building or testing AI features. Every prompt idea, every tweak, every iteration, required pulling an engineer off something else. There was no way to see if a prompt worked without filing a ticket and waiting. I was hired to change that. By the time we shipped, the feedback loop that had taken a month took a week.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              I joined as the sole designer on a founding team of four. No PM, which meant I was deciding what to build, not just designing it. When our first PM joined I shifted into roadmap collaboration, but in those early months I was making both product and design calls.
            </p>
          </Section>
        </div>
      </section>

      {/* 4. Discovery */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>DISCOVERY</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Five PMs and five different use cases.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              I used a working POC engineering and I had built to run a usability study with five PMs across five Workday product lines.
            </p>
            <p className="font-body font-semibold text-foreground text-sm max-w-2xl mb-2">The tool structured prompts into three fields:</p>
            <ul className="font-body text-muted-foreground text-sm max-w-2xl mb-6 space-y-1 list-none">
              <li><span className="font-semibold text-foreground">Action:</span> what you want the AI to do</li>
              <li><span className="font-semibold text-foreground">Context:</span> background information</li>
              <li><span className="font-semibold text-foreground">Example:</span> a sample of the ideal output</li>
            </ul>
            <div className="max-w-lg mb-10 rounded-xl border border-border p-6 bg-white">
              <p className="font-display font-semibold text-foreground text-sm mb-4">Each PM came with a real use case and tried to build a prompt from scratch. Here's what we found.</p>
              <ul className="space-y-3 list-disc pl-5">
                {[
                  { finding: "The three fields weren't clearly distinct", detail: "most participants put everything into one box." },
                  { finding: "Guidance was there but nobody found it", detail: "almost no one discovered the help panel on their own." },
                  { finding: "Too many advanced controls", detail: "model settings overwhelmed PMs who lacked the context to choose." },
                  { finding: "No way to track iterations", detail: "every prompt version felt like starting over." },
                ].map((item) => (
                  <li key={item.finding} className="font-body text-muted-foreground text-sm leading-relaxed">
                    <span className="font-semibold text-foreground">{item.finding}:</span> {item.detail}
                  </li>
                ))}
              </ul>
            </div>

          </Section>
        </div>
      </section>

      {/* 5. The Decision */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>THE DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              After research, I wanted one box. Engineering pushed back.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              My read of the research was to simplify the composer to a single free-text input. Engineering disagreed. They'd seen what structured prompts produced versus unstructured ones, and the data backed them up. So we found a middle ground: default to showing one segment, with the option to expand to the full three-part structure for users who wanted more control.
            </p>
            <p className="font-body font-semibold text-white text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              So instead of removing the structure, I redesigned the scaffolding around it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                "Rewrote hint text to be concrete and specific to each field",
                "Made guide examples copy-pasteable; that was the thing that got hesitant users moving",
                "Abstracted model selection with a smart default, keeping advanced options available without putting them in everyone's way",
                "Fixed guide discoverability in the first-time user flow",
              ].map((item) => (
                <div key={item} className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <span className="text-white mt-0.5 flex-shrink-0">↗</span>
                  <p className="font-body text-white/80 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </BlueBg>

      {/* 6. What I Built */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I BUILT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-10">
              Four features that took a prompt from idea to production.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
              {features.map((f) => (
                <div key={f.num} className="rounded-xl border border-border p-6">
                  <span className="text-coral font-display font-bold text-lg">{f.num}</span>
                  <h3 className="font-display font-bold text-base text-foreground mt-2 mb-2">{f.name}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Studio screenshots */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">Compose: structured three-segment prompt builder</p>
                </div>
                <ClickImg
                  src="/images/genai-studio/compose-populated-one-segment.png"
                  alt="GenAI Studio Compose screen showing the three-segment prompt builder with Action, Context, and Example fields"
                  caption="Compose: structured three-segment prompt builder"
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">Deploy: everything needed to push to production</p>
                </div>
                <ClickImg
                  src="/images/genai-studio/deploy-1-published.png"
                  alt="GenAI Studio Deploy screen showing published prompts table with production deployment status"
                  caption="Deploy: everything needed to push to production"
                  onOpen={openLightbox}
                />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 7. Process */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>PROCESS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              I'd rather see it working than wireframe something I don't fully understand.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The bigger cross-functional move was the Prompt Lifecycle Map. Engineers and PMs had completely different pictures of how a prompt went from idea to production, and that confusion showed up as bugs, missed handoffs, and rework. I mapped the full lifecycle from Studio authoring through deployment and made it the shared reference. It became the first thing every new product team saw when they adopted the platform.
            </p>
          </Section>
        </div>
      </section>

      {/* 8. What I Advocated For That Didn't Ship */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I ADVOCATED FOR THAT DIDN'T SHIP</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-8">
              I ran the research to validate the concept. I was overruled.
            </h2>

            <div className="space-y-6 max-w-2xl">
              <div>
                <h2 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                  The Prompt Wizard was a design direction I believed in.
                </h2>
                <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                  Instead of asking PMs to understand prompt structure and fill in three blank fields, guide them through a wizard that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept. Leadership deprioritized it. Engineering cost was the constraint.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                  That kind of influence doesn't show up in shipped features, but it's real.
                </h2>
                <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                  I ran the research, made the case, and was overruled. The research data became part of the roadmap conversation even after I transitioned. Looking at how many prompt engineering tools exist today, I still believe the concept was right. The Prompt Wizard would have mattered.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 9. Impact & Outcome */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>IMPACT & OUTCOME</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-10">
              Now PMs can build and test prompts.
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {allStats.map((s) => (
                <div
                  key={s.number}
                  className="rounded-xl p-5 text-center"
                  style={{ background: "hsla(210, 70%, 65%, 0.18)" }}
                >
                  <p className="text-white font-display font-bold text-3xl md:text-4xl mb-2">{s.number}</p>
                  <p className="font-body text-white/70 text-xs leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              This started as a POC. Four people, no roadmap guarantee, no dedicated PM. The adoption numbers made the case for investment and the team grew from four to more than twenty. That track record was what moved us to Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.
            </p>
          </Section>
        </div>
      </BlueBg>

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
            Next: Multi-Surface Agent Design &rarr;
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-16 cursor-default animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: "hsla(220, 40%, 12%, 0.72)" }}
          />
          <div
            className="relative animate-in zoom-in-95 duration-200 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="block max-w-[90vw] max-h-[85vh] w-auto h-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
            />
            {lightbox.caption && (
              <p className="text-white/50 text-sm mt-4 text-center font-body">{lightbox.caption}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-150 cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default PromptEngineeringStudio;
