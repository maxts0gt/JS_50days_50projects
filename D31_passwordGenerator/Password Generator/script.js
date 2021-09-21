const passwordDisplay = document.getElementById("result");
const passwordLength = document.getElementById("length");
const passwordUpper = document.getElementById("uppercase");
const passwordLower = document.getElementById("lowercase");
const passwordNumber = document.getElementById("numbers");
const passwordSymbol = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const letters = [
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
  "z",
];
const lettersUpper = [];
letters.forEach((letter) => {
  lettersUpper.push(letter.toUpperCase());
});

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];
let whichOne = ["L", "U", "N", "S"];

function randomNumber() {
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return randomNumber;
}

function randomSymbol() {
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  return randomSymbol;
}

function randomLetterU() {
  let randomLetterU =
    lettersUpper[Math.floor(Math.random() * lettersUpper.length)];
  return randomLetterU;
}

function randomLetter() {
  let randomLetter = letters[Math.floor(Math.random() * letters.length)];
  return randomLetter;
}

generateButton.addEventListener("click", function () {
  let currentLength = passwordLength.value;
  let isLower = passwordLower.checked;
  let isUpper = passwordUpper.checked;
  let isNumber = passwordNumber.checked;
  let isSymbol = passwordSymbol.checked;
  password = passwordGenerator(
    currentLength,
    isLower,
    isUpper,
    isNumber,
    isSymbol
  );
  console.log(password.length);
  passwordDisplay.innerHTML = password;
});

clipboard.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = passwordDisplay.innerText;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});

function passwordGenerator(
  currentLength,
  isLower,
  isUpper,
  isNumber,
  isSymbol
) {
  let password = "";
  let totalLength = currentLength - (isLower + isNumber + isUpper + isSymbol);
  let firstRandom = Math.floor(Math.random() * totalLength);
  let secondRandom = Math.floor(Math.random() * (totalLength - firstRandom));
  let thirdRandom = Math.floor(
    Math.random() * (totalLength - firstRandom - secondRandom)
  );
  let fourthRandom = totalLength - firstRandom - secondRandom - thirdRandom;
  let numberList = [fourthRandom, thirdRandom, secondRandom, firstRandom];

  for (let i = 3; i >= 0; i--) {
    let chosenOne = whichOne[i];
    console.log(chosenOne);
    if (chosenOne === "U") {
      for (let j = numberList[i] + isUpper; j > 0; j--) {
        let upperLetter = randomLetterU();
        password += upperLetter;
        console.log(password);
      }
    } else if (chosenOne === "L") {
      for (let j = numberList[i] + isLower; j > 0; j--) {
        let lowerLetter = randomLetter();
        password += lowerLetter;
        console.log(password);
      }
    } else if (chosenOne === "N") {
      for (let j = numberList[i] + isNumber; j > 0; j--) {
        let rNumber = randomNumber();
        password += rNumber;
        console.log(password);
      }
    } else if (chosenOne === "S") {
      for (let j = numberList[i] + isSymbol; j > 0; j--) {
        let rSymbol = randomSymbol();
        password += rSymbol;
        console.log(password);
      }
    }
  }
  const finalPassword = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  return finalPassword;
}
