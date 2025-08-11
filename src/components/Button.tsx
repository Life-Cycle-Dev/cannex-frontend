import Link from "next/link";
import RightUpIcon from "./icons/RightUpIcon";

declare type ButtonType = "primary" | "secondaryBlack" | "secondaryWhite";

interface Props {
  text: string;
  type?: ButtonType;
  href?: string;
  width?: string;
  onClick?: () => void;
  heightClass?: string;
}

function resolveButtonClass(type: ButtonType) {
  switch (type) {
    case "primary":
      return "bg-black text-white hover:text-crystalGreen";
    case "secondaryBlack":
      return "text-black border-[2px] border-black hover:border-none hover:bg-black hover:text-crystalGreen";
    case "secondaryWhite":
      return "text-white border-[2px] border-white hover:border-none hover:bg-black hover:text-crystalGreen";
  }
}

export default function Button({
  text,
  type = "primary",
  href,
  width = "w-full",
  onClick,
  heightClass = "h-10",
}: Props) {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 font-medium 
        ${resolveButtonClass(type)}
        ${heightClass} ${width}`}
    >
      {text}
      <RightUpIcon className="" />
    </Link>
  );
}
