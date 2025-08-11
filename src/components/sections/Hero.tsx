import { Button } from "@/components/ui/button";
import GradientBackground from "../GradientBackground";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <GradientBackground />
      <div className="container mx-auto min-h-[70vh] md:min-h-[80vh] grid place-items-center py-20">
        <div className="text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4 text-gradient-primary">
            GhoziTech: Secure, Elegant Digital Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            GhoziTech specializes in programming, cybersecurity, and digital automation—delivering modern, reliable solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#projects"><Button variant="hero" size="xl">Explore Portfolio</Button></a>
            <a href="#contact"><Button variant="outline" size="xl">Get in Touch</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
