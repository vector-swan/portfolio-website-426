const GridDotPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 100 }).map((_, i) => {
      const col = i % 10;
      const row = Math.floor(i / 10);
      return (
        <circle
          key={i}
          cx={col * 20 + 10}
          cy={row * 20 + 10}
          r="1.5"
          fill="currentColor"
        />
      );
    })}
  </svg>
);

const GeometricAccent = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="80" height="80" stroke="currentColor" strokeWidth="2" opacity="0.15" rx="2" />
    <rect x="35" y="35" width="50" height="50" stroke="currentColor" strokeWidth="2" opacity="0.1" rx="2" transform="rotate(15 60 60)" />
  </svg>
);

export { GridDotPattern, GeometricAccent };
