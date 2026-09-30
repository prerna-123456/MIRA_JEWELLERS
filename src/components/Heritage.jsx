import useReveal from "../hooks/useReveal";
import JaaliDivider from "./JaaliDivider";
import LotusMark from "./LotusMark";

export default function Heritage() {
  const [ref, visible] = useReveal();
  return (
    <section id="heritage" className="bg-ivory text-charcoal py-28">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {visible && <LotusMark color="#7A0E4A" className="w-16 h-9 mx-auto mb-6" />}
        <p className="font-body text-[14px] tracking-[0.3em] uppercase text-plum mb-6">
          THE MEERA STORY
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-snug">
          Crafting Timeless Elegance, One Masterpiece at a Time
        </h2>
        <JaaliDivider className="my-10" tone="black" />
        <p className="font-body text-[16px] leading-8 text-charcoal/70 max-w-2xl mx-auto">
          At Meera Jewelers, every piece is a celebration of beauty, craftsmanship, and tradition. We believe jewellery is more than an ornament—it's a reflection of your personality, your milestones, and the memories you cherish for a lifetime.
        </p>
      </div>
    </section>
  );
}
