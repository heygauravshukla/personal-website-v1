import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
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
        className={`${inter.variable} ${roboto_mono.variable} antialiased`}
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
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
