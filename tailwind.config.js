/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: ["14px", "13.58px"],
      base: ["18px", "17.58px"],
      md: ["18px", "28.83px"],
      lg: ["22px", "32px"],
      av: ["23px", "36.84px"],
      xl: ["24px", "23.45px"],
      "2xl": ["24px", "28.13px"],
      "3xl": ["27.31px", "43.75px"],
      "5xl": ["29.82px", "46.45px"],
      "5.5xl": ["29px", "34.94px"],
      "6xl": ["35px", "41.02px"],
      "7xl": ["50px", "58.59px"],
    },

    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        options: {
          pale_blue: "#B38BFA",
          pink: "#FF79F2",
          cyan: "#43E6FC",
          brown: "#F19576",
          blue: "#0047FF",
          skyBlue: "#6691FF",
        },
        primary: {
          black: "#000000",
          mdGary: "#292929",
          white: "#000000",
          darkBlue: "#16008B",
          darkGray: "#353535",
          gray: "#9A9A9A",
        },

        background: {
          skyBlue: "#DAE5F5",
          blue: "#001F8B",
          gray: "#CCCCCC",
          grayshade: "#2F2F2FBF",
        },
      },
      boxShadow: {
        custom: "0 4px 20px 0 rgba(0, 0, 0, 0.25)", // Custom shadow
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
