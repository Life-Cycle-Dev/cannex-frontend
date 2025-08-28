/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { formatDate } from "@/utils/format";
import { NewsRooms } from "@/types/new-rooms";
import Link from "next/link";

export default function NewsroomCarousel({ items }: { items: NewsRooms[] }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  if (!items || items.length === 0) {
    return <div></div>;
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
    <div className="flex justify-between tablet:border-b-2 min-h-[calc(100vh-200px)] max-h-[calc(100vh-200px)] tablet:min-h-[calc(100vh-250px)] tablet:max-h-[calc(100vh-250px)] desktop:min-h-[calc(100vh-311px)] desktop:max-h-[calc(100vh-311px)]">
      <div className="min-w-[79px] tablet:min-h-[calc(100vh-250px)] tablet:max-h-[calc(100vh-250px)] desktop:min-h-[calc(100vh-311px)] desktop:max-h-[calc(100vh-311px)] border-r-2 hidden tablet:block" />

      <div className="flex tablet:border-b-2 min-h-[calc(100vh-200px)] max-h-[calc(100vh-200px)] tablet:min-h-[calc(100vh-250px)] tablet:max-h-[calc(100vh-250px)] desktop:min-h-[calc(100vh-311px)] desktop:max-h-[calc(100vh-311px)] tablet:h-auto tablet:flex-row flex-col">
        <div
          className="
            border-r-2 border-l-2 border-b-2 tablet:border-l-0 tablet:border-b-0
            min-w-full tablet:min-w-[45%] min-h-fit tablet:min-h-[50%] tablet:max-h-full
            relative overflow-hidden
          "
          onMouseLeave={() => setHover(false)}
        >
          <div
            className="
              flex w-full transition-transform duration-500 ease-out aspect-3/2 tablet:aspect-auto tablet:h-full
            "
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it) => (
              <img
                key={it.id}
                src={it?.image?.url}
                alt={it?.title || it?.title || "news image"}
                className="
                  w-full h-full object-cover flex-shrink-0 cursor-pointer object-center
                "
                onMouseEnter={() => setHover(true)}
                onTouchStart={() => setHover(true)}
                onTouchEnd={() => setHover(false)}
                onClick={() => (window.location.href = `/newsroom/${it.slug}`)}
              />
            ))}
          </div>
        </div>

        <div className="w-full h-full tablet:h-full relative">
          <Link
            href={`/newsroom/${current.slug}`}
            className="
              w-full h-full flex flex-col
              tablet:border-0 relative group overflow-hidden cursor-pointer
            "
          >
            <div className="self-end mb-4 relative w-8 h-8 overflow-hidden group z-1 hidden tablet:block">
              <RightUpIcon
                className={`
                  absolute inset-0 text-black w-full h-full
                  transition-transform duration-500 ease-out
                  group-hover:-translate-y-6 group-hover:translate-x-6
                  ${hover && "-translate-y-6 translate-x-6"}
                `}
              />
              <RightUpIcon
                className={`
                  absolute inset-0 text-crystalGreen w-full h-full
                  transition-transform duration-500 ease-out
                  group-hover:translate-y-0 group-hover:translate-x-0
                  ${
                    hover
                      ? "translate-y-0 translate-x-0"
                      : "translate-y-6 -translate-x-6"
                  }
                `}
              />
            </div>

            <div className="self-end tablet:mb-4 w-8 h-8 overflow-hidden group z-1 tablet:hidden">
              <RightUpIcon
                className={`
                  absolute text-black w-8 h-8 right-0 group-hover:text-crystalGreen
                `}
              />
            </div>

            <div
              className={`absolute z-0 inset-0 bg-black transition-transform duration-500 ease-out group-hover:translate-y-0 
                ${hover ? "translate-y-0" : "translate-y-full"}`}
            />

            <div className="mb-[32px] tablet:mb-0 tablet:pt-2 tablet:px-16 flex flex-col gap-3">
              <h2
                className={`relative z-10 font-bold text-[40px] line-clamp-3 tablet:text-[52px] ${
                  hover ? "text-crystalGreen" : "text-black"
                } group-hover:text-crystalGreen`}
              >
                {current?.title ?? "-"}
              </h2>
              <div className="relative z-10 text-gray-400 text-[16px]">
                {current?.publishedAt ? formatDate(current.publishedAt) : ""}
              </div>
              <p
                className={`relative z-10 line-clamp-3 ${
                  hover ? "text-white" : ""
                } group-hover:text-white`}
              >
                {current?.description ?? ""}
              </p>
            </div>
          </Link>

          {items.length > 1 && (
            <>
              <div className="absolute bg-white bottom-0 left-0 w-full mt-auto items-center justify-between border-b-2 tablet:border-b-0 hidden tablet:flex z-2">
                <div className="pl-8 tablet:pl-16 flex gap-2 justify-start">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-[8px] h-[8px] cursor-pointer ${
                        i === index ? "bg-crystalGreen" : "bg-black"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex">
                  <button
                    onClick={goPrev}
                    className={`group overflow-hidden relative w-16 h-16 border-t-2 border-l-2 flex justify-center items-center 
                  ${
                    index === 0
                      ? "border-neutral100 text-neutral100 cursor-not-allowed"
                      : "cursor-pointer hover:bg-black"
                  }`}
                    disabled={index === 0}
                  >
                    {index !== 0 ? (
                      <>
                        <RightUpIcon className="absolute -rotate-135 w-8 h-8 transition-transform duration-500 ease-out text-crystalGreen translate-x-14 group-hover:translate-x-0" />
                        <RightUpIcon className="absolute -rotate-135 w-8 h-8 transition-transform duration-500 ease-out group-hover:-translate-x-14" />
                      </>
                    ) : (
                      <RightUpIcon className="-rotate-135 w-8 h-8" />
                    )}
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next"
                    className={`group relative w-16 h-16 border-t-2 border-l-2 border-black flex justify-center items-center overflow-hidden ${
                      index === items.length - 1
                        ? "border-t-neutral100 text-neutral100 cursor-not-allowed"
                        : "cursor-pointer hover:bg-black"
                    }`}
                    disabled={index === items.length - 1}
                  >
                    {index !== items.length - 1 ? (
                      <>
                        <RightUpIcon className="absolute rotate-45 w-8 h-8 transition-transform duration-500 ease-out text-crystalGreen -translate-x-14 group-hover:translate-x-0" />
                        <RightUpIcon className="absolute rotate-45 w-8 h-8 transition-transform duration-500 ease-out group-hover:translate-x-14" />
                      </>
                    ) : (
                      <RightUpIcon className="rotate-45 w-8 h-8" />
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-auto items-center w-full absolute bottom-0 justify-between border-b-2 tablet:border-b-0 flex tablet:hidden">
                <button
                  onClick={goPrev}
                  className={`w-16 h-16 border-t-2 border-l-2 border-r-2 flex justify-center items-center 
                  ${
                    index === 0
                      ? "border-neutral100 text-neutral100 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={index === 0}
                >
                  <RightUpIcon className="-rotate-135 w-8 h-8" />
                </button>
                <div className="pl-8 tablet:pl-16 flex gap-2 justify-start">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`w-[8px] h-[8px] cursor-pointer ${
                        i === index ? "bg-crystalGreen" : "bg-black"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={goNext}
                  aria-label="Next"
                  className={`w-16 h-16 border-t-2 border-l-2 border-r-2 border-black flex justify-center items-center ${
                    index === items.length - 1
                      ? "border-neutral100 text-neutral100 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                  disabled={index === items.length - 1}
                >
                  <RightUpIcon className="rotate-45 w-8 h-8" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="min-w-[79px] tablet:min-h-[calc(100vh-250px)] tablet:max-h-[calc(100vh-250px)] desktop:min-h-[calc(100vh-311px)] desktop:max-h-[calc(100vh-311px)] border-l-2 hidden tablet:block" />
    </div>
  );
}
