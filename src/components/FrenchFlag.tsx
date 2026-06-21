export default function FrenchFlag({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.667} viewBox="0 0 450 300" className="rounded-sm shadow-sm">
      <rect x="0" y="0" width="150" height="300" fill="#002395" />
      <rect x="150" y="0" width="150" height="300" fill="#FFFFFF" />
      <rect x="300" y="0" width="150" height="300" fill="#ED2939" />
      <rect x="0" y="0" width="450" height="300" fill="none" stroke="#00000020" strokeWidth="2" />
    </svg>
  );
}
