import { useScrollReveal } from "@/hooks/useScrollReveal";
import miaPhoto from "@/assets/mia-photo.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#F9EEF2" }} ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div
            className={`md:col-span-5 md:col-start-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <img src={miaPhoto} alt="Mia Donnell" className="w-full aspect-[3/4] rounded-2xl object-cover object-top" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-rose/60" />
            </div>
          </div>

          <div
            className={`md:col-span-6 md:col-start-7 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              <em className="italic">A little</em> about me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
              I'm a Senior Product Designer with{" "}
              <span className="text-foreground font-medium">7+ years shipping enterprise software at scale</span>.
              Since 2023, I've led Workday's AI-first design work including the GenAI Text Framework, the Prompt Engineering Studio, and cross-platform agent experiences across five surfaces.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I work in the space where{" "}
              <span className="text-coral font-medium">deeply technical systems meet everyday humans</span>. My passion is foundational design. The invisible infrastructure that makes new technology usable, scalable, and trustworthy at enterprise scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
