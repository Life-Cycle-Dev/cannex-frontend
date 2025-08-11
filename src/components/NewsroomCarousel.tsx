"use client";

import React from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { formatDate } from "@/utils/format";

type Item = {
  id: string | number;
  title?: string;
  description?: string;
  createdAt?: string;
  image?: { url?: string; name?: string };
};

export default function NewsroomCarousel({ items }: { items: Item[] }) {
  const [index, setIndex] = React.useState(0);

  if (!items || items.length === 0) {
    return (
      <div className="flex justify-between min-h-[315px] tablet:min-h-[415px] border-b-2">
        <div className="min-w-[79px] h-full border-r-2" />
        <div className="w-full flex items-center justify-center text-gray-500">
          No news yet
        </div>
        <div className="min-w-[79px] h-full border-l-2" />
      </div>
    );
  }

  const goNext = () => {
    if (index === items.length - 1) return;
    setIndex((i) => (i + 1) % items.length);
  };
  const goPrev = () => {
    if (index === 0) return;
    setIndex((i) => (i - 1 + items.length) % items.length);
  };

  const current = items[index];

  return (
    <div className="flex justify-between min-h-[315px] tablet:min-h-[415px] tablet:border-b-2">
      <div className="min-w-[79px] h-full border-r-2 hidden tablet:block" />

      <div key={current.id} className="w-full flex tablet:flex-row flex-col">
        <img
          className="min-w-full h-[315px] tablet:min-w-[623px] tablet:h-[413px] object-cover tablet:border-r-2"
          src={current?.image?.url || "/placeholder.png"}
          alt={current?.image?.name || current?.title || "news image"}
        />

        <div className="relative tablet:static p-4 w-full border-b-2 tablet:border-0">
          <div className="absolute tablet:static top-4 right-4 tablet:self-end tablet:mt-4 tablet:mr-4">
            <RightUpIcon />
          </div>

          <div className="p-4 pt-10 pb-16 tablet:p-16 flex flex-col gap-3">
            <div className="font-bold text-3xl tablet:text-5xl/tight">{current?.title ?? "-"}</div>
            <div className="text-gray-400 text-md">
              {current?.createdAt ? formatDate(current.createdAt) : ""}
            </div>
            <div className="text-md line-clamp-4">{current?.description ?? ""}</div>
          </div>

          <div className="absolute tablet:static bottom-7 left-8 tablet:mt-6 tablet:ml-16 flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`w-[8px] h-[8px] cursor-pointer ${
                  i === index ? "bg-crystalGreen" : "bg-black"
                }`}
              />
            ))}
          </div>

          <div className="absolute tablet:static bottom-0 right-0 flex tablet:justify-end tablet:mt-2">
            <button
              onClick={goPrev}
              className={`w-16 h-16 border-t-2 border-l-2 flex justify-center items-center ${
                index === 0 ? "border-neutral100" : "cursor-pointer"
              }`}
              aria-label="Previous"
            >
              <RightUpIcon className={`-rotate-135 w-8 h-8 ${index === 0 && "text-neutral100"}`} />
            </button>
            <button
              onClick={goNext}
              className={`w-16 h-16 border-t-2 border-l-2 flex justify-center items-center ${
                index === items.length - 1 ? "border-t-neutral100" : "cursor-pointer"
              }`}
              aria-label="Next"
            >
              <RightUpIcon
                className={`rotate-45 w-8 h-8 ${index === items.length - 1 && "text-neutral100"}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="min-w-[79px] h-full border-l-2 hidden tablet:block" />
    </div>
  );
}
