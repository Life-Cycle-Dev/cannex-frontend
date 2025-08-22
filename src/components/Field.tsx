import React, { useState } from "react";
import CloseIcon from "./icons/CloseIcon";

interface Props {
  value: string | undefined;
  type?: "text" | "email" | "password";
  state?: "default" | "error";
  placeholder?: string;
  errorMessage?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Field({
  value = "",
  type = "text",
  state = "default",
  placeholder,
  errorMessage,
  required = false,
  onChange,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-10 border-b-[1.5px] pt-3 pb-2 flex 
          ${
            state === "error"
              ? "border-festivalCaramel"
              : isHovered
              ? "border-crystalGreen"
              : "border-black"
          }`}
      >
        <div
          className={`w-full relative ${
            state === "error" ? "text-festivalCaramel" : "text-black"
          }`}
        >
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder=" "
            className="outline-none w-full text-md font-medium placeholder:text-black placeholder:text-md placeholder:font-medium peer"
          />
          {!value && (
            <div className="absolute left-0 top-0 flex gap-1 text-md font-medium pointer-events-none peer-focus:hidden">
              <p>{placeholder}</p>
              {required && (
                <p
                  className={
                    state === "error"
                      ? "text-festivalCaramel"
                      : "text-crystalGreen"
                  }
                >
                  *
                </p>
              )}
            </div>
          )}
        </div>

        {value && (
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <CloseIcon
              className={`w-2.5 h-2.5 cursor-auto ${
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
                    },
                  } as React.ChangeEvent<HTMLInputElement>;
                  onChange(event);
                }
              }}
            />
          </div>
        )}
      </div>
      {errorMessage && state === "error" && (
        <p className="text-festivalCaramel text-sm mt-0.5">{errorMessage}</p>
      )}
    </div>
  );
}
