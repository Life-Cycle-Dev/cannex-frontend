declare type ButtonType =
  | "primary"
  | "secondaryBlack"
  | "secondaryWhite"
  | "pagination"
  | "paginationFocus";

interface Props {
  text: string;
  type?: ButtonType;
  href?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  onClick?: () => void;
  className: string;
}

function resolveButtonClass(type: ButtonType) {
  switch (type) {
    case "primary":
      return "bg-black text-white hover:text-crystalGreen";
    case "secondaryBlack":
      return "text-black border-[2px] border-black hover:border-none hover:bg-black hover:text-crystalGreen";
    case "secondaryWhite":
      return "text-white border-[2px] border-white hover:border-none hover:bg-black hover:text-crystalGreen";
    case "pagination":
      return "text-black border-[1px] border-neutral100 hover:border-black hover:bg-black hover:text-crystalGreen";
    case "paginationFocus":
      return "text-black border-[1px] border-crystalGreen bg-crystalGreen";
  }
}

export default function Button({
  text,
  type = "primary",
  href,
  prefixIcon,
  suffixIcon,
  onClick,
  className = "w-full",
}: Props) {
  return (
    <div
      onClick={href ? () => (window.location.href = href) : onClick}
      className={`h-10 inline-flex items-center justify-center gap-2 px-4 font-medium 
        ${resolveButtonClass(type)} ${className}`}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}
      {text}
      {suffixIcon && <span className="flex items-center">{suffixIcon}</span>}
    </div>
  );
}
