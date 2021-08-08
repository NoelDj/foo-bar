"use strict";

window.addEventListener("DOMContentLoaded", init);

const orderedItems = [];
let sum = 0;
let bool;
function init() {
  loadData();
  selectDomElements();
  previousOrders();
  // loadTaps();
}

function handleBeerData(data) {
  console.log(data);
}


function addGlass(e) {
  console.log("tap beer addeddddd");
  const value = e.target.parentElement.dataset.container;
  product.container = value;
  console.log(product);
  check(product);

  // console.log(product.name);
}

function previousOrders() {
  const data = JSON.parse(localStorage.getItem("items"));
  orderedItems.push(...data);
  orderedItems.forEach((e) => {
    addItem(e);
    setPrice(e);
  });
  localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
}

async function loadData() {
  let response = await fetch(`https://foobardata.herokuapp.com/beertypes`);
  let data = await response.json();
  handleData(data);
}

function handleData(data) {
  prepareObjects(data);
}

function prepareObjects(objects) {
  console.log(objects);
  const mapped = objects.map(handleObject);
  mapped.forEach(appendProducts);
}

function handleObject(object) {
  object.size = 0.5;
  object.container = "bottle";
  object.amount = 1;

  switch (object.category) {
    case "European Lager":
    object.price = 70;
    break;
    case "IPA":
    object.price = 40;
    break;
    default:
    object.price = 50;
  }

  return object;
}

function appendProducts(product) {
  const copy = document
    .querySelector("#bottletemplate")
    .content.cloneNode(true);
  // console.log(copy);
  copy.querySelector(".name").textContent = product.name;

  copy.querySelector(".description").textContent =
    product.description.appearance;

  copy.querySelector("img").src = "https://quater.org/pictures/" + product.label;
  copy.querySelector("#product-price").textContent = product.price + " DKK";
  copy.querySelector("button").addEventListener("click", () => {
    check(product)
  });
  document.querySelector(".menu #bottles").appendChild(copy);
}



function check(item) {
  if (!document.getElementById(item.name)) {
    addItem(item);
    setPrice(item);
    addToList(item);
  } else {
    alert("The beer has already been added")
  }
}

function setPrice(item) {
  sum += item.price;
  document.querySelector("#price").textContent = sum;
  console.log(item.price);
}

function addItem(item) {
  const listItem = document.createElement("li");
  listItem.id = item.name;

  const img = document.createElement("img");
  img.src = "https://quater.org/pictures/" + item.label;
  listItem.appendChild(img);

  document.querySelector("#ordered-items").appendChild(listItem);
}

function addToList(item) {
  orderedItems.push(item);

  /* set storage */

  localStorage.setItem("orderedItems", JSON.stringify(orderedItems));
}

function selectDomElements() {
  document.querySelectorAll(".move").forEach((element) => {
    element.addEventListener("click", () => {
      bool = !bool;
      const wrapper = document.querySelector(".container");
      bool
        ? (wrapper.style.transform = "translateX(-100%)")
        : (wrapper.style.transform = "translateX(0%)");
    });
  });


}
