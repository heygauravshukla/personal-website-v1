import { PageIntro } from "@/components/page-intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Gaurav Shukla",
  description:
    "Explore a collection of my software projects and technical works. From web applications to open-source contributions, discover what I've built.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        title="Projects"
        description="Check out some of my featured projects and personal works. Each project represents my passion for building innovative solutions and learning new technologies."
      />
    </main>
  );
}
