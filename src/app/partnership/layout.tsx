import { Metadata } from "next";
import { BackendClient } from "@/lib/backend-client";

export async function generateMetadata(): Promise<Metadata | void> {
  const client = new BackendClient();
  const page:
    | "homepage"
    | "aboutUsPage"
    | "productPage"
    | "researchAndDevelopmentPage"
    | "partnershipPage"
    | "contactUsAndInquiryPage"
    | "newsroomPage"
    | "eventPage"
    | "none" = "partnershipPage";

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
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
    },
    keywords: data?.keywords ?? [],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
