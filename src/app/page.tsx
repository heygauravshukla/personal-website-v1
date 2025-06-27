import { HeroSection } from "@/components/hero-section";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";
import { ArticlesSection } from "@/components/articles-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <hr />
      <section className="py-20 md:py-32">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Projects"
            subheading="I love building things."
            paragraph="Here are some of the projects I've worked on."
          />
          <ProjectsList limit={3} />
        </Wrapper>
      </section>
      <hr />
      <ArticlesSection limit={3} />
      <TimelineSection />
    </main>
  );
}
