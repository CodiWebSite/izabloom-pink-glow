interface CrescentMoonProps {
  className?: string;
  size?: number;
}

const CrescentMoon = ({ className = "", size = 24 }: CrescentMoonProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-primary ${className}`}
    >
      <path
        d="M50 5C25.147 5 5 25.147 5 50s20.147 45 45 45c6.485 0 12.671-1.373 18.246-3.841C53.87 85.847 43 69.354 43 50c0-19.354 10.87-35.847 25.246-41.159C62.671 6.373 56.485 5 50 5z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CrescentMoon;
