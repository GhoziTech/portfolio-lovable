import { useRef } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -10;
    const ry = ((x - rect.width / 2) / rect.width) * 10;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="group will-change-transform transition-transform duration-200 [transform-style:preserve-3d] rounded-xl border bg-card hover:shadow-glow overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={`${title} project preview`} loading="lazy" className="w-full aspect-[3/2] object-cover group-hover:scale-[1.04] transition-transform duration-300" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {tags.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full bg-secondary">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
