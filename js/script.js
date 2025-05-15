// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-01-benjamin-abebe-02/sw.js", {
    scope: "/ICD2O-Unit-6-01-benjamin-abebe-02/",
  })
}


/**
 * This function displays an alert.
 */
function myButtonClicked() {
  let dividend = parseInt(document.getElementById("dividend").value);
  let divisor = parseInt(document.getElementById("divisor").value);
  let quotient = 0;

  if (dividend <= 0 || divisor <= 0) {
    document.getElementById("answer").innerHTML = "Please enter positive integers.";
  }

  while (true) {
    if (dividend >= divisor) {
      dividend = dividend - divisor;
      quotient = quotient + 1;
    } else {
      break;
    }
  }

  document.getElementById("answer").innerHTML =
    "Quotient: " + quotient + ", Remainder: " + dividend;
}
