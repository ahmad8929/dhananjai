import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Ship, Globe, Users, Waves, MapPin, BookOpen, Award } from "lucide-react";

const achievements = [
  {
    icon: Ship,
    title: "Founding Program Leader, IODP-India",
    desc: "Led India's participation in the International Ocean Discovery Program from 2009 to 2023.",
  },
  {
    icon: Globe,
    title: "First Indian IODP Expedition Leader",
    desc: "Made history as the first Indian scientist to lead an international ocean drilling expedition.",
  },
  {
    icon: Users,
    title: "UN Scientific Delegations",
    desc: "Member of India's scientific delegations to the United Nations for the Continental Shelf Program.",
  },
  {
    icon: Waves,
    title: "100+ OBS Deployments",
    desc: "Led over 100 Ocean Bottom Seismometer deployments across multiple ocean basins.",
  },
  {
    icon: MapPin,
    title: "Largest Marine Geophysical Survey",
    desc: "Led the largest marine geophysical data acquisition campaign along Indian continental margins.",
  },
  {
    icon: BookOpen,
    title: "JOIDES Resolution Facility Board",
    desc: "Member of JOIDES Resolution Facility Board and IODP Forum, shaping global ocean drilling policy.",
  },
  {
    icon: Award,
    title: "Editorial Board Member",
    desc: "Serves on editorial boards of multiple international journals in marine geosciences.",
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Key Achievements & Leadership
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="card-elevated p-6 group hover:border-accent/30 transition-all hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <item.icon size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
