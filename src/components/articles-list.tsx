import path from "path";
import { promises as fs } from "fs";
import { compileMDX } from "next-mdx-remote/rsc";

import { Link } from "next-view-transitions";
import { ChevronRight } from "lucide-react";
import * as motion from "motion/react-client";

interface Frontmatter {
  title: string;
  description: string;
  image: string;
  publishDate: string;
  tags: string[];
}

export async function ArticlesList({ limit }: { limit?: number }) {
  const filenames = await fs.readdir(path.join(process.cwd(), "src/articles"));
  const articles = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/articles", filename),
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

  const sortedArticles = articles
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .slice(0, limit);

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {sortedArticles.map((article, idx) => {
        return (
          <motion.article
            key={article.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: idx * 0.2,
              duration: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative isolate flex max-w-xl flex-col items-start"
          >
            <h3 className="font-semibold tracking-tight">
              <Link
                href={`/articles/${article.slug}`}
                className="hover:text-primary transition-colors"
              >
                {article.title}
              </Link>
            </h3>
            <time className="text-muted-foreground order-first mb-3 text-sm">
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <p className="text-muted-foreground mt-2 text-sm">
              {article.description}
            </p>
            <div>
              <Link
                href={`/articles/${article.slug}`}
                className="text-primary mt-4 inline-flex items-center gap-1 text-sm font-medium"
              >
                Read article <ChevronRight className="size-4" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
