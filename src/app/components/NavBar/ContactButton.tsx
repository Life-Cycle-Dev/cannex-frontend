import Image from "next/image";
import React from "react";

export default function ContactButton() {
  return (
    <div className="bg-black flex justify-between py-3 px-4">
      <div className="w-6"></div>
      <p className="text-[16px] font-semibold text-white">
        Contact Us & Inquiry
      </p>
      <Image src="./right-up-icon.svg" alt="" width={24} height={24} />
    </div>
  );
}
