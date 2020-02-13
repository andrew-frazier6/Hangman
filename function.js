// let submit = document.querySelector("button");
// let letterBox = document.querySelector(".letter-container");
// let input = document.querySelector("input");
// let incorrectAnswer = document.querySelector(".wrong-letter-container");

// // random word chosen
// let randomWords = [
//   "apple",
//   "personalcomputer",
//   "html",
//   "javascript",
//   "styling",
//   "frustration",
//   "pain",
//   "sleepdeprived"
// ];
// // the word that was chosen
// // let wordInPlay = [];
// var randomItem = randomWords[Math.floor(Math.random() * randomWords.length)];
// // the splitting of the chosen word into an array
// wordInPlay = randomItem.split("");
// console.log(wordInPlay);
// // chosen word turned into hyphens
// let wordLength = wordInPlay.length;
// console.log(wordLength);

// function blankDivs() {
//   for (let i = 0; i < wordLength; i++) {
//     let letterBlank = document.createElement("div");
//     letterBlank.classList.add("blank-style");
//     console.dir(letterBlank);
//     letterBox.appendChild(letterBlank);
//   }
//   blankLetters = document.querySelectorAll(".blank-style");
//   for (let y = 0; y < wordLength; y++) {
//     blankLetters[y].innerText = wordInPlay[y];
//   }
// }
// blankDivs();

// // border bottom to divs created in order to display the underscore for the letters
// // find div to corresoping letter and then add that letter to div

// // chosen letter from letters array
// let singleLetter;
// // wrong letters chosen get pushed to the wrong letters array and then displayed in html
// // this is so that when a wrong letter is placed in box it does not get placed more than once
// let wrongLetters = new Set();

// // when you hit submit you input what you typed in into the innerHTML of the
// // div box
// let value;
// let item;
// submit.addEventListener("click", submitLetter);
// let correctLetter = false;

// function submitLetter(e) {
//   e.preventDefault();
//   singleLetter = input.value;
//   correctLetter = false;
//   console.log(singleLetter);
//   blankLetters.forEach((letter, i) => {
//     console.dir(letter);
//     if (singleLetter == letter.innerText) {
//       letter.style.fontSize = "20px";
//       input.value = "";
//       correctLetter = true;
//     } else if (i == blankLetters.length - 1 && correctLetter == false) {
//       //this is so that the last inputted letter is then placed in the correct box

//       wrongLetters.add(singleLetter);
//       value = "";
//       // this allows the values of set object to be shown
//       for (item of wrongLetters.values()) {
//         value += item + " ";
//       }
//       //
//       incorrectAnswer.innerText = value;
//       input.value = "";
//     }
//   });
// }

// // let values = wrongLetters.values();
// // print out different letters

// // put array in div box of wrong letters
// function wordBankValidator(word,answered){ // --> word: array of the wor
//   if(word.length === answered.length){
//     alert('WINNER!!!');
//   }

//   letter.setAttribute('data-validate','correct'); // this........

// --------------------- code check

let submit = document.querySelector("button");
let letterBox = document.querySelector(".letter-container");
let input = document.querySelector("input");
let incorrectAnswer = document.querySelector(".wrong-letter-container");

// random word chosen
// let randomWords = [
//   "apple",
//   "personalcomputer",
//   "html",
//   "javascript",
//   "styling",
//   "frustration",
//   "pain",
//   "sleepdeprived"
// ];

let randomWords = ["pain"];
// the word that was chosen
// let wordInPlay = [];
var randomItem = randomWords[Math.floor(Math.random() * randomWords.length)];
// the splitting of the chosen word into an array
wordInPlay = randomItem.split("");
console.log(wordInPlay);
// chosen word turned into hyphens
let wordLength = wordInPlay.length;
console.log(wordLength);

function blankDivs() {
  for (let i = 0; i < wordLength; i++) {
    let letterBlank = document.createElement("div");
    letterBlank.classList.add("blank-style");
    console.dir(letterBlank);
    letterBox.appendChild(letterBlank);
  }
  blankLetters = document.querySelectorAll(".blank-style");
  for (let y = 0; y < wordLength; y++) {
    blankLetters[y].innerText = wordInPlay[y];
  }
}
blankDivs();

// border bottom to divs created in order to display the underscore for the letters
// find div to corresoping letter and then add that letter to div

// chosen letter from letters array
let singleLetter;
// wrong letters chosen get pushed to the wrong letters array and then displayed in html
// this is so that when a wrong letter is placed in box it does not get placed more than once
let wrongLetters = new Set();

// when you hit submit you input what you typed in into the innerHTML of the
// div box
let value;
let item;
submit.addEventListener("click", submitLetter);
let correctLetter = false;

function submitLetter(e) {
  // -->> THIS RUNS EVERYTIME YOU CLICK THE BUTTON.
  e.preventDefault(); // --> PREVENTS REFRESH.
  singleLetter = input.value;
  correctLetter = false;
  console.log(singleLetter);

  blankLetters.forEach((letter, i) => {
    console.dir(letter);
    if (singleLetter == letter.innerText) {
      letter.style.fontSize = "20px";
      letter.classList.add("correct");
      input.value = "";
      correctLetter = true;
      wordBankValidator(blankLetters, document.querySelectorAll(".correct"));
      //
    } else if (i == blankLetters.length - 1 && correctLetter == false) {
      //this is so that the last inputted letter is then placed in the correct box

      wrongLetters.add(singleLetter);
      value = "";

      // this allows the values of set object to be shown
      for (item of wrongLetters.values()) {
        value += item + " ";
      }
      incorrectAnswer.innerText = value;
      input.value = "";
    }
  });
}
// const wordBankValidator = (word, answered) => {
//   // --> word: array of the wor
//   if (word.length === answered.length) {
//     alert("WINNER!!!");
//   }
const wordBankValidator = (word, answered) => {
  // --> word: array of the wor
  if (word.length === answered.length) {
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", "<h1 class='winner'>WINNER</h1>");
  }
};
// return;
// };

// const wordBankValidator = (word,answered) =>{ // --> word: array of the wor
//   if(word.length === answered.length){
//     document.querySelector('body').append('<div><h1>YOU ARE THE WINNER!!!!!!!!!!!!!</h1></div>')
//   }
// }
