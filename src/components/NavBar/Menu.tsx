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
        variant === "desktop" ? "text-sm px-2 py-2" : "text-base py-3"
      } 
                  text-black font-semibold hover:text-black `}>
      {title}
    </Link>
  );
}
