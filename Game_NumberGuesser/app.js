/*jshint esversion: 6 */

/*
GAME FUNCTION:
- Player must guess number between min and max
- Player gets a certian amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let the player to choose to play again

*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements

// Get class with querySelector
const UIgame = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again Event listner
// Note: you need to use mousedown event
UIgame.addEventListener('mousedown',function(e){

    // If target class name is play-again then reload the page
    if(e.target.className === 'play-again'){

        // Reload the page
        window.location.reload();
    }

});

// Listen for guess
guessBtn.addEventListener('click', function () {

    // Convert String into an Int
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // Validate
    // Make sure to make the value is not empty or below or above the maximum
    if (isNaN(guess) || guess < min || guess > max) {

        console.log('Not valid SELECTION');

        if (isNaN(guess)) {

            setMessage('You have NOT Entered a Number!', 'red');
        } else {

            setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        }

    } else {

        // Check if won
        if (guess === winningNum) {
            // *** GAME OVER WON

            gameOver(true, `${winningNum} is correct! You have WON!`);

            // // Disable input
            // guessInput.disabled = true;

            // // Change border color
            // guessInput.style.bordercolor='Green';

            // // Set message
            // setMessage(`${winningNum} is correct!. You win!`,'green');

        } else {

            // *** GAME OVER LOST

            // Wrong number
            // This statment is the same as below: guessesLeft = guessesLeft -1
            guessesLeft -= 1;

            if (guessesLeft === 0) {
                // Game over - lost 
                guessInput.disabled = true;
                guessInput.style.bordercolor = 'red';
                setMessage(`Game over, over lost. The correct number was ${winningNum} `, 'red');

            } else {

                // Game continues - answer wrong
                gameOver(false, `Your guess of ${guess} is NOT correct!, You have ${guessesLeft} guesses left!`);

                // // Change border color
                // guessInput.style.bordercolor = 'red';

                // // Clear input
                // guessInput.value = '';

                // // Tell user it is the wrong number
                // setMessage(`${guess} is not correct, You have ${guessesLeft} guesses left`);

            }

        }

    }

});

// Game over function with 2 parameters won and msg
function gameOver(won, msg) {
    let color;

    // Use terinary operator
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = won;

    // Change border color
    guessInput.style.bordercolor = color;
    message.style.textcolor = color;

    // Set Message
    setMessage(msg, color);

    // *** Play again ***
    guessBtn.value = 'Play Again';
    // Append the class play-again
    guessBtn.className += 'play-again';
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

// Get winning number
function getRandomNum(min,max){

    // Round down with Math floor
    return Math.floor(Math.random()*((max-min)+1)+min);
}