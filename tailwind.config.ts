import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#59A246',
          'primary-dark': '#308C17',
          secondary: '#043732',
          'secondary-light': '#0A524B',
          accent: '#FFB200',
          'accent-hover': '#E09D00',
          whatsapp: '#25D366',
          'whatsapp-dark': '#1EBE5D',
        },
        surface: {
          light: '#F9FBF8',
          DEFAULT: '#FFFFFF',
        },
        body: {
          DEFAULT: '#1D1D1D',
          muted: '#666666',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        heading: ['var(--font-josefin)', 'Josefin Sans', 'sans-serif'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      maxWidth: {
        boxed: '1140px',
        wide: '1280px',
      },
      boxShadow: {
        card: '0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 1px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 24px -4px rgba(4, 55, 50, 0.12), 0 4px 8px -2px rgba(4, 55, 50, 0.06)',
        sticky: '0 4px 20px -2px rgba(0, 0, 0, 0.08)',
        floating: '0 8px 24px rgba(37, 211, 102, 0.35)',
      },
      borderRadius: {
        boxed: '12px',
      },
    },
  },
  plugins: [],
};

export default config;
