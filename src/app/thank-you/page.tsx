"use client";
import Button from "@/components/Button";
import DocumentIcon from "@/components/icons/DocumentIcon";
import RightUpIcon from "@/components/icons/RightUpIcon";
import React from "react";

export default function Page() {
  return (
    <div className="w-fill h-[586px] flex flex-col justify-center items-center">
      <DocumentIcon />
      <div className="flex justify-center items-center flex-col mt-[64px] tablet:mt-[40px]">
        <h1 className="text-[40px] tablet:text-[52px] font-bold">Thank you</h1>
        <p className="text-[24px] tablet:text-[24px] font-bold">
          Your vision, our precision. Let’s talk.
        </p>
        <p className="text-[16px] mt-[16px]">
          We’ll get back to you within 2 business days.
        </p>

        <Button
          href="/"
          type="primary"
          text="Homepage"
          suffixIcon={<RightUpIcon />}
          className="w-fit mt-[40px]"
        />
      </div>
    </div>
  );
}
