import Image from "next/image";
import React from "react";

interface Props {
  state: "default" | "close";
}

export default function Hamburger({ state }: Props) {
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      {state === "default" ? (
        <Image src="./hamburger-icon.svg" alt="" width={24} height={24} />
      ) : (
        <Image src="./close-icon.svg" alt="" width={24} height={24} />
      )}
    </div>
  );
}
