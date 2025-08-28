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
      width="18"
      height="19"
      viewBox="0 0 18 19"
      className={`${className} stroke-current`}
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="3.06066"
        y1="3.5"
        x2="14.7279"
        y2="15.1673"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <line
        x1="3"
        y1="15.1672"
        x2="14.6673"
        y2="3.49998"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
}
