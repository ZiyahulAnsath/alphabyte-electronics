import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        '80vh': '80vh',
      },      
      fontFamily:{
        cursive:["cursive", "sans-serif"],
        fantasy:["fantasy", "sans-serif"],
        raleway:["raleway","sans-serif"],
        montserrat:['Montserrat Alternates','cursive'],
        titne:['Titan One','cursive'],
      },
      colors: {
        green:{
          background:"#26FFC2",
          li_background:{
            main:"#4E6751",
            sub:"#585B3C"
          },
          text:"#11F428"
        },
        gray:{
          bg_primary:"#101010",
          text:"#B4B4B4",
          bg_categories:"#4B4A48"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  
}
export default config
