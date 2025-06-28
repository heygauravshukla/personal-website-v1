import * as motion from "motion/react-client";

import { Icons } from "@/components/icons";
import { Wrapper } from "@/components/wrapper";

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export function HeroSection() {
  const socialLinks: SocialLink[] = [
    { platform: "X", href: "https://x.com/heygauravshukla", icon: "x" },
    {
      platform: "Bluesky",
      href: "https://bsky.app/profile/heygauravshukla.bsky.social",
      icon: "bluesky",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/heygauravshukla",
      icon: "linkedin",
    },
    {
      platform: "GitHub",
      href: "https://github.com/heygauravshukla",
      icon: "github",
    },
  ];

  return (
    <section className="from-background to-muted/30 bg-gradient-to-b py-20 md:py-32">
      <Wrapper>
        <motion.h1
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl font-bold tracking-tight sm:text-5xl/tight md:text-balance"
        >
          Software engineer, creator, and tech enthusiast.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-muted-foreground mt-6 max-w-[60ch] leading-7 text-pretty"
        >
          I&apos;m Gaurav Shukla, a passionate software engineer and creator
          based in India. I specialize in web development, build awesome
          projects, and share knowledge through insightful articles and
          tutorials.
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
          className="mt-8 flex items-center gap-7"
        >
          {socialLinks.map((item) => {
            const IconComponent = Icons[item.icon as keyof typeof Icons];
            return (
              <li key={item.platform}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${item.platform} profile`}
                >
                  <IconComponent className="fill-muted-foreground hover:fill-primary size-5 transition-colors md:size-5.5" />
                </a>
              </li>
            );
          })}
        </motion.ul>
      </Wrapper>
    </section>
  );
}
