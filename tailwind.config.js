/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(220, 90%, 56%)",
          50: "hsl(220, 90%, 96%)",
          100: "hsl(220, 90%, 90%)",
        },
        accent: "#fb923c",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      fontFamily: {
        primary: ["Roboto", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
      },
      borderRadius: {
        lg: "0.75rem",
      },
      clipPath: {
        "custom-shape":
          "polygon(10% 0%, 100% 0%, 100% 100%, 90% 100%, 0% 100%, 0% 0%)",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        scrollRight: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-30%)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "scroll-right": "scrollRight 30s linear infinite",
        spinSlow: "spin 2s linear infinite",
        gradient: "gradient 8s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".clip-custom-shape": {
          "clip-path":
            "polygon(10% 0%, 100% 0%, 100% 100%, 90% 100%, 0% 100%, 0% 0%)",
        },
      });
    },
  ],
};
