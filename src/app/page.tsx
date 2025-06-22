import { ArticlesSection } from "@/components/articles-section";
import { PageIntro } from "@/components/page-intro";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <main>
      <PageIntro
        title="Gaurav Shukla"
        description="A software engineer and creator based in India. I do front-end development, build awesome projects and share knowledge through articles."
      />
      <ProjectsSection limit={3} />
      <ArticlesSection limit={3} />
      <TimelineSection />
    </main>
  );
}
