// vite.config.js
const { resolve } = require('path')

module.exports = {
base: "./",
  build: {
    rollupOptions: {
      input: {
        completed: resolve(__dirname, 'completed.html'),
        card: resolve(__dirname, 'card.html'),
        index: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        checkout: resolve(__dirname, 'checkout.html')
      }
    }
  }
}
