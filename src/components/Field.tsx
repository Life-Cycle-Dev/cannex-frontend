import React from "react";

interface Props {
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({ value = "", placeholder, onChange }: Props) {
  return (
    <div className="border-b-[2px] pt-3 pb-2 flex flex-col gap-1">
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none"
      />
    </div>
  );
}
