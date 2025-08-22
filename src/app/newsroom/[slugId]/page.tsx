/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { cache } from "react";
import Markdown from "@/components/Markdown";
import ShareButton from "@/components/ShareButton";
import { BackendClient } from "@/lib/backend-client";
import { formatDate } from "@/utils/format";
import { notFound } from "next/navigation";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PaginationCard } from "../Pagination";
import { StickyBar } from "@/components/StickyBar";

interface PageProps {
  params: any;
  searchParams?: any;
}

const getNewsRoom = cache(async (slugId: string, preview: boolean) => {
  const client = new BackendClient();
  const response = await client.getNewsRoomsBySlugId(
    slugId,
    preview ? "draft" : "published"
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
      <StickyBar
        title={data.title}
        url={`/newsroom/${params.slugId}`}
        imageUrl={data?.image?.url ?? ""}
      />

      <div className="flex flex-col tablet:flex-row tablet:items-stretch tablet:border-b-[2px]">
        <div
          className="w-full tablet:w-1/2 flex flex-col justify-center gap-6 tablet:gap-8
                  p-[32px_20px_40px_20px] tablet:p-[0px_64px_0px_80px]"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/newsroom"
              className="w-fit text-white bg-black p-[2px_8px]"
            >
              Newsroom
            </Link>
            <h2 className="text-[52px] font-bold break-words leading-[110%]">
              {data.title}
            </h2>
            <div className="text-gray-400">{formatDate(data.publishedAt)}</div>
          </div>

          <div className="w-full flex tablet:flex-col items-center tablet:items-start justify-between">
            <ShareButton
              imageUrl={data?.image?.url ?? ""}
              title={data.title}
              url={`/newsroom/${params.slugId}`}
            />
          </div>
        </div>

        <div className="w-full tablet:w-1/2 tablet:self-stretch aspect-[4/3] border-y-2 tablet:border-y-0 tablet:border-l-2">
          <img
            className="w-full h-full object-cover"
            src={data?.image?.url ?? ""}
            alt={data.title ?? ""}
          />
        </div>
      </div>

      <div className="w-full p-[48px_20px_137px_20px] tablet:p-[64px_0px_128px_0px] tablet:mx-auto tablet:mb-[137px] tablet:max-w-[842px]">
        <Markdown value={data.content} />
      </div>

      <div className="border-t-2 mx-[20px] tablet:mx-0">
        <div className="text-[52px] py-[64px] tablet:p-[64px_80px] font-bold">
          Our Newsroom
        </div>
        <div className="grid grid-cols-1 tablet:px-[80px] tablet:grid-cols-3">
          {randomNewsroom.map((data, index) => (
            <PaginationCard
              datas={randomNewsroom}
              key={data.id}
              data={data}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
