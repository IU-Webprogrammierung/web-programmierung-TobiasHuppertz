/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(22) forwards, blink 1s infinite"
      },
      fontFamily: {
        opensans: ["OpenSans", "sans-serif"],
        worksans: ["WorkSans", "sans-serif"],
        lobster: ["Lobster", "sans-serif"],
      },
      fontWeight: {
        smoothbold: '550',
      },
      boxShadow: {
        'up': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: theme => ({
        'custom-desktop': "url('/img/bg_desktop.jpg')",
        'custom-mobile': "url('/img/bg_mobile.jpg')",
      }),
    },
  },
  plugins: [],
}