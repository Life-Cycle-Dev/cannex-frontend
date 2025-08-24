import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/Footer";
import { HelperProvider } from "@/components/providers/helper-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLdOrg = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "cannex",
  url: process.env.NEXT_PUBLIC_FRONTEND_PATH,
  logo: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}/asset/iconic.webp`,
};

const jsonLdSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "cannex",
  url: process.env.NEXT_PUBLIC_FRONTEND_PATH,
  potentialAction: {
    "@type": "SearchAction",
    target: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}`,
    "query-input": "required name=search_term_string",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense fallback={<div></div>}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden`}
        >
          <LoadingProvider>
            <HelperProvider>
              <NavBar />
              {children}
            </HelperProvider>
            <Footer />
          </LoadingProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSite) }}
          />
        </body>
      </html>
    </Suspense>
  );
}
