/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        justAnotherHand: ["Just Another Hand", "cursive"],
      },
      colors: {
        primary: "rgb(var(--md-sys-color-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
        "primary-container":
          "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
        "on-primary-container":
          "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
        secondary: "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
        "secondary-container":
          "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
        "on-secondary-container":
          "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
        tertiary: "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
        "tertiary-container":
          "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
        "on-tertiary-container":
          "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
        error: "rgb(var(--md-sys-color-error) / <alpha-value>)",
        "on-error": "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
        "error-container":
          "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
        "on-error-container":
          "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
        surface: "rgb(var(--md-sys-color-surface) / <alpha-value>)",
        "on-surface": "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
        "surface-variant":
          "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
        "on-surface-variant":
          "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
        outline: "rgb(var(--md-sys-color-outline) / <alpha-value>)",
        "outline-variant":
          "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
        shadow: "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
        scrim: "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
        "inverse-surface":
          "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
        "inverse-on-surface":
          "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
        "inverse-primary":
          "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
        "surface-container":
          "rgb(var(--md-sys-color-surface-container) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
