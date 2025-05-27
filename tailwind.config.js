/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        primary: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"],
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
    },
  },
};
