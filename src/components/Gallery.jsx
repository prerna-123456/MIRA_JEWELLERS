import { NecklaceArt, RingArt, EarringArt, BangleArt, SilverCoinArt } from "./JewelArt";
import useReveal from "../hooks/useReveal";
import JaaliDivider from "./JaaliDivider";

const TILES = [
  {
    image: "/gallery1.png",
    span: "sm:col-span-2 sm:row-span-2",
    bg: "bg-plum-light/30",
  },
  {
    image: "/gallery2.png",
    span: "",
    bg: "bg-gold/10",
  },
  {
    image: "/gallery3.png",
    span: "",
    bg: "bg-plum-light/40",
  },
  {
    image: "/gallery7.png",
    span: "",
    bg: "bg-silver/10",
  },
  {
    image: "/gallery5.png",
    span: "",
    bg: "bg-gold/10",
  },
];

export default function Gallery() {
  const [ref, visible] = useReveal(0.05);

  return (
    <section id="gallery" className="bg-plum py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-gold mb-4">
            Lookbook
          </p>

          <h2 className="font-display text-5xl text-ivory font-bold">
            From The Latest Shoot
          </h2>

          <JaaliDivider className="mt-8" />
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[230px] sm:auto-rows-[330px] gap-4"
        >
          {TILES.map((t, i) => (
            <div
              key={i}
              className={`relative overflow-hidden border border-gold/15 flex items-center justify-center transition-all duration-700 ${t.span} ${t.bg} ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={t.image}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}