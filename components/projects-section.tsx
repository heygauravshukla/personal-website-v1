import { SectionHeading } from "@/components/section-heading";
import { Wrapper } from "@/components/wrapper";
import { promises as fs } from "fs";
import * as motion from "motion/react-client";
import { compileMDX } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import Image from "next/image";
import path from "path";

interface Frontmatter {
  title: string;
  description: string;
  image: string;
  stack: string[];
  publishDate: string;
  live: string;
  repository?: string;
}

export async function ProjectsSection({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(
    path.join(process.cwd(), "content/projects"),
  );
  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "content/projects", filename),
        "utf-8",
      );
      const { frontmatter } = await compileMDX<Frontmatter>({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    }),
  );

  const sortedProjects = projects
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .slice(0, limit);

  return (
    <Wrapper as="section" className="space-y-6 border-y py-10">
      <SectionHeading>Projects</SectionHeading>

      <ul className="grid gap-y-8 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-3 md:gap-x-6">
        {sortedProjects.map((project, idx) => {
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
                <Link href={`/projects/${project.slug}`}>
                  <span className="absolute inset-0"></span>
                  {project.title}
                </Link>
              </h3>
              <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-normal">
                {project.description}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
