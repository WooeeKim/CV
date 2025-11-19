/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        fog: "#f5f5f7",
        slate: "#1e293b"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "apple-system", "sans-serif"]
      }
    }
  },
  plugins: []
};
