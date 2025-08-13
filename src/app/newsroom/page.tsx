import NewsroomCarousel from "@/components/NewsroomCarousel";
import Pagination from "@/components/Pagination";
import { BackendClient } from "@/lib/backend-client";
import React from "react";

export default async function Page() {
  const backendClient = new BackendClient();
  const response = await backendClient.getNewsRoomsPagination({
    "pagination[withCount]": "true",
    "pagination[pageSize]": 3,
    "pagination[page]": 1,
  });

  const items = response?.data ?? [];

  return (
    <div className="px-[20px] tablet:px-0">
      <div className="flex justify-between">
        <div className="min-w-[79px] h-[176px] border-r-2 hidden tablet:block"></div>
        <div className="w-full border-l-2 border-r-2 tablet:border-r-0 tablet:border-l-0 font-bold text-4xl p-[32px_0px_32px_32px] tablet:text-7xl tablet:p-[64px_0px_32px_40px]">
          Newsroom
        </div>
        <div className="min-w-[79px] h-[176px] border-l-2 hidden tablet: tablet:block"></div>
      </div>

      <div className="border-t-2" />
      <div className="block min-h-[315px] mb-[64px] tablet:mb-0 tablet:min-h-fit">
        <NewsroomCarousel items={items} />
      </div>

      <Pagination />
    </div>
  );
}
