// The lotus from the Mira logo, redrawn as line art so it can be animated.
// Petals are separate paths with a shared stroke-dash "draw on" animation —
// the same bloom moment the logo captures, brought to life once per view.
export default function LotusMark({ className = "", animate = true, color = "#C9A46B" }) {
  const petals = [
    "M50 8 C 44 22, 44 34, 50 46 C 56 34, 56 22, 50 8 Z",
    "M32 14 C 32 28, 38 38, 50 46 C 46 32, 40 22, 32 14 Z",
    "M68 14 C 68 28, 62 38, 50 46 C 54 32, 60 22, 68 14 Z",
    "M16 30 C 20 42, 30 48, 50 46 C 36 42, 24 38, 16 30 Z",
    "M84 30 C 80 42, 70 48, 50 46 C 64 42, 76 38, 84 30 Z",
  ];
  return (
    <svg viewBox="0 0 100 54" className={className} aria-hidden="true">
      {petals.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray={animate ? 220 : 0}
          strokeDashoffset={animate ? 220 : 0}
          className={animate ? "animate-petalDraw" : ""}
          style={animate ? { animationDelay: `${i * 0.15}s` } : undefined}
        />
      ))}
    </svg>
  );
}
