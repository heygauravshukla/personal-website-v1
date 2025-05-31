import { Icons } from "@/components/icons";
import { Wrapper } from "@/components/wrapper";

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export function SiteFooter() {
  const socialLinks: SocialLink[] = [
    {
      platform: "GitHub",
      href: "https://github.com/heygauravshukla",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      href: "https://www.linkedin.com/in/heygauravshukla",
      icon: "linkedin",
    },
    { platform: "X", href: "https://x.com/heygauravshukla", icon: "x" },
  ];

  return (
    <Wrapper as="footer" className="flex items-center justify-between py-3">
      <p className="text-muted-foreground text-xs">
        Built with love by Gaurav Shukla
      </p>

      <ul className="flex items-center gap-4">
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
                <IconComponent className="fill-muted-foreground hover:fill-primary size-4 transition-colors duration-200" />
              </a>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}
