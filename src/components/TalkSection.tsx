import { useScrollReveal } from "@/hooks/useScrollReveal";

const TalkSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="talk" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-coral font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-3">
            RECENT TALK
          </p>
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            How AI Can <em className="italic">Amplify</em> Your Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Information Architecture Conference, April 2026. Presented with Lisa Ellis, Principal Information Architect.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="md:col-span-2 bg-card rounded-2xl border border-border p-8">
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              A method for using LLMs to accelerate information architecture work in a deeply technical domain. Three gated phases. Human SME review at every checkpoint. Real users validating the AI's hypothesis at the end.
            </p>
            <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed">
              Applied to Workday's Grants Management product. The AI gave us a hypothesis worth testing. The humans made sure it was right.
            </p>
            <a
              href="https://www.theiaconference.com/sessions/how-ai-can-amplify-your-impact-without-replacing-you/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-display font-semibold text-sm text-coral hover:underline"
            >
              View session &rarr;
            </a>
          </div>

          <div className="bg-gradient-to-br from-coral/60 to-coral/20 rounded-2xl p-8 flex flex-col justify-center items-start">
            <p className="text-coral font-body font-medium text-xs tracking-widest uppercase mb-4">
              TIME SAVED
            </p>
            <p className="font-display font-bold text-5xl md:text-6xl text-foreground mb-1">60hr</p>
            <p className="font-body text-foreground/60 text-sm mb-6">traditional process</p>
            <p className="font-display font-bold text-5xl md:text-6xl text-foreground mb-1">3hr</p>
            <p className="font-body text-foreground/60 text-sm">with our method</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalkSection;
