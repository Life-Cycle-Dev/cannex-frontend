/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Markdown from "@/components/Markdown";
import Seo from "@/components/Seo";
import ShareButton from "@/components/ShareButton";
import { BackendClient } from "@/lib/backend-client";
import { formatDate } from "@/utils/format";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: any;
  searchParams?: any;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const { slugId } = params;
  const preview = searchParams?.preview === "true";
  const client = new BackendClient();

  const response = await client.getNewsRoomsBySlugId(
    slugId,
    preview ? "draft" : "published",
  );

  if (!response.data.length) {
    return {};
  }

  const data = response.data[0];

  return {
    title: data.seo?.metaTitle ?? data.title,
    description: data.seo?.metaDescription ?? "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}/newsroom/${slugId}`,
    },
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}/newsroom/${slugId}`,
      title: data.seo?.metaTitle ?? data.title,
      description: data.seo?.metaDescription ?? "",
      images: [
        {
          url: data.seo?.metaImage?.url ?? data.image?.url,
          width: data.seo?.metaImage?.width ?? 1200,
          height: data.seo?.metaImage?.height ?? 630,
          alt: data.seo?.metaImage?.alternativeText ?? data.title,
        },
      ],
      siteName: "cannex",
    },
    keywords: data.seo?.keywords ?? [],
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slugId } = await params;
  const preview = (await searchParams?.preview) === "true";
  const client = new BackendClient();

  const response = await client.getEventBySlugId(
    slugId,
    preview ? "draft" : "published",
  );

  if (response.data.length === 0) {
    return notFound();
  }

  const data = response.data[0];

  return (
    <>
      <Seo
        title={data.seo?.metaTitle ?? ""}
        description={data.seo?.metaDescription ?? ""}
        openGraph={{
          url: process.env.NEXT_PUBLIC_FRONTEND_PATH,
          title: data.seo?.metaTitle ?? "",
          description: data.seo?.metaDescription ?? "",
          images: [
            {
              url: data.seo?.metaImage?.url ?? "",
              width: data.seo?.metaImage?.width,
              height: data.seo?.metaImage?.height,
              alt: data.seo?.metaImage?.alternativeText ?? "",
            },
          ],
          site_name: "cannex",
        }}
      />
      <div className="w-full">
        <div className="flex flex-col tablet:flex-row tablet:border-b-[2px]">
          <div className="p-[32px_20px_40px_20px] tablet:p-[96px_64px_40px_80px] w-full flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-fit text-white bg-black p-[2px_8px]">
                Events & Updated
              </div>
              <div className="text-[46px] font-bold break-words leading-[110%]">
                {data.title}
              </div>
            </div>
            <div className="w-full h-full flex tablet:flex-col items-center tablet:items-start justify-between">
              <div className="text-gray-400">{formatDate(data.createdAt)}</div>
              <ShareButton
                imageUrl={data.image.url}
                title={data.title}
                url={`/events/${slugId}`}
              />
            </div>
          </div>

          <div className="w-full h-[280px] tablet:h-[475px] border-[2px_0px_2px_0px] tablet:border-[0px_0px_0px_2px]">
            <img
              className="w-full h-full object-cover"
              src={data.image.url}
              alt={data.image.name}
            />
          </div>
        </div>
        <div className="w-full p-[48px_20px_137px_20px] tablet:p-[64px_0px_128px_0px] tablet:mx-auto tablet:max-w-[842px]">
          <Markdown value={data.content} />
        </div>
      </div>
    </>
  );
}
