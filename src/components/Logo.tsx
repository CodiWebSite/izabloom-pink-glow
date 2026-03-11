const Logo = ({ className = "" }: { className?: string }) => {
  const id = "logo-moon";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <defs>
          <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(340, 80%, 75%)" />
            <stop offset="45%" stopColor="hsl(333, 71%, 55%)" />
            <stop offset="100%" stopColor="hsl(325, 65%, 45%)" />
          </linearGradient>
          <radialGradient id={`${id}-inner`} cx="32%" cy="30%" r="55%">
            <stop offset="0%" stopColor="hsl(345, 100%, 88%)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(333, 70%, 50%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-sheen`} cx="28%" cy="22%" r="45%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#${id}-glow)`}>
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
            strokeWidth="0.6"
            strokeOpacity="0.4"
          />
        </g>
      </svg>
      <span
        className="text-2xl md:text-3xl font-serif italic tracking-wide text-foreground"
        style={{ fontFamily: "'Dancing Script', 'Merriweather', cursive" }}
      >
        Izabloom
      </span>
    </div>
  );
};

export default Logo;
