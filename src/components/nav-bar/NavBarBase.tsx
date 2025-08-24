/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  isShowLogo?: boolean;
}

export default function NavBarBase({ children, isShowLogo = true }: Props) {
  return (
    <div className="w-full border-black bg-white">
      <div className="flex h-16 w-full items-center justify-center">
        {isShowLogo && (
          <Link href="/" className="h-8">
            <img
              src="/logo-default.webp"
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
