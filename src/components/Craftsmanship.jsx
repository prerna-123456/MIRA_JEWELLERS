import useReveal from "../hooks/useReveal";
import JaaliDivider from "./JaaliDivider";

const STEPS = [
  {
    n: "01",
    title: "Design & Inspiration",
    text: "Every masterpiece begins with a unique design inspired by tradition, modern elegance, and the beauty of timeless craftsmanship.",
  },
  {
    n: "02",
    title: "Finest Materials",
    text: "We carefully select premium-quality gold, diamonds, silver, and precious gemstones to ensure exceptional beauty and lasting value.",
  },
  {
    n: "03",
    title: "Expert Craftsmanship",
    text: "Our skilled artisans meticulously handcraft each piece with precision, passion, and attention to every intricate detail.",
  },
  {
    n: "04",
    title: "Precision Finishing",
    text: "Each jewellery piece undergoes detailed polishing, stone setting, and quality inspection to achieve a flawless and luxurious finish.",
  },
  {
    n: "05",
    title: "A Timeless Treasure",
    text: "Every creation from Meera Jewelers is designed to celebrate life's special moments, becoming a cherished keepsake for generations.",
  },
];

export default function Craftsmanship() {
  const [ref, visible] = useReveal(0.1);
  return (
    <section id="craft" className="bg-plum py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-jaali bg-[length:60px_60px] opacity-[0.08]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-gold mb-4">
            OUR CRAFTSMANSHIP
          </p>
          <h2 className="font-display text-5xl text-ivory font-bold">From Vision to Timeless Elegance</h2>
          <JaaliDivider className="mt-8" />
        </div>

        <div ref={ref} className="relative">
          {/* connecting line for the sequence */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className={`transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <p className="font-display text-5xl text-gold/30 mb-3">{s.n}</p>
                <h3 className="font-display text-[23px] text-ivory mb-2">{s.title}</h3>
                <p className="font-body text-[14px] leading-6 text-ivory/60">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
