import Filter from "@/components/Filter";
import NewsroomCarousel from "@/components/NewsroomCarousel";
import SearchBox from "@/components/SearchBox";
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
    <div>
      <div className="flex justify-between">
        <div className="min-w-[79px] h-[176px] border-r-2 hidden tablet:block"></div>
        <div className="w-full font-bold text-4xl p-[32px_0px_32px_32px] tablet:text-7xl tablet:p-[64px_0px_32px_40px]">
          Newsroom
        </div>
        <div className="min-w-[79px] h-[176px] border-l-2 hidden tablet:block"></div>
      </div>

      <div className="border-t-2" />
      <div className="block min-h-[315px] tablet:min-h-fit">
        <NewsroomCarousel items={items} />
      </div>

      <div className="p-5 tablet:p-[80px] flex justify-between">
        <SearchBox />
        <Filter items={[{label: "Newest", value: "newest"}, {label: "Popular", value: "popular"}]} />
      </div>
    </div>
  );
}
