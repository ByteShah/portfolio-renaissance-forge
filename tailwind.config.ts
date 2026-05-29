
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Lofi Cream + Olive palette (remapped — class names unchanged)
        navy: {
          DEFAULT: "#F2EDE4",   // cream background
          light: "#EAE4D8",     // card surface
          lightest: "#E0DAD0",  // border/divider
        },
        slate: {
          DEFAULT: "#6B6560",   // secondary text
          light: "#9A9590",     // muted
          lightest: "#1C1C1A",  // primary text (inverted!)
        },
        mint: {
          DEFAULT: "#4A5E3A",
          tint: "rgba(74, 94, 58, 0.1)",
        },
        violet: {
          DEFAULT: "#4A5E3A",   // olive
          light: "#7A9063",     // lighter olive
          dark: "#2E3B25",      // dark forest
          glow: "rgba(74, 94, 58, 0.15)",
        },
        electric: {
          DEFAULT: "#7A9063",
          light: "#A0B080",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        serif: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-violet": "0 0 20px rgba(74,94,58,0.2), 0 0 40px rgba(74,94,58,0.1)",
        "glow-cyan": "0 0 20px rgba(122,144,99,0.15)",
        "card": "0 2px 16px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "pulse-light": { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0.7" } },
        "spin-slow": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
        "float": { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        "marquee": { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        "grain": {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "20%": { transform: "translate(-15%,5%)" },
          "30%": { transform: "translate(7%,-25%)" },
          "40%": { transform: "translate(-5%,25%)" },
          "50%": { transform: "translate(-15%,10%)" },
          "60%": { transform: "translate(15%,0%)" },
          "70%": { transform: "translate(0%,15%)" },
          "80%": { transform: "translate(3%,35%)" },
          "90%": { transform: "translate(-10%,10%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "pulse-light": "pulse-light 3s infinite",
        "spin-slow": "spin-slow 10s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "marquee": "marquee 28s linear infinite",
        "grain": "grain 0.4s steps(1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
