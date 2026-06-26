import type { Metadata } from "next";
import { Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import BackgroundEffects from "./components/ui/BackgroundEffects";
import CustomCursor from "./components/ui/CustomCursor";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deepak | AI-First Software Engineer",
  description: "AI-First Software Engineer specializing in Next.js, React, Node.js, TypeScript, Generative AI, Gemini API, Prompt Engineering, Python, and modern full-stack application development. Building intelligent, scalable, production-ready web applications.",
  keywords: "AI First Developer, Vibe Coder, Full Stack Developer, Next.js Developer, Node.js Developer, TypeScript Developer, React Developer, Generative AI Developer, Prompt Engineer, Gemini API Developer, JavaScript Engineer, Software Engineer, Modern Web Developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${spaceMono.variable} antialiased bg-[#050816] text-[#f8fafc] overflow-x-hidden`}
      >
        <BackgroundEffects />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 pt-16">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
