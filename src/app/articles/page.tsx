import { ArticlesSection } from "@/components/articles-section";
import { PageIntro } from "@/components/page-intro";
import { Metadata } from "next";

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
      <ArticlesSection />
    </main>
  );
}
