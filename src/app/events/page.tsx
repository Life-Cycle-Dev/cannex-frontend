import React from "react";
import Pagination from "./Pagination";
import EventsCarousel from "./EventsCarousel";
import { BackendClient } from "@/lib/backend-client";

export default async function Page() {
  const backendClient = new BackendClient();
  const response = await backendClient.getEventHighlight();

  const items = response ?? [];

  return (
    <div className="px-[20px] tablet:px-0">
      <div className="flex flex-col border-b-0 tablet:flex-row tablet:border-b-2 mb-[64px] tablet:mb-0 max-w-[100vw] overflow-scroll">
        <h1 className="h-fit border-x-2 pl-[5%] py-[32px] text-[40px] font-bold tablet:w-fit tablet:pb-0 tablet:pt-[60px] tablet:text-[72px] tablet:border-x-0 tablet:h-[450px]">
          Events & Updated
        </h1>
        <EventsCarousel items={items} />
      </div>

      <Pagination />
    </div>
  );
}
