import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(185 70% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 70% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <p className="font-mono text-sm tracking-widest text-primary mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          // hello world
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Reyansh <span className="text-gradient">Gugnani</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          Student · Robotics Enthusiast
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s' }}>
          Building the future at the intersection of hardware and software.
        </p>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 animate-fade-in opacity-0 text-muted-foreground hover:text-primary transition-colors"
        style={{ animationDelay: '1.2s' }}
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
