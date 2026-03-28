import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import miaPhoto from "@/assets/mia-photo.jpeg";

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

const timelineItems = [
  { num: "01", title: "Daily AI practice", body: "I use AI every day, not just in the products I design but in how I do my job. I keep a personal knowledge base that tracks meeting notes, open decisions, project context, and goals across everything I am working on. It means I can move faster and think more clearly across multiple complex projects at once." },
  { num: "02", title: "Building to learn", body: "Outside of work I build small agents to stay sharp. Project Coach is a side project I built to help with goal setting and accountability. I also built a job search agent for my husband, a practical tool that helped him manage applications, prep for interviews, and track follow-ups. Neither is polished. Both taught me things I brought back into my actual design work." },
  { num: "03", title: "AI Makers Club", body: "I co-founded a group at Workday where designers learn to build with tools like Lovable and v0. Teaching others how to use AI tools has made me better at using them myself." },
];

const About = () => {
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

      {/* Bio */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5 md:col-start-1">
              <Section>
                <div className="relative">
                  <img src={miaPhoto} alt="Mia Donnell" className="w-full aspect-[3/4] rounded-2xl object-cover object-top" />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-rose/60" />
                </div>
              </Section>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <Section>
                <h1 className="font-display font-700 text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                  <em className="italic">A little</em> about me
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                  I'm a product designer who's spent the last three years deep in the world of{" "}
                  <span className="text-foreground font-medium">AI agent design</span>, shaping how autonomous systems
                  can feel transparent, human, and genuinely delightful.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From multi-surface agent experiences to generative text frameworks, I live in the space where{" "}
                  <span className="text-coral font-medium">human intuition meets machine intelligence</span>. Currently
                  designing at the frontier of responsible AI.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>

      {/* How I actually work */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Section>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-10">
              How I actually work
            </h2>

            <div className="max-w-3xl space-y-0">
              {timelineItems.map((item, i, arr) => (
                <div key={item.num} className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="flex items-center justify-center rounded-full font-display font-bold text-sm"
                      style={{
                        width: 36,
                        height: 36,
                        minWidth: 36,
                        background: "#FDF0F5",
                        border: "2px solid #E05C8A",
                        color: "#E05C8A",
                      }}
                    >
                      {item.num}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="flex-1 w-px bg-border my-2" />
                    )}
                  </div>
                  <div className={i === arr.length - 1 ? "pb-0" : "pb-8"}>
                    <p className="font-body font-medium text-foreground text-sm mb-1">{item.title}</p>
                    <p className="font-body text-muted-foreground text-[13px] leading-[1.6]">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>


          </Section>
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Link
            to="/"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
