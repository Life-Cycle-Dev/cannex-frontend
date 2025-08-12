import Image from "next/legacy/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function NavBarBase({ children }: PropsWithChildren) {
  return (
    <div className="w-full tablet:border-y-2 border-black bg-white">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 pl-4">
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
