import { AboutSection } from "./_components/AboutSection";
import { FeaturesSection } from "./_components/FeaturesSection";
import { MissionSection } from "./_components/MissionSection";

export default function AboutPage() {
  return (
    <div className="container max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        О проекте
      </h1>

      <AboutSection />
      <FeaturesSection />
      <MissionSection />
    </div>
  );
}
