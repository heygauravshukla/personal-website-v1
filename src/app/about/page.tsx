import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { TimelineList } from "@/components/timeline-list";

export const metadata: Metadata = {
  title: "About - Gaurav Shukla",
  description:
    "A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive articles.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="About Me"
        description="A passionate Software Engineer with expertise in full-stack web development since 2020. Specializing in crafting elegant user interfaces, I combine design engineering with robust front-end and back-end development. I'm dedicated to sharing in-depth technical knowledge through comprehensive articles."
      />
      <hr />
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Timeline"
            subheading="Professional milestones and growth."
            paragraph="Explore my journey through key achievements."
          />
          <TimelineList />
        </Wrapper>
      </section>
    </main>
  );
}
