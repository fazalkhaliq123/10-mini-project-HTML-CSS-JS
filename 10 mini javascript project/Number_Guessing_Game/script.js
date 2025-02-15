// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resetButton = document.getElementById('resetButton');
const feedback = document.getElementById('feedback');

guessButton.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value, 10);
  attempts++;

  if (isNaN(userGuess)) {
    feedback.textContent = 'Please enter a valid number.';
    feedback.style.color = 'red';
  } else if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'Your guess must be between 1 and 100!';
    feedback.style.color = 'red';
  } else if (userGuess < randomNumber) {
    feedback.textContent = 'Too low! Try again.';
    feedback.style.color = 'orange';
  } else if (userGuess > randomNumber) {
    feedback.textContent = 'Too high! Try again.';
    feedback.style.color = 'orange';
  } else {
    feedback.textContent = `Correct! You guessed it in ${attempts} attempts.`;
    feedback.style.color = 'green';
    guessButton.style.display = 'none';
    resetButton.style.display = 'inline-block';
  }

  guessInput.value = '';
  guessInput.focus();
});

resetButton.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  feedback.textContent = '';
  guessInput.value = '';
  guessButton.style.display = 'inline-block';
  resetButton.style.display = 'none';
});

