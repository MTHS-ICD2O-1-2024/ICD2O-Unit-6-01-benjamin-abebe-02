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
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

// process
function myButtonClicked() {
  const multiplicandA = parseFloat(document.getElementById("multiplicand").value)
  const multiplierB = parseFloat(document.getElementById("multiplier").value)
  let result = 0
  let count = 0
  
  while (count < multiplierB) {
    result += multiplicandA
    count++
  }

  // display results
  document.getElementById("answer").innerHTML = "<p>The answer is:- " + result + ".</p>"
}
