import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/Footer";
import { HelperProvider } from "@/components/providers/helper-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cannex",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <LoadingProvider>
          <HelperProvider>
            <NavBar />
            {children}
          </HelperProvider>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
