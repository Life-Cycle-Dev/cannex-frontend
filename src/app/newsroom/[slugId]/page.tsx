/* eslint-disable @next/next/no-img-element */
import { BackendClient } from "@/lib/backend-client";
import { formatDate } from "@/utils/format";
import React from "react";

type Params = Promise<{ slugId: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slugId } = await params;

  const client = new BackendClient();
  const response = await client.getNewsRoomsBySlagId(slugId);

  if (response.data.length === 0) {
    return <div>not found</div>;
  }

  const data = response.data[0];

  return (
    <div>
      <div className="flex h-[475px]">
        <div className="w-[56%] pt-[96px] pl-[80px]">
          <div className="w-fit text-white bg-black p-[2px_8px]">Newsroom</div>
          <div className="text-[52px] w-[83%] font-bold line-clamp-2">
            {data.title}
          </div>
          <div className="text-gray-400">{formatDate(data.createdAt)}</div>
        </div>
        <img
          className="w-[44%] border-l-2 object-cover"
          src={data.image.url}
          alt={data.image.name}
        />
      </div>
    </div>
  );
}
