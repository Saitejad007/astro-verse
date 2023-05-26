/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkblue: "#0B0C10",
      spaceblue: "#000022",
      "cosmic-purple": "#4c0080",
      "nebula-pink": "#ff66cc",
      "stardust-silver": "#cccccc",
      white: "#ffffff",
      "light-gray": "#666666",
      spaceblack: "#000010",
      lightblue: "#1F2833",
      purple: "#C5C6C7",
      black: "#66FCF1",
      gray: "#e5e7eb",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
