/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7F11",
        secondary: "#DCE8DC",
        gray: "#ACB5AC",
        black: "#262626",
      },
      keyframes: {
        blink: {
          "50%": { borderColor: "transparent" },
        },
        typing: {
          from: { width: 0 },
        },
      },
      animation: {
        blink: "blink 0.5s step-end infinite alternate",
        typing: "typing 2s steps(22)",
        typed: "typing 2s steps(22), blink 0.5s step-end infinite alternate",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
  },
  plugins: [],
};
