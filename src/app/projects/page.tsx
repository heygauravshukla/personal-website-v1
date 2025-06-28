import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ProjectsList } from "@/components/projects-list";

export const metadata: Metadata = {
  title: "Projects - Gaurav Shukla",
  description:
    "Explore my portfolio of web development projects, from full-stack applications to modern frontend solutions. Showcasing my expertise in React, Next.js, and innovative web technologies.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        title="All projects"
        description="Discover my portfolio of web development projects, showcasing full-stack applications, modern frontend solutions, and innovative web technologies. From React applications to complete web platforms."
      />
      <hr />
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Projects"
            subheading="Explore my collection of projects."
            paragraph="Projects ranging from web applications to landing pages."
          />
          <ProjectsList />
        </Wrapper>
      </section>
    </main>
  );
}
