import React, { useState } from "react";
import CloseIcon from "./icons/CloseIcon";

interface Props {
  value: string | undefined;
  name?: string;
  type?: "text" | "email" | "password";
  state?: "default" | "error";
  placeholder?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({
  value = "",
  name,
  type = "text",
  state = "default",
  placeholder,
  errorMessage,
  onChange,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`border-b-[2px] pt-3 pb-2 flex 
          ${
            state === "error"
              ? "border-festivalCaramel"
              : isHovered
              ? "border-crystalGreen"
              : "border-black"
          }`}
      >
        <div className="w-full flex items-center gap-1">
          {!value && <p className="text-crystalGreen">*</p>}
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-none placeholder:text-black w-full"
          />
        </div>

        {value && (
          <CloseIcon
            className={`w-5 h-5 cursor-auto ${
              state === "error"
                ? "text-festivalCaramel"
                : isHovered
                ? "text-crystalGreen"
                : "text-black"
            }`}
            onClick={() => {
              if (onChange) {
                const event = {
                  target: {
                    value: "",
                    name: name,
                  },
                } as React.ChangeEvent<HTMLInputElement>;
                onChange(event);
              }
            }}
          />
        )}
      </div>
      {errorMessage && state === "error" && (
        <p className="text-festivalCaramel text-sm mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
}
