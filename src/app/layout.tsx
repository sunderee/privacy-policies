import { ThemeProvider } from "@/components/theme-provider";
import { RootLayoutProps } from "@/types/ui";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privacy Policies",
  description: "Collection of privacy policies for all of our apps and services",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
