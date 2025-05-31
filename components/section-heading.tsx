import * as motion from "motion/react-client";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    >
      <span className="bg-muted dark:bg-background text-primary rounded px-2 py-1 text-sm sm:text-base">
        {children}
      </span>
    </motion.h2>
  );
}
