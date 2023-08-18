import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vados Jenkins",
  icons: {
    icon: "/favicon.ico",
  },
  // description: "Generated by create vados next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="relative">
        <Providers>
          <main className=" relative mx-auto grid max-w-2xl place-items-center content-start gap-8"> {children}</main>
        </Providers>
        <div className="bg absolute inset-0 z-0 bg-[url(https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png)] bg-[length:161px] bg-repeat opacity-[0.02]" />
      </body>
    </html>
  );
}
