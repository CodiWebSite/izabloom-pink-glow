import CrescentMoon from "./CrescentMoon";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <CrescentMoon size={26} className="text-primary" />
      <span className="text-2xl md:text-3xl font-display text-foreground tracking-wide">
        Izabloom
      </span>
    </div>
  );
};

export default Logo;
