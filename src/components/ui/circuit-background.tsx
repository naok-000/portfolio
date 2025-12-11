import React from "react";

export function CircuitBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-10">
      <svg
        className="absolute w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10h80v80h-80z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="90" cy="90" r="2" fill="currentColor" />
            <path
              d="M10 10 l20 0 l0 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M90 90 l-20 0 l0 -20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
}
