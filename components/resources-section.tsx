import { SectionHeading } from "@/components/section-heading";
import { Wrapper } from "@/components/wrapper";
import { ExternalLinkIcon } from "lucide-react";
import * as motion from "motion/react-client";

interface Resource {
  title: string;
  description: string;
  href: string;
}

interface ResourceItem {
  category: string;
  items: Resource[];
}

export function ResourcesSection() {
  const resources: ResourceItem[] = [
    {
      category: "Utilities",
      items: [
        {
          title: "Favicon Generator",
          description: "Generate favicon from text or image",
          href: "https://redketchup.io/favicon-generator",
        },
        {
          title: "Fluid Typography Calculator",
          description: "Calculate a fluid typography scale",
          href: "https://royalfig.github.io/fluid-typography-calculator",
        },
        {
          title: "Gitingest",
          description:
            "Turn any Git repository into a simple text digest of its codebase.",
          href: "https://gitingest.com",
        },
        {
          title: "Squoosh - Image Optimizer",
          description:
            "Optimize image assets, reduce image sizes into any format.",
          href: "https://squoosh.app",
        },
      ],
    },
    {
      category: "UI",
      items: [
        {
          title: "shadcn/ui - React components library",
          description: "A set of beautifully-designed, accessible components.",
          href: "https://ui.shadcn.com",
        },
        {
          title: "Tweakcn - Customize shadcn/ui themes",
          description: "Customize shadcn/ui theme with prebuilt themes.",
          href: "https://tweakcn.com",
        },
        {
          title: "Motion library",
          description: "Add animations to your React project.",
          href: "https://motion.dev",
        },
        {
          title: "Open Props",
          description: "Supercharged CSS variables.",
          href: "https://open-props.style",
        },
      ],
    },
  ];

  return (
    <Wrapper as="section" className="border-y py-10">
      <ul className="space-y-12">
        {resources.map((item, idx) => (
          <motion.li
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
            className="space-y-4"
          >
            <SectionHeading>{item.category}</SectionHeading>
            <ul className="grid gap-5 sm:grid-cols-2">
              {item.items.map((resource, idx) => (
                <motion.li
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="group relative isolate grid rounded-md border p-4"
                >
                  <h4 className="order-2 mt-1">{resource.title}</h4>
                  <p className="text-muted-foreground order-3 mt-1 text-sm">
                    {resource.description}
                  </p>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground order-1 text-xs"
                  >
                    <span className="absolute inset-0"></span>
                    {resource.href.slice(8)}
                    <ExternalLinkIcon className="group-hover:text-primary float-right size-4 transition-colors duration-200" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ul>
    </Wrapper>
  );
}
