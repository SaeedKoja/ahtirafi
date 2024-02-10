import type { Config } from "tailwindcss";

/**
 * There's a subtle bug when using min-[] and max-[] responsive variants.
 * Sometimes, Tailwind just stops recognizing them for unknown reasons and displays
 * a warning in the development terminal.
 *
 * Check out these links for more info.
 * - https://github.com/tailwindlabs/tailwindcss/issues/10737
 * - https://github.com/tailwindlabs/tailwindcss/discussions/8261
 * - https://github.com/tailwindlabs/tailwindcss/pull/9558#restrictions
 * - https://stackoverflow.com/questions/75229828/tailwinds-arbitrary-values-for-breakpoints-stopped-working-in-react-js
 */

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--font-vazirmatn)",
        cairo: "var(--font-cairo)",
        tajawal: "var(--font-tajawal)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          20: "#F1F4FF",
          50: "#106FF4",
        },
        Secondary: {
          50: "#45D3C8",
        },
        Tertiary: {
          40: "#A863FF",
          50: "#7001FE",
        },
        Gold: {
          50: "#F8C53F",
        },
        Grey: {
          70: "#646464",
          90: "#393939",
        },
        Black: {
          DEFAULT: "#000000",
        },
        White: {
          DEFAULT: "#FFFFFF",
        },
      },

      fontSize: {
        f2xsm: "10px",
        fxsm: "12px",
        fsm: "14px",
        fbase: "16px",
        flg: "20px",
        fxl: "24px",
        f2xl: "32px",
        f3xl: "48px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
  ],
};
export default config;
