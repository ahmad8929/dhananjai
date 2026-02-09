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
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={`${exp.year}-${exp.role}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className={`relative flex items-start mb-8 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1.5 mt-5 z-10" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] card-elevated p-5 ${
                    isLeft ? "md:mr-auto md:pr-6" : "md:ml-auto md:pl-6"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase size={16} className="text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-accent tracking-wider uppercase">
                      {exp.year}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.org}</p>
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
