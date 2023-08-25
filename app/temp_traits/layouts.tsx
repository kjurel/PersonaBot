import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Persona Bot - Personality",
  description: "Chat with different Personality Types",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarHeight = 4;
  const availableHeight = `calc(100vh - ${navbarHeight}rem)`;
  return { children };
}
