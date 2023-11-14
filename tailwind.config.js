/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        f_11_l_14: [
          "11px",
          {
            lineHeight: "14px",
          },
        ],

        f_12_l_15: [
          "12px",
          {
            lineHeight: "15px",
          },
        ],

        f_13_l_16: [
          "13px",
          {
            lineHeight: "16px",
          },
        ],

        f_14_l_18: [
          "14px",
          {
            lineHeight: "18px",
          },
        ],

        f_14_l_22: [
          "14px",
          {
            lineHeight: "22px",
          },
        ],

        f_15_l_19: [
          "15px",
          {
            lineHeight: "19px",
          },
        ],

        f_16_l_20: [
          "16px",
          {
            lineHeight: "20px",
          },
        ],

        f_16_l_25: [
          "16px",
          {
            lineHeight: "25px",
          },
        ],

        f_18_l_23: [
          "18px",
          {
            lineHeight: "23px",
          },
        ],

        f_18_l_28: [
          "18px",
          {
            lineHeight: "28px",
          },
        ],

        f_19_l_24: [
          "19px",
          {
            lineHeight: "24px",
          },
        ],

        f_20_l_25: [
          "20px",
          {
            lineHeight: "25px",
          },
        ],

        f_22_l_28: [
          "22px",
          {
            lineHeight: "28px",
          },
        ],

        f_24_l_30: [
          "24px",
          {
            lineHeight: "30px",
          },
        ],

        f_25_l_32: [
          "25px",
          {
            lineHeight: "32px",
          },
        ],

        f_26_l_33: [
          "26px",
          {
            lineHeight: "33px",
          },
        ],

        f_27_l_34: [
          "27px",
          {
            lineHeight: "34px",
          },
        ],

        f_33_l_42: [
          "33px",
          {
            lineHeight: "42px",
          },
        ],

        f_35_l_44: [
          "35px",
          {
            lineHeight: "44px",
          },
        ],

        f_45_l_57: [
          "45px",
          {
            lineHeight: "57px",
          },
        ],
      },

      fontFamily: {
        supremeRegular: "Supreme-Regular, sans-serif",
        supremeMedium: "Supreme-Medium, sans-serif",
        supremeBold: "Supreme-Bold, sans-serif",
      },

      colors: {
        white: {
          100: "#ffffff",
          200: "#ffffff8c",
          300: "#fafafa73",
          400: "#ffffff4d",
          500: "#E1E1E1",
        },
        black: {
          100: "#000000",
          // Sidebar bg color
          200: "#181717",
          // Header bg color
          300: "#0F0F0F",
          // History Odd bg color
          400: "#101010",
          // History Even bg color
          500: "#181818",

          600: "#2B2A2A",

          700: "#606060",

          800: "#121212",
        },
        blue: "#009BB4",
        red: "#FF0000",
        success: "#0DFF0F",
        error: "#FF2600",
      },

      maxWidth: {
        "screen-2xl": "1440px",
      },

      screens: {
        md: "798px",
        // => @media (min-width: 640px) { ... }

        // laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        // desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};