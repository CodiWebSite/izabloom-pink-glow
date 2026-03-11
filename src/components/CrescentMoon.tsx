import { useId } from "react";

interface CrescentMoonProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

const CrescentMoon = ({ className = "", size = 24, glow = false }: CrescentMoonProps) => {
  const id = useId().replace(/:/g, "");

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
        <linearGradient id={`${id}-grad`} x1="16" y1="14" x2="78" y2="86" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="hsl(334 86% 82%)" />
          <stop offset="55%" stopColor="hsl(333 71% 55%)" />
          <stop offset="100%" stopColor="hsl(326 62% 44%)" />
        </linearGradient>
        <radialGradient
          id={`${id}-gloss`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30 24) rotate(42) scale(38 30)"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.5" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
          <rect width="100" height="100" fill="black" />
          <circle cx="42" cy="50" r="42" fill="white" />
          <circle cx="66" cy="46" r="36" fill="black" />
        </mask>
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

      <g filter={glow ? `url(#${id}-glow)` : `url(#${id}-shadow)`} mask={`url(#${id}-mask)`}>
        <rect width="100" height="100" fill={`url(#${id}-grad)`} />
        <rect width="100" height="100" fill={`url(#${id}-gloss)`} />
      </g>
    </svg>
  );
};

export default CrescentMoon;

