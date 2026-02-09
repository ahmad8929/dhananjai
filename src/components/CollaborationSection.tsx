import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Handshake, Ship } from "lucide-react";

const collaborations = [
  {
    icon: Globe,
    title: "IODP Leadership",
    desc: "Founding Program Leader of IODP-India. Member of JOIDES Resolution Facility Board and IODP Forum, guiding global ocean drilling strategy.",
  },
  {
    icon: Users,
    title: "UN Scientific Delegations",
    desc: "Represented India at the United Nations Commission on the Limits of the Continental Shelf (CLCS) in 2010, 2019, and 2020.",
  },
  {
    icon: Handshake,
    title: "Bilateral Maritime Negotiations",
    desc: "Participated in bilateral maritime boundary negotiations between 2013 and 2017, contributing to India's maritime diplomacy.",
  },
  {
    icon: Ship,
    title: "Worldwide Ocean Expeditions",
    desc: "Extensive ocean expeditions across the Indian Ocean, Arabian Sea, Bay of Bengal, and international waters with multi-national research teams.",
  },
];

const CollaborationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            International Collaboration
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {collaborations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="card-elevated p-6 flex gap-5 group hover:border-accent/30 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <item.icon size={22} className="text-accent" />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
