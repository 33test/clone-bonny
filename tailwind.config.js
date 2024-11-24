/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/assets/column.css"
  ],
  theme: {
    screens: {
      'md': '768px',
      //  => @media (min-width:768px) {...}
      'lg': '992px',
      //  => @media (min-width:992px) {...}
      'xl': '1200px',
      //  => @media (min-width:1200px) {...}

    },
    extend: {
      spacing: {
        '50px': '50px',
      },
    },
  },
  plugins: [],
}

