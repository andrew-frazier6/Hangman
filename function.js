// random word chosen
let randomWords = [
  "apple",
  "personalcomputer",
  "html",
  "javascript",
  "styling"
];
// the word that was chosen
// let wordInPlay = [];
var randomItem = randomWords[Math.floor(Math.random() * randomWords.length)];
// the splitting of the chosen word into an array
wordInPlay = randomItem.split("");
alert(wordInPlay);
// characters to choose from for comparison
let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
// chosen letter from letters array
let singleLetter = [];
// wrong letters chosen get pushed to the wrong letters array and then displayed in html
let wrongLetters = [];

// when you hit submit you input what you typed in into the innerHTML of the
// div box

let button = document.querySelector("button");
document.querySelector(".input") = input.value;
let box = document.querySelector(".console-log");

let inputRun = input.addEventListener("click", typeWord);

function typeWord() {}

console.log(input);
