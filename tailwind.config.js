/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // sampled directly from the Mira logo's magenta-plum gradient
        plum: {
          DEFAULT: "#5C0A3A",
          light: "#7A0E4A",
          dark: "#2B0222",
          deep: "#1A0115",
        },
        gold: {
          DEFAULT: "#C9A46B",
          light: "#E4C68F",
          dark: "#96793F",
          foil: "#F2DFAE",
        },
        silver: {
          DEFAULT: "#C9CDD3",
          light: "#EAECEF",
          dark: "#8B9198",
        },
        ivory: "#F8F3EC",
        charcoal: "#1B1416",
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Jost'", "sans-serif"],
      },
      backgroundImage: {
        jaali:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cg fill='none' stroke='%23C9A46B' stroke-width='0.6' opacity='0.35'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z'/%3E%3Ccircle cx='30' cy='30' r='14'/%3E%3C/g%3E%3C/svg%3E\")",
        "plum-gradient":
          "linear-gradient(135deg, #7A0E4A 0%, #5C0A3A 35%, #2B0222 75%, #1A0115 100%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        riseIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        petalDraw: {
          "0%": { strokeDashoffset: "220" },
          "100%": { strokeDashoffset: "0" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        sparkle: {
          "0%,100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
        riseIn: "riseIn 0.9s cubic-bezier(0.22,1,0.36,1) both",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
        gradientShift: "gradientShift 12s ease infinite",
        marquee: "marquee 28s linear infinite",
        petalDraw: "petalDraw 1.8s ease-out forwards",
        glowPulse: "glowPulse 4s ease-in-out infinite",
        spinSlow: "spinSlow 22s linear infinite",
        sparkle: "sparkle 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
