import Link from "next/link";
import RightUpIcon from "../icons/RightUpIcon";

declare type ButtonType = "primary" | "secondaryBlack" | "secondaryWhite";

interface Props {
  text: string;
  type?: ButtonType;
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  heightClass?: string;
}

function resolveButtonClass(type: ButtonType) {
  switch (type) {
    case "primary":
      return "bg-black hover:text-crystalGreen text-white hover:text-crystalGreen";
    case "secondaryBlack":
      return "bg-gray-800 hover:bg-gray-700 text-white";
    case "secondaryWhite":
      return "bg-white hover:bg-gray-200 text-black";
    default:
      return "bg-blue-600 hover:bg-blue-700 text-white";
  }
}

export default function Button({
  text,
  type = "primary",
  href,
  fullWidth,
  className,
  onClick,
  heightClass = "h-10",
}: Props) {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 bg-black px-4 text-sm font-medium text-white 
        ${resolveButtonClass(type)}
        ${heightClass} ${fullWidth ? "w-full" : ""} ${className || ""}`}
    >
      {text}
      <RightUpIcon className="" />
    </Link>
  );
}
