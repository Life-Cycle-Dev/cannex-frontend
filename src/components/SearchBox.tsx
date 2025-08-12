"use client";

import React from "react";
import SearchIcon from "./icons/SearchIcon";
import CloseIcon from "./icons/CloseIcon";
import { useState } from "react";

export default function SearchBox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex w-[515px] items-center gap-2 border-b-2 py-2 px-1 max-w-xl ${
        isHovered ? "border-crystalGreen" : "border-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SearchIcon className="w-6 h-6 text-gray" />
      <input
        type="text"
        placeholder="Search Newsroom"
        className="flex-1 outline-none text-black placeholder:text-gray text-[20px]"
      />
      <CloseIcon
        className={`w-6 h-6 hover:text-crystalGreen ${
          isHovered ? "hover:text-crystalGreen" : "text-black"
        }`}
      />
    </div>
  );
}
