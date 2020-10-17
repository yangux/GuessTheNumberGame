const inputText = document.getElementById('inputText');
const submitBtn = document.getElementById('submitBtn');
const preGuesses = document.getElementById('preGuesses');
const resultMsg = document.getElementById('resultMsg');
const lowOrHigh = document.getElementById('lowOrHigh');
const replayBtn = document.getElementById('replayBtn');

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);

let guesses = new Array();

init();
function init() {
  submitBtn.addEventListener('click', checkAnswer);
  replayBtn.addEventListener('click', replay);

  inputText.value = '';
}

function checkAnswer() {
  let guess = Number(inputText.value);
  
  if (guess === randomNum) {
    //success
    resultMsg.innerHTML = 'Congratulations! You got it right!';
    resultMsg.style.backgroundColor = 'mediumseagreen';
    lowOrHigh.innerHTML = '';
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

}