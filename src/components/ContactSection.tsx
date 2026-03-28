import { useScrollReveal } from "@/hooks/useScrollReveal";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl mb-4">
            The future of AI design is human-centered.
          </h2>
          <p className="text-coral font-body font-medium text-base md:text-lg tracking-widest uppercase mb-6">
            Let's build it together.
          </p>
          <p className="text-lg md:text-xl opacity-70 mb-10 leading-relaxed">
            I'm drawn to ambitious, human-centered AI challenges. If you're building something at the edge of
            what's possible, I'd love to be part of the story.
          </p>

          <div className="flex flex-row gap-6 items-center">
            <a
              href="mailto:hello@mia.design"
              className="bg-coral text-coral-foreground font-medium px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform duration-200"
            >
              Say Hello
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
              LinkedIn
            </a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
              Read.cv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
