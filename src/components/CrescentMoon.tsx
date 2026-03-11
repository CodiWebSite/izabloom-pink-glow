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
        {/* Rich pink gradient */}
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(340, 80%, 75%)" />
          <stop offset="45%" stopColor="hsl(333, 71%, 55%)" />
          <stop offset="100%" stopColor="hsl(325, 65%, 45%)" />
        </linearGradient>
        {/* Inner highlight for volume */}
        <radialGradient id={`${id}-inner`} cx="32%" cy="30%" r="55%">
          <stop offset="0%" stopColor="hsl(345, 100%, 88%)" stopOpacity="0.65" />
          <stop offset="100%" stopColor="hsl(333, 70%, 50%)" stopOpacity="0" />
        </radialGradient>
        {/* Sheen reflection */}
        <radialGradient id={`${id}-sheen`} cx="28%" cy="22%" r="45%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Glow filter */}
        {glow && (
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        {/* Drop shadow */}
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="hsl(333, 71%, 40%)" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter={glow ? `url(#${id}-glow)` : `url(#${id}-shadow)`}>
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-grad)`}
        />
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-inner)`}
        />
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-sheen)`}
        />
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill="none"
          stroke="hsl(340, 80%, 80%)"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
      </g>
    </svg>
  );
};

export default CrescentMoon;
