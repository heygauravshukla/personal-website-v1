import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ResourcesList } from "@/components/resources-list";

export const metadata: Metadata = {
  title: "Bookmarks - Gaurav Shukla",
  description:
    "Explore my collection of bookmarks, from web development resources to online tools that I use regularly.",
};

export default function BookmarksPage() {
  return (
    <main>
      <PageIntro
        title="My bookmarks"
        description="Explore my collection of bookmarks, from web development resources to online tools that I use regularly."
      />
      <hr />
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Bookmarks"
            subheading="Explore my collection of bookmarks."
            paragraph="Bookmarks ranging from web development resources to online tools."
          />
          <ResourcesList />
        </Wrapper>
      </section>
    </main>
  );
}
