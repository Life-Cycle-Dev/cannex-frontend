import React, { useEffect, useState } from "react";
import LeftUpIcon from "./icons/LeftUpIcon";
import RightDownIcon from "./icons/RightDownIcon";
import CloseIcon from "./icons/CloseIcon";
import AOS from "aos";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (option: string) => void;
  placeholder?: string;
  state?: "default" | "error";
  errorMessage?: string;
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = "Select...",
  state,
  errorMessage,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col gap-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-10 w-full pt-3 pb-2 focus:outline-none flex items-center justify-between border-b-[1.5px] 
          ${
            state === "error"
              ? "border-festivalCaramel text-festivalCaramel"
              : isOpen
              ? "border-crystalGreen"
              : "border-black hover:border-crystalGreen"
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-1 text-md font-medium">
          {value || placeholder}
          {!value && (
            <p
              className={
                state === "error" ? "text-festivalCaramel" : "text-crystalGreen"
              }
            >
              *
            </p>
          )}
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
      <p className="text-festivalCaramel font-medium text-sm leading-[125%]">
        {errorMessage}
      </p>

      {isOpen && (
        <>
          <div
            className="fixed w-full h-full top-0 left-0 z-9 bg-[#80808080] tablet:bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul
            data-aos="fade-up tablet:fade-down"
            className="fixed tablet:absolute w-full bottom-0 tablet:bottom-auto tablet:top-11 bg-white tablet:border tablet:shadow-lg z-10 inset-x-0 tablet:max-h-[215px] overflow-auto"
          >
            <div className="tablet:hidden py-6 px-5 text-[20px] font-bold leading-[125%] flex w-full items-center justify-between border-b">
              Reason for Contact
              <CloseIcon
                className="w-[18px] h-[18px]"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <li className="hidden h-10 tablet:block px-4 py-2.5 bg-black text-crystalGreen font-medium">
              Please select
            </li>
            {options.map((option, index) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`h-10 px-4 py-2.5 hover:bg-black hover:text-crystalGreen focus:bg-black focus:text-crystalGreen cursor-pointer font-medium leading-[125%] ${
                  index < options.length - 1 ? "border-b" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
