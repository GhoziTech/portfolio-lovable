import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="font-display text-xl tracking-wide text-gradient-primary">
          GhoziTech
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a className="story-link" href="#about">About</a></li>
          <li><a className="story-link" href="#projects">Projects</a></li>
          <li><a className="story-link" href="#services">Services</a></li>
          <li><a className="story-link" href="#testimonials">Testimonials</a></li>
          <li><a className="story-link" href="#contact">Contact</a></li>
        </ul>
        <div className="hidden md:block">
          <a href="#contact"><Button variant="hero" size="sm">Start a Project</Button></a>
        </div>
        <div className="md:hidden">
          <Link to="#contact"><Button variant="gradient" size="icon" aria-label="Contact">✦</Button></Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
