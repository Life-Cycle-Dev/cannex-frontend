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
  isAnimate?: boolean;
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
  isAnimate = true,
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
      className={`group h-12 inline-flex items-center justify-between gap-2 px-4 font-medium cursor-pointer
        ${resolveButtonClass()} ${className}`}
    >
      {type !== "pagination" && type !== "paginationFocus" && (
        <div
          className={`${prefixIcon && "w-6"} ${
            !prefixIcon && "tablet:w-0"
          } shrink-0`}
        >
          {prefixIcon && (
            <span className="flex items-center">{prefixIcon}</span>
          )}
        </div>
      )}

      {text}
      {prefixIcon && <div className="w-6 shrink-0" />}
      {suffixIcon && (disabled || !isAnimate) && (
        <span className="flex items-center">{suffixIcon}</span>
      )}

      {suffixIcon && !disabled && isAnimate && (
        <div className="flex items-center relative w-6 h-6 overflow-hidden">
          <div
            className="
            absolute transition-transform duration-500 ease-out
            group-hover:-translate-y-6 group-hover:translate-x-6 group-hover:text-white
          "
          >
            {suffixIcon}
          </div>
          <div
            className="
              absolute transition-transform duration-500 ease-out
              translate-y-6 -translate-x-6 text-crystalGreen
              group-hover:translate-y-0 group-hover:translate-x-0"
          >
            {suffixIcon}
          </div>
        </div>
      )}
    </button>
  );
}
