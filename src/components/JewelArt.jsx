// Hand-built SVG illustrations in Mira's own plum / gold / silver palette —
// used in place of stock photography everywhere on the site.

export function GemStone({ className = "", variant = "silver", style }) {
  const stops = {
    silver: ["#EAECEF", "#8B9198"],
    plum: ["#7A0E4A", "#2B0222"],
    gold: ["#F2DFAE", "#96793F"],
  }[variant];
  const uid = `gem-${variant}`;
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={uid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={stops[0]} />
          <stop offset="100%" stopColor={stops[1]} />
        </linearGradient>
      </defs>
      <polygon points="60,6 100,38 86,100 34,100 20,38" fill={`url(#${uid})`} stroke="#C9A46B" strokeWidth="1.5" />
      <polygon points="60,6 100,38 60,46 20,38" fill="#fff" opacity="0.14" />
      <polygon points="60,46 86,100 34,100" fill="#000" opacity="0.15" />
      <polygon points="20,38 60,46 34,100" fill="#fff" opacity="0.06" />
    </svg>
  );
}

export function NecklaceArt({ className = "" }) {
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="chainSilver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EAECEF" />
          <stop offset="100%" stopColor="#8B9198" />
        </linearGradient>
      </defs>
      <path
        d="M40 30 C 40 160, 360 160, 360 30"
        fill="none"
        stroke="url(#chainSilver)"
        strokeWidth="2.5"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <path
        d="M120 130 C 150 210, 250 210, 280 130"
        fill="none"
        stroke="url(#chainSilver)"
        strokeWidth="2"
        strokeDasharray="1 7"
      />
      {[...Array(7)].map((_, i) => {
        const x = 130 + i * 23;
        const y = 150 + Math.sin((i / 6) * Math.PI) * 45;
        return <circle key={i} cx={x} cy={y} r={i === 3 ? 12 : 7} fill="#C9CDD3" stroke="#F8F3EC" strokeWidth="1" />;
      })}
      <polygon points="200,190 213,214 200,238 187,214" fill="#C9A46B" stroke="#F2DFAE" strokeWidth="1" />
    </svg>
  );
}

export function RingArt({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="62" r="26" fill="none" stroke="#C9CDD3" strokeWidth="4" />
      <polygon points="50,14 64,32 50,44 36,32" fill="#7A0E4A" stroke="#F2DFAE" strokeWidth="1.5" />
    </svg>
  );
}

export function EarringArt({ className = "" }) {
  return (
    <svg viewBox="0 0 80 140" className={className} aria-hidden="true">
      <circle cx="40" cy="18" r="8" fill="none" stroke="#C9CDD3" strokeWidth="2.5" />
      <line x1="40" y1="26" x2="40" y2="52" stroke="#C9CDD3" strokeWidth="1.5" strokeDasharray="1 5" />
      <polygon points="40,52 58,80 40,120 22,80" fill="#7A0E4A" stroke="#F2DFAE" strokeWidth="1.5" />
    </svg>
  );
}

export function BangleArt({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="34" fill="none" stroke="#C9CDD3" strokeWidth="7" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#C9A46B" strokeWidth="1.5" strokeDasharray="2 6" />
    </svg>
  );
}

export function SilverCoinArt({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="#EAECEF" stroke="#8B9198" strokeWidth="2" />
      <circle cx="50" cy="50" r="30" fill="none" stroke="#C9A46B" strokeWidth="1" strokeDasharray="1 4" />
      <path d="M50 30 C 44 40, 44 50, 50 60 C 56 50, 56 40, 50 30 Z" fill="#C9A46B" opacity="0.85" />
    </svg>
  );
}

export function GiftBoxArt({ className = "" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="18" y="42" width="64" height="42" fill="#7A0E4A" stroke="#C9A46B" strokeWidth="1.5" />
      <rect x="18" y="42" width="64" height="10" fill="#5C0A3A" stroke="#C9A46B" strokeWidth="1.5" />
      <rect x="45" y="20" width="10" height="64" fill="#C9A46B" />
      <path d="M50 24 C 40 10, 20 14, 26 28 C 32 36, 44 30, 50 24 Z" fill="none" stroke="#C9A46B" strokeWidth="1.5" />
      <path d="M50 24 C 60 10, 80 14, 74 28 C 68 36, 56 30, 50 24 Z" fill="none" stroke="#C9A46B" strokeWidth="1.5" />
    </svg>
  );
}
