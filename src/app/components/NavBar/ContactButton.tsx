import Link from "next/link";

interface Props {
  href: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function ContactButton({
  href,
  fullWidth,
  className,
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 ${
        fullWidth ? "w-full" : ""
      } ${className || ""}`}>
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
