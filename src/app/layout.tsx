import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";

const dosis = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everything Sourdough",
  description: "Simple Sourdough website using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 ${dosis.className} antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
