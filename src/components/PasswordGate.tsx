import { useState, useEffect, FormEvent } from "react";
import MouseFollowMesh from "@/components/MouseFollowMesh";

// Change this when you need a new password.
const PASSWORD = "miad2026";
const STORAGE_KEY = "portfolio-unlocked-v1";

const PasswordGate = ({ children }: { children: React.ReactNode }) => {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [attempt, setAttempt] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
    setReady(true);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (attempt.trim().toLowerCase() === PASSWORD.toLowerCase()) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center bg-background text-foreground">
      <MouseFollowMesh variant="gate" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-md">
          <p className="text-coral font-body font-medium text-xs md:text-sm tracking-widest uppercase mb-4">
            Mia Donnell &middot; Senior Product Designer
          </p>
          <h1 className="font-display font-700 text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-foreground mb-6">
            Welcome.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
            This portfolio is password protected. Enter the password to continue.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              value={attempt}
              onChange={(e) => {
                setAttempt(e.target.value);
                if (error) setError(false);
              }}
              placeholder="Password"
              autoFocus
              className="w-full bg-muted/80 border border-border rounded-full px-5 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral transition-colors text-base"
            />
            <button
              type="submit"
              className="bg-coral text-coral-foreground font-display font-semibold px-8 py-3 rounded-full text-base hover:scale-105 transition-transform duration-200 shadow-lg shadow-coral/20 self-start"
            >
              Enter &rarr;
            </button>
            {error && (
              <p className="text-coral text-sm mt-2 font-body">
                That password did not work. Double check with whoever shared the link.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGate;
