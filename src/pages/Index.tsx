import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AchievementsSection from "@/components/AchievementsSection";
import AwardsSection from "@/components/AwardsSection";
import PublicationsSection from "@/components/PublicationsSection";
import CollaborationSection from "@/components/CollaborationSection";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <AchievementsSection />
      <AwardsSection />
      <PublicationsSection />
      <CollaborationSection />
      <StatsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
