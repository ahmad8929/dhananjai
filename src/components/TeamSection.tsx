import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile.png";

// Team members data - using placeholder data with profile image
const teamMembers = [
  {
    name: "Dr. Mullapudi V Jyothirmai",
    title: "Senior Project Scientist",
    email: "jyothirmai@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Sudipta Roy",
    title: "Senior Project Scientist",
    email: "sudipta@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Shrish Nath Upadhyay",
    title: "Senior Project Scientist",
    email: "shrish@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Mona Vishwakarma",
    title: "Senior Project Scientist",
    email: "mona@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Ardhra S",
    title: "Senior Project Scientist",
    email: "ardhra@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Kangkan Jyoti Goswami",
    title: "Senior Project Scientist",
    email: "kangkan@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Mayank Dubey",
    title: "Senior Project Scientist",
    email: "mayank@jnu.ac.in",
    linkedin: "#",
  },
  {
    name: "Dr. Raj Akshat",
    title: "Senior Project Scientist",
    email: "raj@jnu.ac.in",
    linkedin: "#",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="card-elevated p-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-accent/50">
                  {/* Profile Image */}
                  <div className="relative mb-4 aspect-square w-full max-w-[200px] mx-auto">
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/50 transition-all duration-300">
                      <img
                        src={profileImage}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.title}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label={`LinkedIn ${member.name}`}
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-muted-foreground leading-relaxed">
              Our dedicated team of Senior Project Scientists works collaboratively 
              on cutting-edge research in marine geosciences, oceanography, and 
              related fields, contributing to groundbreaking discoveries and 
              advancing our understanding of the world's oceans.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

