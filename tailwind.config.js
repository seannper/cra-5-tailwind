module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'default': '#282c34',
        'lightblue': '#61dafb',
      },
    },
  },
  plugins: [],
}
