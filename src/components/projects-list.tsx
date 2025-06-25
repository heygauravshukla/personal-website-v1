import Image from "next/image";
import * as motion from "motion/react-client";
import { ExternalLinkIcon } from "lucide-react";

export function ProjectsList({ limit }: { limit?: number }) {
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
      link: "https://iat-gshukla.vercel.app",
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
    <ul className="grid gap-y-6 sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 md:gap-y-8 lg:grid-cols-3">
      {projects.slice(0, limit).map((project, idx) => {
        return (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="group bg-card text-card-foreground relative isolate overflow-hidden rounded-xl border"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="aspect-video w-full object-cover transition-all group-hover:scale-105"
            />

            <div className="p-4">
              <h3 className="group-hover:text-primary leading-tight font-medium transition-colors">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="absolute inset-0"></span>
                  {project.title} <ExternalLinkIcon className="size-3" />
                </a>
              </h3>

              <p className="text-muted-foreground mt-2 text-sm leading-normal">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs/5 font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}
