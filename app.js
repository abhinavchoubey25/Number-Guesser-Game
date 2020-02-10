// Variable initialization
let min = 1,
    max = 10,
    winningNum = randomNum(min, max),
    guessLeft = 3;

// Declaring varibales
let minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    userInput = document.querySelector('#guess-input'),
    userSubmit = document.querySelector('#guess-btn'),
    userMessage = document.querySelector('.message'),
    game = document.querySelector('#game');
    
// Dynamic Text
minNum.textContent = min;
maxNum.textContent = max;

// Game over 
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen Event
userSubmit.addEventListener('click', function() {
  userInputValue = parseInt(userInput.value);
  // Input validation
  if(isNaN(userInputValue) || userInputValue < min || userInputValue > max) {
    setMessage(`Please enter a value between ${min} and ${max}`, 'red');
  }
  if (userInputValue === winningNum) {
    userInput.disabled = true;
    userInput.style.border = '1px solid green';
    setMessage(`Congratualtions! ${winningNum} is correct. You Won...`, 'green');
    userSubmit.value = 'Play again!';
    userSubmit.className += 'play-again';
  } else {
    guessLeft-=1;
    userInput.style.border = '1px solid red';
    if(guessLeft > 0) {
      setMessage(`Incorrect answer. Only ${guessLeft} chances are left. All the best.`, 'orange');

    } else if (guessLeft === 0) {
      setMessage(`Hard luck. Correct answer is ${winningNum}. Your game is over. Better luck next time.`, 'red');
      userInput.disabled = true;
      userSubmit.value = 'Play again!';
      userSubmit.className += 'play-again';
    }
  }
});

// Message function
function setMessage(msg, color) {
  userMessage.style.color = color;
  userMessage.textContent = msg;
}

// Random number function
function randomNum() {
  return Math.floor(Math.random()*(max - min + 1) + min);
}
