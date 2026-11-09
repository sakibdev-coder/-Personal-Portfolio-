import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "SAKIB.DEV | CSE Student & Web Developer",
  description: "The personal portfolio of Sakib Al Hasan — a CSE student and web developer in Dhaka, Bangladesh.",
  openGraph: {
    title: "SAKIB.DEV | CSE Student & Web Developer",
    description: "Building thoughtful digital experiences with code and creativity.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.variable}>{children}</body></html>;
}
