/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: '#1B2537',
          hover: '#232F45',
          active: '#26324A',
          border: '#2C3A54',
          text: '#B9C3D6',
          muted: '#7C8AA5',
        },
        brand: {
          DEFAULT: '#4F5FE0',
          light: '#EEF0FD',
          dark: '#3E4CC9',
        },
        page: '#F3F5FA',
        stat: {
          initiated: '#F5A524',
          sent: '#64748B',
          delivered: '#17B26A',
          read: '#4F5FE0',
          failed: '#F04438',
          reply: '#3AB0E8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
      },
      borderRadius: {
        xl2: '14px',
      },
    },
  },
  plugins: [],
};
