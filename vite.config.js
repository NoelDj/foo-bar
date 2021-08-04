// vite.config.js
const { resolve } = require('path')

module.exports = {
base: "./",
  build: {
    rollupOptions: {
      input: {
        card: resolve(__dirname, 'card.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        completed: resolve(__dirname, 'completed.html'),
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        paymennt: resolve(__dirname, 'payment.html'),
      }
    }
  }
}
