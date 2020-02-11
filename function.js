let submit = document.querySelector("button");
let letterBox = document.querySelector(".letter-container");
let input = document.querySelector("input");

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
console.log(wordInPlay);
// chosen word turned into hyphens
let wordLength = wordInPlay.length;
console.log(wordLength);
// displays underscore amount based on length of the word
// displayedHiddenWord = [];

for (let i = 0; i < wordLength; i++) {
  let letterBlank = document.createElement("div");
  letterBlank.classList.add("blank-style");
  console.dir(letterBlank);
  letterBox.appendChild(letterBlank);
}

// border bottom to divs created in order to display the underscore for the letters
// find div to corresoping letter and then add that letter to div

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

// submit.addEventListener("click", submitLetter);

// function submitLetter(e) {
//   e.preventDefault();
//  console.log(input)
// }
// //
