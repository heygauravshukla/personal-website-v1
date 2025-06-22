import { SectionHeading } from "@/components/section-heading";
import { Wrapper } from "@/components/wrapper";
import * as motion from "motion/react-client";
import Image from "next/image";

export function ProjectsSection({ limit }: { limit?: number }) {
  const projects = [
    {
      title: "Shortly - URL Shortener",
      description:
        "A URL shortener app that shortens longer URLs to shareable concise links.",
      image: "/projects/shortly-url-shortener.webp",
      link: "https://sus-gshukla.vercel.app",
      repository: "https://github.com/heygauravshukla/shortly-url-shortener",
      stack: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    },
    {
      title: "IP Address Tracker",
      description:
        "A IP address tracker app that shows the location of an IP address.",
      image: "/projects/ip-address-tracker.webp",
      link: "https://sus-gshukla.vercel.app",
      repository: "https://github.com/heygauravshukla/ip-address-tracker",
      stack: ["Next.js", "Tailwind CSS", "REST API"],
    },
    {
      title: "Weather App",
      description:
        "A weather app that shows the current weather details of a city.",
      image: "/projects/weather-app.jpg",
      link: "https://weather-app-gshukla.vercel.app",
      repository: "https://github.com/heygauravshukla/weather-app",
      stack: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <Wrapper as="section" className="space-y-6 border-y py-10">
      <SectionHeading>Projects</SectionHeading>

      <ul className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:gap-x-6">
        {projects.slice(0, limit).map((project, idx) => {
          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative isolate"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="aspect-[4/3] rounded-lg object-cover transition-all duration-200 group-hover:scale-105"
              />
              <h3 className="mt-4 leading-tight font-medium">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0"></span>
                  {project.title}
                </a>
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                {project.description}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
