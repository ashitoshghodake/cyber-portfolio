/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          950: "#04070d",
          900: "#08111f",
          800: "#0d1b2a",
          700: "#13263b",
          500: "#1de9b6",
          400: "#57f287",
          300: "#8cffc1",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(29, 233, 182, 0.25), 0 0 35px rgba(29, 233, 182, 0.15)",
        intense: "0 0 0 1px rgba(87, 242, 135, 0.3), 0 0 55px rgba(87, 242, 135, 0.2)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(29, 233, 182, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29, 233, 182, 0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 2.8s ease-in-out infinite",
        scan: "scan 10s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        scan: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(120%)" },
        },
      },
    },
  },
  plugins: [],
};
