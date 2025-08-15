import React from "react";

export default function CopyIcon({ className = "" }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_1092_3696)">
        <path
          d="M5.30889 16.9999H15.7704C16.4501 16.9999 17.0011 16.4489 17.0011 15.7691V5.30762C17.0011 4.62788 16.4501 4.07686 15.7704 4.07686H5.30889C4.62915 4.07686 4.07812 4.62788 4.07812 5.30762V15.7691C4.07812 16.4489 4.62915 16.9999 5.30889 16.9999Z"
          stroke="currentColor"
          strokeWidth="1.43589"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 13.3076V2.23076C1 1.90434 1.12967 1.5913 1.36048 1.36048C1.5913 1.12967 1.90434 1 2.23076 1H13.3076"
          stroke="currentColor"
          strokeWidth="1.43589"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1092_3696">
          <rect width={18} height={18} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
