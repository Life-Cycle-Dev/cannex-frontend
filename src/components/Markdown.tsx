/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import DOMPurify from "isomorphic-dompurify";
import { StickyBar } from "./StickyBar";
import { useRef } from "react";
import ShareButton from "./ShareButton";
import { formatDate } from "@/utils/format";
import Link from "next/link";

type ContentViewProps = {
  data: any;
  imageUrl: string;
  value: string;
  page: "events" | "newsroom";
};

export default function ContentView({
  data,
  imageUrl,
  value,
  page,
}: ContentViewProps) {
  const safe = DOMPurify.sanitize(value);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <StickyBar
        title={data.title}
        url={`/${page}/${data.slugId}`}
        imageUrl={imageUrl ?? ""}
        revealOffset={50}
        targetRef={contentRef ?? null}
      />

      <div ref={contentRef}>
        <div className="flex flex-col tablet:flex-row tablet:items-stretch tablet:border-b-[2px]">
          <div
            className="w-full tablet:w-1/2 flex flex-col justify-center gap-6 tablet:gap-8
                  p-[32px_20px_40px_20px] tablet:p-[0px_64px_0px_80px]"
          >
            <div className="flex flex-col gap-4">
              <Link
                href={`/${page}`}
                className="w-fit text-white bg-black p-[2px_8px]"
              >
                Events & Updated
              </Link>
              <h1 className="text-[46px] font-bold break-words leading-[110%] line-clamp-2">
                {data.title}
              </h1>
              <div className="text-gray-400">
                {formatDate(data.publishedAt)}
              </div>
            </div>

            <div className="w-full flex tablet:flex-col items-center tablet:items-start justify-between">
              <ShareButton
                imageUrl={data?.image?.url ?? ""}
                title={data.title}
                url={`/${page}/${data.slugId}`}
              />
            </div>
          </div>

          <div className="w-full tablet:w-1/2 tablet:self-stretch aspect-[4/3] border-y-2 tablet:border-y-0 tablet:border-l-2">
            <img
              className="w-full h-full object-cover"
              src={data?.image?.url ?? ""}
              alt={data.title ?? ""}
            />
          </div>
        </div>

        <div className="w-full p-[48px_20px_137px_20px] tablet:p-[64px_0px_0px_0px] tablet:mb-[200px] tablet:mx-auto tablet:max-w-[842px]">
          <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: safe }}
          />
        </div>
      </div>
    </>
  );
}
