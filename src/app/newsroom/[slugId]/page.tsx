import { BackendClient } from "@/lib/backend-client";
import React from "react";

interface PageProps {
  params: { slugId: string };
}

export default async function Page({ params }: PageProps) {
  const { slugId } = await params;

  const client = new BackendClient();
  const response = await client.getNewsRoomsBySlagId(slugId);

  if (response.data.length === 0) {
    return <div>not found</div>;
  }

  return <div>{JSON.stringify(response)}</div>;
}
