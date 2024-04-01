"use strict";

function checkNumber() {
  // Get the value entered by the user
  var number = document.getElementById("number").value;

  // Check if the input is empty or not a number
  if (number === "" || isNaN(number)) {
    alert("Please enter a valid number!");
    return;
  }

  // Convert the input to a number
  number = parseFloat(number);

  // Check if the number is positive, negative, or zero
  if (number > 0) {
    alert("The entered number is positive.");
  } else if (number < 0) {
    alert("The entered number is negative.");
  } else {
    alert("The entered number is zero.");
  }
}
