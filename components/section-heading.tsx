import * as motion from "motion/react-client";

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    >
      <span className="text-sm font-bold tracking-widest text-teal-500 uppercase dark:text-teal-200">
        {children}
      </span>
    </motion.h2>
  );
}
