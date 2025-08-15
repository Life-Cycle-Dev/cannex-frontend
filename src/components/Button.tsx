declare type ButtonType =
  | "primary"
  | "secondaryBlack"
  | "secondaryWhite"
  | "pagination"
  | "paginationFocus"
  | "share";

interface Props {
  text: string;
  type?: ButtonType;
  href?: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  isAnimate?: boolean;
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
  isAnimate = true,
}: Props) {
  function resolveButtonClass() {
    if (disabled) {
      return "border-[2px] border-gray text-gray cursor-not-allowed";
    }
    switch (type) {
      case "primary":
        return "bg-black text-white hover:text-crystalGreen";
      case "secondaryBlack":
        return "text-black border-[2px] border-black hover:bg-black hover:text-crystalGreen";
      case "secondaryWhite":
        return "text-white border-[2px] border-white hover:bg-black hover:text-crystalGreen";
      case "pagination":
        return "text-black border-[1px] border-neutral100 hover:border-black hover:bg-black hover:text-crystalGreen";
      case "paginationFocus":
        return "text-black border-[1px] border-crystalGreen bg-crystalGreen";
      case "share":
        return "justify-start text-black hover:bg-black hover:text-crystalGreen hover:border-black";
    }
  }

  return (
    <button
      disabled={disabled}
      onClick={href ? () => (window.location.href = href) : onClick}
      className={`group h-10 inline-flex items-center justify-center gap-2 px-4 font-medium cursor-pointer
        ${resolveButtonClass()} ${className}`}
    >
      {prefixIcon && <span className="flex items-center">{prefixIcon}</span>}
      {text}

      {suffixIcon && (disabled || !isAnimate) && (
        <span className="flex items-center">{suffixIcon}</span>
      )}

      {suffixIcon && !disabled && isAnimate && (
        <div className="flex items-center relative w-4 h-4 overflow-hidden">
          <div
            className="
            absolute transition-transform duration-500 ease-ou2
            group-hover:-translate-y-3 group-hover:translate-x-3 group-hover:text-white
          "
          >
            {suffixIcon}
          </div>
          <div
            className="
              absolute transition-transform duration-500 ease-out
              translate-y-3 -translate-x-3 text-crystalGreen
              group-hover:translate-y-0 group-hover:translate-x-0
            "
          >
            {suffixIcon}
          </div>
        </div>
      )}
    </button>
  );
}
