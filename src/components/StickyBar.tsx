/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";
import ShareButton from "@/components/ShareButton";
import { useHelperContext } from "./providers/helper-provider";

type StickyBarProps = {
  title: string;
  url: string;
  imageUrl: string;
  targetRef?: React.RefObject<HTMLElement | null>;
  revealOffset?: number;
};

export function StickyBar({
  title,
  url,
  imageUrl,
  targetRef,
  revealOffset = 80,
}: StickyBarProps) {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(false);
  const rafId = useRef<number | null>(null);
  const { setIsNavbarSticky } = useHelperContext()();

  const clamp = (n: number, min = 0, max = 100) =>
    Math.max(min, Math.min(max, n));

  useEffect(() => {
    setIsNavbarSticky(false);

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const y = window.scrollY;
        const vh = window.innerHeight;

        const el = targetRef?.current ?? document.documentElement;
        const rect = el.getBoundingClientRect();

        const elTop = y + rect.top;
        const elHeight = el.scrollHeight || el.clientHeight;

        const start = elTop - revealOffset;
        const end = elTop + elHeight - vh;

        setShow(y >= start);

        const pct = ((y - start) / Math.max(1, end - start)) * 100;
        setProgress(clamp(pct));
      });
    };

    const handleResize = () => handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [targetRef, revealOffset]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white z-30 transition-transform duration-300 ${
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
