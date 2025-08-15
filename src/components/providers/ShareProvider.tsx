/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import CloseIcon from "../icons/CloseIcon";
import Button from "../Button";
import CopyIcon from "../icons/CopyIcon";
import LineIcon from "../icons/LineIcon";
import FacebookIcon from "../icons/FacebookIcon";

interface ShareInfo {
  imageUrl: string;
  title: string;
  url: string;
  onClose: () => void;
}

const ShareProvider = ({ imageUrl, title, url, onClose }: ShareInfo) => {
  url = window.location.protocol + "//" + window.location.host + url;

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  }, [url]);

  const shareToLine = useCallback(() => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      url,
    )}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer");
  }, [url]);

  const shareToFacebook = useCallback(() => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url,
    )}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer");
  }, [url]);

  const shareToX = useCallback(() => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url,
    )}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  }, [url, title]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-25"></div>

      <div className="relative w-[592px] p-[24px] bg-white z-10">
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold">Share</div>
          <CloseIcon
            className="w-[16px] h-[16px] cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div className="my-[24px] flex items-center gap-[16px]">
          <img
            className="w-[128px] h-[72px] object-cover"
            src={imageUrl}
            alt="share alt"
          />
          <div className="text-[24px] line-clamp-2 font-bold">{title}</div>
        </div>

        <div className="grid grid-cols-2 border-2 border-black">
          <Button
            text="Copy Link"
            type="share"
            prefixIcon={<CopyIcon />}
            onClick={copyLink}
            className="border-r-2 border-b-2"
          />
          <Button
            text="Line"
            type="share"
            prefixIcon={<LineIcon />}
            onClick={shareToLine}
            className="border-b-2"
          />
          <Button
            text="Facebook"
            type="share"
            prefixIcon={<FacebookIcon />}
            onClick={shareToFacebook}
            className="border-r-2"
          />
          <Button
            text="X"
            type="share"
            prefixIcon={<CopyIcon />}
            onClick={shareToX}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareProvider;
