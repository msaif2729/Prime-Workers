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
          card : "#EEEEEE", //Card Color
          color1:'#02ACEF', //Blue
          color2:"#FEAC00", //Yellow
          color3: "#6C6C6C", //Gray
          color4: '#FEAC00', //Yellow
          text: '#02ACEF', // Text color  
          primary: '#3498db', // Primary color
        },
        darkTheme: {
          bg: '#171515  ', // Background color
          card : "#0A0909", //Card Color
          color1:'#FF0000', //Red
          color2:"#FFFFFF", //White
          color3: "#A09D9D", //Gray
          color4: '#FF0000', //Red
          text: '#ffffff', // card Text color
          primary: '#e74c3c', // Primary color
        },
      }

    },
  },
  plugins: [],
}

