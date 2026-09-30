import useReveal from "../hooks/useReveal";
import JaaliDivider from "./JaaliDivider";

const GIFTS = [
  {
    image: "/gift1.png",
    title: "Rose Platter",
  },
  {
    image: "/gift2.png",
    title: "Ganpati Shank",
  },
  {
    image: "/gift3.png",
    title: "Kamdhenu Mat",
  },
  {
    image: "/gift4.png",
    title: "Swan & Baby",
  },
  {
    image: "/gift5.png",
    title: "Antique Dry Fruit Box",
  },
  {
    image: "/gift6.png",
    title: "Antique Vase",
  },
  {
    image: "/gift7.png",
    title: "Candy Box",
  },
  {
    image: "/gift8.png",
    title: "Rose Wall Clock",
  },
];

export default function Gifting() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="gifting" className="bg-ivory py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-plum mb-4">
            Exclusive Gifts
          </p>

          <h2 className="font-display text-5xl text-black font-bold">
            Silver Gifting Collection
          </h2>

          <JaaliDivider className="mt-8" />
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {GIFTS.map((gift, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-xl border border-plum bg-plum transition-all duration-700 hover:-translate-y-2 hover:border-gold/60 ${visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={gift.image}
                  alt={gift.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  {gift.title}
                </h3>

                <a
                  href="#visit"
                  className="font-body text-[12px] uppercase tracking-[0.2em] text-gold border-b border-transparent hover:border-gold transition-all"
                >
                  Enquire
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}