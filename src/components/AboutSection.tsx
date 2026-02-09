import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Globe, BookOpen, Award } from "lucide-react";

const highlights = [
  {
    icon: Anchor,
    label: "400+ Days at Sea",
    desc: "Leading ocean drilling expeditions worldwide",
  },
  {
    icon: Globe,
    label: "IODP Pioneer",
    desc: "First Indian to lead an international ocean drilling expedition",
  },
  {
    icon: BookOpen,
    label: "Continental Shelf",
    desc: "Leader of India's Extended Continental Shelf Program",
  },
  {
    icon: Award,
    label: "National Recognition",
    desc: "National Geoscience Award recipient",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            About
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Bio */}
            <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Prof. Dhananjai K. Pandey is a distinguished Marine Geoscientist,
                Oceanographer, and Seismologist at the School of Environmental
                Sciences, Jawaharlal Nehru University (JNU), New Delhi. With over
                400 days at sea, he has led major ocean drilling and geophysical
                expeditions across the world's oceans.
              </p>
              <p>
                He holds the distinction of being the <strong className="text-foreground">first Indian to lead an
                International Ocean Discovery Program (IODP) expedition</strong>—a
                milestone that has significantly advanced India's role in global
                ocean science. He served as the founding Program Leader of
                IODP-India from 2009 to 2023.
              </p>
              <p>
                His areas of expertise span Marine Geosciences, Ocean Exploration,
                UNCLOS (United Nations Convention on the Law of the Sea),
                Geodynamics, Seismology, Continental Margin Tectonics, and Deep Sea
                Drilling. He has been instrumental in India's Extended Continental
                Shelf Program and has represented India in UN scientific
                delegations.
              </p>

              {/* Qualifications */}
              <div className="pt-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  Qualifications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Ph.D. Earth Sciences</strong> — University of
                      Cambridge (Cambridge Commonwealth Fellowship)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">Post Doctoral Fellow</strong> — National
                      Oceanography Centre, Southampton (Geophysical Computing)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                    <span>
                      <strong className="text-foreground">M.Sc. (Tech) Geophysics</strong> — Banaras Hindu
                      University
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="card-elevated p-5 group hover:border-accent/30 transition-colors"
                >
                  <item.icon
                    size={24}
                    className="text-accent mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h4 className="font-display text-sm font-semibold text-foreground mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
