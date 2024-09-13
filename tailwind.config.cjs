// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}"  // Include TypeScript files
  ],
  theme: {
    extend: {
      animation: {
        'rotate-loader-1': 'loader1Rotate 2s infinite'
      },
      keyframes: {
        loader1Rotate: {
          '0%': {
            '-webkit-transform': 'rotate(0deg) scale(0.8)',
            '-moz-transform': 'rotate(0deg) scale(0.8)',
          },
          '50%': {
            '-webkit-transform': 'rotate(360deg) scale(1.2)',
            '-moz-transform': 'rotate(360deg) scale(1.2)',
          },
          '100%': {
            '-webkit-transform': 'rotate(720deg) scale(0.8)',
            '-moz-transform': 'rotate(720deg) scale(0.8)',
          },
        },
      }
    },
  },
  plugins: [],
}
