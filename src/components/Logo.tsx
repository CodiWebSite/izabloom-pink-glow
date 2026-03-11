import { forwardRef } from "react";
import CrescentMoon from "./CrescentMoon";

const Logo = forwardRef<HTMLDivElement, { className?: string }>(({ className = "" }, ref) => {
  return (
    <div ref={ref} className={`flex items-center gap-2.5 ${className}`}>
      <CrescentMoon size={32} glow className="shrink-0" />
      <span
        className="text-2xl md:text-3xl font-serif italic tracking-wide text-foreground"
        style={{ fontFamily: "'Dancing Script', 'Merriweather', cursive" }}
      >
        Izabloom
      </span>
    </div>
  );
});

Logo.displayName = "Logo";

export default Logo;
