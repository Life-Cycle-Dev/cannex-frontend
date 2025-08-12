"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import { BackendClient } from "@/lib/backend-client";
import { NewsRooms } from "@/types/new-rooms";
import RightUpIcon from "./icons/RightUpIcon";
import { formatDate } from "@/utils/format";

export default function Pagination() {
  const [searchText, setSearchText] = useState<string>("");
  const [datas, setDatas] = useState<NewsRooms[]>([]);

  useEffect(() => {
    fetchData();
  }, [searchText]);

  const fetchData = async () => {
    const client = new BackendClient();
    const response = await client.getNewsRoomsPagination(
      {
        "pagination[withCount]": "true",
        "pagination[pageSize]": 6,
        "pagination[page]": 1,
      },
      searchText,
    );
    setDatas(response.data);
  };

  const PaginationCard = ({
    data,
    index,
  }: {
    data: NewsRooms;
    index: number;
  }) => {
    return (
      <div className={`border-2 ${index % 3 !== 0 && "border-l-0"} ${index > 2 && "border-b-0"} `}>
        <img
          src={data.image.url}
          className="w-full h-[335px] tablet:h-[426px] object-cover"
          alt={data.image.name}
        />
        <div className="flex gap-4 justify-end pt-4 pr-4">
          <RightUpIcon />
        </div>
        <div className="h-fit pb-6 tablet:h-[232px] tablet:pb-0 tablet:px-10">
          <div className="text-[32px] font-bold line-clamp-2 break-words">
            {data.title}
          </div>
          <div className="text-gray-400 text-[16px] hidden tablet:block">
            {formatDate(data.createdAt)}
          </div>
          <div className="text-[16px] line-clamp-3 hidden tablet:block">
            {data.description ?? ""}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="tablet:p-[80px] flex justify-between">
        <SearchBox
          placeholder="Search Newsroom"
          value={searchText}
          onChange={setSearchText}
        />
        <Filter
          items={[
            { label: "Newest", value: "newest" },
            { label: "Popular", value: "popular" },
          ]}
          value={{ label: "Popular", value: "popular" }}
        />
      </div>

      <div className="grid grid-cols-1 tablet:px-[80px] tablet:grid-cols-3">
        {datas.map((data, index) => {
          return <PaginationCard key={data.id} data={data} index={index} />;
        })}
      </div>
      <div className="flex justify-between border-y-2">
        <div className="min-w-[82px] h-[112px] border-r-2 hidden tablet:block"></div>
        <div className="flex justify-between">

        </div>
        <div className="min-w-[82px] h-[112px] border-l-2 hidden tablet:block"></div>
      </div>
    </div>
  );
}
