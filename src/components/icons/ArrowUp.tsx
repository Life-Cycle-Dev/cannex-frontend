import React from "react";

export default function ArrowUp({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} fill-current`}
    >
      <path d="M10.4575 5.74227L10.4574 24H13.5425L13.5436 5.74333L21.8182 13.7882L24 11.667L12 0L0 11.667L2.18182 13.7882L10.4575 5.74227Z" />
    </svg>
  );
}
