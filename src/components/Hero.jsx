import { NecklaceArt, GemStone } from "./JewelArt";
import LotusMark from "./LotusMark";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-plum-gradient bg-[length:200%_200%] animate-gradientShift pt-28 pb-16"
    >
      {/* ambient jaali backdrop */}
      <div className="absolute inset-0 bg-jaali bg-[length:60px_60px] opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-plum-deep/10 via-transparent to-plum-deep/60" />

      {/* floating gem accents */}
      {/* <GemStone
        variant="silver"
        className="hidden md:block absolute top-32 left-[8%] w-16 h-16 opacity-70 animate-floatSlow"
      /> */}
      <GemStone
        variant="gold"
        className="hidden md:block absolute bottom-24 left-[18%] w-10 h-10 opacity-70 animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <span className="hidden md:block absolute top-1/3 right-[6%] w-2 h-2 rounded-full bg-gold animate-sparkle" />
      <span className="hidden md:block absolute top-1/3 right-[14%] w-1.5 h-1.5 rounded-full bg-ivory animate-sparkle" style={{ animationDelay: "1s" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center w-full mt-14">
        <div className="animate-riseIn">
          {/* <LotusMark className="w-16 h-9 mb-6" /> */}
          {/* <p className="font-body text-[12px] tracking-[0.35em] uppercase text-gold/90 mb-6">
            Hubli &middot; Silver Jewellery &middot; Gold Jewellery
          </p> */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[4.2rem] leading-[1.05] text-ivory">
            Celebrating Every Moment with
            <br />
            <span className="italic text-gold">Timeless Jewellery</span>
          </h1>
          <p className="mt-7 max-w-md font-body text-[15px] leading-7 text-ivory/70">
            Discover handcrafted gold, diamond, and silver jewellery designed to celebrate your unique style with unmatched elegance, craftsmanship, and everlasting brilliance.
          </p>
          {/* <div className="mt-10 flex flex-wrap items-center gap-10">
            <a
              href="#collections"
              className="relative bg-gold text-plum-dark font-body text-[13px] tracking-[0.18em] uppercase px-8 py-4 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gold-light scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
              <span className="relative">View Collections</span>
            </a>
            <a
              href="#craft"
              className="font-body text-[13px] tracking-[0.18em] uppercase text-ivory/80 border-b border-ivory/30 pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Our Craft
            </a>
          </div> */}

          <div className="mt-14 flex gap-10 font-display">
            <div>
              <p className="text-3xl text-gold">18</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 font-body mt-1">
                Years of Craft
              </p>
            </div>
            <div>
              <p className="text-3xl text-gold">5,000+</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 font-body mt-1">
                Gifts Packed
              </p>
            </div>
            <div>
              <p className="text-3xl text-gold">92.5</p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivory/50 font-body mt-1">
                Sterling Silver
              </p>
            </div>
          </div>
        </div>

        <div className="relative animate-riseIn" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl scale-90 animate-glowPulse" />
          <div className="relative border border-gold/30 p-10 sm:p-10 bg-plum/30 backdrop-blur-sm">
            <img
              src="hero-image.png"
              alt="Meera Jewelers"
              className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain lg:object-cover"
            />
          </div>
        </div>
      </div>

      <a
        href="#heritage"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
