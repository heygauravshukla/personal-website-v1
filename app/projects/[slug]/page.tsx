import { BackButton } from "@/components/back-button";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/wrapper";
import { promises as fs } from "fs";
import { ExternalLinkIcon } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";
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

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const content = await fs.readFile(
    path.join(process.cwd(), "content/projects", `${params.slug}.mdx`),
    "utf-8",
  );
  const { frontmatter } = await compileMDX<Frontmatter>({
    source: content,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    title: `${frontmatter.title} - Gaurav Shukla`,
    description: frontmatter.description,
  };
}

export default async function ProjectPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  try {
    const content = await fs.readFile(
      path.join(process.cwd(), "content/projects", `${params.slug}.mdx`),
      "utf-8",
    );
    const data = await compileMDX<Frontmatter>({
      source: content,
      options: {
        parseFrontmatter: true,
      },
      components: {},
    });

    return (
      <Wrapper as="main" className="space-y-8 py-10">
        <nav>
          <BackButton />
        </nav>

        <article className="prose prose-slate dark:prose-invert mx-auto">
          <h1 className="tracking-tight">{data.frontmatter.title}</h1>
          <p>{data.frontmatter.description}</p>
          <Image
            src={data.frontmatter.image}
            alt={data.frontmatter.title}
            width={800}
            height={600}
            className="aspect-video w-full rounded-lg border object-cover shadow"
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="no-underline">
              <a
                href={data.frontmatter.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLinkIcon />
                Live Site
              </a>
            </Button>
            {data.frontmatter.repository && (
              <Button asChild variant="outline" className="no-underline">
                <a
                  href={data.frontmatter.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.github className="fill-foreground" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
          {data.content}
        </article>
      </Wrapper>
    );
  } catch {
    notFound();
  }
}
