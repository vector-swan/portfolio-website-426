const FloralAccent1 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Petals */}
    <ellipse cx="60" cy="35" rx="14" ry="28" fill="currentColor" opacity="0.5" transform="rotate(0 60 60)" />
    <ellipse cx="60" cy="35" rx="14" ry="28" fill="currentColor" opacity="0.4" transform="rotate(72 60 60)" />
    <ellipse cx="60" cy="35" rx="14" ry="28" fill="currentColor" opacity="0.5" transform="rotate(144 60 60)" />
    <ellipse cx="60" cy="35" rx="14" ry="28" fill="currentColor" opacity="0.4" transform="rotate(216 60 60)" />
    <ellipse cx="60" cy="35" rx="14" ry="28" fill="currentColor" opacity="0.5" transform="rotate(288 60 60)" />
    <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.7" />
  </svg>
);

const FloralAccent2 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Stem with leaves */}
    <path d="M40 160 Q40 100 38 60 Q36 30 40 0" stroke="currentColor" strokeWidth="2" opacity="0.3" fill="none" />
    <ellipse cx="30" cy="50" rx="18" ry="10" fill="currentColor" opacity="0.25" transform="rotate(-30 30 50)" />
    <ellipse cx="52" cy="80" rx="16" ry="9" fill="currentColor" opacity="0.2" transform="rotate(25 52 80)" />
    <ellipse cx="28" cy="110" rx="14" ry="8" fill="currentColor" opacity="0.15" transform="rotate(-20 28 110)" />
  </svg>
);

const FloralAccent3 = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Small daisy */}
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.35" transform="rotate(0 50 50)" />
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.3" transform="rotate(60 50 50)" />
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.35" transform="rotate(120 50 50)" />
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.3" transform="rotate(180 50 50)" />
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.35" transform="rotate(240 50 50)" />
    <ellipse cx="50" cy="28" rx="8" ry="18" fill="currentColor" opacity="0.3" transform="rotate(300 50 50)" />
    <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.5" />
  </svg>
);

const FloralLeaf = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M30 95 Q10 65 8 40 Q6 15 30 5 Q54 15 52 40 Q50 65 30 95Z"
      fill="currentColor"
      opacity="0.2"
    />
    <path d="M30 90 Q30 50 30 10" stroke="currentColor" strokeWidth="1.5" opacity="0.3" fill="none" />
  </svg>
);

export { FloralAccent1, FloralAccent2, FloralAccent3, FloralLeaf };
