const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {/* Pink Crescent Moon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14c1.5 0 2.942-.235 4.297-.668C15.31 27.59 12 23.186 12 18c0-5.186 3.31-9.59 8.297-11.332A13.955 13.955 0 0016 2z"
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
