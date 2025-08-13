/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import ShareIcon from "@/components/icons/ShareIcon";
import { BackendClient } from "@/lib/backend-client";
import { formatDate } from "@/utils/format";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: { slugId: string };
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slugId } = params;
  const preview = searchParams?.preview as string | undefined;
  const client = new BackendClient();
  const response = await client.getNewsRoomsBySlugId(
    slugId,
    preview === "true" ? "draft" : "published",
  );

  if (response.data.length === 0) {
    return notFound();
  }

  const data = response.data[0];

  return (
    <div className="w-full">
      <div className="flex flex-col tablet:flex-row tablet:border-b-[2px]">
        <div className="p-[32px_20px_40px_20px] tablet:p-[96px_64px_40px_80px] w-full flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="w-fit text-white bg-black p-[2px_8px]">
              Newsroom
            </div>
            <div className="text-[46px] font-bold break-words leading-[110%]">
              {data.title}
            </div>
          </div>
          <div className="w-full h-full flex tablet:flex-col items-center tablet:items-start justify-between">
            <div className="text-gray-400">{formatDate(data.createdAt)}</div>
            <Button
              text="Share"
              type="secondaryBlack"
              width="w-fit"
              suffixIcon={<ShareIcon />}
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
        testetste Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
        officia beatae aperiam non quia. Exercitationem deserunt eligendi, quo
        ullam temporibus, reiciendis voluptate quibusdam molestias assumenda
        aliquam corporis libero. Nesciunt, minus!
      </div>
    </div>
  );
}
