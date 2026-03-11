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
            <stop offset="50%" stopColor="hsl(333, 71%, 55%)" />
            <stop offset="100%" stopColor="hsl(325, 65%, 48%)" />
          </linearGradient>
          <radialGradient id={`${id}-inner`} cx="25%" cy="25%" r="60%">
            <stop offset="0%" stopColor="hsl(345, 100%, 88%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(333, 70%, 50%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-sheen`} cx="20%" cy="18%" r="40%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <filter id={`${id}-glow`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter={`url(#${id}-glow)`}>
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
