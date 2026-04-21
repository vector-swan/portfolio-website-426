const ComingSoon = () => {
  return (
    <div
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: "hsl(220, 60%, 45%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 600,
            height: 600,
            top: "-15%",
            left: "-10%",
            background:
              "radial-gradient(circle, hsla(340,72%,72%,0.35) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "mesh-drift-1 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 500,
            height: 500,
            bottom: "0%",
            right: "-5%",
            background:
              "radial-gradient(circle, hsla(340,65%,60%,0.3) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "mesh-drift-2 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 450,
            height: 450,
            top: "20%",
            right: "10%",
            background:
              "radial-gradient(circle, hsla(220,60%,55%,0.25) 0%, transparent 70%)",
            filter: "blur(70px)",
            animation: "mesh-drift-3 9s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-xl">
          <p className="text-coral font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-4">
            Mia Donnell &middot; Senior Product Designer
          </p>
          <h1 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6">
            Portfolio launching soon.
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
            Senior Product Designer at Workday, leading horizontal AI work:
            text generation infrastructure, multi-agent design, and developer
            tools product teams use to ship AI features at enterprise scale.
          </p>

          <ul className="space-y-3 mb-10 text-white/80 text-sm md:text-base">
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

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-white/70 text-sm md:text-base">
            <a
              href="mailto:miaddonnell@gmail.com"
              className="hover:text-coral transition-colors"
            >
              miaddonnell@gmail.com
            </a>
            <span className="hidden sm:inline text-white/30">&middot;</span>
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
