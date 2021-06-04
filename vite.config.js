// vite.config.js
const { resolve } = require('path')

module.exports = {
base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        card: resolve(__dirname, 'card.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        payment: resolve(__dirname, 'payment.html')
      }
    }
  }
}
