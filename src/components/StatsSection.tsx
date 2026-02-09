import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 90, suffix: "+", label: "Research Papers" },
  { value: 400, suffix: "+", label: "Days at Sea" },
  { value: 100, suffix: "+", label: "Seismometers Deployed" },
  { value: 20, suffix: "+", label: "Years in Marine Geosciences" },
];

const AnimatedCounter = ({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold text-accent">
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Ocean gradient background */}
      <div className="absolute inset-0 bg-ocean-gradient" />
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="wave-pattern"
              x="0"
              y="0"
              width="200"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0,20 C50,10 50,30 100,20 C150,10 150,30 200,20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-primary-foreground"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="text-center"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <p className="text-sm md:text-base text-primary-foreground/70 mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
