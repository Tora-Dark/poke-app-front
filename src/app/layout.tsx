import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import { NextUIProvider } from "@nextui-org/system";
import { AxiomWebVitals } from "next-axiom";
import "./globals.css";
import NextAuthProvider from "@/app/context/NextAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <NextAuthProvider>
          <NextUIProvider>
            <AxiomWebVitals />
            {children}
          </NextUIProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
