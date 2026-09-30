import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Craft", href: "#craft" },
  { label: "Gifting", href: "#gifting" },
  { label: "Heritage", href: "#heritage" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="top-0 z-50 absolute inset-0 bg-gradient-to-b from-plum-deep/10 via-transparent"
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between -mt-14">
        <a href="#top" className="flex items-center gap-3 group animate-riseIn">
          <img
            src="/mira-logo1.png"
            alt="Mira — Silver Jewellery & Giftings logo"
            className="w-auto rounded-sm transition-all duration-500 group-hover:rotate-3 h-[250px] -ml-10"
          />
          {/* <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-2xl tracking-wide text-ivory">
              MIR<span className="text-gold italic">A</span>
            </span>
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-gold/70 mt-1">
              Silver &amp; Giftings
            </span>
          </span> */}
        </a>

        <ul className="hidden md:flex items-center gap-10 font-body text-[13px] tracking-[0.18em] uppercase text-ivory/80">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative py-1 hover:text-gold transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className="hidden md:inline-block relative border border-gold/60 text-gold text-[12px] tracking-[0.18em] uppercase px-5 py-2.5 overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 -z-0" />
          <span className="relative z-10 group-hover:text-plum-dark transition-colors duration-300">
            Book Viewing
          </span>
        </a>

        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-4 px-6 pb-6 flex flex-col gap-5 bg-plum-dark border-b border-gold/20 font-body text-sm tracking-[0.15em] uppercase text-ivory/85 animate-riseIn">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#visit" onClick={() => setOpen(false)} className="text-gold">
            Book Viewing →
          </a>
        </div>
      )}
    </header>
  );
}
