import useReveal from "../hooks/useReveal";

const COLLECTIONS = [
  {
    name: "Gold Jewellery",
    desc: "Discover beautifully handcrafted gold jewellery designed to celebrate every special occasion with timeless elegance.",
    image: "/craft2.png",
  },
  {
    name: "Diamond Collection",
    desc: "Explore our dazzling diamond collection featuring exquisite craftsmanship and unmatched brilliance.",
    image: "/craft3.png",
  },
  {
    name: "Silver Collection",
    desc: "Elegant sterling silver jewellery crafted for everyday luxury and memorable celebrations.",
    image: "/craft1.png",
  },
];

export default function Collections() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section
      id="collections"
      className="bg-[#5B0838] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-[#D4AF37] text-[14px] mb-5">
            Signature Collections
          </p>

          <h2 className="text-5xl md:text-5xl text-[#F8F5EF] font-display font-bold">
            Chosen For The Occasion
          </h2>

          {/* Divider */}

          <div className="flex justify-center items-center gap-5 mt-8">

            <div className="w-32 h-[1px] bg-[#C8A25A]/40"></div>

            <div className="flex gap-2">

              <div className="w-4 h-4 border border-[#D4AF37] rotate-45"></div>

              <div className="w-4 h-4 rounded-full border border-[#D4AF37]"></div>

              <div className="w-4 h-4 border border-[#D4AF37] rotate-45"></div>

            </div>

            <div className="w-32 h-[1px] bg-[#C8A25A]/40"></div>

          </div>

        </div>

        {/* Cards */}

        <div
          ref={ref}
          className="grid lg:grid-cols-3 gap-10"
        >
          {COLLECTIONS.map((item, i) => (
            <div
              key={item.name}
              style={{
                transitionDelay: `${i * 180}ms`,
              }}
              className={`group overflow-hidden rounded-xl border border-[#C8A25A]/30 bg-[#641044] transition-all duration-700 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)]
              
              ${visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                }`}
            >

              {/* IMAGE */}

              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* CONTENT */}

              <div className="px-8 py-8">

                {/* Divider */}

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-[300px] h-[1px] bg-[#C8A25A]/40"></div>
                </div>

                {/* Title */}

                <h3 className="text-3xl text-center text-[#F8F5EF] font-serif mb-5">

                  {item.name}

                </h3>

                {/* Description */}

                <p className="text-center text-[#EADFD4]/70 leading-8 text-[15px]">

                  {item.desc}

                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}