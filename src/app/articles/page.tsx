import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ArticlesList } from "@/components/articles-list";

export const metadata: Metadata = {
  title: "Articles - Gaurav Shukla",
  description:
    "Read my latest articles about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
};

export default function ArticlesPage() {
  return (
    <main>
      <PageIntro
        title="All articles"
        description="Explore my collection of articles about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
      />
      <hr />
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Articles"
            subheading="Explore my collection of articles."
            paragraph="I write about web development and coding practices."
          />
          <ArticlesList />
        </Wrapper>
      </section>
    </main>
  );
}
