import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Heritage from "./components/Heritage";
import Craftsmanship from "./components/Craftsmanship";
import Collections from "./components/Collections";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import Footer from "./components/Footer";
import Gifting from "./components/Gifting";
import PrivacyPolicy from "./components/PrivacyPolicy";

function Home() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <Marquee />
      <Heritage />
      <Craftsmanship />
      <Gifting />
      <Collections />
      <Products />
      <Testimonials />
      <Gallery />
      <Visit />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/privacy-policy"
        element={<PrivacyPolicy />}
      />
    </Routes>
  );
}