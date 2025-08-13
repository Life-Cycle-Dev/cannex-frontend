/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import { BackendClient } from "@/lib/backend-client";
import { NewsRooms } from "@/types/new-rooms";
import RightUpIcon from "./icons/RightUpIcon";
import { formatDate } from "@/utils/format";
import ArrowUp from "./icons/ArrowUp";
import Button from "./Button";
import Link from "next/link";

export default function Pagination() {
  const [searchText, setSearchText] = useState<string>("");
  const [datas, setDatas] = useState<NewsRooms[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [searchText]);

  useEffect(() => {
    fetchData(page, searchText);
  }, [page, searchText]);

  const fetchData = async (p: number, q: string) => {
    const client = new BackendClient();
    const response = await client.getNewsRoomsPagination(
      {
        "pagination[withCount]": "true",
        "pagination[pageSize]": 6,
        "pagination[page]": p,
      },
      q,
    );
    setDatas(response.data ?? []);
    const pc =
      (response as any)?.meta?.pagination?.pageCount ??
      Math.max(
        1,
        Math.ceil(((response as any)?.meta?.pagination?.total ?? 0) / 6),
      );
    setPageCount(pc);
  };

  const PaginationCard = ({
    data,
    index,
  }: {
    data: NewsRooms;
    index: number;
  }) => {
    return (
      <Link
        href={`/newsroom/${data.slug}`}
        className={`group overflow-hidden w-full cursor-pointer border-0 tablet:border-r-2 
          ${index % 3 === 0 && "tablet:border-l-2"}
        `}
      >
        <div className="w-full h-[340px] tablet:h-[420px] overflow-hidden">
          <img
            src={data.image.url}
            className="w-full h-full object-cover border-y-2 "
            alt={data.image.name}
          />
        </div>

        <div className="relative pb-6 tablet:h-[270px] tablet:pb-0 overflow-hidden">
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />

          <div className="relative z-20">
            <div className="ml-auto w-7 h-7 overflow-hidden mb-2 relative">
              <RightUpIcon
                className="
                  absolute text-black w-full h-full
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-5 group-hover:translate-x-5
                "
              />
              <RightUpIcon
                className="
                  absolute text-crystalGreen w-full h-full
                  translate-y-5 -translate-x-5
                  transition-transform duration-500 ease-out
                  group-hover:translate-y-0 group-hover:translate-x-0
                "
              />
            </div>

            <div className="text-[32px] px-[40px] font-bold line-clamp-2 break-words group-hover:text-crystalGreen transition-colors duration-500">
              {data.title}
            </div>
            <div className="text-gray-400 px-[40px] text-[16px]">
              {formatDate(data.createdAt)}
            </div>
            <div className="text-[16px] pb-6 px-[40px] line-clamp-3 group-hover:text-white transition-colors duration-500">
              {data.description ?? ""}
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div>
      <div className="flex-col gap-[48px] tablet:flex-row tablet:p-[80px] flex justify-between">
        <div className="">
          <SearchBox
            placeholder="Search Newsroom"
            value={searchText}
            onChange={setSearchText}
          />
        </div>
        <div className="mb-[48px] tablet:mb-0">
          <Filter
            items={[
              { label: "Newest", value: "newest" },
              { label: "Popular", value: "popular" },
            ]}
            value={{ label: "Popular", value: "popular" }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:px-[80px] tablet:grid-cols-3">
        {datas.map((data, index) => (
          <PaginationCard key={data.id} data={data} index={index} />
        ))}
      </div>

      <div className="flex justify-between border-t-2">
        <div className="min-w-[82px] h-[112px] border-r-2 hidden tablet:block"></div>

        <div className="flex items-center gap-2 w-full justify-center py-4 tablet:py-0">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`p-3 ${
              page === 1 ? "opacity-40 cursor-not-allowed" : ""
            }`}
            aria-label="Previous page"
          >
            <ArrowUp className="-rotate-90 h-[20px] w-[20px]" />
          </button>

          <div>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <Button
                key={p}
                text={String(p)}
                type={p === page ? "paginationFocus" : "pagination"}
                onClick={() => setPage(p)}
                heightClass="h-10 max-w-10"
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
            className={`p-3 ${
              page === pageCount ? "opacity-40 cursor-not-allowed" : ""
            }`}
            aria-label="Next page"
          >
            <ArrowUp className="rotate-90 h-[20px] w-[20px]" />
          </button>
        </div>

        <div className="min-w-[82px] h-[112px] border-l-2 hidden tablet:block"></div>
      </div>
    </div>
  );
}
