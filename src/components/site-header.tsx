"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link } from "next-view-transitions";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { ModeToggle } from "@/components/mode-toggle";
import { Wrapper } from "@/components/wrapper";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

export function SiteHeader() {
  const navItems: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Articles", href: "/articles" },
    { label: "Projects", href: "/projects" },
    { label: "Bookmarks", href: "/bookmarks" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-background/85 sticky inset-x-0 top-0 z-50 border-b backdrop-blur-sm">
      <Wrapper className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src="/avatar.webp"
            alt="Gaurav Shukla's avatar"
            width={40}
            height={40}
            className="size-10 rounded-full"
          />
        </Link>

        {/* Mobile Menu */}
        <motion.ul
          id="mobile-menu"
          initial={{
            opacity: 0,
            y: 50,
            display: "none",
          }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 0 : 50,
            display: isMenuOpen ? "grid" : "none",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "bg-popover text-popover-foreground absolute inset-0 z-50 min-h-screen place-content-center place-items-center gap-4",
          )}
        >
          {navItems.map((item, idx) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn("text-2xl", {
                  "text-primary": pathname === item.href,
                })}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
                  {
                    "text-foreground": pathname === item.href,
                  },
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="secondary"
            size="icon"
            className="z-50 md:hidden"
            onClick={handleMenuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle color theme</span>
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
