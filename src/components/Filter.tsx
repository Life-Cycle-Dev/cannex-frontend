"use client";
import React, { useState, useEffect } from "react";
import RightUpIcon from "@/components/icons/RightUpIcon";

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
    <div className="relative inline-block">
      <div
        className={`inline-block text-sm tablet:border-b-2 tablet:w-[130px] hover:border-crystalGreen hover:text-crystalGreen ${
          isOpen && "border-crystalGreen text-crystalGreen"
        }`}
      >
        <div className="border-transparent cursor-pointer" onClick={toggleOpen}>
          <div className="flex gap-2 justify-between items-center py-3">
            <span className="text-black font-medium text-xl">
              {active?.label}
            </span>
            {isOpen ? <RightUpIcon /> : <RightUpIcon className="rotate-90" />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-1 border-2 absolute border-black shadow bg-white w-[130px] z-10">
          {items.map((item) => (
            <div
              key={item.value}
              onClick={() => handleSelect(item)}
              className={`px-4 py-2 cursor-pointer hover:bg-black hover:text-crystalGreen ${
                active?.value === item.value
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
