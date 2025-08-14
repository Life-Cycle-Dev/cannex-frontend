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
  className: string;
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  text,
  type = "primary",
  href,
  prefixIcon,
  suffixIcon,
  className = "w-full",
  disabled = false,
  onClick,
}: Props) {
  function resolveButtonClass() {
    if (disabled) {
      return "border-[2px] border-gray text-gray cursor-not-allowed";
    }
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

  return (
    <button
      disabled={disabled}
      onClick={href ? () => (window.location.href = href) : onClick}
      className={`h-10 inline-flex items-center justify-center gap-2 px-4 font-medium 
        ${resolveButtonClass()} ${className}`}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}
      {text}
      {suffixIcon && <span className="flex items-center">{suffixIcon}</span>}
    </button>
  );
}
