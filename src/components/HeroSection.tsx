import { motion } from "framer-motion";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-ocean.jpg";
import profileImage from "@/assets/profile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ocean bathymetry visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-gradient opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <img
              src={profileImage}
              alt="Prof. Dhananjai K. Pandey"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-accent/40 shadow-xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Marine Geoscientist · Oceanographer · Seismologist
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
              Prof. Dhananjai K.{" "}
              <span className="text-sky-blue">Pandey</span>
            </h1>

            <p className="font-display text-xl md:text-2xl text-primary-foreground/80 mb-3 italic">
              Professor, School of Environmental Sciences
            </p>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Jawaharlal Nehru University, New Delhi
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-primary-foreground/70">
              <a
                href="mailto:dhananjai@jnu.ac.in"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={16} />
                dhananjai@jnu.ac.in
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm">
                <MapPin size={16} />
                Room 108B
              </span>
              <a
                href="https://www.jnu.ac.in/content/dhananjai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <ExternalLink size={16} />
                JNU Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
