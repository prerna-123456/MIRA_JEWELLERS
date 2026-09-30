import { useState } from "react";
import JaaliDivider from "./JaaliDivider";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Visit() {
  return (
    <section id="visit" className="relative bg-plum-deep py-28 overflow-hidden">
      <div className="absolute inset-0 bg-jaali bg-[length:60px_60px] opacity-[0.06]" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="font-body text-[14px] tracking-[0.3em] uppercase text-gold mb-4">
            Visit Us
          </p>

          <h2 className="font-display text-3xl sm:text-5xl text-ivory leading-tight mb-8 font-bold">
            Come sit at the workbench where your piece will be made.
          </h2>

          <ul className="space-y-5 font-body text-[16px] text-ivory/75">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Shop No. 14, Koppikar Road, Hubballi, Karnataka 580020</span>
            </li>

            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-gold mt-1 shrink-0" />
              <span>Monday – Sunday, 10:30 AM – 8:00 PM</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold mt-1 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+918296256920"><span className="hover:underline">+91 8296256920</span></a>
                <a href="tel:+919535480021"><span className="hover:underline">+91 9535480021</span></a> 
              </div>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/cta.png"
            alt="Mira Silver Jewellery"
            className="w-full max-w-md h-[500px] object-cover rounded-2xl shadow-2xl border border-gold/20 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
