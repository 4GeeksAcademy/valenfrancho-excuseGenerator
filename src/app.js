/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let adjective = [
  "A devilishly handsome",
  "Some innocuous",
  "The bizarrely romantic",
  "One cheeky",
  "A modestly sized"
];
let who = ["rottweiler", "waiter", "humanoid", "grandmother", "kittycat"];
let action = ["stole", "threw up on", "destroyed", "ate", "forgot"];
let what = [
  "my car keys",
  "the Easy-Bake oven",
  "the stained-glass window",
  "a piece of paper",
  "literal trash"
];
let when = [
  "before I got here",
  "three years ago",
  "in front of me",
  "yesterday",
  "last week",
  "a second ago"
];

function generateExcuse() {
  let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse =
    randomAdjective +
    " " +
    randomWho +
    " " +
    randomAction +
    " " +
    randomWhat +
    " " +
    randomWhen;

  document.querySelector("#excuse").innerHTML = excuse;
}

generateExcuse();
