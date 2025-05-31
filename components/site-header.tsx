"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

interface NavItem {
  label: string;
  href: string;
}

export function SiteHeader() {
  const navItems: NavItem[] = [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleLinkClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="@container sticky inset-x-0 top-0 z-50">
      <Wrapper className="bg-background/95 dark:bg-muted/95 flex h-16 items-center justify-between space-x-4 border-b backdrop-blur-sm">
        <nav className="flex flex-1 items-center justify-between">
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/avatar.webp"
              alt="Gaurav Shukla's avatar"
              width={64}
              height={64}
              className="size-10 rounded-full"
            />
          </Link>

          {/* Mobile Nav */}
          <motion.ul
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
              "bg-popover absolute inset-0 z-50 min-h-screen place-content-center place-items-center gap-4",
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
                  className="text-xl"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-4 @xl:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="hover:text-primary text-sm transition-colors duration-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            size="icon"
            className="z-50 @xl:hidden"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle color theme</span>
          </Button>
        </div>
      </Wrapper>
    </header>
  );
}
