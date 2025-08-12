import React from "react";

interface Props {
  value: string | undefined;
  name?: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({
  value = "",
  name,
  placeholder,
  type = "text",
  onChange,
}: Props) {
  return (
    <div className="border-b-[2px] pt-3 pb-2 flex flex-col gap-1">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="outline-none placeholder:text-black"
      />
    </div>
  );
}
