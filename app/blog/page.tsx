import { BlogsSection } from "@/components/blog-section";
import { PageIntro } from "@/components/page-intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All blogs | Gaurav Shukla",
  description:
    "Read my latest blogs about web development, frontend technologies, and software engineering best practices. Sharing insights and experiences from my journey as a developer.",
};

export default function BlogsPage() {
  return (
    <main>
      <PageIntro
        title="All blogs"
        description="Explore my collection of articles about web development, coding practices, and technology insights. I write about frontend development, React, and modern web technologies."
      />
      <BlogsSection />
    </main>
  );
}
