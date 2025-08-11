import Image from "next/image";
import Hamburger from "./Hamburger";

export default function NavBarBase() {
  return (
    <div className="w-full">
      <div className="w-[375px] border-y border-[2px] border-black bg-white flex justify-between">
        <div className="w-full flex justify-center">
          <Image
            src="/logo-default.svg"
            alt="Cannex Logo"
            width={160}
            height={32}
          />
        </div>
        <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0">
          <Hamburger state="default" />
        </div>
      </div>
    </div>
  );
}
