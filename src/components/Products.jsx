import {
  GemStone,
  RingArt,
  EarringArt,
  NecklaceArt,
  BangleArt,
  SilverCoinArt,
} from "./JewelArt";
import useReveal from "../hooks/useReveal";
import JaaliDivider from "./JaaliDivider";
import { Heart } from "lucide-react";
import { useState } from "react";

const PRODUCTS = [
  {
    name: "Anaar Oxidised Ring",
    cat: "Ring",
    price: "₹1,850",
    image: "/collection1.png",
    Art: RingArt,
    gem: "silver",
  },
  {
    name: "Chandbali Jhumka",
    cat: "Earrings",
    price: "₹2,400",
    image: "/collection2.png",
    Art: EarringArt,
    gem: "gold",
  },
  {
    name: "Luxry Watches",
    cat: "Watch",
    price: "₹6,900",
    image: "/collection3.png",
    Art: NecklaceArt,
    gem: "silver",
  },
  {
    name: "Meenakari Cuff",
    cat: "Bangle",
    price: "₹3,200",
    image: "/collection4.png",
    Art: BangleArt,
    gem: "gold",
  },
  {
    name: "Signature Brooches",
    cat: "Brooches",
    price: "₹1,200",
    image: "/collection5.png",
    Art: SilverCoinArt,
    gem: "silver",
  },
  {
    name: "Rani Haar Set",
    cat: "Necklace",
    price: "₹9,500",
    image: "/collection6.png",
    Art: NecklaceArt,
    gem: "gold",
  },
];

function ProductCard({ p, i, visible }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className={`group relative bg-plum-light/30 border border-gold/15 p-5 transition-all duration-700 hover:-translate-y-1.5 ${visible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
        }`}
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      {/* Gold Border */}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: "1px",
          background:
            "linear-gradient(115deg, transparent 20%, #F2DFAE 45%, #C9A46B 50%, #F2DFAE 55%, transparent 80%)",
          backgroundSize: "250% 250%",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      >
        <span
          className="block w-full h-full animate-shimmer"
          style={{
            background: "inherit",
            backgroundSize: "inherit",
          }}
        />
      </div>

      {/* Wishlist */}
      <button
        onClick={() => setLiked((v) => !v)}
        aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        className="absolute top-5 right-5 z-10 text-ivory/50 hover:text-gold transition-colors"
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-300 ${liked ? "scale-125" : "scale-100"
            }`}
          fill={liked ? "#C9A46B" : "none"}
          stroke={liked ? "#C9A46B" : "currentColor"}
        />
      </button>

      {/* IMAGE */}
      <div className="w-full lg:h-[440px] mb-6 overflow-hidden rounded-lg">
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Category */}
      <p className="font-body text-[10px] tracking-[0.25em] uppercase text-gold/70 text-center mb-1">
        {p.cat}
      </p>

      {/* Name */}
      <h3 className="font-display text-[24px] text-ivory text-center mb-2">
        {p.name}
      </h3>

      {/* Price */}
      <p className="font-body text-[16px] text-ivory/70 text-center">
        {p.price}
      </p>
    </div>
  );
}

export default function Products() {
  const [ref, visible] = useReveal(0.05);

  return (
    <section id="pieces" className="bg-plum py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-gold mb-4">
            This Season
          </p>

          <h2 className="font-display font-bold text-5xl text-ivory">
            Featured Pieces
          </h2>
          <JaaliDivider className="mt-8" />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.name}
              p={p}
              i={i}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}