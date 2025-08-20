"use client";
import { useEffect, useState } from "react";
import ShareButton from "@/components/ShareButton";

export function StickyBar({
  title,
  url,
  imageUrl,
}: {
  title: string;
  url: string;
  imageUrl: string;
}) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollTop = window.scrollY;

      setShow(scrollTop > 100);

      const scrolled = (scrollTop / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-[999] transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex flex-col tablet:flex-row tablet:items-center tablet:justify-between bg-white tablet:px-[80px]">
        <div className="text-[20px] px-[20px] mt-[16px] pb-2 border-b-2 tablet:pb-0 tablet:border-0 tablet:px-0 tablet:mt-0">
          {title}
        </div>
        <ShareButton
          imageUrl={imageUrl}
          title={title}
          url={url}
          hasBorder={false}
        />
      </div>

      <div className="flex bottom-0 w-full h-[3px] bg-white">
        <div
          className="h-[2px] bg-crystalGreen transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
        <div
          className="h-[2px] bg-black transition-all duration-100"
          style={{ width: `${100 - progress}%` }}
        />
      </div>
    </div>
  );
}
