import React from "react";
import SearchIcon from "./icons/SearchIcon";

export default function SearchBox() {
  return (
    <div className="flex w-[515px] items-center gap-2 border-b-2 border-black py-2 px-1 max-w-xl">
      <SearchIcon className="w-[14px] h-[14px] text-gray-400" />
      <input
        type="text"
        placeholder="Search Newsroom"
        className="flex-1 outline-none text-gray-400 placeholder:text-gray-400"
      />
    </div>
  );
}
