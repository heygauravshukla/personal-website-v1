import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/InterVariable.woff2", weight: "100 900", style: "normal" },
    {
      path: "./fonts/InterVariable-Italic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
});

const plexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-plex-mono",
});

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
      <html
        lang="en"
        suppressHydrationWarning
        className={`${inter.variable} ${plexMono.variable} antialiased`}
      >
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
