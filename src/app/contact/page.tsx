import { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { Wrapper } from "@/components/wrapper";
import { SectionIntro } from "@/components/section-intro";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Gaurav Shukla",
  description:
    "Get in touch with me for collaborations, opportunities, or just to say hello",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        title="Contact Me"
        description="Have a question or want to work together? I'm always open to discussing new opportunities and interesting projects. Feel free to reach out."
      />
      <hr />
      <section className="py-10 md:py-20">
        <Wrapper className="space-y-12">
          <SectionIntro
            heading="Contact"
            subheading="Get in touch with me."
            paragraph="Fill out the form below to get in touch with me."
          />
          <section className="max-w-xl">
            <ContactForm />
          </section>
        </Wrapper>
      </section>
    </main>
  );
}
