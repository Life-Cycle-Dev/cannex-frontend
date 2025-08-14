import React from "react";
import Pagination from "./Pagination";
import EventsCarousel from "./EventsCarousel";
import { BackendClient } from "@/lib/backend-client";

export default async function Page() {
  const backendClient = new BackendClient();
  const response = await backendClient.getEventPagination({
    "pagination[withCount]": "true",
    "pagination[pageSize]": 3,
    "pagination[page]": 1,
  });

  const items = response?.data ?? [];

  return (
    <div className="px-[20px] tablet:px-0">
      <div className="flex flex-col border-b-0 tablet:flex-row tablet:border-b-2 mb-[64px] tablet:mb-0">
        <div className="tablet:w-[40%] h-fit border-x-2 pl-[5%] py-[32px] tablet:pb-0 tablet:pt-[60px] text-[40px] font-bold tablet:text-[68px] tablet:border-x-0 tablet:h-[450px]">
          Events & Updated
        </div>
        <EventsCarousel items={items} />
      </div>

      <Pagination />
    </div>
  );
}
