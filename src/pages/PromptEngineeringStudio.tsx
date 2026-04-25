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
            <Link to="/#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Work</Link>
            <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 1. Hero */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-0 md:pt-44">
          <Section>
            <h1 className="text-white/50 font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
              Prompt Engineering Studio
            </h1>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Designing the tool that <em className="italic">taught</em><br />Workday how to prompt.
            </h2>
            <p className="font-body text-white/50 text-sm md:text-base mb-16">
              Sole Designer · Founding&nbsp;&nbsp;|&nbsp;&nbsp;2023–2025&nbsp;&nbsp;|&nbsp;&nbsp;Team: 3 to 20+
            </p>
          </Section>
          <div className="relative w-full">
            <img
              src="/images/genai-studio/compose-populated.png"
              alt="Prompt Engineering Studio — Compose view with a populated prompt segment"
              className="w-full rounded-t-2xl object-cover object-top shadow-2xl"
            />
          </div>
        </div>
      </BlueBg>

      {/* 2. The Problem */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE PROBLEM</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Gen AI didn't exist in Workday.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Before this tool existed, PMs had no path to building or testing AI features. Our goal was to create a seamless way to author, publish and deploy prompts all in one interface.
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
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              I used a working POC engineering and I had built to run a usability study with five PMs across five Workday product lines. The tool structured prompts into three fields: Action, Context, and Example. Each PM came with a real use case and tried to build from scratch.
            </p>
            <img
              src="/images/genai-studio/old-prompt-area.png"
              alt="Early POC prompt composer showing three fields: Context, Action, and Example"
              className="w-full max-w-lg rounded-xl shadow-md mb-10 border border-border bg-white"
            />
            <p className="font-body font-semibold text-foreground text-sm max-w-2xl mb-4 uppercase tracking-widest">What we found</p>
            <ul className="space-y-3 list-disc pl-5 max-w-2xl mb-10">
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

          </Section>
        </div>
      </section>

      {/* 5. The Decision */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>THE DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              After research, I wanted one box.<br />Engineering pushed back.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              My read of the research was to simplify the composer to a single free-text input. Engineering disagreed. They'd seen what structured prompts produced versus unstructured ones, and the data backed them up. So we found a middle ground: default to showing one segment, with the option to expand to the full three-part structure for users who wanted more control.
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
            {/* 01 Prompt Builder */}
            <div className="mb-14">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">01</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Prompt Builder</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">Structured fields for Action, Context, and Example, with rewritten hint text and copy-pasteable guide examples based on research findings. The copy-pasteable examples were what finally got hesitant users moving.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-4xl">
                <ClickImg
                  src="/images/genai-studio/compose-populated.png"
                  alt="Prompt Builder showing three-segment composer with Action, Context, and Example fields populated"
                  caption="Prompt Builder: structured composer with real content and output side by side."
                  onOpen={openLightbox}
                />
              </div>
            </div>

            {/* 02 Evaluation Framework */}
            <div className="mb-14">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">02</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Evaluation Framework</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">Structured prompt testing before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing gave PMs a bridge from software QA concepts they already knew.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-4xl">
                <ClickImg
                  src="/images/genai-studio/results-tab.png"
                  alt="Evaluation Framework Results tab showing Pass/Fail scores across test suites"
                  caption="Evaluation Framework: Pass/Fail scoring across test suites."
                  onOpen={openLightbox}
                />
              </div>
            </div>

            {/* 03 Version History */}
            <div className="mb-14">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">03</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Version History</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">Go back to any previous version at any point. Came directly from research: participants wanted to see which prompt version generated which output. Without that link, iterating felt arbitrary.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-4xl">
                <ClickImg
                  src="/images/genai-studio/history.png"
                  alt="Version History view showing a list of prompt runs with timestamps"
                  caption="Version History: every iteration tracked and reversible."
                  onOpen={openLightbox}
                />
              </div>
            </div>

            {/* 04 Deploy */}
            <div className="mb-6">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">04</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Deploy Handoff + Deploy Alerts</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">A single place to publish, track, and monitor prompts in production. Alerts notified owners when something changed downstream so nothing shipped silently.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-4xl">
                <ClickImg
                  src="/images/genai-studio/deploy.png"
                  alt="Deploy view showing all published prompts with version numbers and owners"
                  caption="Deploy: publish, track, and monitor prompts in production."
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
              Getting everyone to the same picture.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The bigger cross-functional move was the Prompt Lifecycle Map. Engineers and PMs had completely different pictures of how a prompt went from idea to production, and that confusion showed up as bugs, missed handoffs, and rework. I mapped the full lifecycle from Studio authoring through deployment and made it the shared reference. It became the first thing every new product team saw when they adopted the platform.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm bg-white">
              <ClickImg
                src="/images/genai-studio/prompt-lifecycle-map.jpg"
                alt="GenAI Studio Prompt Lifecycle Map showing the full flow from Author through Integrate, Publish, and Deploy"
                caption="Prompt Lifecycle Map: the shared reference for every team that adopted the platform."
                onOpen={openLightbox}
              />
            </div>
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
                  Instead of asking PMs to fill in three blank fields, present them an interface that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept, but leadership deprioritized it. The engineering cost and competing priorities was the constraint.
                </p>
              </div>
              <div>
                <h2 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">
                  That kind of influence doesn't show up in shipped features, but I believe it is worth highlighting.
                </h2>
                <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
                  I ran the research, made the case, and was overruled. I still believe Prompt Wizard would have mattered.
                </p>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 9. Impact & Outcome — Stats */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>IMPACT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-10">
              Now PMs can build and test prompts.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {allStats.map((s) => (
                <div
                  key={s.number}
                  className="rounded-xl p-5 text-center bg-white border border-border"
                >
                  <p className="text-coral font-display font-bold text-3xl md:text-4xl mb-2">{s.number}</p>
                  <p className="font-body text-muted-foreground text-xs leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 9b. Impact — Story */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>OUTCOME</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              A POC that became a platform.
            </h2>
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
