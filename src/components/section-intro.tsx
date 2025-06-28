import * as motion from "motion/react-client";

export function SectionIntro({
  heading,
  subheading,
  paragraph,
}: {
  heading: string;
  subheading: string;
  paragraph: string;
}) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-primary text-sm font-bold tracking-widest uppercase"
      >
        {heading}
      </motion.h2>
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 block text-2xl font-bold tracking-tight sm:text-3xl"
      >
        {subheading}
      </motion.span>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-muted-foreground mt-2 max-w-xl text-pretty"
      >
        {paragraph}
      </motion.p>
    </div>
  );
}
