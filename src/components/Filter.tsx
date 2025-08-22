/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";
import CloseIcon from "./icons/CloseIcon";

interface FilterValue {
  label: string;
  value: any;
}

interface FilterProp {
  items: FilterValue[];
  value: FilterValue;
  onChange?: (value: FilterValue) => void;
}

export default function Filter({ items, value, onChange }: FilterProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<FilterValue>(value);

  useEffect(() => {
    setActive(value);
  }, [value]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (selected: FilterValue) => {
    setActive(selected);
    onChange?.(selected);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full tablet:w-[130px]">
      <div
        className={`w-full flex justify-between items-center text-sm border-b-2 min-h-12 hover:border-crystalGreen hover:text-crystalGreen ${
          isOpen && "border-crystalGreen text-crystalGreen"
        }`}
      >
        <div
          className="w-full border-transparent cursor-pointer"
          onClick={toggleOpen}
        >
          <div className="flex gap-2 justify-between items-center w-full">
            <span className="text-black font-medium text-xl">
              {active?.label}
            </span>
            {isOpen ? <RightUpIcon /> : <RightUpIcon className="rotate-90" />}
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed w-full h-full top-0 left-0 z-9 bg-[#80808080] tablet:bg-transparent"
            onClick={() => setIsOpen(false)}
          ></div>
          <ul className="fixed tablet:mt-2 tablet:absolute w-full bottom-0 tablet:bottom-auto tablet:top-11 bg-white tablet:border tablet:shadow-lg z-30 inset-x-0 tablet:max-h-[215px] overflow-auto">
            <div className="tablet:hidden py-6 px-5 text-[20px] font-bold leading-[125%] flex w-full items-center justify-between border-b">
              Sort
              <CloseIcon
                className="w-[18px] h-[18px]"
                onClick={() => setIsOpen(false)}
              />
            </div>
            {items.map((item, index) => (
              <li
                key={item.value}
                onClick={() => handleSelect(item)}
                className={`py-[14px] px-5 tablet:px-4 tablet:py-2.5 hover:bg-black hover:text-crystalGreen focus:bg-black focus:text-crystalGreen cursor-pointer font-medium leading-[125%] 
                  ${index < items.length - 1 ? "border-b" : ""}
                  ${
                    active?.value === item.value
                      ? "tablet:bg-black tablet:text-crystalGreen"
                      : "text-black"
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
