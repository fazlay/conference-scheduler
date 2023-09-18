module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "5xl": "3rem", // 48px
      "9xl": "8rem", // 128px
      "10xl": "8.75rem", // 140px
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440 px) 2k displays.
      "3xl": "1920px",
      // => @media (min-width: 1920 px)  (for larger 2K displays and some 3K displays).
    },
    extend: {
      colors: {
        yellow: {
          primary: "#ffc93e",
        },
        blue: {
          dark: "#111D5E",
          light: "#2563EB",
        },
        grey: {
          dark: "#617187",
          light: "#CDCDCD",
        },
      },
    },
    textColor: {
      yellow: "#ffc93e",
      blue_dark: "#111D5E",
      blue_light: "#2563EB",
      grey_dark: "#617187",
      grey_light: "#CDCDCD",
    },
  },
  plugins: [],
};
