module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#9333ea",

            "secondary": "#c026d3",

            "accent": "#37CDBE",

            "neutral": "#3D4451",

            "base-100": "#FFFFFF",

            "info": "#84cc16",

            "success": "#36D399",

            "warning": "#FBBD23",

            "error": "#e11d48",
          },
        },
      ],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}