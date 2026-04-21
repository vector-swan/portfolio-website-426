import MouseFollowMesh from "@/components/MouseFollowMesh";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-background text-foreground">
      <MouseFollowMesh variant="hero" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 w-full">
        <div className="max-w-4xl">
          <p className="font-display font-bold text-2xl md:text-3xl text-foreground leading-none mb-6">
            Mia Donnell<span className="text-coral">.</span>
          </p>

          <p className="text-coral font-body font-medium text-base md:text-lg tracking-widest uppercase mb-4">
            Mia Donnell &middot; Senior Product Designer
          </p>

          <h1 className="font-display font-700 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] tracking-tight text-foreground mb-8">
            Portfolio launching{"\u00A0"}
            <em className="text-primary italic">soon</em>.
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Senior Product Designer at Workday, leading horizontal AI work:
            text generation infrastructure, multi-agent design, and developer
            tools product teams use to ship AI features at enterprise scale.
          </p>

          <ul className="space-y-3 mb-10 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
            <li className="flex items-start gap-3">
              <span className="text-coral leading-relaxed">&bull;</span>
              <span className="leading-relaxed">
                Led design of Workday's first generative AI product
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral leading-relaxed">&bull;</span>
              <span className="leading-relaxed">
                Lead Designer on Workday's first AI agent
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-coral leading-relaxed">&bull;</span>
              <span className="leading-relaxed">
                Presented at Information Architecture Conference 2026
              </span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-muted-foreground text-base md:text-lg">
            <a
              href="mailto:miaddonnell@gmail.com"
              className="hover:text-coral transition-colors"
            >
              miaddonnell@gmail.com
            </a>
            <span className="hidden sm:inline text-border">&middot;</span>
            <a
              href="https://linkedin.com/in/miadonnell"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-coral transition-colors"
            >
              linkedin.com/in/miadonnell
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
