let randomNumber = Math.floor(Math.random() * 100) + 1;
let chances = 5;

document.getElementById('checkBtn').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const hint = document.getElementById('hint');
    const remainingChances = document.getElementById('remainingChances');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        hint.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    chances--;

    if (userGuess === randomNumber) {
        hint.textContent = 'Congratulations! You guessed the correct number!';
        document.getElementById('checkBtn').disabled = true;
    } else if (userGuess > randomNumber) {
        hint.textContent = 'Your number is high';
    } else {
        hint.textContent = 'Your number is low';
    }

    remainingChances.textContent = chances;

    if (chances === 0 && userGuess !== randomNumber) {
        hint.textContent = 'Game Over! The correct number was ' + randomNumber;
        document.getElementById('checkBtn').disabled = true;
    }
});
