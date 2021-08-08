"use strict";
import Cleave from 'cleave.js';

var cleave = new Cleave('#cardNumber', {
  creditCard: true,
  delimiter: ' ',
  blocks: [4, 4, 4, 4]
});

var cleave = new Cleave('#date', {
  date: true,
  datePattern: ['m', 'y']
});

var cleave = new Cleave('#security-code', {
  numericOnly: true,
  blocks: [4]
});


document.querySelector("input[type=submit]").addEventListener('click', validateForm)

const filledInputs = []

function validateForm(e) {


  const inputFields = document.querySelectorAll("input[type=text]");

  const validInputs = Array.from(inputFields).filter( input => input.value !== "");

  if (validInputs.length == 4) {
    e.preventDefault()
    window.location.href = "./completed.html";

  }

}
