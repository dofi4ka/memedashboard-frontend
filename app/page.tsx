import { AnalyticsSection } from "./_components/home/AnalyticsSection";
import { HeroSection } from "./_components/home/HeroSection";
import { SearchSection } from "./_components/home/SearchSection";
import { VisualizationSection } from "./_components/home/VisualizationSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <AnalyticsSection />
        <VisualizationSection />
        <SearchSection />
      </div>
    </main>
  );
}
