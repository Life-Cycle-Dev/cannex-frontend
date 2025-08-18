import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/Footer";
import { HelperProvider } from "@/components/providers/helper-provider";
import { LoadingProvider } from "@/components/providers/loading-provider";
import { BackendClient } from "@/lib/backend-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface Props {
  params: { slug?: string[] };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | void> {
  const client = new BackendClient();
  const path = "/" + (params?.slug?.join("/") ?? "");
  let page:
    | "homepage"
    | "aboutUsPage"
    | "productPage"
    | "researchAndDevelopmentPage"
    | "partnershipPage"
    | "contactUsAndInquiryPage"
    | "newsroomPage"
    | "eventPage"
    | "none" = "none";

  if (path === "/") {
    page = "homepage";
  } else if (path === "/about-us") {
    page = "aboutUsPage";
  } else if (path === "/products") {
    page = "productPage";
  } else if (path === "/research-and-development") {
    page = "researchAndDevelopmentPage";
  } else if (path === "/newsroom") {
    page = "newsroomPage";
  } else if (path === "/events") {
    page = "eventPage";
  } else if (path === "/partnership") {
    page = "partnershipPage";
  } else if (path === "/contact") {
    page = "contactUsAndInquiryPage";
  } else {
    return;
  }

  const data = await client.getSeoFromPage(page);

  return {
    title: data?.metaTitle ?? "Cannex",
    description: data?.metaDescription ?? "",
    alternates: {
      canonical: data?.canonicalURL ?? process.env.NEXT_PUBLIC_FRONTEND_PATH,
    },
    openGraph: {
      url: data?.canonicalURL ?? process.env.NEXT_PUBLIC_FRONTEND_PATH,
      title: data?.metaTitle ?? "",
      description: data?.metaDescription ?? "",
      images: [
        {
          url: data?.metaImage?.url ?? "",
          width: data?.metaImage?.width ?? 1200,
          height: data?.metaImage?.height ?? 630,
          alt: data?.metaImage?.alternativeText ?? "",
        },
      ],
      siteName: "Cannex",
    },
    keywords: data?.keywords ?? [],
  };
}

export default async function RootLayout({
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
