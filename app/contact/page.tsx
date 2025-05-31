import { PageIntro } from "@/components/page-intro";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Gaurav Shukla",
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
    </main>
  );
}
