import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import ProjectCard from "../common/ProjectCard";

const Projects = () => {
  const data = [
    { image: p1, title: "Analytics Dashboard", description: "Secure, real-time insights with elegant UX.", tags: ["React", "Recharts", "Auth"] },
    { image: p2, title: "Security Monitoring", description: "Threat detection with hardened best practices.", tags: ["SIEM", "Zero Trust", "Hardening"] },
    { image: p3, title: "Automation Platform", description: "Reliable RPA workflows for operations.", tags: ["RPA", "APIs", "Workers"] },
  ];

  return (
    <section id="projects" className="container mx-auto py-20">
      <h2 className="font-display text-3xl md:text-4xl mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
