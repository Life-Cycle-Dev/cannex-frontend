import React from "react";

export default function RightUpIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-current`}
    >
      <g clipPath="url(#clip0_543_1755)">
        <path d="M16.0035 9.40804L7.41153 18L6 16.5885L14.591 7.99651H7.01922V6H18V16.9808H16.0035V9.40804Z" />
      </g>
      <defs>
        <clipPath id="clip0_543_1755">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
}
