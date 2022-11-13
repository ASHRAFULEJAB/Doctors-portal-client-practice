/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: '#0FCFEC',

          secondary: '#19D3AE',

          accent: '#3A4256',

          neutral: '#29182A',

          'base-100': '#F8F5FA',

          info: '#6089E2',

          success: '#60E2A9',

          warning: '#F4B76C',

          error: '#E23650',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
