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

const BlueBg = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`relative overflow-hidden ${className}`} style={{ background: "hsl(220, 60%, 45%)", backgroundImage: "none" }}>
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute rounded-full" style={{ width: 600, height: 600, top: "-15%", left: "-10%", background: "radial-gradient(circle, hsla(210,70%,35%,0.3) 0%, transparent 70%)", filter: "blur(80px)", animation: "mesh-drift-1 14s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: "0%", right: "-5%", background: "radial-gradient(circle, hsla(230,65%,30%,0.25) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-2 16s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ width: 450, height: 450, top: "20%", right: "10%", background: "radial-gradient(circle, hsla(200,60%,40%,0.2) 0%, transparent 70%)", filter: "blur(70px)", animation: "mesh-drift-3 12s ease-in-out infinite" }} />
    </div>
    <div className="relative z-10">{children}</div>
  </section>
);

const features = [
  {
    num: "01",
    name: "Prompt Builder",
    desc: "Structured fields for Action, Context, and Example — with redesigned educational scaffolding based on research findings. Copy-pasteable guide examples were the key unlock for hesitant users.",
  },
  {
    num: "02",
    name: "Variables System",
    desc: "Reusable prompts with dynamic data fields so the same prompt works across different roles, locations, and inputs — without duplicating the prompt for each use case.",
  },
  {
    num: "03",
    name: "Contextual Preview",
    desc: "See your prompt as the end user would, inside the actual product surface — not just raw output. Addresses the gap between what PMs intended and what shipped.",
  },
  {
    num: "04",
    name: "Evaluation Framework",
    desc: "Structured human-in-the-loop testing before shipping. Mental model: a teacher grading a quiz. Test Suite = the quiz. Test Case = a single question. Running an Evaluation = grading. This framing was deliberate — it gave PMs a bridge from software QA concepts they already knew.",
  },
  {
    num: "05",
    name: "Version History",
    desc: "Go back to any previous version at any point. Addresses the traceability need surfaced directly in research: \"Appreciated the multiple prompt outputs, would like the ability to see the prompt associated with the output.\"",
  },
  {
    num: "06",
    name: "Deploy Handoff + Deploy Alerts",
    desc: "Everything an engineer needs to push to test or production in one place — plus two warning systems (Curly Braces Warning, Variables with Hyphens) that catch technical issues before they silently break in production.",
  },
];

