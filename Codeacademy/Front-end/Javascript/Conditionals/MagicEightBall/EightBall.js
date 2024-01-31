// Step 1: Define a variable called userName.
let userName = '';

// Step 2: Use a ternary expression to greet the user with or without their name.
userName='jane';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Step 3: Create a variable named userQuestion.
let userQuestion = 'Will I have a great day today?';

// Step 4: Log the user's question to the console.
console.log(`You asked: ${userQuestion}`);

// Step 5: Generate a random number between 0 and 7.
const randomNumber = Math.floor(Math.random() * 8);

// Step 6: Create a variable named eightBall.
let eightBall = '';

// Step 7: Use control flow to assign a response to eightBall based on the randomNumber.
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}

// Step 8: Log the Magic Eight Ball's answer.
console.log(`Magic Eight Ball says: ${eightBall}`);

// Step 9: Run your program to see random results!
