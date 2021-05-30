"use strict";

let elhefebottle = 0;
let fairytalealebottle = 0;
let githopbottle = 0;
let hollabackbottle = 0;
let hoppilyeverafterbottle = 0;
let mowintimebottle = 0;
let row26bottle = 0;
let ruinedchildhoodbottle = 0;
let sleighridebottle = 0;
let steampunkbottle = 0;
let elhefekeg = 0;
let fairytalealekeg = 0;
let githopkeg = 0;
let hollabackkeg = 0;
let hoppilyeverafterkeg = 0;
let mowintimekeg = 0;
let row26keg = 0;
let ruinedchildhoodkeg = 0;
let sleighridekeg = 0;
let steampunkkeg = 0;

window.addEventListener("DOMContentLoaded", init);

const orderedItems = [];
function init() {
  loadData();
  selectDomElements();
  setPreviousData();
  loadBeerStock();

  console.log(orderedItems);
  console.log("ordered");
  localStorage.setItem("items", JSON.stringify(orderedItems));
}

function loadBeerStock() {
  fetch("https://foobarexamproject.herokuapp.com/")
    .then((response) => response.json())
    .then((jsonData) => {
      beerStocks(jsonData);
    });
}
function beerStocks(jsonData) {
  console.log(jsonData.storage);
  console.log(jsonData.taps);
  elhefebottle = jsonData.storage[0].amount;
  fairytalealebottle = jsonData.storage[1].amount;
  githopbottle = jsonData.storage[2].amount;
  hollabackbottle = jsonData.storage[3].amount;
  hoppilyeverafterbottle = jsonData.storage[4].amount;
  mowintimebottle = jsonData.storage[5].amount;
  row26bottle = jsonData.storage[6].amount;
  ruinedchildhoodbottle = jsonData.storage[7].amount;
  sleighridebottle = jsonData.storage[8].amount;
  steampunkbottle = jsonData.storage[9].amount;
  sleighridekeg = jsonData.taps[0].level + jsonData.taps[4].level;
  steampunkkeg = jsonData.taps[1].level + jsonData.taps[5].level;
  hollabackkeg = jsonData.taps[2].level + jsonData.taps[6].level;
  row26keg = jsonData.taps[3].level;
}

function loadData() {
  const data = JSON.parse(localStorage.getItem("orderedItems"));
  orderedItems.push(...data);
  handleData(orderedItems);
  setPrice(orderedItems);
}

function setPreviousData() {
  localStorage.setItem("items", JSON.stringify(orderedItems));
  console.log(orderedItems);
}

function handleData(data) {
  data.forEach(appendProducts);
}

function appendProducts(product) {
  const copy = document.querySelector("template").content.cloneNode(true);

  // console.log(product);
  copy.querySelector(".name").textContent =
    product.name + " " + product.size + " " + product.container;
  copy.querySelector(".price").textContent =
    product.price * product.amount + " DKK";
  copy.querySelector("img").src = "/images/" + product.label;
  copy.querySelector(".orders").textContent = product.amount;

  if (product.amount == 1) {
    copy.querySelector("[data-action=decrease]").style.opacity = 0.5;
  }

  copy.querySelectorAll(".amount button").forEach((element) => {
    element.addEventListener("click", (e) => {
      const target = e.target.dataset.action;
      if (target == "increase") {
        if (product.name === "El Hefe") {
          if (elhefebottle >= 1) {
            elhefebottle -= 1;
            console.log(elhefebottle);
            console.log(product.name);
            console.log(product);
            product.amount++;
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much el hefe bottles "
            );
          }
        }

        if (product.name === "Fairy Tale Ale") {
          if (fairytalealebottle >= 1) {
            fairytalealebottle -= 1;
            console.log(fairytalealebottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much fairy tale bottles "
            );
          }
        }
        if (product.name === "GitHop") {
          if (githopbottle >= 1) {
            githopbottle -= 1;
            console.log(githopbottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much githop bottles "
            );
          }
        }
        if (product.name === "Hollaback Lager") {
          if (hollabackbottle >= 1) {
            hollabackbottle -= 1;
            console.log(hollabackbottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much Hollaback bottles "
            );
          }
        }
        if (product.name === "Hoppily Ever After") {
          if (hoppilyeverafterbottle >= 1) {
            hoppilyeverafterbottle -= 1;
            console.log(hoppilyeverafterbottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much hoppilyeverafter bottles "
            );
          }
        }
        if (product.name === "Mowintime") {
          if (mowintimebottle >= 1) {
            mowintimebottle -= 1;
            console.log(mowintimebottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much mowintime bottles "
            );
          }
        }
        if (product.name === "Row 26") {
          if (row26bottle >= 1) {
            row26bottle -= 1;
            console.log(row26bottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much row26 bottles "
            );
          }
        }
        if (product.name === "Ruined Childhood") {
          if (ruinedchildhoodbottle >= 1) {
            ruinedchildhoodbottle -= 1;
            console.log(ruinedchildhoodbottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much ruinedchildhood bottles "
            );
          }
        }
        if (product.name === "Sleighride") {
          if (sleighridebottle >= 1) {
            sleighridebottle -= 1;
            console.log(sleighridebottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much sleighride bottles "
            );
          }
        }
        if (product.name === "Steampunk") {
          if (steampunkbottle >= 1) {
            steampunkbottle -= 1;
            console.log(steampunkbottle);
            console.log(product.name);
            product.amount++;
            console.log(product);
          } else {
            console.log(
              " TODO  - stuff that happens when you order too much steampunk bottles"
            );
          }
        }
      } else {
        product.amount--;
        if (product.amount == 0) {
          product.amount = 1;
        }
      }

      document.querySelector("main section").innerHTML = "";
      orderedItems.forEach(appendProducts);

      setPrice(orderedItems);
      localStorage.setItem("items", JSON.stringify(orderedItems));
    });
  });

  copy.querySelector(".remove").addEventListener("click", () => {
    removeOrder(product);
    setPrice(orderedItems);
    setPreviousData();
  });
  document.querySelector("main section").appendChild(copy);
}

function changeAmount(copy, item) {
  console.log(copy.querySelector(".orders"));
}

function removeOrder(item) {
  console.log(item.name);

  const index = orderedItems.indexOf(item);
  console.log(index);
  if (index > -1) {
    orderedItems.splice(index, 1);
  } else {
    orderedItems = [];
  }
  console.log(orderedItems);
  document.querySelector("main section").innerHTML = "";
  orderedItems.forEach(appendProducts);
}

function setPrice(data) {
  console.log(data);
  if (data.length > 0) {
    const map = data.map((string) => string.price * string.amount);
    const total = map.reduce((a, b) => a + b);
    document.querySelector(".total").textContent = total;
  } else {
    document.querySelector(".total").textContent = 0;
  }
}

function selectDomElements() {}
