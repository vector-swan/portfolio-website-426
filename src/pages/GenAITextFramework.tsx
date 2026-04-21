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

const stats = [
  { number: "52,400", label: "AI interactions per week on the highest-usage feature alone" },
  { number: "587", label: "enterprise tenants on Feedback Suggestions" },
  { number: "17", label: "active use cases — 7 GA, 2 EA, 8 in development" },
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
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-44 md:pb-36">
          <Section>
            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-8">
              Workday's first generative AI feature. Built to work anywhere.
            </h1>
            <div className="flex flex-wrap gap-3">
              {["Lead Designer · Founding & Sole", "2023–2025", "Workday's first shipped AI product"].map((chip) => (
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
              There was no pattern for AI in Workday. We had to build one.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              By 2023, multiple Workday product teams were building AI-powered features independently. Job description generation, feedback suggestions, email drafting — each team was designing and engineering their AI UI from scratch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {[
                { label: "No shared components", desc: "Every team's sparkle button looked different, behaved differently, was positioned differently." },
                { label: "No shared interaction model", desc: "Some features used modals, some inline replacement, some triggered on click, some loaded automatically." },
                { label: "No shared trust signals", desc: "AI disclaimers and feedback mechanisms were inconsistent or absent across the product." },
                { label: "Redundant engineering effort", desc: "Every team built the same loading states, popovers, and error handling from scratch." },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border p-5">
                  <p className="font-display font-semibold text-foreground text-sm mb-1">{item.label}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 3. Two Kinds of Users */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>TWO KINDS OF USERS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              We designed for two audiences at once.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              <div className="bg-white rounded-xl p-6">
                <p className="text-coral font-display font-bold text-sm uppercase tracking-widest mb-2">Application Teams</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Product teams building AI features into their products. If the framework didn't work for them, it would never reach end users at all. Our first partner was the job requisition team.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <p className="text-coral font-display font-bold text-sm uppercase tracking-widest mb-2">End Users</p>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Workday customers and employees who encounter AI features in their workflows — HR managers writing job descriptions, recruiters reviewing feedback, managers drafting emails.
                </p>
              </div>
            </div>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mt-6">
              This two-layer model shaped everything. The framework had to be easy enough for application teams to adopt, and trustworthy enough for end users to rely on.
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
              It had to feel native, not bolted on.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              Workday is built on forms and fields. For AI text generation to work here, it had to be invisible infrastructure — not a feature dropped into the middle of someone's workflow. The framework needed to feel like it belonged in whatever surface it lived in.
            </p>
          </Section>
        </div>
      </section>

      {/* 5. FAAB Origin Story */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE FAAB WASN'T THE ORIGINAL IDEA</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              A constraint pushed us to a better solution.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Early concepts used standard buttons placed above or below the text field — the conventional approach. It worked, but broke down fast. Workday's XO framework is rigid: adding elements above or below a field disrupts the page layout, and not every surface had room.
            </p>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              That constraint pushed us to the Floating AI Action Button — an entry point that lives <em>within</em> the field itself. It could land on any surface, in any context, without requiring layout changes from the adopting teams.
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-2xl">
              <img
                src="/Images/FAAB%20component.png"
                alt="FAAB component specification showing Primary Prompt Button and Prompt Action Button variants"
                className="w-full h-auto"
              />
            </div>
          </Section>
        </div>
      </BlueBg>

      {/* 6. What I Built */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I BUILT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-4">
              Three parts that became the foundation for every text generation feature at Workday.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              The library was connected directly to Storybook and linked to technical documentation. These are production-ready components — when an engineer implements a new GenAI feature, they're building against this spec.
            </p>

            {/* FAAB */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">01</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Floating AI Action Button (FAAB)</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    A context-aware button that floats 8px from the bottom-right corner of any text area — a precise, system-wide rule. Two variants: a labeled Primary Prompt button (single AI action) and an icon-only Prompt Action button (multiple actions). Once text exists in the field, it switches variants automatically.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <img
                  src="/Images/FAAB.png"
                  alt="FAAB variants in context — Primary Prompt Button and Prompt Action Button"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Generation Menu */}
            <div className="mb-16">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">02</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Generation Menu</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine. Context-aware: Proofread requires selected text, so it's disabled until something is highlighted. The menu knows what actions are possible right now.
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-sm">
                <img
                  src="/Images/Menu.png"
                  alt="Generation menu with contextual AI action options"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* AI Content Popover */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">03</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">AI Content Popover</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    The workspace where users review and decide on generated text before it enters their field. Draggable and resizable. Shows the AI disclaimer, data sources used, and three actions: Insert, Replace, Regenerate. Nothing lands in their document without their approval.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="/Images/Popover%20Loading.png"
                    alt="AI Content Popover in loading state, cycling through data sources"
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                  <img
                    src="/Images/Popover%20Result.png"
                    alt="AI Content Popover in results state with Insert, Replace, Regenerate actions"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 7. Key Decision: See It Before It Lands */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>KEY DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              See it before it lands.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              The preview popover was the most important call on this project. AI output is unpredictable. Users needed to feel in control before trusting it. Seeing the result first — before it lands in their document — is what made adoption possible. Without that step, one bad output would have killed confidence in the whole feature.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The positioning behavior came from watching users. Early designs placed the popover in a fixed location. In testing, users kept moving it to see the original field and the generated text simultaneously. The insight: once you move it, you've told the product where you want it. So subsequent openings return to wherever the user last positioned it.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-3xl">
              <img
                src="/Images/Positioning-1.png"
                alt="Popover positioning behavior — user-set position persists across sessions"
                className="w-full h-auto"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* 8. In Production: Job Description Flow */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE COMPONENT SYSTEM IN PRODUCTION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-4">
              The same pattern plays out across 17 use cases.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The Generate Job Description flow in Workday's Create Job Requisition task shows every component behavior end-to-end. Different products, different engineering stacks — same interaction model, because they're all building on the same component spec.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">State 1 — Required fields unmet</p>
                </div>
                <img
                  src="/Images/Job%20Description/Empty%20-%20Required%20Fields%20Not%20Met.png"
                  alt="Job description flow: empty state with required fields message"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">State 2 — Popover results</p>
                </div>
                <img
                  src="/Images/Job%20Description/Popover%20Results.png"
                  alt="Job description flow: AI Content Popover with generated text ready to review"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">State 3 — Menu open, text in field</p>
                </div>
                <img
                  src="/Images/Job%20Description/Menu%20Open.png"
                  alt="Job description flow: menu open with FAAB switched to icon-only Prompt Action Button"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border">
                  <p className="font-body text-xs text-muted-foreground font-medium">State 4 — Text inserted</p>
                </div>
                <img
                  src="/Images/Job%20Description/Text%20Inserted.png"
                  alt="Job description flow: generated text inserted into the field"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <p className="font-body text-muted-foreground text-sm max-w-2xl leading-relaxed mt-6">
              In State 3, Proofread is disabled until text is selected — the menu knows what actions are possible. In State 2, the FAAB switches from labeled "Primary Prompt" to icon-only because the available actions have changed. Every state is deliberate.
            </p>
          </Section>
        </div>
      </section>

      {/* 9. Responsible AI */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>RESPONSIBLE AI</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              Getting the disclosure language right mattered.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              This was new territory for the company legally. I worked directly with Workday's legal team to get AI disclosure language approved. The copy went through multiple rounds of revision — the tension was between legal's need for explicit disclaimers and users' need for language that didn't feel alarming or interrupt their workflow.
            </p>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              Getting that balance right was required before anything could ship. The result — "This content was generated by AI. Review content before use." — looks simple. It took significant negotiation to land there.
            </p>
          </Section>
        </div>
      </BlueBg>

      {/* 10. Summarization */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE SYSTEM GROWS: SUMMARIZATION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Naming the category is half the work.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              By 2025, summarization had emerged as a major use case — recruiting needed interview feedback summaries, Learning needed content feedback summaries, Student needed registration troubleshooting summaries. But the Framework wasn't built for them.
            </p>
            <div className="rounded-xl border border-border p-6 max-w-2xl mb-8">
              <p className="font-display font-semibold text-foreground mb-2">Summarization is not generation.</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                Generation happens <em>inside</em> a text field — user-initiated, AI populates a field they own. Summarization happens <em>alongside</em> existing data — AI reads structured records already on the page and surfaces a synthesis. The user didn't click a button in a text field. The output doesn't go into anything they're editing. The existing FAAB + popover pattern was designed for the wrong model entirely.
              </p>
            </div>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              I framed this as a platform problem and wrote a design brief scoping a Summarization component system — defining three display modes (inline, card, popover), two trigger types (auto-load vs. button-click), and a citation pattern as a platform-level standard.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The design principle in both use cases: <strong>the summary is additive, not replacement.</strong> Source data stays visible. AI reduces time-to-insight without asking users to trust it blindly.
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-3xl">
              <img
                src="/Images/Interview%20Feedback%20Summary/Feedback%20Summary%20Expanded.png"
                alt="Interview Feedback Summary — AI synthesis at top, full feedback matrix accessible below"
                className="w-full h-auto"
              />
            </div>
            <p className="font-body text-muted-foreground text-sm max-w-2xl leading-relaxed mt-3">
              Interview Feedback Summary (Recruiting): AI consolidates multiple interviewer voices into one readable synthesis. The full structured data stays accessible below for anyone who wants to go deeper. Shipped in 25R2.
            </p>
          </Section>
        </div>
      </section>

      {/* 11. RISING Guidelines */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>CROSS-ORG IMPACT: RISING GUIDELINES</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              No one asked me to solve this. I solved it anyway.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              In my final weeks, designers across multiple product teams were independently designing AI cards for demos at RISING — Workday's major public user conference — with no shared standard. The inconsistency between products' AI presentations would undermine the company's AI story at its most visible moment.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              I authored AI Card Guidelines for RISING: required elements, three loading state variants, and eight layout variations mapped to real display contexts. The design principle I led with:
            </p>
            <blockquote className="border-l-4 border-coral pl-6 mb-10">
              <p className="font-display italic text-foreground text-xl md:text-2xl leading-snug">
                "The cards you design don't have to be twins, but they need to be siblings."
              </p>
            </blockquote>
            <div className="rounded-xl overflow-hidden border border-border shadow-sm max-w-4xl mb-4">
              <img
                src="/Images/AI%20Card%20Guidelines/Card%20Variations.png"
                alt="AI Card Guidelines showing 8 layout variations for RISING — all siblings, not twins"
                className="w-full h-auto"
              />
            </div>
            <p className="font-body text-muted-foreground text-sm max-w-2xl leading-relaxed">
              Eight layout variations — Multiple Actions, Single Action, No Actions, Horizontal, Table, Multi-Card, Sources Collapsed, Sources Expanded — each mapped to real display contexts product teams were designing for.
            </p>
          </Section>
        </div>
      </section>

      {/* 12. Impact */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>IMPACT</PinkLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {stats.map((s) => (
                <div key={s.number} className="text-center">
                  <p className="text-white font-display font-bold text-4xl md:text-5xl mb-3">{s.number}</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { tenant: "587 tenants", feature: "Give Feedback / Suggest Response" },
                { tenant: "233 tenants", feature: "Ad Hoc Worker Communications" },
                { tenant: "209 tenants", feature: "Talent Highlights" },
                { tenant: "70%+", feature: "delivery speed improvement target (Q3 FY26)" },
              ].map((item) => (
                <div key={item.feature} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <p className="font-display font-bold text-white text-lg mb-1">{item.tenant}</p>
                  <p className="font-body text-white/60 text-xs leading-relaxed">{item.feature}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </BlueBg>

      {/* 13. Outcome */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>OUTCOME</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              The framework became the backend every product team builds against.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              When an engineer implements a new GenAI feature on the Accelerate Platform, they're building against this spec — connected to Storybook and technical documentation, not just design mockups. The component library made consistency something engineers implement rather than designers enforce.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              When the project transitioned to a new team, it was because the framework was mature enough to hand off — while the team that built it moved to Workday's highest-priority agentic work. That's a success story, not a deprioritization.
            </p>
          </Section>
        </div>
      </section>

      {/* 14. What I Learned */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I LEARNED</PinkLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {[
                {
                  title: "Platform design is invisible design",
                  body: "When a component library works, users don't notice it — they just experience consistency. The goal was to make the right interaction model the path of least resistance for every product team."
                },
                {
                  title: "Naming the category is half the work",
                  body: "Recognizing that summarization was a categorically different problem from generation — not just a different feature but a different interaction model — was the insight that made the design brief useful."
                },
                {
                  title: "Cross-functional influence doesn't require authority",
                  body: "The RISING guidelines weren't my job. No one asked. I did it because I saw the problem and had the context to solve it. Useful work spreads."
                },
                {
                  title: "The spec and the product are not the same thing",
                  body: "The distance between Figma and shipped components is where consistency breaks down. Connecting spec to Storybook reduced that distance and made compliance structural."
                },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6">
                  <p className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</p>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 15. Closing Quote */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-36">
          <Section>
            <p className="font-display italic text-white text-2xl md:text-3xl lg:text-4xl text-center leading-snug max-w-3xl mx-auto">
              "AI design is not about the UI. It is about what happens when the output is wrong, unexpected, or just not quite right. Every trust pattern in this framework exists because of that question."
            </p>
          </Section>
        </div>
      </BlueBg>

      {/* 16. Footer Nav */}
      <section className="bg-white border-t border-border" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <Link
            to="/#case-studies"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Work
          </Link>
          <Link
            to="/prompt-engineering-studio"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Next: Prompt Engineering Studio &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GenAITextFramework;
