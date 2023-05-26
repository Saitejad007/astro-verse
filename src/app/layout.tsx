"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/global-redux/providers";
import { store } from "@/global-redux/store";
import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "NASA - Explore, Everyday",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="title" content={metadata.title} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div
            className="header finisher-header"
            style={{ width: "100%", height: "300px" }}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
