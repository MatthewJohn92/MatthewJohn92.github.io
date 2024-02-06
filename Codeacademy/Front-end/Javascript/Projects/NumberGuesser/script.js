let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}
function getAbsoluteDistance(number1, number2) {
    return Math.abs(number1 - number2);
}


function compareGuesses(humanGuess, computerGuess, targetNumber) {
    const humanDifference = getAbsoluteDistance(targetNumber, humanGuess);
    const computerDifference = getAbsoluteDistance(targetNumber, computerGuess);

    // Human wins if their guess is closer to the target number or if there's a tie
    return humanDifference <= computerDifference;
}

function handleGuessSubmission(humanGuess) {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your number is out of range. Please enter a number between 0 and 9.');
        return; // Stop processing the guess
    }
    // Proceed with processing the guess if it's within range
}


function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}