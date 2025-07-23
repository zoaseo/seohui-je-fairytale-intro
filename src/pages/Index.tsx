import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { AboutSection } from "@/components/AboutSection";
import { FinalSection } from "@/components/FinalSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <JourneySection />
      <AboutSection />
      <FinalSection />
    </div>
  );
};

export default Index;