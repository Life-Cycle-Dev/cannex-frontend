/* eslint-disable react-hooks/exhaustive-deps */
import { useHelperContext } from "../providers/helper-provider";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Props {
  title: string;
  href: string;
  variant?: "desktop" | "mobile";
  width?: string;
  onClick?: () => void;
}

export default function Menu({
  title,
  href,
  variant = "desktop",
  width,
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
    <a
      href={href}
      onClick={onClick}
      className={`${
        variant === "desktop"
          ? `${width} h-12 text-[16px] px-8 justify-center`
          : "w-full text-4xl py-3 border-b-2"
      }  flex transition-transform duration-500 ease-in items-center text-black font-semibold tablet:whitespace-nowrap
       ${
         navigate === title && variant === "desktop"
           ? "bg-crystalGreen"
           : "hover:bg-black hover:text-crystalGreen"
       }`}
    >
      {title}
    </a>
  );
}
