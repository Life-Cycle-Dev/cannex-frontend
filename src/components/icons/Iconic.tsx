import { getClassNameAnimation } from "@/utils/animation-helper";
import React from "react";

export default function Iconic({ show = false }: { show: boolean }) {
  return (
    <svg
      width="303"
      height="343"
      viewBox="0 0 303 343"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="overflow-visible"
    >
      <path
        className={`${getClassNameAnimation(
          show,
          500,
          "opacity-0 -translate-x-20",
          "opacity-100 translate-x-0",
        )}`}
        d="M0 258.996V84.1435L48.48 48.6874L96.96 84.1435V258.996L48.48 294.452L0 258.996Z"
        fill="#A3ED00"
      />
      <path
        className={`${getClassNameAnimation(
          show,
          500,
          "opacity-0 translate-x-20 -translate-y-20",
          "opacity-100 translate-x-0 -translate-y-0",
        )}`}
        d="M248.119 171.538L96.9598 84.1435L90.5337 24.35L145.415 0L296.574 87.4071L303 147.188L248.119 171.538Z"
        fill="#A3ED00"
      />
      <path
        className={`${getClassNameAnimation(
          show,
          500,
          "opacity-0 translate-x-20 translate-y-20",
          "opacity-100 translate-x-0 translate-y-0",
        )}`}
        d="M248.119 171.462L96.9598 258.856L90.5337 318.65L145.415 343L296.574 255.606L303 195.812L248.119 171.462Z"
        fill="#A3ED00"
      />
    </svg>
  );
}
