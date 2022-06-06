const jsdom = require("jsdom");
const fs = require("fs");
const { JSDOM } = jsdom.JSDOM;

// extracting data from file
let htmlContent = fs.readFileSync("sample.html", "utf-8");

// converting extracted data to dom
let dom = new JSDOM(htmlContent);

// putting dom into browser document
let document = dom.window.document;

// getting html element using selectors

// css selector -> first element of that html selector
// document.querySelector("p");

// css selector -> all the occurences of that html element, return -> array ka andar elements
const allPs = document.querySelectorAll("p");
console.log(allPs.length);

// content ->
let firstPKaContent = allPs[0].textContent;
console.log("firstPKaContent: ", firstPKaContent);
