import React from "react";

export default function LeftUpIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-current`}
    >
      <path d="M1.99651 3.40804L10.5885 12L12 10.5885L3.40904 1.99651H10.9808V0H0V10.9808H1.99651V3.40804Z" />
    </svg>
  );
}
