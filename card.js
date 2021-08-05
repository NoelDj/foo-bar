"use strict";
import Cleave from 'cleave.js';

var cleave = new Cleave('#cardNumber', {
  creditCard: true,
  delimiter: ' ',
  blocks: [4, 4, 4, 4],
  onCreditCardTypeChanged: function (type) {
      // update UI ...
  }
});

var cleave = new Cleave('#date', {
  date: true,
  datePattern: ['m', 'y']
});

var cleave = new Cleave('#security-code', {
  blocks: [4]
});


/* document.querySelector("#submit-button").addEventListener('click', validateForm)

function validateForm() {
  var creditcardnumber = document.querySelector("#cardNumber").value;
  var securitycode = document.querySelector("#securityCode").value;
  console.log(creditcardnumber.length);
  console.log(securitycode.length);

  if (creditcardnumber.length == 16) {
    console.log(":)");
  } else {
    console.log("todo - error when incorrect credit card number length (16)");
  }

  if (securitycode.length == 3 || securitycode.length == 4) {
    console.log(":)");
  } else {
    console.log("todo - error when incorrect security code length (3 or 4)");
  }

  if (
    (securitycode.length == 3 && creditcardnumber.length == 16) ||
    (securitycode.length == 4 && creditcardnumber.length == 16)
  ) {
    window.location.href = "/completed.html";
  }
}
 */
