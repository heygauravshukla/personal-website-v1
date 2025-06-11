import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gaurav Shukla - Software engineer, creator, and tech enthusiast",
  description:
    "I’m Gaurav, a software engineer and creator based in India. I do front-end development, build awesome projects and share knowledge through blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning className="antialiased">
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            {children}
            <SiteFooter />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
