import React from "react";

export default function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-current`}
    >
      <path
        d="M6.92307 13.3461C10.1943 13.3461 12.8461 10.6943 12.8461 7.42307C12.8461 4.15185 10.1943 1.5 6.92307 1.5C3.65185 1.5 1 4.15185 1 7.42307C1 10.6943 3.65185 13.3461 6.92307 13.3461Z"
        stroke="#848484"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.9997 15.4995L11.2305 11.7303"
        stroke="#848484"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  );
}
