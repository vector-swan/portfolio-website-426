import { useScrollReveal } from "@/hooks/useScrollReveal";
import miaPhoto from "@/assets/mia-photo.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#F9EEF2" }} ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          <div
            className={`md:col-span-5 md:col-start-1 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img src={miaPhoto} alt="Mia Donnell" className="w-full max-h-[380px] rounded-2xl object-cover object-bottom" />
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
              I'm a Senior Product Designer with 7+ years at Workday. I've worked on document platforms, data tools, mass-action workflows, and for the last few years, AI. Both of these present their own unique challenges, but share a similar objective: bring the benefits and complexity of technology and package it so the end user can harness its power.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I care about foundational design, including systems underneath the surface and work that makes everything else easier to build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
