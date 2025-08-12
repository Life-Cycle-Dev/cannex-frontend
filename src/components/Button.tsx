import Link from "next/link";

declare type ButtonType = "primary" | "secondaryBlack" | "secondaryWhite";

interface Props {
  text: string;
  type?: ButtonType;
  href?: string;
  width?: string;
  heightClass?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
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
  heightClass = "h-10",
  prefixIcon,
  suffixIcon,
  onClick,
}: Props) {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-4 font-medium 
        ${resolveButtonClass(type)}
        ${heightClass} ${width}`}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}
      {text}
      {suffixIcon && <span className="flex items-center">{suffixIcon}</span>}
    </Link>
  );
}
