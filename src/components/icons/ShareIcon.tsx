import React from "react";

export default function ShareIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_824_7329)">
        <path
          d="M7.5 3H3V21H21V16.125"
          stroke="currentColor"
          strokeWidth="1.875"
        />
        <path
          d="M19.96 5.44843L11.368 14.0404L9.95651 12.6289L18.5475 4.0369L10.9757 4.0369V2.04039L21.9565 2.04039L21.9565 13.0212L19.96 13.0212L19.96 5.44843Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_824_7329">
          <rect width="24" height="24" />
        </clipPath>
      </defs>
    </svg>
  );
}
