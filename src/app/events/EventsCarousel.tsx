/* eslint-disable @next/next/no-img-element */
"use client";
import RightUpIcon from "@/components/icons/RightUpIcon";
import { Event } from "@/types/event";
import { formatDate } from "@/utils/format";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EventsCarousel({ items }: { items: Event[] }) {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [animating, setAnimating] = useState(false);
  const DURATION = 500;

  useEffect(() => {
    if (prev !== null) {
      setAnimating(true);
      const t = setTimeout(() => {
        setAnimating(false);
        setPrev(null);
      }, DURATION);
      return () => clearTimeout(t);
    }
  }, [index, prev]);

  if (!items || items.length === 0) return <div />;

  const goNext = () => {
    if (index === items.length - 1) return;
    setDirection(1);
    setPrev(index);
    setIndex((i) => i + 1);
  };
  const goPrev = () => {
    if (index === 0) return;
    setDirection(-1);
    setPrev(index);
    setIndex((i) => i - 1);
  };

  const current = items[index];
  const prevItem = prev !== null ? items[prev] : null;

  const enterStart = direction === 1 ? "translate-x-full" : "-translate-x-full";
  const exitEnd = direction === 1 ? "-translate-x-full" : "translate-x-full";

  return (
    <div className="flex flex-col w-[calc(100vw-40px)] tablet:flex-row tablet:min-w-[1000px] tablet:max-w-[1000px]">
      <div className="w-[calc(100vw-40px)] h-[calc(100vw-40px)] tablet:w-[450px] tablet:h-[450px] relative overflow-hidden">
        {prevItem && (
          <Link href={`/events/${prevItem.slug}`}>
            <img
              key={`prev-${prevItem.id}`}
              src={prevItem.image.url}
              alt={prevItem.title ?? ""}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onTouchStart={() => setHover(true)}
              onTouchEnd={() => setHover(false)}
              className={`
                absolute inset-0 w-full h-full object-cover tablet:border-x-2 tablet:border-y-0
                transition-transform duration-[${DURATION}ms] ease-out
                ${animating ? exitEnd : "translate-x-0"}
                cursor-pointer
              `}
            />
          </Link>
        )}

        <Link href={`/events/${current.slug}`}>
          <img
            key={`curr-${current.id}`}
            src={current.image.url}
            alt={current.title ?? ""}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onTouchStart={() => setHover(true)}
            onTouchEnd={() => setHover(false)}
            className={`
              absolute inset-0 w-full h-full object-cover tablet:border-x-2 tablet:border-y-0
              transition-transform duration-[${DURATION}ms] ease-out
              ${
                prev !== null
                  ? animating
                    ? "translate-x-0"
                    : enterStart
                  : "translate-x-0"
              }
              cursor-pointer
            `}
          />
        </Link>
      </div>

      <div className="relative w-[calc(100vw-40px)] tablet:max-w-[550px] tablet:min-w-[550px]">
        <Link
          href={`/events/${current.slug}`}
          className="
            w-full flex flex-col pb-20 
            tablet:border-0 tablet:h-[386px] tablet:pb-0 
            relative group overflow-hidden cursor-pointer
          "
        >
          <div className="self-end mb-4 relative w-8 h-8 overflow-hidden group z-1">
            <RightUpIcon
              className={`
                absolute inset-0 text-black w-full h-full
                transition-transform duration-500 ease-out
                group-hover:-translate-y-6 group-hover:translate-x-6
                ${hover ? "-translate-y-6 translate-x-6" : ""}
              `}
            />
            <RightUpIcon
              className={`
                absolute inset-0 text-crystalGreen w-full h-full
                ${
                  hover
                    ? "translate-y-0 translate-x-0"
                    : "translate-y-6 -translate-x-6"
                }
                transition-transform duration-500 ease-out
                group-hover:translate-y-0 group-hover:translate-x-0
              `}
            />
          </div>

          <div
            className={`absolute z-0 inset-0 bg-black transition-transform duration-500 ease-out group-hover:translate-y-0 ${
              hover ? "translate-y-0" : "translate-y-full"
            }`}
          />

          <div className="pt-5 tablet:pt-2 tablet:px-16 flex flex-col gap-3">
            <h2
              className={`relative z-10 font-bold text-[52px] group-hover:text-crystalGreen line-clamp-2 ${
                hover ? "text-crystalGreen" : ""
              }`}
            >
              {current?.title ?? "-"}
            </h2>
            <div className="relative z-10 text-gray-400 text-md">
              {current?.createdAt ? formatDate(current.createdAt) : ""}
            </div>
            <div
              className={`relative z-10 text-md line-clamp-4 group-hover:text-white ${
                hover && "text-white"
              }`}
            >
              {current?.description ?? ""}
            </div>
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
              <div className="mt-auto items-center justify-between border-b-2 tablet:border-b-0 flex tablet:hidden">
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
  );
}
