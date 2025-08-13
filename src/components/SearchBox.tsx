"use client";

import React, { useState } from "react";
import SearchIcon from "@/components/icons/SearchIcon";
import CloseIcon from "@/components/icons/CloseIcon";

interface SearchBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchBox({
  placeholder = "",
  value = "",
  onChange,
}: SearchBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    setText("");
    onChange?.("");
  };

  return (
    <div
      className={`flex w-full tablet:w-[515px] items-center gap-2 border-b-2 py-2 px-1 ${
        isHovered ? "border-crystalGreen" : "border-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <SearchIcon className="w-6 h-6 text-gray" />
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={handleChange}
        className="flex-1 outline-none text-black placeholder:text-gray text-[20px]"
      />
      {text && (
        <CloseIcon
          className={`w-6 h-6 cursor-pointer ${
            isHovered ? "text-crystalGreen" : "text-black"
          }`}
          onClick={handleClear}
        />
      )}
    </div>
  );
}
