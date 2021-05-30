"use strict";

window.addEventListener("DOMContentLoaded", init);

const listOfOrders = [];

function init() {
  loadOrders();
  getOrders();
}

function loadOrders() {
  const data = JSON.parse(localStorage.getItem("items"));

  handleOrders(data);
}

function handleOrders(data) {
  data.forEach(createOrder);

  sendOrders();
}

function createOrder(element) {
  const order = [
    {
      name: element.name,
      amount: element.amount,
    },
  ];

  listOfOrders.push(...order);
}

function sendOrders() {
  const postData = JSON.stringify(listOfOrders);
  console.log(postData);

  fetch("https://foobardata.herokuapp.com/order", {
    method: "post",
    body: postData,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then((dataPost) => {
      console.log(dataPost);
      console.log(dataPost.id);
      document.querySelector("#ordernumber > span").textContent = dataPost.id;
    });
}

function getOrders() {
  fetch("https://foobardata.herokuapp.com/")
    .then((r) => r.json())
    .then((data) => console.log(data));
}
