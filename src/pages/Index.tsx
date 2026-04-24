import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import HowIWorkSection from "@/components/HowIWorkSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-foreground group">
            <span className="font-display font-bold text-xl leading-none">
              Mia Donnell<span className="text-coral">.</span>
            </span>
          </a>
          <div className="hidden sm:flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <HeroSection />
      <CaseStudiesSection />
      <AboutSection />
      <HowIWorkSection />
      <ContactSection />
    </div>
  );
};

export default Index;
