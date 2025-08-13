/* eslint-disable @next/next/no-img-element */
import { BackendClient } from "@/lib/backend-client";
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
      <div className="flex">
        <div className=""></div>
        <img src={data.image.url} alt={data.image.name} />
      </div>
    </div>
  );
}
