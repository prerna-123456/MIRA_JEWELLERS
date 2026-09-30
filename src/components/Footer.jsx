/* import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; */
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#2b0620] text-white border-t border-[#c9a46b]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <img
              src="/mira-logo1.png"
              alt="MIRA"
              className="h-[250px] -mt-20"
            />

            <p className="text-[16px] text-white/70 leading-7 -mt-10">
              MIRA Silver Jewellery & Giftings offers timeless handcrafted
              silver jewellery, premium gift collections and elegant accessories
              designed for every occasion.
            </p>

            {/* <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#c9a46b] flex items-center justify-center hover:bg-[#c9a46b] hover:text-black transition-all duration-300"
              >
                <AiFillInstagram />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#c9a46b] flex items-center justify-center hover:bg-[#c9a46b] hover:text-black transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/918296256920"
                target="_blank"
                className="w-10 h-10 rounded-full border border-[#c9a46b] flex items-center justify-center hover:bg-[#c9a46b] hover:text-black transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="lg:ml-10">
            <h3 className="text-xl font-semibold text-[#c9a46b] mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/70">
              <li>
                <a href="#home" className="hover:text-[#c9a46b] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#collections" className="hover:text-[#c9a46b] transition">
                  Collections
                </a>
              </li>

              <li>
                <a href="#craft" className="hover:text-[#c9a46b] transition">
                  Craft
                </a>
              </li>

              <li>
                <a href="#heritage" className="hover:text-[#c9a46b] transition">
                  Heritage
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-[#c9a46b] transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#visit" className="hover:text-[#c9a46b] transition">
                  Visit Us
                </a>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-xl font-semibold text-[#c9a46b] mb-5">
              Collections
            </h3>

            <ul className="space-y-3 text-white/70">
              <a href="#collections"><li>Necklaces</li></a>
              <a href="#collections"><li className="mt-3">Earrings</li></a>
              <a href="#collections"><li className="mt-3">Rings</li></a>
              <a href="#collections"><li className="mt-3">Bracelets</li></a>
              <a href="#collections"><li className="mt-3">Silver Coins</li></a>
              <a href="#collections"><li className="mt-3">Gift Collections</li></a>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-[#c9a46b] mb-5">
              Contact Us
            </h3>

            <div className="space-y-5 text-white/70">

              <div className="flex gap-3">
                {/* <FaMapMarkerAlt className="text-[#c9a46b] mt-1" /> */}
                <p>
                  Shop No. 14, Coen Road,
                  <br />
                  Hubballi, Karnataka 580020
                </p>
              </div>

              <div className="flex gap-3">
                {/* <FaPhoneAlt className="text-[#c9a46b] mt-1" /> */}
                <a href="tel:+918296256920">
                  <span className="hover:underline">+91 8296256920</span>
                </a> <br />
                <a href="tel:+919535480021">
                  <span className="hover:underline">+91 9535480021</span>
                </a>
              </div>

              <div className="flex gap-3 hover:underline">
                {/* <FaEnvelope className="text-[#c9a46b] mt-1" /> */}
                <a href="mailto:info@mirasilver.com">
                  info@mirasilver.com
                </a>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 -mb-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} MIRA Silver Jewellery & Giftings. All Rights Reserved. Powered by
            <a
              href="https://spitel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Spitel Pvt. Ltd.</span>
            </a>
          </p>

          <div className="flex gap-6 text-sm text-white/60">
            <Link
              to="/privacy-policy"
              className="hover:text-[#c9a46b]"
            >
              Privacy Policy
            </Link>

            <a href="#" className="hover:text-[#c9a46b]">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}