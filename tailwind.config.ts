import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#DAC7A2',
          dark: '#C4B080',
          light: '#E8DABE',
        },
        cinnamon: '#5B2E2E',
        sage: '#7B9F85',
        beige: '#F7EFE6',
        charcoal: '#222222',
        muted: '#666666',
        floral: '#E8B4B8',
        wood: '#8B7355',
        resin: '#7B9F85',
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Poppins', 'sans-serif'],
        ui: ['Poppins', 'sans-serif'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
};

export default config;