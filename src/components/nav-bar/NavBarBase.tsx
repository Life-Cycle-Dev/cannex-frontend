import Image from "next/legacy/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isShowLogo?: boolean;
}

export default function NavBarBase({ children, isShowLogo = true }: Props) {
  return (
    <div className="w-full tablet:border-y-2 border-black bg-white">
      <div
        className={`flex h-16 w-full items-center  
          ${isShowLogo ? "" : "justify-end"}`}
      >
        {isShowLogo && (
          <Link
            href="/"
            className="w-full flex justify-center items-center gap-2"
          >
            <Image
              src="/logo-default.svg"
              alt="Cannex Logo"
              width={160}
              height={32}
            />
          </Link>
        )}
        {children}
      </div>
    </div>
  );
}
