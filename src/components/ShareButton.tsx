"use client";
import React from "react";
import Button from "./Button";
import ShareIcon from "./icons/ShareIcon";
import { useHelperContext } from "./providers/helper-provider";

interface ShareInfo {
  imageUrl: string;
  title: string;
  url: string;
  hasBorder?: boolean;
}

export default function ShareButton({
  imageUrl,
  title,
  url,
  hasBorder = true,
}: ShareInfo) {
  const { setShareInfo } = useHelperContext()();

  return (
    <Button
      text="Share"
      type="secondaryBlack"
      className={"w-fit cursor-pointer " + (!hasBorder && "border-none w-full text-[20px] !justify-between px-[20px] tablet:w-fit tablet:!justify-center")}
      onClick={() => {
        setShareInfo({
          imageUrl,
          title,
          url,
        });
      }}
      isAnimate={false}
      suffixIcon={<ShareIcon className="hover:text-crystalGreen" />}
    />
  );
}
