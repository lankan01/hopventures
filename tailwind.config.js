/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        '1o-pink': 'rgb(251,103,227)',
        '2o-pink': 'rgb(255,211,248)',
        '1o-gray': 'rgb(3,7,18)',
        '2o-gray': 'rgb(47,46,46)',
      },
      colors: {
        '1o-pink': 'rgb(251,103,227)',
        '2o-pink': 'rgb(255,211,248)',
        '1o-gray': 'rgb(3,7,18)',
        '2o-gray': 'rgb(47,46,46)',
      },
      fontSize: {
        'xxs': '9px', // Adjust the size as needed
      }
    },
  },
  plugins: [],
}
