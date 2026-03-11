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
        {/* Main gradient - warm gold to soft rose */}
        <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(45, 90%, 70%)" />
          <stop offset="40%" stopColor="hsl(35, 85%, 65%)" />
          <stop offset="100%" stopColor="hsl(333, 71%, 60%)" />
        </linearGradient>
        {/* Inner shadow gradient for depth */}
        <radialGradient id={`${id}-inner`} cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="hsl(45, 100%, 85%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(35, 80%, 55%)" stopOpacity="0" />
        </radialGradient>
        {/* Subtle texture overlay */}
        <radialGradient id={`${id}-sheen`} cx="30%" cy="25%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        {/* Outer glow */}
        {glow && (
          <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
        {/* Drop shadow for 3D feel */}
        <filter id={`${id}-shadow`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="hsl(333, 71%, 40%)" floodOpacity="0.25" />
        </filter>
      </defs>
      
      <g filter={glow ? `url(#${id}-glow)` : `url(#${id}-shadow)`}>
        {/* Main crescent shape */}
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-grad)`}
        />
        {/* Inner highlight for volume */}
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-inner)`}
        />
        {/* Sheen/reflection */}
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill={`url(#${id}-sheen)`}
        />
        {/* Subtle edge highlight */}
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill="none"
          stroke="hsl(45, 80%, 75%)"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />
      </g>
    </svg>
  );
};

export default CrescentMoon;
