import { useEffect, useRef, useState } from "react";

interface SkillBarProps {
  label: string;
  value: number; // 0-100
}

const SkillBar = ({ label, value }: SkillBarProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div className="flex justify-between text-sm mb-2"><span>{label}</span><span>{value}%</span></div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-[width] duration-[1400ms] ease-out"
          style={{ width: visible ? `${value}%` : 0 }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
