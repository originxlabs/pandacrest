import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Smile } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence", bg: "bg-peach" },
  { icon: Smile, value: "500+", label: "Happy Families", bg: "bg-sunshine" },
];

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative -mt-2 pb-0 pt-8 md:-mt-4 md:pb-0 md:pt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`stat-card ${s.bg} pastel-card rounded-[28px] p-6 text-center hover:shadow-card-hover hover:scale-105 transition-all`}
          >
            <s.icon className="w-8 h-8 mx-auto mb-3 text-primary" aria-hidden="true" />
            <div className="font-display text-3xl font-extrabold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
