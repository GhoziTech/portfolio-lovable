import { ShieldCheck, Code2, Workflow } from "lucide-react";

const services = [
  { icon: ShieldCheck, title: "Cybersecurity", desc: "Assessments, hardening, monitoring, and incident response." },
  { icon: Code2, title: "Web Development", desc: "Modern, performant web apps with clean architecture." },
  { icon: Workflow, title: "Digital Automation", desc: "RPA and API-driven workflows that scale reliably." },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto py-20">
      <h2 className="font-display text-3xl md:text-4xl mb-10">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="rounded-xl border p-6 hover:shadow-glow transition-shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Icon />
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
