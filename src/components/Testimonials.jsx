import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JaaliDivider from "./JaaliDivider";

const QUOTES = [
  {
    text: "I ordered the Shagun coin sets for my whole family's Diwali gifting. Every box looked like it came from a much bigger brand.",
    name: "Ananya R.",
    city: "Hubli",
  },
  {
    text: "They re-oxidised my grandmother's old silver into something I actually reach for. Nothing was melted down without a conversation first.",
    name: "Devika S.",
    city: "Mumbai",
  },
  {
    text: "The finishing on the back of my choker is as careful as the front. That attention is the whole workshop, really.",
    name: "Priya M.",
    city: "Delhi",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % QUOTES.length);
  const prev = () => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length);
  const q = QUOTES[i];

  return (
    <section className="bg-ivory text-charcoal py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-body text-[14px] tracking-[0.3em] uppercase text-plum mb-8">
          From Our Customers & Their Families
        </p>
        <blockquote
          key={i}
          className="font-display italic text-2xl sm:text-3xl leading-relaxed min-h-[9rem] animate-riseIn"
        >
          &ldquo;{q.text}&rdquo;
        </blockquote>
        <p className="mt-6 font-body text-[13px] tracking-[0.1em] uppercase text-charcoal/60">
          {q.name} &middot; {q.city}
        </p>

        <JaaliDivider className="my-8" tone="silver" />

        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 flex items-center justify-center border border-plum/30 text-plum hover:bg-plum hover:text-ivory transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === i ? "bg-plum w-4" : "bg-plum/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 flex items-center justify-center border border-plum/30 text-plum hover:bg-plum hover:text-ivory transition-colors duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
