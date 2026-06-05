import type { SVGProps } from "react";

const gradientStops = (
  <>
    <stop offset="0%" stopColor="#e8f3ff" />
    <stop offset="40%" stopColor="#9ec8f4" />
    <stop offset="100%" stopColor="#4f93d8" />
  </>
);

type CursorSvgProps = SVGProps<SVGSVGElement>;

function CursorDefs() {
  return (
    <defs>
      <linearGradient id="cursor-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3a4a5a" />
        <stop offset="55%" stopColor="#1f2c3a" />
        <stop offset="100%" stopColor="#10171f" />
      </linearGradient>
      <linearGradient id="cursor-bevel" x1="0" y1="0" x2="1" y2="1">
        {gradientStops}
      </linearGradient>
      <linearGradient id="cursor-pillar" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#dceeff" />
        <stop offset="35%" stopColor="#7fb6ec" />
        <stop offset="100%" stopColor="#1f2c3a" />
      </linearGradient>
      <linearGradient id="cursor-pillar-base" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1f2c3a" />
        <stop offset="100%" stopColor="#0a1118" />
      </linearGradient>
      <radialGradient id="cursor-halo-gradient" cx="0.5" cy="0.5" r="0.55">
        <stop offset="0%" stopColor="#9ec8f4" stopOpacity="0.9" />
        <stop offset="55%" stopColor="#58a6ef" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#58a6ef" stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const baseArrowPath = "M5 2 L5 22.5 L10.2 17.6 L13.1 23.5 L16.3 22 L13.4 16.1 L19.8 15.4 Z";

const arrowBevelPath =
  "M5 2 L5 8.2 L11.5 16 L13.4 16.1 L19.8 15.4 L17.4 14.1 L8.6 5.3 L7.4 2 Z";

export function DefaultCursor(props: CursorSvgProps) {
  return (
    <svg
      viewBox="0 0 24 26"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CursorDefs />
      <g filter="url(#cursor-shadow)">
        <path d={baseArrowPath} fill="url(#cursor-body)" />
        <path d={arrowBevelPath} fill="url(#cursor-bevel)" opacity="0.92" />
        <path
          d="M5 2 L5 22.5 L10.2 17.6 L13.1 23.5 L16.3 22 L13.4 16.1 L19.8 15.4 Z"
          fill="none"
          stroke="#0a1118"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function LinkCursor(props: CursorSvgProps) {
  return (
    <svg
      viewBox="0 0 24 26"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CursorDefs />
      <g filter="url(#cursor-halo)">
        <circle cx="11" cy="12" r="11" fill="url(#cursor-halo-gradient)" />
      </g>
      <g filter="url(#cursor-shadow)">
        <path d={baseArrowPath} fill="url(#cursor-body)" />
        <path d={arrowBevelPath} fill="url(#cursor-bevel)" opacity="0.95" />
        <path
          d="M5 2 L5 22.5 L10.2 17.6 L13.1 23.5 L16.3 22 L13.4 16.1 L19.8 15.4 Z"
          fill="none"
          stroke="#0a1118"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function GrabCursor(props: CursorSvgProps) {
  return (
    <svg
      viewBox="0 0 32 28"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CursorDefs />
      <g filter="url(#cursor-shadow)" transform="translate(2 1) rotate(-12 16 14)">
        <path
          d="M8 14 C8 11.8 9.8 10 12 10 V6 C12 4.9 12.9 4 14 4 C15.1 4 16 4.9 16 6 V10 V4 C16 2.9 16.9 2 18 2 C19.1 2 20 2.9 20 4 V10 V5 C20 3.9 20.9 3 22 3 C23.1 3 24 3.9 24 5 V11 V8 C24 6.9 24.9 6 26 6 C27.1 6 28 6.9 28 8 V15 C28 20.5 24 24.5 18.5 24.5 H16 C11 24.5 8 21 8 16.5 V14 Z"
          fill="url(#cursor-body)"
        />
        <path
          d="M8 14 C8 11.8 9.8 10 12 10 V6 C12 4.9 12.9 4 14 4 V10 M16 10 V4 C16 2.9 16.9 2 18 2 C19.1 2 20 2.9 20 4 V11 M20 11 V5 C20 3.9 20.9 3 22 3 C23.1 3 24 3.9 24 5 V12 M24 12 V8 C24 6.9 24.9 6 26 6 C27.1 6 28 6.9 28 8 V15"
          fill="none"
          stroke="url(#cursor-bevel)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 14 C8 11.8 9.8 10 12 10 V6 C12 4.9 12.9 4 14 4 C15.1 4 16 4.9 16 6 V10 V4 C16 2.9 16.9 2 18 2 C19.1 2 20 2.9 20 4 V10 V5 C20 3.9 20.9 3 22 3 C23.1 3 24 3.9 24 5 V11 V8 C24 6.9 24.9 6 26 6 C27.1 6 28 6.9 28 8 V15 C28 20.5 24 24.5 18.5 24.5 H16 C11 24.5 8 21 8 16.5 V14 Z"
          fill="none"
          stroke="#0a1118"
          strokeOpacity="0.35"
          strokeWidth="0.6"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function TextCursor(props: CursorSvgProps) {
  return (
    <svg
      viewBox="0 0 16 32"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CursorDefs />
      <g filter="url(#cursor-shadow)">
        <rect x="4" y="1.5" width="8" height="6" rx="2.2" fill="url(#cursor-bevel)" />
        <rect x="5" y="2.5" width="6" height="4" rx="1.4" fill="#ffffff" opacity="0.6" />
        <rect x="4" y="6" width="8" height="20" fill="url(#cursor-body)" />
        <rect x="4" y="6" width="8" height="20" fill="url(#cursor-pillar)" opacity="0.85" />
        <rect x="4" y="24" width="8" height="6" rx="2.2" fill="url(#cursor-pillar-base)" />
        <rect
          x="4"
          y="1.5"
          width="8"
          height="29"
          rx="2.2"
          fill="none"
          stroke="#0a1118"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
        <line x1="4" y1="6.5" x2="12" y2="6.5" stroke="#0a1118" strokeOpacity="0.45" strokeWidth="0.4" />
      </g>
    </svg>
  );
}

export function TextLoadingCursor({
  spin = true,
  ...props
}: CursorSvgProps & { spin?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 32"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <CursorDefs />
      <g
        style={spin ? { transformOrigin: "8px 8px", animation: "cursor-spiral-spin 1.4s linear infinite" } : undefined}
      >
        <path
          d="M5 8 C5 4.5 11 4.5 11 8 C11 10.5 7.5 10.5 7.5 7.5"
          fill="none"
          stroke="url(#cursor-bevel)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#cursor-shadow)">
        <rect x="4" y="13" width="8" height="5" rx="2" fill="url(#cursor-bevel)" />
        <rect x="5" y="14" width="6" height="3" rx="1.2" fill="#ffffff" opacity="0.6" />
        <rect x="4" y="17" width="8" height="11" fill="url(#cursor-body)" />
        <rect x="4" y="17" width="8" height="11" fill="url(#cursor-pillar)" opacity="0.85" />
        <rect x="4" y="27" width="8" height="3.5" rx="1.6" fill="url(#cursor-pillar-base)" />
        <rect
          x="4"
          y="13"
          width="8"
          height="17.5"
          rx="2"
          fill="none"
          stroke="#0a1118"
          strokeOpacity="0.35"
          strokeWidth="0.6"
        />
      </g>
    </svg>
  );
}
