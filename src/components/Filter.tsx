"use client";
import React, { useState } from "react";
import RightUpIcon from "./icons/RightUpIcon";

interface FilterValue {
  label: string;
  value: any;
}

interface FilterProp {
  items: FilterValue[];
}

export default function Filter({ items }: FilterProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<any>();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setActive(value);
    setIsOpen(false);
  };

  return (
    <div>
      <div
        className={`inline-block text-sm border-b-2 w-[130px] hover:border-crystalGreen hover:text-crystalGreen ${
          isOpen && "border-crystalGreen text-crystalGreen"
        }`}
      >
        <div className="border-transparent cursor-pointer" onClick={toggleOpen}>
          <div className="flex gap-2 justify-between items-center py-3">
            <span className="text-black font-medium text-xl">{active}</span>
            {isOpen ? <RightUpIcon /> : <RightUpIcon className=" rotate-90" />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-1 border-2 absolute border-black shadow bg-white w-[130px]">
          {items.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={`px-4 py-2 cursor-pointer hover:bg-black hover:text-crystalGreen ${
                active === item.value
                  ? "bg-black text-crystalGreen"
                  : "text-black"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
