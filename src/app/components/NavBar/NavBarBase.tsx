import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function NavBarBase({ children }: PropsWithChildren) {
  return (
    <div className="w-full border-y border-[2px] border-black bg-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between">
        <Link href="/" className="flex flex-1 items-center pl-4">
          <Image
            src="/logo-default.svg"
            alt="Cannex Logo"
            width={160}
            height={32}
          />
        </Link>
        {children}
      </div>
    </div>
  );
}
