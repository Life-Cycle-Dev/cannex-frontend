import React, { useState } from "react";
import LeftUpIcon from "./icons/LeftUpIcon";
import RightDownIcon from "./icons/RightDownIcon";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (option: string) => void;
  placeholder?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full flex gap-1 items-center">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 w-full pt-3 pb-2 focus:outline-none flex items-center justify-between border-b-[2px] hover:border-crystalGreen
          ${isOpen ? "border-crystalGreen" : "border-black"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-1 text-md font-medium">
          {value || placeholder}
          {!value && <p className="text-crystalGreen">*</p>}
        </div>
        <div className="p-1">
          {isOpen ? (
            <LeftUpIcon className="text-crystalGreen" />
          ) : (
            <RightDownIcon
              className={isHovered ? "text-crystalGreen" : "text-black"}
            />
          )}
        </div>
      </button>

      {isOpen && (
        <ul className="absolute w-full top-11 bg-white border shadow-lg z-10">
          <li className="px-4 py-2.5 bg-black text-crystalGreen font-medium">
            Please select
          </li>
          {options.map((option, index) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`px-4 py-2.5 hover:bg-gray cursor-pointer ${
                index < options.length - 1 ? "border-b" : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
