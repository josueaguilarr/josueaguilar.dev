/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 60%)",
        "dark-gradient":
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
      },
      fontFamily: {
        geist: ["Geist", "sans-serif"],
      },
      backgroundColor: {
        "default-light": "rgb(245 245 245 / 0.8)",
        "default-dark": "rgb(23 23 23 / 0.8)",
      },
      textColor: {
        "default-light": "#e5e5e5",
        "default-dark": "#171717",
      },
      keyframes: {
        animatedgradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
      animation: {
        gradient: "animatedgradient 20s ease infinite alternate",
        shine: "shine 5s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
