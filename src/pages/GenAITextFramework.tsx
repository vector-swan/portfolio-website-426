import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

// ─── Shared layout components ────────────────────────────────────────────────

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

// ─── Unified clickable image ──────────────────────────────────────────────────
// Wrap any <img> to make it open the shared lightbox.
// Pass onOpen down from the page component so there's one lightbox for everything.

type OpenLightbox = (src: string, alt: string, caption?: string) => void;

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
  onOpen: OpenLightbox;
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

// ─── Stats ────────────────────────────────────────────────────────────────────

const stats = [
  { number: "52,400", label: "Gen AI interactions per week on the highest-usage feature alone" },
  { number: "580+", label: "customer tenants implemented Gen AI" },
  { number: "17", label: "active use cases" },
  { number: "70%+", label: "delivery speed improvement from bespoke engineering" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

const GenAITextFramework = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption?: string } | null>(null);

  const openLightbox: OpenLightbox = (src, alt, caption) => setLightbox({ src, alt, caption });

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

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
            <Link to="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* 1. Hero */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-16 md:pt-44 md:pb-20">
          <Section>
            <h1 className="text-white/50 font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
              Generative AI Text Framework
            </h1>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-6">
              Workday's <em className="text-white italic">first</em> generative AI feature.
            </h2>
            <p className="font-body text-white/50 text-sm md:text-base mb-12">
              Lead Designer&nbsp;&nbsp;|&nbsp;&nbsp;2023–2025
            </p>
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-4xl bg-white">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/text-framework/genai-hero-poster.png"
                className="w-full h-auto block"
                aria-label="Generating a job description with the Workday Gen AI Text Framework: resting FAAB, menu of contextual actions, popover loading, and generated result."
              >
                <source src="/Videos/genai-hero.webm" type="video/webm" />
                <source src="/Videos/genai-hero.mp4" type="video/mp4" />
              </video>
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
              There was no pattern for AI in Workday.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              Generative AI had just hit the scene in 2023 and multiple Workday products were already building features independently. Every team's AI button looked and behaved differently. Some lived above the field, some below. Some features used modals to display generation, others just dropped text inline. The biggest sticking point? What should our AI disclaimer be, and where should we show sources.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              We needed something that could build trust with users, unify the generative AI experience across Workday, and work with any product surface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
              <div className="rounded-xl overflow-hidden shadow-sm border border-border/20">
                <ClickImg
                  src="/images/text-framework/jd.png"
                  alt="Workday job description screen in the Generative AI Text Framework"
                  caption="Job description flow with AI-assisted text generation."
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-border/20">
                <ClickImg
                  src="/images/text-framework/email-template.png"
                  alt="Workday email template screen showing AI assist for generating email content"
                  caption="Email template workflow with AI-powered copy generation."
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-border/20">
                <ClickImg
                  src="/images/text-framework/sms.png"
                  alt="Workday SMS messaging screen with Generate SMS with AI button"
                  caption="SMS workflow with AI-generated message content."
                  onOpen={openLightbox}
                />
              </div>
            </div>
            <p className="font-body text-muted-foreground text-sm italic mt-4 text-left">
              Three text-generation workflows: job description, email, and SMS experiences in the Workday GenAI framework.
            </p>
          </Section>
        </div>
      </section>

      {/* 3. Two Kinds of Users */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>TWO KINDS OF USERS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-8">
              We designed for two audiences at once.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-6">
                <span className="text-coral font-display font-bold text-lg">01</span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">Application Teams</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Product teams building Gen AI features into their products. If the framework didn't work for them, it would never reach end users at all. The Job Requisition team was one of our first partners.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <span className="text-coral font-display font-bold text-lg">02</span>
                <h3 className="font-display font-bold text-lg text-foreground mt-2 mb-2">End Users</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  Managers drafting job descriptions and emails, recruiters reviewing candidate feedback, HR handling comms. The people who actually have to trust what AI hands them.
                </p>
              </div>
            </div>
            <p className="font-body text-foreground text-base md:text-lg max-w-2xl leading-relaxed">The framework had to be easy enough for application teams to adopt, and trustworthy enough for end users to rely on.</p>
          </Section>
        </div>
      </section>

      {/* 3.5 The Insight */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE INSIGHT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              The goal was for the Gen AI features to belong.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Workday is built on forms and fields. For AI text generation to work here, it had to feel native, not bolted on. The framework needed to fit whatever surface it lived in, across hundreds of products and every customization a customer might make. Tall order.
            </p>
            <div className="rounded-xl overflow-hidden shadow-sm border border-border/20 max-w-3xl">
              <ClickImg
                src="/images/text-framework/workdayform.png"
                alt="Create Digital Course form showing AI-assisted text generation in context"
                onOpen={openLightbox}
              />
            </div>
          </Section>
        </div>
      </section>

      {/* 4. FAAB */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <p className="text-white/50 font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
              IT'S GOT TO BE A FAAB
            </p>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              A layout constraint pushed us somewhere better.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Early concepts put the button above or below the text field. Workday's rigid XO framework made that feel disconnected, especially when someone was filling out a single form component. So we put the button inside the field itself.
            </p>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The Floating AI Action Button lives 8px from the bottom-right corner of any text area. It lands on any surface without requiring layout changes from adopting teams. Common now. New then.
            </p>
            <div className="rounded-xl overflow-hidden shadow-xl max-w-4xl">
              <ClickImg
                src="/images/text-framework/faab-placement.png"
                alt="Primary Prompt Button and Prompt Action Button positioning: 8 pixels from the bottom right of a text area"
                caption="The FAAB sits 8px from the bottom-right corner of any text field — no layout changes required from adopting teams."
                onOpen={openLightbox}
              />
            </div>
          </Section>
        </div>
      </BlueBg>

      {/* 5. What I Built */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I BUILT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Three parts became the foundation for every text generation feature at Workday.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The whole flow was built on Workday's Canvas design system and componentized in Figma for designers. I partnered with engineering to build a production-ready library wired into Storybook, with technical documentation, so product teams could implement without reinventing anything.
            </p>

            {/* 01 FAAB */}
            <div className="mb-14">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">01</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Floating AI Action Button (FAAB)</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    A context-aware button anchored 8px from the bottom-right corner of any text field. Two variants: a labeled Primary Prompt button for single AI actions, and an icon-only Prompt Action button for multiple. Switches automatically once text exists in the field.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border/20 p-8 flex flex-col items-center justify-center shadow-sm">
                  <ClickImg
                    src="/images/text-framework/expandedbutton.png"
                    alt="Primary Prompt button states: Default, Focus, Hover, Active, Disabled"
                    caption="Labeled variant: Primary Prompt. Used when the field is empty."
                    imgClassName="max-w-xs"
                    onOpen={openLightbox}
                  />
                  <p className="font-body text-muted-foreground text-sm mt-6 text-center">Labeled variant: Primary Prompt. Used when the field is empty.</p>
                </div>
                <div className="rounded-xl border border-border/20 p-8 flex flex-col items-center justify-center shadow-sm">
                  <ClickImg
                    src="/images/text-framework/collapsedbutton.png"
                    alt="Prompt Action icon-only button states with tooltip"
                    caption="Icon-only variant: Prompt Action. Used once text exists in the field."
                    imgClassName="max-w-xs"
                    onOpen={openLightbox}
                  />
                  <p className="font-body text-muted-foreground text-sm mt-6 text-center">Icon-only variant: Prompt Action. Used once text exists in the field.</p>
                </div>
              </div>
            </div>

            {/* 02 Generation Menu */}
            <div className="mb-14">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">02</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">Generation Menu</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    Contextual options surfaced based on where the user is: generate, shorten, professionalize, refine. Proofread requires selected text, so it's disabled until something is highlighted. The menu always knows what's possible right now.
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-border/20 p-8 flex items-center justify-center shadow-sm">
                <ClickImg
                  src="/images/text-framework/promptmenu.png"
                  alt="Generation menu annotated with Hero Prompt and Secondary Prompts"
                  caption="The generation menu surfaces contextual actions based on field state. Proofread stays disabled until text is selected."
                  imgClassName="max-w-lg"
                  onOpen={openLightbox}
                />
              </div>
            </div>

            {/* 03 AI Content Popover */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-coral font-display font-bold text-2xl leading-none">03</span>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">AI Content Popover</h3>
                  <p className="font-body text-muted-foreground text-base leading-relaxed max-w-2xl">
                    The workspace where users review and decide on generated text before it enters their field. Draggable and resizable, it shows the AI disclaimer, data sources, and three actions: Insert, Replace, Regenerate. Nothing lands in their document without their approval.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="rounded-xl border border-border/20 overflow-hidden shadow-sm">
                  <ClickImg
                    src="/images/text-framework/popover-loading.png"
                    alt="AI Content Popover in loading state while text generation is in progress"
                    caption="AI Content Popover loading — generation is in progress."
                    onOpen={openLightbox}
                  />
                  <p className="font-body text-muted-foreground text-xs py-3 text-center border-t border-border/20">Loading</p>
                </div>
                <div className="rounded-xl border border-border/20 overflow-hidden shadow-sm">
                  <ClickImg
                    src="/images/text-framework/state-default.png"
                    alt="AI Content Popover showing generated text with Insert, Replace, Regenerate"
                    caption="Generated result ready to review."
                    onOpen={openLightbox}
                  />
                  <p className="font-body text-muted-foreground text-xs py-3 text-center border-t border-border/20">Generated result</p>
                </div>
                <div className="rounded-xl border border-border/20 overflow-hidden shadow-sm">
                  <ClickImg
                    src="/images/text-framework/state-sources-open.png"
                    alt="AI Content Popover with Data Sources panel expanded, showing citation references"
                    caption="Data Sources panel open, showing the citation references used by the AI."
                    onOpen={openLightbox}
                  />
                  <p className="font-body text-muted-foreground text-xs py-3 text-center border-t border-border/20">Data sources expanded</p>
                </div>
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 6. Key Decision */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>KEY DECISION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Users needed to see the output before it touched their work.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-4">
              The preview popover was one of the most consequential decisions on this project. AI output is unpredictable. If something lands in your document without approval and it's wrong, you lose trust in the whole feature immediately. The popover gives users a chance to review, edit, or reject before anything touches their work.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              Workday is a serious environment. Users are aware they're submitting real data in real forms. Early designs fixed the popover in one location, but testing showed users kept trying to move it out of the way so they could see their source content and the AI output side by side. We made the popover resizable and draggable so they could put it wherever made sense.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm">
                <ClickImg
                  src="/images/text-framework/popover-move/Move.png"
                  alt="User dragging the AI Content Popover to reposition it on screen"
                  caption="Users can drag the popover anywhere to keep their source content in view."
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm">
                <ClickImg
                  src="/images/text-framework/popover-move/Result.png"
                  alt="AI Content Popover repositioned by the user alongside source content"
                  caption="The popover remembers its position on subsequent openings."
                  onOpen={openLightbox}
                />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 7. In Production */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE COMPONENT SYSTEM IN PRODUCTION</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-4">
              The same pattern plays out across 17 use cases.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              The Generate Job Description flow inside Workday's Create Job Requisition task shows every component behavior end-to-end. Every state is deliberate. In State 3, Proofread is greyed out because nothing is selected, the menu knows what's possible right now. In State 2, the FAAB switches from labeled to icon-only because the available actions have changed.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "/images/text-framework/job-description/empty-required-fields-not-met.png", num: "1", label: "Required fields unmet", alt: "Empty state: all fields blank, labeled Prompt button visible", caption: "All fields blank. Labeled Prompt button visible. Required fields message shown." },
                { src: "/images/text-framework/job-description/generate-job-description.png", num: "2", label: "Ready to generate", alt: "Required fields met, FAAB visible and ready", caption: "Required fields met. FAAB ready to trigger generation." },
                { src: "/images/text-framework/job-description/generating.png", num: "3", label: "Generating", alt: "AI Content Popover in loading state while generating text", caption: "Popover open in loading state. AI is generating." },
                { src: "/images/text-framework/job-description/popover-results.png", num: "4", label: "Results ready", alt: "AI Content Popover showing generated text with Insert, Replace, Regenerate actions", caption: "Generated text ready to review. Insert, Replace, or Regenerate." },
                { src: "/images/text-framework/job-description/text-inserted.png", num: "5", label: "Text inserted", alt: "Generated text inserted into the job description field", caption: "Text inserted. FAAB returns to resting icon-only state." },
                { src: "/images/text-framework/job-description/menu-open.png", num: "6", label: "Contextual menu open", alt: "Contextual generation menu open with FAAB in icon-only state", caption: "Contextual menu open. Options adapt to what's possible in the current state." },
              ].map((item) => (
                <div key={item.src} className="rounded-xl overflow-hidden border border-border/20 shadow-sm">
                  <div className="bg-muted/30 px-4 py-2 border-b border-border/20">
                    <p className="font-body text-xs text-foreground font-bold">{item.num} {item.label}</p>
                  </div>
                  <ClickImg src={item.src} alt={item.alt} caption={item.caption} onOpen={openLightbox} />
                </div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* 8. Responsible AI */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>RESPONSIBLE AI</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              The disclaimer took longer to write than any component.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              Legal, designers, and PMs, many rounds of revision, one line that had to fit anywhere in the product: "This content was generated by AI. Review content before use." Looks simple. Was not simple.
            </p>
          </Section>
        </div>
      </BlueBg>

      {/* 9. Summarization */}
      <section className="bg-white" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>THE SYSTEM GROWS</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              By 2025, summarization needed its own model entirely.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Recruiting, Learning, and Student were all independently solving summarization, and the FAAB pattern didn't fit. Generation happens inside a text field the user owns. Summarization happens alongside data the user is reading. Different model entirely. I wrote the brief: three display modes, two trigger types, citations as a platform standard. Source data always stays visible.
            </p>
            <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm max-w-3xl">
              <ClickImg
                src="/images/text-framework/summary.png"
                alt="Summarization model overview showing three display modes and two trigger types"
                caption="The summarization brief: three display modes, two trigger types, citations as a platform standard."
                onOpen={openLightbox}
              />
            </div>
            <p className="font-body text-muted-foreground text-sm max-w-2xl leading-relaxed mt-3">
              Interview Feedback Summary (Recruiting): AI consolidates multiple interviewer voices into one readable synthesis. Full structured data stays accessible below. Shipped in 25R2.
            </p>
          </Section>
        </div>
      </section>

      {/* 10. Cross-Org Impact */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>CROSS-ORG IMPACT</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-foreground mb-6">
              Nobody had a mandate to fix this. I did it anyway.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              Designers across multiple teams were independently designing AI cards for RISING, Workday's biggest customer conference. Inconsistency between products would have undermined the company's AI story at its most visible moment.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              I wrote AI Card Guidelines for RISING: required elements, three loading state variants, and eight layout variations mapped to real display contexts. The principle I led with:
            </p>
            <blockquote className="border-l-4 border-coral pl-6 mb-8">
              <p className="font-display italic text-foreground text-xl md:text-2xl leading-snug">
                "The cards you design don't have to be twins, but they need to be siblings."
              </p>
            </blockquote>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Eight layout variations (Multiple Actions, Single Action, No Actions, Horizontal, Table, Multi-Card, Sources Collapsed, Sources Expanded), each mapped to a real context product teams were designing for. Designers used my Figma components to build prototypes and demos across Search, Recruiting, mobile, and desktop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm h-64">
                <ClickImg
                  src="/images/text-framework/card-variation/Original.png"
                  alt="AI card guidelines for RISING showing Multiple Actions, Single Action, and No Actions layout variations"
                  caption="Card layout variations for RISING — eight layouts mapped to real product display contexts."
                  fill
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm h-64">
                <ClickImg
                  src="/images/text-framework/card-variation/frame-1.png"
                  alt="AI card layout variations for horizontal, table, and multi-card display contexts"
                  caption="Horizontal, table, and multi-card layout variants used across Search and Recruiting."
                  fill
                  onOpen={openLightbox}
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-border/20 shadow-sm h-64">
                <ClickImg
                  src="/images/text-framework/card-variation/frame-2.png"
                  alt="AI card layout variations showing Sources Collapsed and Sources Expanded states across mobile and desktop"
                  caption="Sources Collapsed and Sources Expanded variants across mobile and desktop surfaces."
                  fill
                  onOpen={openLightbox}
                />
              </div>
            </div>
          </Section>
        </div>
      </section>

      {/* 11. Impact & Outcome */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>IMPACT & OUTCOME</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-4xl text-white mb-6">
              Product teams now build against this framework.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-12">
              When an engineer implements a new Gen AI feature at Workday, they build against this spec. The component library made consistency easy for both designers and engineers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {stats.map((s) => (
                <div key={s.number} className="rounded-xl px-5 py-6 text-center" style={{ background: "hsla(210, 70%, 65%, 0.18)" }}>
                  <p className="text-white font-display font-bold text-3xl md:text-5xl mb-3">{s.number}</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-white/40 text-xs">Data as of July 2025</p>
          </Section>
        </div>
      </BlueBg>

      {/* 12. What I Learned */}
      <section style={{ background: "#F9EEF2", backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel>WHAT I LEARNED</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 max-w-2xl">
              Seeing a gap and knowing I could help fill it made a real difference for the design org.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              For both the AI disclaimer and the designer guidelines, I had the most context and was furthest along in my thinking. I couldn't do it alone, so I pulled together designers doing AI work across teams and we built the guidelines together. The result was a consistent story at our biggest customer conference.
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-4 max-w-2xl">
              When you're building with a new technology, designers across a large org crave direction.
            </h2>
            <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
              A lot of people were worried about getting AI interactions wrong. I was too. My approach was to keep learning, keep experimenting, and keep listening to product teams and users. That's what let me press forward when things were still ambiguous.
            </p>
          </Section>
        </div>
      </section>

      {/* 13. What I'd Do Differently */}
      <BlueBg>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
          <Section>
            <PinkLabel light>WHAT I'D DO DIFFERENTLY</PinkLabel>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 max-w-2xl">
              The landscape has changed since 2023.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              Chat and agents have become a primary way people interact with AI, and today I'd explore what it looks like when a chat interface and text fields work together.
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 max-w-2xl">
              We only owned one part of the experience.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
              I would have liked to zoom out to the full workflow, what it actually means to write a job description with AI, not just populate a single field. Our "one size fits all" solution meant real tradeoffs. If every text field on a page had the FAAB, it could look overwhelming. We advised against it, but we didn't own that decision.
            </p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4 max-w-2xl">
              I'd explore single-click form completion.
            </h2>
            <p className="font-body text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
              Maybe a redesigned popover that handles multiple fields at once, or a chat interface that walks you through the whole thing.
            </p>
          </Section>
        </div>
      </BlueBg>

      {/* Footer Nav */}
      <section className="bg-white border-t border-border" style={{ backgroundImage: "none" }}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-8 flex items-center justify-between">
          <Link to="/#case-studies" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            &larr; Back to Work
          </Link>
          <Link to="/prompt-engineering-studio" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Next: Prompt Engineering Studio &rarr;
          </Link>
        </div>
      </section>

      {/* ─── Unified Lightbox ─────────────────────────────────────────────────── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-16 cursor-default animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 backdrop-blur-sm" style={{ background: "hsla(220, 40%, 12%, 0.72)" }} />

          {/* Image container — shrinks to fit the image so ring hugs the content */}
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

          {/* Close button */}
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

export default GenAITextFramework;
