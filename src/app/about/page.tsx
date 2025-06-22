import { PageIntro } from "@/components/page-intro";
import { TimelineSection } from "@/components/timeline-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Gaurav Shukla",
  description:
    "I'm Gaurav Shukla, a passionate software engineer specializing in front-end development. I create modern web applications, contribute to open-source projects, and share technical insights through my article.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        title="About Me"
        description="I'm a software engineer with expertise in React, TypeScript, and modern web technologies. I focus on building user-centric applications, contributing to open-source, and sharing knowledge through detailed technical articles."
      />
      <TimelineSection />
    </main>
  );
}
