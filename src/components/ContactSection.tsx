import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FloralAccent1, FloralLeaf } from "@/components/FloralAccents";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden" ref={ref}>
      <FloralAccent1 className="absolute top-12 right-12 w-32 h-32 text-rose/10" />
      <FloralLeaf className="absolute bottom-8 left-16 w-10 h-16 text-coral/10 rotate-[-30deg]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl mb-6">
            Let's create something <em className="italic">beautiful</em> together.
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-10 leading-relaxed">
            I'm drawn to ambitious, human-centered AI challenges. If you're building something at the edge of
            what's possible, I'd love to be part of the story.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="mailto:hello@mia.design"
              className="bg-coral text-coral-foreground font-display font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-200"
            >
              Say Hello
            </a>
            <div className="flex gap-6 items-center sm:ml-4 mt-2 sm:mt-0">
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
                LinkedIn
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
                Dribbble
              </a>
              <a href="#" className="opacity-60 hover:opacity-100 transition-opacity text-sm font-medium">
                Read.cv
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
