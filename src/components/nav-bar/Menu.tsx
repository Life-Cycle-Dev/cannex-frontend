/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useHelperContext } from "../providers/helper-provider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
  const pathname = usePathname();
  const { navigate, setNavigate } = useHelperContext()();

  useEffect(() => {
    const firstPathname = pathname.split("/")[1] ?? "";
    if (firstPathname.includes("about-us")) {
      setNavigate("About Us");
    } else if (firstPathname.includes("products")) {
      setNavigate("Products");
    } else if (firstPathname.includes("research-and-development")) {
      setNavigate("Research & Development");
    } else if (firstPathname.includes("newsroom")) {
      setNavigate("Newsroom");
    } else if (firstPathname.includes("events")) {
      setNavigate("Events & Updated");
    } else if (firstPathname.includes("partnership")) {
      setNavigate("Partnership");
    }
  }, [pathname]);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${
        variant === "desktop"
          ? "h-12 text-sm max-w-[250px] justify-center"
          : "text-4xl py-3 border-b-2"
      } w-full flex transition-transform duration-500 ease-in items-center text-black font-semibold ${
        navigate === title && variant === "desktop"
          ? "bg-crystalGreen"
          : "hover:bg-black hover:text-crystalGreen"
      }`}
    >
      {title}
    </Link>
  );
}
