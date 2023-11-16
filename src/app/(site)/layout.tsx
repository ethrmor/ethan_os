import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "../globals.css";
import { siteConfig } from "@/config/site";

import { Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="bg-[url('/bg-element-light.svg')] bg-no-repeat dark:bg-[url('/bg-element.svg')] md:bg-cover">
            <div className="mx-auto w-full max-w-5xl flex-1 px-[3vw] py-8">
              {children}
            </div>
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
