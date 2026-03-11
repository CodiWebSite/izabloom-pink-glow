const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Pink Crescent Moon - proper crescent shape */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
          fill="currentColor"
        />
      </svg>
      {/* Handwritten Izabloom */}
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
