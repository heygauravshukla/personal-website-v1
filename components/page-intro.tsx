import { Wrapper } from "@/components/wrapper";
import * as motion from "motion/react-client";

export function PageIntro({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Wrapper as="section" className="space-y-3 py-8 md:py-10">
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-3xl font-bold tracking-tighter text-shadow-xs sm:text-4xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-muted-foreground max-w-lg text-sm sm:text-base"
      >
        {description}
      </motion.p>
    </Wrapper>
  );
}
