// Task 1: Create a function named getUserChoice that takes a single parameter userInput.
const getUserChoice = (userInput) => {
  // Converts to lowercase to handle different capitalizations
  userInput = userInput.toLowerCase();

  // Task 3: Check if userInput is a valid choice ('rock', 'paper', or 'scissors').
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') { // Added 'bomb' for the cheat code
    return userInput;
  } else {
    console.log('Error: Invalid choice'); // Error message for invalid choice
  }
};

// Task 5: Create a function named getComputerChoice with no parameters.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

// Task 7-11: Create a function named determineWinner that takes two parameters userChoice and computerChoice.
const determineWinner = (userChoice, computerChoice) => {
  // Checking for a tie
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
  
  // Implementing the secret cheat code
  if (userChoice === 'bomb') {
    return 'Congratulations, you won with a secret cheat code!';
  }

  // Conditions for determining the winner
  if (userChoice === 'rock') {
    return (computerChoice === 'paper') ? 'The computer won!' : 'You won!';
  }
  if (userChoice === 'paper') {
    return (computerChoice === 'scissors') ? 'The computer won!' : 'You won!';
  }
  if (userChoice === 'scissors') {
    return (computerChoice === 'rock') ? 'The computer won!' : 'You won!';
  }
};

// Task 12-14: Create a function named playGame to start the game and log the results.
const playGame = () => {
  // User and computer choices
  const userChoice = getUserChoice('rock'); // Change 'bomb' to 'rock', 'paper', or 'scissors' to test different inputs
  const computerChoice = getComputerChoice();
  
  // Logging choices to the console
  console.log(`You threw: ${userChoice}`);
  console.log(`The computer threw: ${computerChoice}`);
  
  // Determining and logging the winner
  console.log(determineWinner(userChoice, computerChoice));
};

// Starts the game
playGame();
