const ITEMS = [
  "925 Sterling Silver",
  "Handcrafted in Jaipur",
  "Oxidised & Antique Finishes",
  "Rakhi & Diwali Giftings",
  "Personalised Hampers",
  "Lifetime Polishing Care",
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-gold text-plum-dark py-3 overflow-hidden border-y border-gold-dark/40">
      <div className="flex whitespace-nowrap animate-marquee w-max">
        {track.map((item, i) => (
          <span
            key={i}
            className="font-body text-[12px] tracking-[0.2em] uppercase px-6 flex items-center gap-6"
          >
            {item}
            <span aria-hidden="true" className="text-plum-dark/40">
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
