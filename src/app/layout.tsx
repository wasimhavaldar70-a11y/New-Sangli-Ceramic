import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PublicLayoutWrapper from "@/components/layout/PublicLayoutWrapper";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sangali Ceramica",
    default: "Sangali Ceramica - Premium Tiles & Sanitaryware",
  },
  description: "Transform your home with elegant tiles and sanitaryware collections at Sangali Ceramica, Sangli's premium tiles showroom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} antialiased min-h-screen flex flex-col`}>
        <PublicLayoutWrapper>
          {children}
        </PublicLayoutWrapper>
      </body>
    </html>
  );
}
