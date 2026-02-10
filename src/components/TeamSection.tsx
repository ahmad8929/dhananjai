import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin } from "lucide-react";
import mayuriImage from "@/assets/mayuri.png";
import divyanshImage from "@/assets/divyansh.png";
import yashikaImage from "@/assets/yashika.png";

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
              <div className="card-elevated rounded-xl p-4">
                <p className="text-base md:text-lg font-medium text-foreground">
                  Bhanu Pratap Shekhawat
                </p>
              </div>
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
                <div className="card-elevated rounded-xl p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-accent/20">
                        <img
                          src={mayuriImage}
                          alt="Mayuri Nishad"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                        Mayuri Nishad
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <a
                          href="mailto:mayuri.ssmm14@gmail.com"
                          className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          <Mail size={14} />
                          <span>mayuri.ssmm14@gmail.com</span>
                        </a>
                        <a
                          href="https://in.linkedin.com/in/mayurinishad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          <Linkedin size={14} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                      <div className="text-sm space-y-1">
                        <div><strong>Education:</strong> B.Tech (Chemical Engineering) 2020-24, GGSIPU Delhi <span className="text-accent">[Silver Medalist]</span></div>
                        <div><strong>Experience:</strong> Ex Reliance Industries Limited, JMD (2024-25) - GET Chemical Engineer</div>
                        <div><strong>GATE 2024:</strong> AIR 1102 | <strong>NET (Env. Science):</strong> June'25 - 97.4%, Dec'25 - 99.29+%</div>
                        <div><strong>Current:</strong> Ph.D at JNU SES (Joined Sept 2025) | <strong>Research Interest:</strong> TBD</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Yashika Singh */}
                <div className="card-elevated rounded-xl p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-accent/20 bg-muted">
                        <img
                          src={yashikaImage}
                          alt="Yashika Singh"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                        Yashika Singh
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <a
                          href="https://www.linkedin.com/in/yashika-singh-4982ab236/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          <Linkedin size={14} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                      <div className="text-sm space-y-1">
                        <div><strong>Education:</strong> PhD, Environmental Science, JNU (Sep 2025 - Present) | MS, Forestry, Forest Research Institute, Dehradun (Jul 2022 - Jul 2024)</div>
                        <div><strong>Experience:</strong> Assistant Project Coordinator, SUVIDHA (Aug 2024 - Sep 2025)</div>
                        <div><strong>Location:</strong> New Delhi, Delhi, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divyansh Rodney */}
                <div className="card-elevated rounded-xl p-4 md:p-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 border-accent/20 bg-muted">
                        <img
                          src={divyanshImage}
                          alt="Divyansh Rodney"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-display text-lg md:text-xl font-bold text-foreground mb-2">
                        Divyansh Rodney
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <a
                          href="https://www.linkedin.com/in/divyansh-rodney-203829176/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 transition-colors"
                        >
                          <Linkedin size={14} />
                          <span>LinkedIn</span>
                        </a>
                      </div>
                      <div className="text-sm space-y-1">
                        <div><strong>Education:</strong> Master's, Environmental Science, JNU (Sep 2023 - Dec 2025) | B.Sc. (Hons.), Rani Lakshmi Bai Central Agricultural University (2018 - 2022)</div>
                        <div><strong>Profile:</strong> Environmental science</div>
                        <div><strong>Location:</strong> Delhi, India</div>
                      </div>
                    </div>
                  </div>
                </div>
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
              <div className="card-elevated rounded-xl p-4">
                <p className="text-base md:text-lg font-medium text-foreground">
                  Shankhdweep
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

