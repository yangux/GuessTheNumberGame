const inputText = document.getElementById('inputText');
const submitBtn = document.getElementById('submitBtn');
const preGuesses = document.getElementById('preGuesses');
const resultMsg = document.getElementById('resultMsg');
const lowOrHigh = document.getElementById('lowOrHigh');
const replayBtn = document.getElementById('replayBtn');

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

init();
function init() {
  submitBtn.addEventListener('click', checkAnswer);
  replayBtn.addEventListener('click', replay);
}

function checkAnswer() {
  let guess = Number(inputText.value);
  console.log(guess === randomNum);
  console.log(typeof guess);
}

function replay() {

}