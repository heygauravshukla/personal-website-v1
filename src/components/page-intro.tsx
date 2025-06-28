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
    <section className="from-background to-muted/30 bg-gradient-to-b py-10 md:py-20">
      <Wrapper>
        <header className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl font-bold tracking-tight sm:text-5xl/tight md:text-balance"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-muted-foreground mt-6 leading-7 text-pretty"
          >
            {description}
          </motion.p>
        </header>
      </Wrapper>
    </section>
  );
}
