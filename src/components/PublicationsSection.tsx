import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { BookOpen, FileText, Library } from "lucide-react";

type TabKey = "highlights" | "recent" | "books";

const tabs: { key: TabKey; label: string; icon: typeof BookOpen }[] = [
  { key: "highlights", label: "Best Publications", icon: BookOpen },
  { key: "recent", label: "Recent (2022–2025)", icon: FileText },
  { key: "books", label: "Books & Volumes", icon: Library },
];

const publications: Record<TabKey, { title: string; journal: string; year: string; highlight?: boolean }[]> = {
  highlights: [
    {
      title: "Drilling into an active mafic-felsic magmatic system: The IODP Expedition 391 and 397T",
      journal: "Nature Communications",
      year: "2024",
      highlight: true,
    },
    {
      title: "The Laxmi Basin and the tectonic evolution of the western Indian continental margin",
      journal: "Earth and Planetary Science Letters",
      year: "2019",
    },
    {
      title: "Seismic structure and tectonics of the western Indian continental margin",
      journal: "Tectonophysics",
      year: "2018",
    },
    {
      title: "Continental breakup and early seafloor spreading in the Arabian Sea",
      journal: "Geological Magazine",
      year: "2020",
    },
    {
      title: "Jurassic sequence stratigraphy and paleoenvironments of the western Indian margin",
      journal: "Journal of the Geological Society of London",
      year: "2017",
    },
  ],
  recent: [
    {
      title: "Magmatic and tectonic history of Walvis Ridge and the Tristan-Gough hotspot track",
      journal: "Nature Communications",
      year: "2024",
      highlight: true,
    },
    {
      title: "Ocean bottom seismometer observations along the Indian continental margin",
      journal: "Tectonophysics",
      year: "2023",
    },
    {
      title: "Geodynamic evolution and deep crustal structure of the Arabian Sea basin",
      journal: "Marine Geology",
      year: "2023",
    },
    {
      title: "Extended continental shelf studies along the Indian Ocean margins",
      journal: "Journal of Earth System Science",
      year: "2022",
    },
  ],
  books: [
    {
      title: "The Indian Ocean and its Margins: Geological and Geophysical Perspectives",
      journal: "Geological Society of London, Special Publications",
      year: "2020",
    },
    {
      title: "Tectonics of the Indian Subcontinent",
      journal: "Springer, Society of Earth Scientists Series",
      year: "2020",
    },
    {
      title: "The Arabian Sea: Past, Present and Future",
      journal: "Special Volume — Geological Society of India",
      year: "2018",
    },
  ],
};

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<TabKey>("highlights");

  return (
    <section id="publications" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Research & Publications
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-8" />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-secondary"
                }`}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Publications list */}
          <div className="space-y-4">
            {publications[activeTab].map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * i }}
                className={`card-elevated p-5 flex flex-col sm:flex-row sm:items-start gap-4 ${
                  pub.highlight ? "border-accent/30" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="font-body text-sm font-semibold text-foreground leading-snug mb-1">
                    {pub.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    <span className="italic">{pub.journal}</span>
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {pub.highlight && (
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded bg-accent/10 text-accent">
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {pub.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
