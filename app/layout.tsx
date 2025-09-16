import type { Metadata } from "next";
import "./globals.css";

import TopNav from "@/components/navbar/TopNav";

import Providers from "../components/Providers";

export const metadata: Metadata = {
  title: "match-me",
  description: "For Match date web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <TopNav />
          <main className="container mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
