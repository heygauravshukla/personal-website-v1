import { PageIntro } from "@/components/page-intro";
import { ResourcesSection } from "@/components/resources-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Gaurav Shukla",
  description:
    "A curated collection of tools, websites, and resources that I find valuable in my daily workflow.",
};

export default function ResourcesPage() {
  return (
    <main>
      <PageIntro
        title="Resources"
        description="Here's a collection of resources, tools, and websites that I use regularly. These have helped me in my development journey and might be useful for you too."
      />
      <ResourcesSection />
    </main>
  );
}
