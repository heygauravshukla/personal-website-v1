import { promises as fs } from "fs";
import path from "path";

import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import { BackButton } from "@/components/back-button";
import { Wrapper } from "@/components/wrapper";

interface Frontmatter {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  tags: string[];
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const content = await fs.readFile(
    path.join(process.cwd(), "src/articles", `${params.slug}.mdx`),
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

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  try {
    const content = await fs.readFile(
      path.join(process.cwd(), "src/articles", `${params.slug}.mdx`),
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
      <Wrapper as="main" className="space-y-8 py-10 md:py-20">
        <nav>
          <BackButton />
        </nav>

        <article className="prose dark:prose-invert prose-img:rounded-xl prose-img:border mx-auto">
          <h1>{data.frontmatter.title}</h1>
          <p>{data.frontmatter.description}</p>
          <Image
            src={data.frontmatter.image}
            alt={data.frontmatter.title}
            width={800}
            height={600}
            className="aspect-video w-full rounded-lg border object-cover shadow"
          />
          {data.content}
        </article>
      </Wrapper>
    );
  } catch {
    notFound();
  }
}
