/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "light-glass":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), linear-gradient(180deg, rgba(40, 40, 40, 0.10) 0%, rgba(248, 248, 248, 0.10) 100%)",
        "custom-gradient":
          "linear-gradient(90deg, rgba(39, 39, 40, 0.12) 0%, rgba(150, 190, 231, 0.06) 100%)",
        "arrow-gradient":
          "linear-gradient(139deg, #303439 12.4%, #161718 94.96%)",
        "arrow-gradient-hover":
          "linear-gradient(139deg, #1E252D 12.4%, #161718 94.96%)",
        "arrow-gradient-active":
          "linear-gradient(139deg, #95BCE9 12.4%, #161718 94.96%);",
      },
      boxShadow: {
        "custom-shadow":
          "-8.433px -16.867px 50.6px -16.867px #485B71, 13.493px 16.867px 67.467px 8.433px #0A0A0A",
        "button-shadow":
          "inset 0px 3.26px 3.26px 0px rgba(255, 255, 255, 0.15),inset 0px 0px 48.91px 0px rgba(255, 255, 255, 0.05),9px 10px 7.1px 0px rgba(0, 0, 0, 0.4),-0.5px -0.5px 6.9px 0px rgba(255, 255, 255, 0.25)",
        "gallery-shadow":
          "12px 13px 39.2px 9.15px rgba(10, 10, 10, 0.62), -9.15px -18.5px 54.89px -142px #617892;",

        "arrow-shadow":
          "6px 5px 20px 0px rgba(16, 18, 19, 1), -2px -1px 20px 0px rgba(150, 190, 231, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
