/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { NewsRooms } from "@/types/new-rooms";
import { useHelperContext } from "../providers/helper-provider";
import Link from "next/link";
import { formatDate } from "@/utils/format";

export const Card = ({
  datas,
  data,
  index,
}: {
  datas: NewsRooms[];
  data: NewsRooms;
  index: number;
}) => {
  return (
    <Link
      href={`/newsroom/${data.slug}`}
      className={`group overflow-hidden mx-[20px] tablet:mx-0 cursor-pointer border-0 tablet:border-r-2 
          ${index % 3 === 0 && "tablet:border-l-2"}
          ${index < 3 && datas.length > 3 && "tablet:border-b-2"}
        `}
    >
      <div className="w-full overflow-hidden aspect-[4/3]">
        <img
          src={data?.image?.url ?? ""}
          className="w-full h-full object-cover border-y-2"
          alt={data?.title ?? ""}
        />
      </div>

      <div className="relative py-[24px] tablet:py-0 overflow-hidden">
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />

        <div className="relative z-20 tablet:pb-6 flex items-center justify-center tablet:flex-col tablet:justify-start tablet:items-start">
          <div className="ml-auto w-7 h-7 overflow-hidden mb-2 relative hidden tablet:block">
            <RightUpIcon className="absolute text-black w-full h-full transition-transform duration-500 ease-out group-hover:-translate-y-5 group-hover:translate-x-5" />
            <RightUpIcon className="absolute text-crystalGreen w-full h-full translate-y-5 -translate-x-5 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0" />
          </div>

          <div className="text-[32px] tablet:px-[24px] font-bold line-clamp-2 break-words group-hover:text-crystalGreen transition-colors duration-500">
            {data.title}
          </div>
          <div className="text-gray-400 tablet:px-[24px] text-[16px] hidden tablet:block">
            {formatDate(data.publishedAt)}
          </div>
          <div className="text-[16px] tablet:px-[24px] line-clamp-3 group-hover:text-white transition-colors duration-500 hidden tablet:block">
            {data.description ?? ""}
          </div>

          <div className="ml-auto w-7 h-7 flex items-center justify-center relative tablet:hidden">
            <RightUpIcon className="absolute text-black w-full h-full group-hover:text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
};

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
            suffixIcon={<RightUpIcon className="w-4 h-4" />}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 tablet:grid-cols-4">
        {datas.map((data, index) => (
          <Card datas={datas} key={data.id} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}
