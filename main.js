const inputText = document.getElementById('inputText');
const submitBtn = document.getElementById('submitBtn');
const preGuesses = document.getElementById('preGuesses');
const resultMsg = document.getElementById('resultMsg');
const lowOrHigh = document.getElementById('lowOrHigh');
const replayBtn = document.getElementById('replayBtn');

let randomNum = Math.floor(Math.random() * 100) + 1;

let guesses = new Array();
let count = 0;

init();
function init() {
  submitBtn.addEventListener('click', checkAnswer);
  replayBtn.addEventListener('click', replay);

  inputText.value = '';
}

function checkAnswer() {
  let guess = Number(inputText.value);
  count++;
  
  if (count === 10 && guess != randomNum) {
    resultMsg.innerHTML = '!!!GAME OVER!!!';
    resultMsg.style.backgroundColor = 'black';
    lowOrHigh.innerHTML = '';

    submitBtn.disabled = true;
  } else if (guess === randomNum) {
    //success
    resultMsg.innerHTML = 'Congratulations! You got it right!';
    resultMsg.style.backgroundColor = 'mediumseagreen';
    lowOrHigh.innerHTML = '';

    submitBtn.disabled = true;
  } else {
    guesses.push(' ' + guess);
    preGuesses.innerHTML = 'Previous guesses: ';
    preGuesses.innerHTML += guesses;
    resultMsg.innerHTML = 'Wrong!';
    resultMsg.style.backgroundColor = 'salmon';
    if (guess < randomNum) {
      //too low
      lowOrHigh.innerHTML = 'Last guess was too low!';
    } else if (guess > randomNum) {
      //too high
      lowOrHigh.innerHTML = 'Last guess was too high!';
    }
  }  
  inputText.value = '';
}

function replay() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  count = 0;
  guesses = [];
  inputText.value = '';
  submitBtn.disabled = false;
  preGuesses.innerHTML = '';
  resultMsg.innerHTML = '';
  resultMsg.style.backgroundColor = 'transparent';
  lowOrHigh.innerHTML = '';
}