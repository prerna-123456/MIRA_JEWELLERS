# Mira — Silver Jewellery & Giftings — Website

A bespoke one-page site for Mira, a Jaipur sterling-silver jewellery and
gifting house, built with **React**, **Vite**, and **Tailwind CSS**.

## Brand palette (sampled from the logo)

- Plum / magenta gradient: #7A0E4A → #5C0A3A → #2B0222 → #1A0115
- Gold accent: #C9A46B (light #E4C68F, dark #96793F, foil #F2DFAE)
- Silver accent: #C9CDD3 (light #EAECEF, dark #8B9198)
- Ivory text: #F8F3EC

The actual logo file (`public/mira-logo.jpg`) is used in the navbar,
footer, and browser favicon.

## Design concept

- **Signature motif:** the logo's lotus, redrawn as animated line art
  (`LotusMark.jsx`) — petals draw themselves in with a stroke animation
  the first time they scroll into view.
- **Secondary motif:** a jaali (lattice) divider between sections,
  echoing carved stone screens from Rajasthani havelis and temples.
- **Artwork:** every "product photo" is original SVG line art (necklace,
  ring, earring, bangle, silver coin, gift box) in the brand's own
  palette — not stock photography.
- **Motion:** animated gradient hero background, a scrolling marquee
  strip, staggered scroll-reveals throughout, a gold-foil shimmer on
  product-card hover, sparkle accents, and a spin-in gem on collection
  cards. All motion respects `prefers-reduced-motion`.

## Getting started

    npm install
    npm run dev       # start local dev server
    npm run build     # production build -> dist/
    npm run preview   # preview the production build

## Project structure

    public/
      mira-logo.jpg        # the brand logo, used site-wide
    src/
      components/
        Navbar.jsx
        Hero.jsx
        Marquee.jsx         # scrolling ticker strip
        Heritage.jsx
        Craftsmanship.jsx
        Collections.jsx
        Products.jsx
        Testimonials.jsx
        Gallery.jsx
        Visit.jsx
        Footer.jsx
        JaaliDivider.jsx    # lattice section-divider motif
        LotusMark.jsx       # animated lotus signature (from the logo)
        JewelArt.jsx        # original SVG jewellery/gifting illustrations
      hooks/
        useReveal.js        # scroll-reveal intersection-observer hook
      App.jsx
      main.jsx
      index.css
    tailwind.config.js

## Customising

- Swap in real product photography by replacing the Art components in
  Products.jsx / Collections.jsx / Gallery.jsx with <img> tags.
- Update copy, prices, and contact details directly in each component —
  all content is plain JSX, no CMS wiring.
- Brand colours, fonts, and animation keyframes live in
  tailwind.config.js under theme.extend.
