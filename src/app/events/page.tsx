import React from "react";
import Pagination from "./Pagination";
import EventsCarousel from "./EventsCarousel";
import { BackendClient } from "@/lib/backend-client";

export default async function Page() {
  const backendClient = new BackendClient();
  const response = await backendClient.getEventHighlight();

  const items = response ?? [];

  return (
    <div className="px-[20px] tablet:px-0 desktop:px-0">
      <div className="flex flex-col mb-[64px] desktop:flex-row desktop:border-b-2 desktop:mb-0">
        <h1 className="py-[24px] text-[46px] font-bold tablet:w-[100%] tablet:pl-[80px] desktop:w-[33.33%] desktop:pl-[80px] desktop:pr-[60px] desktop:pb-0 desktop:pt-[64px] tablet:text-[72px] desktop:text-[72px]">
          Events & <br /> Updated
        </h1>
        <EventsCarousel items={items} />
      </div>

      <Pagination />
    </div>
  );
}
