import { useId } from "react";

interface CrescentMoonProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

const CrescentMoon = ({ className = "", size = 24, glow = false }: CrescentMoonProps) => {
  const id = useId().replace(/:/g, "");

  const moonPath =
    "M50 2 A48 48 0 1 0 50 98 A48 48 0 1 0 50 2 Z M70 10 A40 40 0 1 1 70 90 A40 40 0 1 1 70 10 Z";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="18" y1="12" x2="78" y2="88" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(334 86% 82%)" />
          <stop offset="55%" stopColor="hsl(333 71% 55%)" />
          <stop offset="100%" stopColor="hsl(326 62% 44%)" />
        </linearGradient>
        <radialGradient id={`${id}-gloss`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(34 24) rotate(52) scale(42 34)">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="hsl(333 60% 45%)" floodOpacity="0.22" />
        </filter>
        {glow && (
          <filter id={`${id}-glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      <g filter={glow ? `url(#${id}-glow)` : `url(#${id}-shadow)`}>
        <path d={moonPath} fill={`url(#${id}-grad)`} fillRule="evenodd" clipRule="evenodd" />
        <path d={moonPath} fill={`url(#${id}-gloss)`} fillRule="evenodd" clipRule="evenodd" />
      </g>
    </svg>
  );
};

export default CrescentMoon;
