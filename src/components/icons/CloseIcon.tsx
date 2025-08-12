import React from "react";

export default function CloseIcon({
  className = "",
  onClick = () => {},
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} stroke-current`}
      onClick={onClick}
    >
      <path d="M22 2L2 22" strokeWidth="2" />
      <path d="M2 2L22 22" strokeWidth="2" />
    </svg>
  );
}
