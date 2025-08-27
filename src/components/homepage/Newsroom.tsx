/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { NewsRooms } from "@/types/new-rooms";
import { useHelperContext } from "../providers/helper-provider";
import { PaginationCard } from "@/app/newsroom/Pagination";
import ScrollReveal from "../animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

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
    <ScrollReveal className="tablet:border-y-2 border-t-2">
      {(show) => (
        <>
          <div className="flex justify-between mx-[20px] px-[64x] py-[64px_32px] tablet:mx-0 tablet:p-[80px_39px]">
            <div
              className={`flex flex-col gap-4 ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0",
              )}`}
            >
              <div className="w-fit text-white bg-black p-[2px_8px] h-fit">
                Newsroom
              </div>
              <h2 className="mt-[16px] tablet:mt-0 text-[52px] leading-[110%] font-bold">
                Thought <br /> Leadership
              </h2>
            </div>

            <div
              className={`flex justify-end tablet:items-end ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0",
              )}`}
            >
              <div
                onClick={() => {
                  window.location.href = "/newsroom";
                }}
                className="w-8 h-8 flex justify-center items-center tablet:hidden"
              >
                <RightUpIcon className="w-full h-full" />
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

          <div className="mx-[20px] tablet:mx-0 grid grid-cols-1 tablet:grid-cols-4 tablet:border-t-2">
            {datas.map((data, index) => (
              <PaginationCard
                index={index}
                key={data.id}
                data={data}
                datas={datas}
                isDateAndDescriptionShow={false}
                style={{
                  transitionDelay: `${300 * index + 300}ms`,
                  animationDelay: `${300 * index + 300}ms`,
                }}
                className={`${getClassNameAnimation(
                  show,
                  1000,
                  "opacity-0 -translate-x-20",
                  "opacity-100 translate-x-0",
                )}}`}
                isContentPage
                skipBorderBottom
              />
            ))}
          </div>
        </>
      )}
    </ScrollReveal>
  );
}
