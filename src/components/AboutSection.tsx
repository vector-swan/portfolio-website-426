import { useScrollReveal } from "@/hooks/useScrollReveal";
import miaPhoto from "@/assets/mia-photo.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <>
      <section id="about" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
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
                I'm a product designer who's spent the last three years deep in the world of{" "}
                <span className="text-foreground font-medium">AI agent design</span> — shaping how autonomous systems
                can feel transparent, human, and genuinely delightful.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From multi-surface agent experiences to generative text frameworks, I live in the space where{" "}
                <span className="text-coral font-medium">human intuition meets machine intelligence</span>. Currently
                designing at the frontier of responsible AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 relative overflow-hidden" ref={ref2}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-6">
              How I actually work
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              I use AI every day, not just in the products I design but in how I do my job. I keep a personal knowledge base built on AI that tracks meeting notes, open decisions, project context, and goals across everything I am working on. It means I can move faster and think more clearly across multiple complex projects at once.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              Outside of work I build small agents to stay sharp. Project Coach is a side project I built to help with goal setting and accountability. I also built a job search agent for my husband, a practical tool that helped him manage applications, prep for interviews, and track follow-ups. Neither is polished. Both taught me things I brought back into my actual design work.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              I also co-founded the AI Makers Club at Workday, a group where designers learn to build with tools like Lovable and v0. Teaching others how to use AI tools has made me better at using them myself.
            </p>
            <div className="bg-rose/10 rounded-xl px-6 py-4 inline-block">
              <p className="font-display font-semibold text-foreground text-base md:text-lg italic">
                "I do not just design AI experiences. I live inside them."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
