import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import Header from "@/components/header";

const dosis = Quicksand();

export const metadata: Metadata = {
  title: "Sourdough Calculator",
  description: "Simple Sourdough Calculator using NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${dosis.className} antialiased `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
