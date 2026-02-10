import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // BRAND DPF
        primary: {
          50: "#fff7e6",
          100: "#ffebbf",
          200: "#ffd68a",
          300: "#ffbf4d",
          400: "#ffa826",
          500: "#ff8a00", // oranye utama (CTA)
          600: "#f97316",
          700: "#ea580c",
          800: "#c2410c",
          900: "#9a3412",
        },
        brandGreen: {
          50: "#f3faf3",
          100: "#e1f4e1",
          200: "#bde4bd",
          300: "#8fcd8f",
          400: "#5fab5f",
          500: "#3f8f3f", // hijau logo
          600: "#347334",
          700: "#295a29",
          800: "#1f4220",
          900: "#152d16",
        },
        brandBlueTeal: {
          500: "#2B7A9B", // Custom Blue Teal
          100: "#EAF5F8", // light bg
        },
        brandWarmOrange: {
          500: "#F39C12", // Custom Warm Orange
          100: "#FEF5E7", // light bg
        },
        brandPurple: {
          500: "#8E44AD", // Custom Purple
          100: "#F4ECF7", // light bg
        },
      },
      fontFamily: {
        // Poppins sebagai font utama.
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
        accent: ["var(--font-poppins)", "system-ui", "sans-serif"],
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        script: ["var(--font-dancing-script)", "cursive"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      borderRadius: {
        "xl": "0.9rem",
        "2xl": "1.2rem",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "shake-smooth": {
          '0%': { transform: 'translateX(0)' },
          '10%': { transform: 'translateX(-12px)' },
          '20%': { transform: 'translateX(12px)' },
          '30%': { transform: 'translateX(-10px)' },
          '40%': { transform: 'translateX(10px)' },
          '50%': { transform: 'translateX(-6px)' },
          '60%': { transform: 'translateX(6px)' },
          '70%': { transform: 'translateX(-3px)' },
          '80%': { transform: 'translateX(3px)' },
          '90%': { transform: 'translateX(-1px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        shine: "shine 8s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "shake-smooth": "shake-smooth 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
