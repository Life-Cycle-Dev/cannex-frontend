/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { NewsRooms } from "@/types/new-rooms";
import { useHelperContext } from "../providers/helper-provider";
import { PaginationCard } from "@/app/newsroom/Pagination";

export default function Newsroom() {
  const [datas, setDatas] = useState<NewsRooms[]>([]);
  const { backendClient } = useHelperContext()();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await backendClient.getNewsRoomsPagination(
      {
        "pagination[pageSize]": 4,
        "pagination[page]": 1,
        "pagination[withCount]": "true",
      },
      "publishedAt:desc",
    );

    setDatas(response.data);
  };

  return (
    <div className="border-y-2">
      <div className="flex justify-between mx-[20px] px-[64x] py-[32px] tablet:mx-0 tablet:p-[80px_39px]">
        <div className="flex flex-col gap-4">
          <div className="w-fit text-white bg-black p-[2px_8px] h-fit">
            Newsroom
          </div>
          <h2 className="text-[52px] leading-[110%] font-bold">
            Thought <br /> Leadership
          </h2>
        </div>
        <div className="flex justify-end tablet:items-end">
          <div className="w-12 h-12 flex justify-center items-center tablet:hidden">
            <RightUpIcon />
          </div>
          <Button
            href="/newsroom"
            text="Read all news"
            type="secondaryBlack"
            className="w-full tablet:w-fit !hidden tablet:!flex"
            suffixIcon={<RightUpIcon />}
          />
        </div>
      </div>
      <div className="mx-[20px] tablet:mx-0 grid grid-cols-1 tablet:grid-cols-4 border-t-2">
        {datas.map((data, index) => (
          <PaginationCard
            index={index}
            key={data.id}
            data={data}
            datas={datas}
            isContentPage
            skipBorderBottom
          />
        ))}
      </div>
    </div>
  );
}
