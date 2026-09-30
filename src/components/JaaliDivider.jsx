// The signature motif of the site: a hand-drawn-feeling jaali (lattice)
// line that stands in for the section break. Real jaali screens carved in
// havelis and temples are built from a single repeating diamond-and-circle
// unit — this divider repeats that unit as a horizontal rule so every
// section break reads as "carved," not just spaced.
export default function JaaliDivider({ tone = "gold", className = "" }) {
  const stroke = tone === "gold" ? "#C9A46B" : tone === "silver" ? "#C9CDD3" : "#E3C9D6";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-10 sm:w-24 bg-gradient-to-r from-transparent to-current" style={{ color: stroke }} />
      <svg width="72" height="20" viewBox="0 0 72 20" fill="none" aria-hidden="true">
        <path d="M8 10 L18 2 L28 10 L18 18 Z" stroke={stroke} strokeWidth="1" />
        <circle cx="36" cy="10" r="5.5" stroke={stroke} strokeWidth="1" />
        <path d="M44 10 L54 2 L64 10 L54 18 Z" stroke={stroke} strokeWidth="1" />
      </svg>
      <span className="h-px w-10 sm:w-24 bg-gradient-to-l from-transparent to-current" style={{ color: stroke }} />
    </div>
  );
}
