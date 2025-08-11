import Link from "next/link";

interface Props {
  href: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  heightClass?: string;
}

export default function ContactButton({
  href,
  fullWidth,
  className,
  onClick,
  heightClass = "h-10",
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 bg-black px-4 text-sm font-medium text-white 
                  ${heightClass} ${fullWidth ? "w-full" : ""} ${
        className || ""
      }`}>
      Contact Us & Inquiry
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2">
        <path d="M7 17 17 7M8 7h9v9" />
      </svg>
    </Link>
  );
}
