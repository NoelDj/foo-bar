"use strict";

window.addEventListener("DOMContentLoaded", createOrderNumber);

function createOrderNumber() {

  const orderNumber = Math.floor(Math.random() * 100);

  document.querySelector('#order-number').textContent = orderNumber;

}
