import profile from "@/assets/ghozi-profile.jpg";
import { Shield, Code2, Cpu } from "lucide-react";
import SkillBar from "../common/SkillBar";

const About = () => {
  return (
    <section id="about" className="container mx-auto py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 md:order-1">
          <img src={profile} alt="GhoziTech professional portrait" loading="lazy" className="rounded-xl shadow-glow hover-scale" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="font-display text-3xl md:text-4xl mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6">
            I build secure, performant software and automation systems. My work blends elegant UX with rigorous cybersecurity and modern engineering practices.
          </p>
          <ul className="grid grid-cols-3 gap-4 mb-8">
            <li className="flex items-center gap-2"><Code2 className="text-primary" />Programming</li>
            <li className="flex items-center gap-2"><Shield className="text-primary" />Security</li>
            <li className="flex items-center gap-2"><Cpu className="text-primary" />Automation</li>
          </ul>
          <div className="space-y-4">
            <SkillBar label="TypeScript / React" value={92} />
            <SkillBar label="Cybersecurity" value={88} />
            <SkillBar label="Automation / RPA" value={85} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
