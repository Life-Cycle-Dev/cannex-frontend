/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import RightUpIcon from "@/components/icons/RightUpIcon";
import Link from "next/link";
import { Event } from "@/types/event";
import { formatDate } from "@/utils/format";
import { useHelperContext } from "../providers/helper-provider";
import { PaginationCard } from "@/app/events/Pagination";
import ScrollReveal from "../animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

export const Card = ({
  datas,
  data,
  index,
}: {
  datas: Event[];
  data: Event;
  index: number;
}) => {
  return (
    <Link
      href={`/events/${data.slug}`}
      className={`group overflow-hidden w-full cursor-pointer border-0 tablet:border-r-2 
          ${index % 3 === 0 && "tablet:border-l-2"}
          ${index < 3 && datas.length > 3 && "tablet:border-b-2"}
        `}
    >
      <div className="w-full h-[340px] tablet:h-[420px] overflow-hidden">
        <img
          src={data?.image?.url ?? ""}
          className="w-full h-full object-cover border-b-2 "
          alt={data.title ?? ""}
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

export default function EventsAndUpdated() {
  const [datas, setDatas] = useState<Event[]>([]);
  const { backendClient } = useHelperContext()();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await backendClient.getEventPagination(
      {
        "pagination[pageSize]": 2,
        "pagination[page]": 1,
        "pagination[withCount]": "true",
      },
      "publishedAt:desc"
    );

    setDatas(response.data);
  };

  return (
    <ScrollReveal className="grid grid-cols-1 tablet:grid-cols-3 mx-[20px] tablet:mx-0">
      {(show) => (
        <>
          <div className="flex flex-row justify-between tablet:justify-stretch border-t-2 tablet:border-t-0 tablet:flex-col pt-[96px] pb-[32px] tablet:border-r-2 gap-4 tablet:p-[67px_80px]">
            <div
              className={`mb-4 ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0"
              )}`}
            >
              <div className="tablet:mb-4 w-fit text-white bg-black p-[2px_8px] h-fit">
                Events & Updated
              </div>
              <h2 className="mt-[16px] tablet:mt-0 text-[52px] leading-[110%] font-bold">
                Happening
              </h2>
            </div>

            <div
              className={`flex justify-start tablet:items-end ${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-y-20",
                "opacity-100 translate-y-0"
              )}`}
            >
              <div
                onClick={() => {
                  window.location.href = "/events";
                }}
                className="w-12 h-12 flex justify-center items-center tablet:hidden"
              >
                <RightUpIcon className="w-[32px] h-[32px]" />
              </div>
              <Button
                href="/event"
                text="Read all events & updated"
                type="secondaryBlack"
                className="w-full tablet:w-fit !hidden tablet:!flex"
                suffixIcon={<RightUpIcon />}
              />
            </div>
          </div>
          {datas.map((data, index) => (
            <PaginationCard
              datas={datas}
              key={data.id}
              data={data}
              index={index}
              isDateAndDescriptionShow={false}
              style={{
                transitionDelay: `${500 * index + 500}ms`,
                animationDelay: `${500 * index + 500}ms`,
              }}
              className={`${getClassNameAnimation(
                show,
                1000,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0"
              )}}`}
              imgRadio="aspect-square tablet:aspect-4/3"
            />
          ))}
        </>
      )}
    </ScrollReveal>
  );
}
