import "./styles.css";
const request = require("request");
const fs = require("fs");

let url = "https://pe2h8k.csb.app";

// request working ->
// 1. request to the given url
// 2. response -> request function -> cb call -> data put

request(url, cb);

// error -> if there is any error while executing the request
// response -> header + body
// body -> html

function cb(error, response, body) {
  // console.log("error", error);
  // console.log("response", response && response.statusCode);
  // console.log("data", body);
  if (error) {
    console.log("error", error.message);
  } else if (response && response.statusCode === 404) {
    console.log("Page not Found");
  } else {
    console.log("body", body);
    fs.writeFileSync("../index.html", body);
  }
}
