/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#020416',
        lightGrey:'#D9D9D9',
        mainRed:'#AC041C'
      },
      spacing:{
        '50vh':'50vh',
        '75vh':'75vh',
        '60vh':'60vh'
      }
    },
  },
  plugins: [],
}

