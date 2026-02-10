import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  { year: "2023", role: "Professor", org: "Jawaharlal Nehru University, New Delhi" },
  { year: "2023", role: "Scientist-G", org: "NCPOR, Goa" },
  { year: "2018", role: "Scientist-F", org: "NCPOR, Goa" },
  { year: "2013", role: "Scientist-E", org: "NCPOR, Goa" },
  { year: "2009", role: "Scientist-D", org: "NCPOR, Goa" },
  { year: "2003", role: "Scientist-C", org: "NCPOR, Goa" },
  { year: "1997", role: "Project Fellow", org: "Banaras Hindu University" },
];

const ExperienceTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8 md:mb-12" />
        </motion.div>

        <div className="relative pl-6 md:pl-0">
          {/* Vertical line - positioned on left for mobile, center for desktop */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${exp.year}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="relative flex items-start mb-5 md:mb-8 last:mb-0"
              >
                {/* Dot - positioned on timeline */}
                <div className="absolute left-3 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1.5 mt-2 md:mt-2.5 z-10" />

                {/* Content card - positioned to right on mobile, alternating on desktop */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] w-[calc(100%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="card-elevated rounded-xl p-4 md:p-5">
                    <div className="flex items-center gap-2.5 md:gap-3 mb-2">
                      <Briefcase size={18} className="text-accent flex-shrink-0" />
                      <span className="text-sm md:text-base font-semibold text-accent tracking-wide">
                        {exp.year}
                      </span>
                    </div>
                    <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5">
                      {exp.role}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {exp.org}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
