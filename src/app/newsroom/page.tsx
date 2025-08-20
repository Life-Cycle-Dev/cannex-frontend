import NewsroomCarousel from "@/app/newsroom/NewsroomCarousel";
import Pagination from "@/app/newsroom/Pagination";
import { BackendClient } from "@/lib/backend-client";
import React from "react";

export default async function Page() {
  const backendClient = new BackendClient();
  const response = await backendClient.getNewsroomsHighlight();

  const items = response ?? [];

  return (
    <>
      <div className="px-[20px] tablet:px-0">
        <div className="flex justify-between">
          <div className="min-w-[79px] h-[176px] border-r-2 hidden tablet:block"></div>
          <h1 className="w-full border-l-2 border-r-2 tablet:border-r-0 tablet:border-l-0 font-bold text-[46px] p-[32px_0px_32px_32px] tablet:text-7xl tablet:p-[64px_0px_32px_40px]">
            Newsroom
          </h1>
          <div className="min-w-[79px] h-[176px] border-l-2 hidden tablet: tablet:block"></div>
        </div>
      </div>

      <div className="border-t-2" />
      <div className="px-[20px] tablet:px-0 min-h-[calc(100vh-200px)] max-h-[calc(100vh-200px)] tablet:min-h-[calc(100vh-250px)] tablet:max-h-[calc(100vh-250px)] desktop:min-h-[calc(100vh-311px)] desktop:max-h-[calc(100vh-311px)]">
        <div className="h-full mb-[64px] tablet:mb-0">
          <NewsroomCarousel items={items} />
        </div>
      </div>
      <Pagination />

    </>
  );
}
