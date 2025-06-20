import { SectionHeading } from "@/components/section-heading";
import { Wrapper } from "@/components/wrapper";
import { promises as fs } from "fs";
import * as motion from "motion/react-client";
import { compileMDX } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";
import path from "path";

interface Frontmatter {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  tags: string[];
}

export async function BlogsSection({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(path.join(process.cwd(), "content/blog"));
  const blogs = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "content/blog", filename),
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

  const sortedBlogs = blogs
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .slice(0, limit);

  return (
    <Wrapper as="section" className="space-y-6 border-y py-10">
      <SectionHeading>Writing</SectionHeading>

      <ul className="grid gap-6">
        {sortedBlogs.map((blog, idx) => {
          return (
            <motion.li
              key={blog.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
              className="group relative isolate"
            >
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <h3 className="font-semibold tracking-tight">
                  <Link href={`/blog/${blog.slug}`}>
                    <span className="absolute inset-0"></span>
                    {blog.title}
                  </Link>
                </h3>
                <time className="text-muted-foreground text-sm">
                  {new Date(blog.publishDate).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="text-muted-foreground mt-2 line-clamp-2 max-w-lg text-sm">
                {blog.description}
              </p>
            </motion.li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
