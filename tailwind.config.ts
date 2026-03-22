import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001F3F',
          50: '#e6ebf2',
          100: '#cdd7e5',
          200: '#9cb0cc',
          300: '#6c89b2',
          400: '#3b6199',
          500: '#001F3F',
          600: '#001934',
          700: '#001328',
          800: '#000d1c',
          900: '#000711',
        },
        electric: {
          DEFAULT: '#007AFF',
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b2ff',
          400: '#3398ff',
          500: '#007AFF',
          600: '#0062cc',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sf-pro)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'precision-cut': 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
      },
      borderRadius: {
        'squircle': '24px', 
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 31, 63, 0.05)',
        'electric-glow': '0 0 20px 0 rgba(0, 122, 255, 0.4)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
