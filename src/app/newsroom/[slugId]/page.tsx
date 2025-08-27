/* eslint-disable @typescript-eslint/no-explicit-any */
import { cache } from "react";
import Markdown from "@/components/Markdown";
import { BackendClient } from "@/lib/backend-client";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";
import { PaginationCard } from "../Pagination";

interface PageProps {
  params: any;
  searchParams?: any;
}

const getNewsRoom = cache(async (slugId: string, preview: boolean) => {
  const client = new BackendClient();
  const response = await client.getNewsRoomsBySlugId(
    slugId,
    preview ? "draft" : "published",
  );
  return response.data[0] ?? null;
});

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const preview = (await searchParams?.preview) === "true";
  const data = await getNewsRoom(params.slugId, preview);

  if (!data) return {};

  return {
    title: data.seo?.metaTitle ?? data.title,
    description: data.seo?.metaDescription ?? "",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}/newsroom/${params.slugId}`,
    },
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_PATH}/newsroom/${params.slugId}`,
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
      publishedTime: data.publishedAt ?? new Date().toISOString(),
      modifiedTime: data.updatedAt ?? new Date().toISOString(),
    },
    keywords: data.seo?.keywords ?? [],
  };
}

export default async function Page({ params, searchParams }: PageProps) {
  const client = new BackendClient();
  const preview = (await searchParams?.preview) === "true";
  const data = await getNewsRoom(params.slugId, preview);
  const randomNewsroom = await client.getRandomNewsrooms();

  if (!data) return notFound();

  return (
    <div className="w-full">
      <Markdown
        value={data.content}
        data={data}
        imageUrl={data?.image?.url ?? ""}
        page="newsroom"
      />

      <div className="border-t-2 mx-[20px] tablet:mx-0">
        <div className="text-[52px] py-[64px] tablet:p-[64px_80px] font-bold">
          Our Newsroom
        </div>
        <div className="tablet:px-[80px]">
          <div className="grid grid-cols-1 tablet:grid-cols-3 tablet:border-l-2">
            {randomNewsroom.map((data, index) => (
              <PaginationCard
                datas={randomNewsroom}
                className="tablet:border-t-2"
                key={data.id}
                data={data}
                index={index}
                isContentPage
                skipBorderBottom
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
