let submit = document.querySelector("button");
let submitButton = document.getElementById("submit-button");
let letterBox = document.querySelector(".letter-container");
let input = document.querySelector("input");
let incorrectAnswer = document.querySelector(".wrong-letter-container");
let wrongBox = document.querySelector("#h1-title");
let guessTitle = document.querySelector("#guess-h1");
let guessCounter = document.querySelector(".guess-counter");
let counter = 10;

// random word chosen
let randomWords = [
  "revaluation",
  "errands",
  "mysid",
  "magmata",
  "occasion",
  "silk",
  "gaited",
  "pigmy",
  "stridulatory",
  "affricated",
  "quite",
  "ceilidhs",
  "salerooms",
  "unsteadiest",
  "euphoria",
  "isoglosses",
  "punto",
  "clutched",
  "parthenocarpies",
  "reviewers",
  "stewarding",
  "melamine",
  "whipray",
  "assuring",
  "segmenting",
  "auction",
  "desecrating",
  "phonotype",
  "exclamation",
  "lechering",
  "topstones",
  "denazified",
  "metricate",
  "dewlaps",
  "mongolism",
  "embroilment",
  "taxless",
  "negativists",
  "volt",
  "daunders",
  "gorsiest",
  "shapeups",
  "delphiniums",
  "gudgeoning",
  "baryons",
  "emblematize",
  "maumetry",
  "hybridist",
  "monocrystal",
  "quilting",
  "underwriting",
  "mannikins",
  "discarnate",
  "minishing",
  "clangs",
  "palliating",
  "partyers",
  "nonowner",
  "perfumed",
  "mycologically",
  "determined",
  "frugivore",
  "yelling",
  "passport",
  "hemostases",
  "preestablishing",
  "unitedly",
  "pollex",
  "fallfish",
  "tideways",
  "anteriorly",
  "pressurized",
  "concessive",
  "humanly",
  "irised",
  "amentia",
  "anelasticities",
  "gelating",
  "amyloplast",
  "sykes",
  "muzzled",
  "hector",
  "sloppiness",
  "aquatintist",
  "centimeters",
  "retiarii",
  "cutpurses",
  "tyrants",
  "broadened",
  "crosshead",
  "tillage",
  "schmoozes",
  "chaebol",
  "speciate",
  "chuddars",
  "betonies",
  "simpleness",
  "pressgang",
  "sileni",
  "dinkies"
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
  singleLetter = input.value[0];
  correctLetter = false;
  console.log(singleLetter);

  blankLetters.forEach((letter, i) => {
    // console.dir(letter);
    if (singleLetter == letter.innerText) {
      letter.style.fontSize = "40px";
      letter.classList.add("correct");
      letter.style.textTransform = "uppercase";
      input.value = "";
      correctLetter = true;
      wordBankValidator(blankLetters, document.querySelectorAll(".correct"));
      //
    } else if (i == blankLetters.length - 1 && correctLetter == false) {
      //this is so that the last inputted letter is then placed in the correct box
      wrongBox.style.opacity = "1";
      guessTitle.style.opacity = "1";
      counter -= 1;
      guessCounter.innerText = counter;

      wrongLetters.add(singleLetter);
      loser();
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
//

const loser = () => {
  if (counter === 0) {
    alert("you lose");
  }
};

const wordBankValidator = (word, answered) => {
  // --> word: array of the word
  if (word.length === answered.length) {
    input.remove();
    submitButton.remove();
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterbegin", "<canvas id=c></canvas>");
    fireworksComponent();
  }
};

let start = document.getElementById("start-button");
start.addEventListener("click", startGame);
function startGame() {
  blankDivs();
  start.remove();
}

let reset = document.getElementById("reset-button");
reset.addEventListener("click", resetGame);
function resetGame() {
  blankDivs();
}
