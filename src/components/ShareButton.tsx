"use client";
import React from "react";
import Button from "./Button";
import ShareIcon from "./icons/ShareIcon";
import { useHelperContext } from "./providers/helper-provider";

interface ShareInfo {
  imageUrl: string;
  title: string;
  url: string;
}

export default function ShareButton({ imageUrl, title, url }: ShareInfo) {
  const { setShareInfo } = useHelperContext()();

  return (
    <Button
      text="Share"
      type="secondaryBlack"
      className="w-fit cursor-pointer"
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
