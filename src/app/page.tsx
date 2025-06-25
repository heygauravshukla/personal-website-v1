import { HeroSection } from "@/components/hero-section";
import { ArticlesSection } from "@/components/articles-section";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection limit={3} />
      <ArticlesSection limit={3} />
      <TimelineSection />
    </main>
  );
}
