import React from "react";

export default function HamburgerIcon({
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
      <line y1="19" x2="24" y2="19" stroke="white" strokeWidth="2" />
      <line y1="11" x2="24" y2="11" stroke="white" strokeWidth="2" />
      <line y1="3" x2="24" y2="3" stroke="white" strokeWidth="2" />
    </svg>
  );
}
