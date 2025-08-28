/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useMemo, useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import Button from "./Button";
import LineIcon from "./icons/LineIcon";
import CopyIcon from "./icons/CopyIcon";
import FacebookIcon from "./icons/FacebookIcon";

interface ShareInfo {
  imageUrl: string;
  title: string;
  url: string;
  onClose: () => void;
}

const ShareProvider = ({ imageUrl, title, url, onClose }: ShareInfo) => {
  const absoluteUrl = useMemo(() => {
    if (typeof window === "undefined") return url;
    return `${window.location.protocol}//${window.location.host}${url}`;
  }, [url]);

  const [copied, setCopied] = useState(false);

  const [isEntering, setIsEntering] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsEntering(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(absoluteUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [absoluteUrl]);

  const shareToLine = useCallback(() => {
    const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      absoluteUrl
    )}`;
    window.open(lineUrl, "_blank", "noopener,noreferrer");
  }, [absoluteUrl]);

  const shareToFacebook = useCallback(() => {
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      absoluteUrl
    )}`;
    window.open(fbUrl, "_blank", "noopener,noreferrer");
  }, [absoluteUrl]);

  const shareToX = useCallback(() => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      absoluteUrl
    )}&text=${encodeURIComponent(title)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  }, [absoluteUrl, title]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300
          ${isEntering && !isClosing ? "opacity-25" : "opacity-0"}
          tablet:opacity-25`}
        onClick={handleClose}
      />

      <div
        className={`
          absolute bottom-0 w-full bg-white z-10
          tablet:relative tablet:w-[592px] tablet:p-6

          /* Mobile slide-up animation */
          transform transition-transform duration-300 ease-out
          ${isEntering && !isClosing ? "translate-y-0" : "translate-y-full"}
          tablet:translate-y-0
        `}
      >
        <div className="flex justify-between items-center border-b-2 tablet:border-b-0 p-[24px] tablet:p-0">
          <div className="text-xl tablet:text-2xl leading-[125%] tablet:leading-[120%] font-bold">
            Share
          </div>
          <CloseIcon className="w-4 h-4 cursor-pointer" onClick={handleClose} />
        </div>

        <div className="flex flex-col tablet:flex-row tablet:items-center gap-4 py-6 px-6 tablet:p-0 tablet:mt-4">
          <img
            className="w-[196px] tablet:w-[128px] h-[110px] tablet:h-[72px] object-cover"
            src={imageUrl}
            alt="Image | Cannex"
          />
          <h4 className="text-2xl leading-[120%] line-clamp-2 font-bold">
            {title}
          </h4>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:border-2 border-black relative tablet:mt-6">
          <Button
            text="Copy Link"
            type="share"
            prefixIcon={<CopyIcon />}
            onClick={copyLink}
            className="min-h-[48px] border-y-2 tablet:border-t-0 tablet:border-r-2 tablet:border-b-2"
          />
          <Button
            text="Line"
            type="share"
            prefixIcon={<LineIcon />}
            onClick={shareToLine}
            className="min-h-[48px] border-b-2"
          />
          <Button
            text="Facebook"
            type="share"
            prefixIcon={<FacebookIcon />}
            onClick={shareToFacebook}
            className="min-h-[48px] border-b-2 tablet:border-b-0 tablet:border-r-2"
          />
          <Button
            text="X"
            type="share"
            prefixIcon={<CopyIcon />}
            onClick={shareToX}
            className="min-h-[48px] border-b-2 tablet:border-b-0"
          />

          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
              bg-black text-white text-sm px-3 py-1 rounded-lg
              transition-all duration-300 ease-out
              ${copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
          >
            Copied!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareProvider;
