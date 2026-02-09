import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, GraduationCap, Star } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "National Geoscience Award",
    org: "Ministry of Mines, Government of India",
    highlight: true,
  },
  {
    icon: Star,
    title: "CSI Nihilent eGov Award",
    org: "Computer Society of India",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Cambridge Commonwealth Fellowship",
    org: "University of Cambridge, UK",
    highlight: true,
  },
  {
    icon: Medal,
    title: "Lundgren Research Award",
    org: "United Kingdom",
    highlight: false,
  },
  {
    icon: Star,
    title: "Schlumberger Cambridge Research Award",
    org: "Schlumberger, Cambridge",
    highlight: false,
  },
  {
    icon: Medal,
    title: "Certificate of Merit",
    org: "Ministry of Earth Sciences, India",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Overseas Research Studentship Award",
    org: "United Kingdom",
    highlight: false,
  },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Awards & Honours
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className={`card-elevated p-5 text-center group hover:-translate-y-1 transition-all ${
                award.highlight ? "border-accent/30 glow-accent" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <award.icon
                  size={22}
                  className={award.highlight ? "text-accent" : "text-muted-foreground"}
                />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {award.title}
              </h3>
              <p className="text-xs text-muted-foreground">{award.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
