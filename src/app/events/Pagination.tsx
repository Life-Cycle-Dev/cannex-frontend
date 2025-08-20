/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBox from "../../components/SearchBox";
import Filter from "../../components/Filter";
import RightUpIcon from "../../components/icons/RightUpIcon";
import { formatDate } from "@/utils/format";
import ArrowUp from "../../components/icons/ArrowUp";
import Button from "../../components/Button";
import Link from "next/link";
import { Event } from "@/types/event";
import { SortOption } from "@/types/paginate";
import { useHelperContext } from "@/components/providers/helper-provider";

export const PaginationCard = ({
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
          className="w-full h-full object-cover border-y-2 "
          alt={data.title ?? ""}
        />
      </div>

      <div className="relative pb-6 tablet:h-[270px] tablet:pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10" />

        <div className="relative z-20">
          <div className="ml-auto w-7 h-7 overflow-hidden mb-2 relative">
            <RightUpIcon className="absolute text-black w-full h-full transition-transform duration-500 ease-out group-hover:-translate-y-5 group-hover:translate-x-5" />
            <RightUpIcon className="absolute text-crystalGreen w-full h-full translate-y-5 -translate-x-5 transition-transform duration-500 ease-out group-hover:translate-y-0 group-hover:translate-x-0" />
          </div>

          <div className="text-[32px] tablet:px-[40px] font-bold line-clamp-2 break-words group-hover:text-crystalGreen transition-colors duration-500">
            {data.title}
          </div>
          <div className="text-gray-400 tablet:px-[40px] text-[16px]">
            {formatDate(data.publishedAt)}
          </div>
          <div className="text-[16px] pb-6 tablet:px-[40px] line-clamp-3 group-hover:text-white transition-colors duration-500">
            {data.description ?? ""}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function Pagination() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { backendClient, setLoading } = useHelperContext()();

  const getSortFromQuery = (): { label: string; value: SortOption } => {
    const sort = searchParams.get("sort");
    if (sort === "popular") return { label: "Popular", value: "view:desc" };
    return { label: "Newest", value: "publishedAt:desc" };
  };

  const [searchText, setSearchText] = useState<string>(
    searchParams.get("search") ?? "",
  );
  const [page, setPage] = useState<number>(
    parseInt(searchParams.get("page") ?? "1", 10),
  );
  const [filter, setFilter] = useState<{ label: string; value: SortOption }>(
    getSortFromQuery(),
  );

  const [datas, setDatas] = useState<Event[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);

  const filterItem: { label: string; value: SortOption }[] = [
    { label: "Newest", value: "publishedAt:desc" },
    { label: "Popular", value: "view:desc" },
  ];

  // Sync to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchText) params.set("search", searchText);
    if (page > 1) params.set("page", String(page));
    if (filter.value === "view:desc") params.set("sort", "popular");
    else params.set("sort", "newest");

    router.push(`/events?${params.toString()}`);
  }, [searchText, page, filter]);

  useEffect(() => {
    fetchData(page, searchText);
  }, [page, searchText, filter]);

  const fetchData = async (p: number, q: string) => {
    if (q === "") {
      setLoading(true);
    }
    const response = await backendClient.getEventPagination(
      {
        "pagination[withCount]": "true",
        "pagination[pageSize]": 6,
        "pagination[page]": p,
      },
      filter.value,
      q,
    );
    setLoading(false);
    setDatas(response.data ?? []);
    const pc =
      (response as any)?.meta?.pagination?.pageCount ??
      Math.max(
        1,
        Math.ceil(((response as any)?.meta?.pagination?.total ?? 0) / 6),
      );
    setPageCount(pc);
  };

  const getPaginationPages = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (pageCount <= maxVisible) {
      for (let i = 1; i <= pageCount; i++) pages.push(i);
    } else {
      const left = Math.max(2, page - 1);
      const right = Math.min(pageCount - 1, page + 1);

      pages.push(1);
      if (left > 2) pages.push("...");

      for (let i = left; i <= right; i++) pages.push(i);

      if (right < pageCount - 1) pages.push("...");
      pages.push(pageCount);
    }
    return pages;
  };
  const renderPaginationButtons = () => (
    <div>
      {getPaginationPages().map((p, idx) =>
        p === "..." ? (
          <span key={`dots-${idx}`} className="px-2">
            ...
          </span>
        ) : (
          <Button
            key={p}
            text={String(p)}
            type={p === page ? "paginationFocus" : "pagination"}
            onClick={() => setPage(Number(p))}
            className="h-10 max-w-10 cursor-pointer"
          />
        ),
      )}
    </div>
  );

  return (
    <div>
      <div className="flex-col gap-[48px] tablet:flex-row tablet:px-[80px] tablet:py-[40px] flex justify-between">
        <div>
          <SearchBox
            placeholder="Search Events & Updated"
            value={searchText}
            onChange={setSearchText}
          />
        </div>
        <div className="mb-[48px] tablet:mb-0">
          <Filter items={filterItem} value={filter} onChange={setFilter} />
        </div>
      </div>

      <div className="grid grid-cols-1 tablet:px-[80px] tablet:grid-cols-3">
        {datas.map((data, index) => (
          <PaginationCard
            key={data.id}
            datas={datas}
            data={data}
            index={index}
          />
        ))}
      </div>

      <div className="flex justify-between border-t-2">
        <div className="min-w-[82px] h-[112px] border-r-2 hidden tablet:block"></div>

        {/* Desktop */}
        <div className="items-center gap-2 w-full justify-between p-4 hidden tablet:flex tablet:py-0">
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
          {renderPaginationButtons()}
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

        {/* Mobile */}
        <div className="items-center flex-col gap-2 w-full justify-center py-4 flex tablet:hidden tablet:py-0">
          {renderPaginationButtons()}
          <div className="flex justify-between w-full">
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
        </div>

        <div className="min-w-[82px] h-[112px] border-l-2 hidden tablet:block"></div>
      </div>
    </div>
  );
}
