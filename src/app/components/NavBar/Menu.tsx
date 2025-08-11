import Link from "next/link";

interface Props {
  title: string;
  href: string;
  variant?: "desktop" | "mobile";
  onClick?: () => void;
}

export default function Menu({
  title,
  href,
  variant = "desktop",
  onClick,
}: Props) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
        variant === "desktop" ? "px-3 py-2 text-sm" : "py-3 text-base"
      } font-medium text-neutral900 hover:text-black`}>
      {title}
    </Link>
  );
}
