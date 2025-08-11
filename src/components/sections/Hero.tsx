import { Button } from "@/components/ui/button";
import GradientBackground from "../GradientBackground";
import showcase from "@/assets/project-2.jpg";
const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <GradientBackground />
      <div className="container mx-auto min-h-[70vh] md:min-h-[80vh] grid items-center py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-6xl leading-tight mb-4 text-gradient-primary">
              GhoziTech: Secure, Elegant Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              GhoziTech specializes in programming, cybersecurity, and digital automation—delivering modern, reliable solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#projects"><Button variant="hero" size="xl">Explore Portfolio</Button></a>
              <a href="#contact"><Button variant="outline" size="xl">Get in Touch</Button></a>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground">
              <span className="chip-gradient">10+ Projects</span>
              <span className="chip-gradient">Security-first</span>
              <span className="chip-gradient">Automation Expertise</span>
            </div>
          </div>
          <div className="relative">
            <div className="gradient-border glass rounded-3xl p-2 shadow-glow hover-lift">
              <img src={showcase} alt="GhoziTech showcase preview" loading="eager" className="rounded-2xl w-full aspect-[4/5] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
