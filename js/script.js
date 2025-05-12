// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

// process
function myButtonClicked() {
  const multiplicandA = parseFloat(document.getElementById("multiplicand").value)
  const multiplierB = parseFloat(document.getElementById("multiplier").value)
  let result = 0
  let count = 0

  /**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-5-08-benjamin-abebe-02/sw.js", {
    scope: "/ICD2O-Unit-5-08-benjamin-abebe-02/",
  })
}

  while (count < multiplierB) {
    result += multiplicandA
    count++
  }

  // display results
  document.getElementById("answer").innerHTML = "<p>The answer is:- " + result + ".</p>"
}
