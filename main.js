const inputText = document.getElementById('inputText');
const submitBtn = document.getElementById('submitBtn');
const preGuesses = document.getElementById('preGuesses');
const resultMsg = document.getElementById('resultMsg');
const lowOrHigh = document.getElementById('lowOrHigh');
let replayBtn;

let randomNum = Math.floor(Math.random() * 100) + 1;

let guesses = new Array();
let count = 0;

init();
function init() {
  submitBtn.addEventListener('click', checkAnswer);

  inputText.value = '';
  inputText.focus();
}

function checkAnswer() {
  count++;

  let guess = Number(inputText.value);
  if (isNaN(guess) || guess <= 0 || guess > 100) {
    alert('Enter the number between 1 and 100.');
    count -= 1;
  } else if (count === 10 && guess != randomNum) {
    resultMsg.innerHTML = '!!!GAME OVER!!!';
    resultMsg.style.backgroundColor = 'black';
    lowOrHigh.innerHTML = '';
    setGameOver();
  } else if (guess === randomNum) {
    //success
    resultMsg.innerHTML = 'Congratulations! You got it right!';
    resultMsg.style.backgroundColor = 'mediumseagreen';
    lowOrHigh.innerHTML = '';
    setGameOver();
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
  inputText.focus();
}

function setGameOver() {
  inputText.disabled = true;
  submitBtn.disabled = true;
  replayBtn = document.createElement('button');
  replayBtn.textContent = 'Start new game';
  document.body.append(replayBtn);
  replayBtn.addEventListener('click', replay);
}

function replay() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  count = 0;
  guesses = [];
  inputText.value = '';
  inputText.focus();
  inputText.disabled = false;
  submitBtn.disabled = false;
  preGuesses.innerHTML = '';
  resultMsg.innerHTML = '';
  resultMsg.style.backgroundColor = 'transparent';
  lowOrHigh.innerHTML = '';
  replayBtn.parentNode.removeChild(replayBtn);
}