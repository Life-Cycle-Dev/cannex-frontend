/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import Markdown from "@/components/Markdown";
import ShareButton from "@/components/ShareButton";
import { BackendClient } from "@/lib/backend-client";
import { formatDate } from "@/utils/format";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { cache } from "react";

const getEvent = cache(async (slugId: string, preview: boolean) => {
  const client = new BackendClient();
  const response = await client.getEventBySlugId(
    slugId,
    preview ? "draft" : "published",
  );

  return response.data[0] ?? null;
});

interface PageProps {
  params: any;
  searchParams?: any;
}

export async function generateMetadata({
  params,
  searchParams,
}: PageProps): Promise<Metadata> {
  const preview = (await searchParams?.preview) === "true";
  const data = await getEvent(params.slugId, preview);

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
  const preview = (await searchParams?.preview) === "true";
  const data = await getEvent(params.slugId, preview);

  if (!data) return notFound();

  return (
    <div className="w-full">
      <div className="flex flex-col tablet:flex-row tablet:border-b-[2px]">
        <div className="p-[32px_20px_40px_20px] tablet:p-[96px_64px_40px_80px] w-full  flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link
              href="/events"
              className="w-fit text-white bg-black p-[2px_8px]"
            >
              Events & Updated
            </Link>
            <h1 className="text-[46px] font-bold break-words leading-[110%]">
              {data.title}
            </h1>
          </div>
          <div className="w-full h-full flex tablet:flex-col items-center tablet:items-start justify-between">
            <div className="text-gray-400">{formatDate(data.createdAt)}</div>
            <ShareButton
              imageUrl={data?.image?.url ?? ""}
              title={data.title}
              url={`/events/${params.slugId}`}
            />
          </div>
        </div>

        <div className="w-full tablet:self-start aspect-[4/3] border-y-2 tablet:border-y-0 tablet:border-l-2">
          <img
            className="w-full h-full object-cover"
            src={data?.image?.url ?? ""}
            alt={data.title ?? ""}
          />
        </div>
      </div>
      <div className="w-full p-[48px_20px_137px_20px] tablet:p-[64px_0px_128px_0px] tablet:mx-auto tablet:max-w-[842px]">
        <Markdown value={data.content} />
      </div>
    </div>
  );
}
