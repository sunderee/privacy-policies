import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Privacy Policies | Peter Aleksander Bizjak s.p.",
  description: "Collection of privacy policies and other legalese for projects developed under Peter Aleksander Bizjak s.p.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}