interface MalagasyFlagProps {
  size?: number;
  className?: string;
}

export default function MalagasyFlag({ size = 24, className = '' }: MalagasyFlagProps) {
  return (
    <svg
      width={size}
      height={size * 0.667}
      viewBox="0 0 450 300"
      className={`rounded-sm shadow-sm ${className}`}
    >
      {/* White vertical band on left */}
      <rect x="0" y="0" width="150" height="300" fill="#FFFFFF" />
      {/* Red horizontal band top */}
      <rect x="150" y="0" width="300" height="150" fill="#D22630" />
      {/* Green horizontal band bottom */}
      <rect x="150" y="150" width="300" height="150" fill="#007A33" />
      {/* Border */}
      <rect x="0" y="0" width="450" height="300" fill="none" stroke="#00000020" strokeWidth="2" />
    </svg>
  );
}
