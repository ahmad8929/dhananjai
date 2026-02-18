import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Linkedin, Mail } from "lucide-react";
import mayuriImage from "@/assets/mayuri.png";
import divyanshImage from "@/assets/divyansh.png";
import yashikaImage from "@/assets/yashika.png";
import bhanuImage from "@/assets/bhanupratap.png";
import sankhadipImage from "@/assets/sankhadip.png";

type LinkItem = {
  type: "email" | "linkedin" | "researchgate";
  label: string;
  href: string;
};

function LinkPill({ item }: { item: LinkItem }) {
  const icon =
    item.type === "email" ? (
      <Mail size={14} />
    ) : item.type === "linkedin" ? (
      <Linkedin size={14} />
    ) : (
      <ExternalLink size={14} />
    );

  return (
    <a
      href={item.href}
      target={item.type === "email" ? undefined : "_blank"}
      rel={item.type === "email" ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors max-w-full"
    >
      {icon}
      <span className="break-words">{item.label}</span>
    </a>
  );
}

function MemberCard({
  name,
  image,
  subtitle,
  links,
  points,
}: {
  name: string;
  image: string;
  subtitle?: string;
  links?: LinkItem[];
  points?: React.ReactNode;
}) {
  return (
    <div className="card-elevated rounded-2xl p-5 md:p-7">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 items-center sm:items-start">
        <div className="flex-shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-border/60 bg-muted shadow-sm">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <h4 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1 leading-snug">
            {name}
          </h4>
          {subtitle && <p className="text-sm md:text-base text-muted-foreground mb-3">{subtitle}</p>}

          {links && links.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4">
              {links.map((item) => (
                <LinkPill key={`${name}-${item.href}`} item={item} />
              ))}
            </div>
          )}

          {points && (
            <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-1">
              {points}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Our Team
          </h2>

          <div className="space-y-8">
            {/* M.Sc Student */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                M.Sc Student
              </h3>
              <MemberCard
                name="Bhanupratap Shekhawat"
                subtitle="M.Sc Student"
                image={bhanuImage}
                links={[
                  {
                    type: "email",
                    label: "bhanu2616219@gmail.com",
                    href: "mailto:bhanu2616219@gmail.com",
                  },
                  {
                    type: "email",
                    label: "bhanup32_ses@jnu.ac.in",
                    href: "mailto:bhanup32_ses@jnu.ac.in",
                  },
                  {
                    type: "linkedin",
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/bhanupratap-s-58a4291b1/",
                  },
                ]}
                points={
                  <>
                    <div>
                      <strong>Education:</strong> B.Sc. Physical Science (DU)
                      <br />
                      <strong>Current:</strong> M.Sc. Environmental Science (JNU)
                    </div>
                    <div className="mt-2">
                      <strong>Qualification:</strong> UGC NET–JRF (Environmental Science) (December 2025)
                    </div>
                  </>
                }
              />
            </motion.div>

            {/* Ph.D Scholars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                Ph.D Scholars
              </h3>
              <div className="space-y-4">
                {/* Mayuri Nishad */}
                <MemberCard
                  name="Mayuri Nishad"
                  subtitle="Ph.D Scholar"
                  image={mayuriImage}
                  links={[
                    {
                      type: "email",
                      label: "mayuri.ssmm14@gmail.com",
                      href: "mailto:mayuri.ssmm14@gmail.com",
                    },
                    {
                      type: "linkedin",
                      label: "LinkedIn",
                      href: "https://in.linkedin.com/in/mayurinishad",
                    },
                  ]}
                  points={
                    <>
                      <div>
                        <strong>Education:</strong> B.Tech (Chemical Engineering) (2020–24)
                        <br />
                        University School of Chemical Technology (GGSIPU Delhi){" "}
                        <span className="text-accent">
                          <strong>[Silver Medalist]</strong>
                        </span>
                      </div>
                      <div className="mt-2">
                        <strong>Experience:</strong> Ex Reliance Industries Limited, JMD (2024–25)
                        <br />
                        GET Chemical Engineer, Utilities and ETP Department
                      </div>
                      <div className="mt-2">
                        <strong>GATE 2024:</strong> AIR 1102
                        <br />
                        <strong>NET (Environmental Science):</strong> June’25 – 97.4 percentile &nbsp;|&nbsp; Dec’25 – 99.29+ percentile
                      </div>
                      <div className="mt-2">
                        <strong>Current:</strong> Joined Ph.D at JNU SES (September 2025)
                        <br />
                        <strong>Research Interest:</strong> TBD
                      </div>
                    </>
                  }
                />

                {/* Yashika Singh */}
                <MemberCard
                  name="Yashika Singh"
                  subtitle="Ph.D Scholar"
                  image={yashikaImage}
                  links={[
                    {
                      type: "linkedin",
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/yashika-singh-4982ab236/",
                    },
                  ]}
                  points={
                    <>
                      <div>
                        <strong>Education:</strong> PhD, Environmental Science, JNU (Sep 2025 – Present)
                        <br />
                        MS, Forestry, Forest Research Institute, Dehradun (Jul 2022 – Jul 2024)
                      </div>
                      <div className="mt-2">
                        <strong>Experience:</strong> Assistant Project Coordinator, SUVIDHA (Aug 2024 – Sep 2025)
                      </div>
                      <div className="mt-2">
                        <strong>Location:</strong> New Delhi, Delhi, India
                      </div>
                    </>
                  }
                />

                {/* Divyansh Rodney */}
                <MemberCard
                  name="Divyansh Rodney"
                  subtitle="Ph.D Scholar"
                  image={divyanshImage}
                  links={[
                    {
                      type: "email",
                      label: "divyan17_ses@jnu.ac.in",
                      href: "mailto:divyan17_ses@jnu.ac.in",
                    },
                  ]}
                  points={
                    <>
                      <div>
                        <strong>Education:</strong> B.Sc. (Hons.) Forestry — Rani Lakshmi Bai Central Agricultural University
                        <br />
                        M.Sc. Environmental Sciences — Jawaharlal Nehru University
                      </div>
                      <div className="mt-2">
                        <strong>GATE 2025 (ES):</strong> AIR 206
                        <br />
                        <strong>UGC NET–JRF (Environmental Science):</strong> June 2024 — 99.97 percentile
                      </div>
                      <div className="mt-2">
                        <strong>Current:</strong> Joined Ph.D course at SES, JNU in 2025
                        <br />
                        <strong>Research Interest:</strong> Seismic stratigraphy and Paleoclimate
                      </div>
                    </>
                  }
                />
              </div>
            </motion.div>

            {/* Project Associate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                Project Associate
              </h3>
              <MemberCard
                name="Sankhadip Poyra"
                subtitle="Project Associate"
                image={sankhadipImage}
                links={[
                  {
                    type: "email",
                    label: "sankhadip_2025@jnu.ac.in",
                    href: "mailto:sankhadip_2025@jnu.ac.in",
                  },
                  {
                    type: "researchgate",
                    label: "ResearchGate",
                    href: "https://www.researchgate.net/profile/Sankhadip-Poyra",
                  },
                ]}
                points={
                  <>
                    <div>
                      <strong>Education:</strong> B.Sc. (Hons.) Geology (2019–22)
                      <br />
                      Presidency University, Kolkata, West Bengal
                      <br />
                      <strong>M.Sc. Applied Geology (2022–24)</strong>
                      <br />
                      Presidency University, Kolkata, West Bengal
                    </div>
                    <div className="mt-2">
                      <strong>Joined:</strong> JRF under Prof. Dhananjai K. Pandey
                      <br />
                      <strong>Research Interest:</strong> Sedimentary and Aqueous Geochemistry
                    </div>
                  </>
                }
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