const stats = [
  { number: "450", label: "unique internal users" },
  { number: "34%", label: "weekly stickiness — SaaS average is 13%" },
  { number: "3,808", label: "prompt generations in the first 30 days" },
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
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-44 md:pb-36">
          <Section>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
              Designing the tool that taught Workday how to prompt.
            </h1>
            <div className="flex flex-wrap gap-3">
              {["Sole Designer · Founding", "2023–2025", "Team: 3 to 20+"].map((chip) => (
                <span key={chip} className="text-xs text-white/80 font-body border border-white/20 rounded-full px-4 py-1.5">
                  {chip}
                </span>
              ))}
            </div>
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
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Every change meant another wait. Product managers had ideas for AI features but no way to build or test them without pulling in an engineer. In 2023, nobody at Workday had a faster path. I was hired to design the tool that would change that.
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
              This was not just a tooling gap. It was a knowledge gap.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              When I started, I barely understood prompt engineering myself. If I was going to design a tool that PMs could actually use, I had to learn it first — then figure out how to make that learning curve shorter for everyone else. The real design problem wasn't the interface. It was the mental model.
            </p>
          </Section>
        </div>
      </section>

      {/* 4. Discovery */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>DISCOVERY: WHAT RESEARCH ACTUALLY FOUND</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Five PMs. Five use cases. One consistent breakdown.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Before designing anything, I ran a moderated usability study with five Product Managers across five Workday product lines: Job Descriptions, Machine Learning for Finance, VNDLY, Knowledge Base, and Growth Plans. Each came with a real use case. Each attempted to build a prompt using an early working prototype.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mb-12">
              {[
                {
                  finding: "Action vs. Context wasn't intuitive",
                  detail: "Every participant struggled to distinguish the two fields. Most wrote their entire prompt in one box. The problem wasn't the structure — it was that users had no prior mental model to attach it to.",
                },
                {
                  finding: "The guidance was valuable but invisible",
                  detail: "I'd designed a prompt guide panel triggered by segment labels. Those who found it rated it highly useful. Almost no one found it on their own.",
                },
                {
                  finding: "Model selection created friction without value",
                  detail: "Template-able use cases worked. Subjective ones didn't. Job descriptions — a structured, industry-standard format — were easy to prompt for. Performance reviews and talent assessments broke the example-driven model entirely.",
                },
                {
                  finding: "Users wanted traceability",
                  detail: "Without a link between prompt configuration and output, iterating felt arbitrary. This finding directly shaped the Version History feature.",
                },
              ].map((item) => (
                <div key={item.finding} className="rounded-xl border border-border p-5">
                  <p className="font-display font-semibold text-foreground text-sm mb-2">{item.finding}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

            {/* Research quotes */}
            <div className="space-y-4 max-w-2xl">
              <blockquote className="border-l-4 border-coral pl-5">
                <p className="font-display italic text-foreground text-base md:text-lg leading-relaxed">
                  "I feel like it almost puts more cognitive burden on me to actually see this. I don't know if this can be done behind the scenes by the ML team."
                </p>
                <p className="font-body text-muted-foreground text-xs mt-2">— PM participant, on model selection. That quote became a design brief.</p>
              </blockquote>
              <blockquote className="border-l-4 border-coral pl-5">
                <p className="font-display italic text-foreground text-base md:text-lg leading-relaxed">
                  "Appreciated the multiple prompt outputs, would like the ability to see the prompt associated with the output."
                </p>
                <p className="font-body text-muted-foreground text-xs mt-2">— PM participant, on traceability. This became Version History.</p>
              </blockquote>
            </div>
          </Section>
        </div>
      </section>

      {/* 5. The Decision */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              Keep the structure. Fix the scaffolding.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              After research, there was pressure to simplify the prompt composer to a single free-text input. I pushed back.
            </p>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              The three-segment model — Action, Context, Example — was doing real work. Users who engaged with it wrote better prompts. The structured format forced PMs to articulate what they actually wanted from the model, rather than writing conversationally and hoping for the best. The problem wasn't the structure. It was discoverability and onboarding.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                "Rewrote hint text to be concrete and specific to each field",
                "Made guide examples copy-pasteable — research showed this was the key unlock for hesitant users",
                "Abstracted model selection with a smart default, keeping advanced options accessible but out of the critical path",
                "Addressed guide discoverability in the first-time user flow",
              ].map((item) => (
                <div key={item} className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <span className="text-coral mt-0.5 flex-shrink-0">↗</span>
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
              Six features that took a prompt from idea to production.
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
                  <p className="font-body text-xs text-muted-foreground font-medium">Compose — structured three-segment prompt builder</p>
                </div>
                <img
                  src="/Images/AI%20Card%20Guidelines/GenAI%20Studio/Compose%20_%20Populated%20_%20One%20Segment.png"
                  alt="GenAI Studio Compose screen showing the three-segment prompt builder with Action, Context, and Example fields"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">Deploy — everything needed to push to production</p>
                </div>
                <img
                  src="/Images/AI%20Card%20Guidelines/GenAI%20Studio/Deploy%20_%201%20Published.png"
                  alt="GenAI Studio Deploy screen showing published prompts table with production deployment status"
                  className="w-full h-auto"
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
              Seeing it built is faster than designing it blind.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              Understanding LLM evaluations was genuinely hard. Rather than wireframe something I didn't fully grasp, I had an engineer build a working prototype in v0 so I could see how it functioned first. That changed how I work. For complex technical concepts, seeing the functionality first is faster than designing something I can't fully understand yet.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The Prompt Lifecycle Map — a cross-functional Miro artifact showing the full path from Studio authoring to production deployment — became the most-referenced onboarding artifact for every product team that adopted the platform. Engineers and PMs were consistently confused about dependencies and timing. Making the lifecycle visible solved that.
            </p>
          </Section>
        </div>
      </section>

      {/* 8. Advocacy: What Didn't Ship */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I ADVOCATED FOR THAT DIDN'T SHIP</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              I ran the research to validate the concept. I was overruled.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              The Prompt Wizard was a design direction I believed in from early in the project: instead of asking PMs to understand prompt structure and fill in three blank fields, guide them through a wizard that asks about their use case and generates a well-formed prompt. Research from 2024 validated the concept.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              Leadership repeatedly deprioritized it. Engineering cost was the constraint.
            </p>
            <div className="rounded-xl border border-border p-6 max-w-2xl">
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                I include this because it's honest: I ran the research, made the case, and was overruled. The research data became part of the roadmap conversation even after I transitioned. That's a form of influence that doesn't always show up in shipped features — but it's real. The 15.6% stickiness figure against a 25%+ target is evidence of the onboarding gap the Prompt Wizard would have addressed.
              </p>
            </div>
          </Section>
        </div>
      </section>

      {/* 9. Impact */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>IMPACT</PinkLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.number} className="text-center">
                  <p className="text-white font-display font-bold text-4xl md:text-5xl mb-3">{s.number}</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {[
                { stat: "~6,200", label: "generation runs per month by June 2025" },
                { stat: "8/8", label: "users preferred the new Evaluate workflow over manual testing" },
                { stat: "17", label: "active use cases on the platform by mid-2025" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <p className="font-display font-bold text-white text-2xl mb-1">{item.stat}</p>
                  <p className="font-body text-white/60 text-xs leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </BlueBg>

      {/* 10. Outcome */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>OUTCOME</PinkLabel>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              The team's track record on this project — shipping AI tooling that actually got adopted — was what moved us to Workday's highest-priority project: the Self-Service Agent. The Studio is still running and available to teams building prompts across Workday.
            </p>
          </Section>
        </div>
      </section>

      {/* 11. Closing Quote */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <Section>
            <p className="font-display italic text-foreground text-2xl md:text-3xl lg:text-4xl text-center leading-snug max-w-3xl mx-auto">
              "The fastest way to understand a new technology is to design for someone who knows even less than you do."
            </p>
          </Section>
        </div>
      </section>

      {/* 12. Footer Nav */}
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
    </div>
  );
};

export default PromptEngineeringStudio;
