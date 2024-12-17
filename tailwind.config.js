/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JavaScript and TypeScript files in the src directory
  ],
  theme: {
    extend: {
      colors: {
        "yellow-200-accent": "#FFEB3B", // Replace with your preferred light yellow color code
      },
      fontSize: {
        xxs: "0.625rem", // Extra small, 10px
      },
    },
  },
  plugins: [],
};
