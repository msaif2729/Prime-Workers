/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        khand: ['Khand', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif']
      },

      colors:{
      
         lightTheme: {
          bg: '#f5f5f5', //Background Color
          card : "#E1E1E1", //Card Color
          color1:'#02ACEF', //Blue
          color2:"#FEAC00", //Yellow
          color3: "#ffffff", //white
          color4: '#FEAC00', //Yellow
          color5:"#6C6C6C", //Gray
          color6:'#02ACEF', //Blue
          color7:'#000000', //black
          text: '#02ACEF', // Text color  
          primary: '#6C6C6C', // Primary color

        },
        darkTheme: {
          bg: '#171515  ', // Background color
          card : "#0A0909", //Card Color
          color1:'#FF0000', //Red
          color2:"#FFFFFF", //White
          color3: "#A09D9D", //Gray
          color4: '#FF0000', //Red
          color5: "#FFFFFF", //Gray
          color6: "#FFFFFF", //White
          color7: "#FFFFFF", //White
          text: '#ffffff', // card Text color
          primary: '#ffffff', // Primary color
        },
      },
      boxShadow: {
        'dark-bottom-right': '11px 11px 15px rgba(169, 169, 169, 169)'
      },


    },
  },
  plugins: [],
}

