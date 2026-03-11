interface CrescentMoonProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

const CrescentMoon = ({ className = "", size = 24, glow = false }: CrescentMoonProps) => {
  const id = `moon-${Math.random().toString(36).slice(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(340, 80%, 75%)" />
          <stop offset="50%" stopColor="hsl(333, 71%, 55%)" />
          <stop offset="100%" stopColor="hsl(325, 65%, 48%)" />
        </linearGradient>
        <radialGradient id={`${id}-inner`} cx="25%" cy="25%" r="60%">
          <stop offset="0%" stopColor="hsl(345, 100%, 88%)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(333, 70%, 50%)" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`${id}-sheen`} cx="20%" cy="18%" r="40%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {glow && (
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="2.5" floodColor="hsl(333, 71%, 40%)" floodOpacity="0.2" />
        </filter>
      </defs>

      <g filter={glow ? `url(#${id}-glow)` : `url(#${id}-shadow)`}>
        {/* Elegant thin crescent: outer arc + inner arc offset to the right */}
        <path
          d="M45 2 A48 48 0 1 0 45 98 A38 38 0 1 1 45 2 Z"
          fill={`url(#${id}-grad)`}
        />
        <path
          d="M45 2 A48 48 0 1 0 45 98 A38 38 0 1 1 45 2 Z"
          fill={`url(#${id}-inner)`}
        />
        <path
          d="M45 2 A48 48 0 1 0 45 98 A38 38 0 1 1 45 2 Z"
          fill={`url(#${id}-sheen)`}
        />
      </g>
    </svg>
  );
};

export default CrescentMoon;
