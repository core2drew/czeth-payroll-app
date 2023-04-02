/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "naples-yellow": "#FFCF5D",
      "naples-yellow-200": "#FFC335",
      marigold: "#F09E2A",
      "japanese-indigo": "#24444F",
    },
  },
  plugins: [require("flowbite/plugin")],
};
