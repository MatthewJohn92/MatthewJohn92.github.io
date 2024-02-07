// Initial array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Task 1: Remove the last string from the array
/** Using .pop() to remove the last element from the array, reducing its length by one */
secretMessage.pop();

// Task 2: Add 'to' and 'Program' to the end of the array
/** Using .push() to add 'to' and 'Program' to the end of the array */
secretMessage.push('to', 'Program');

// Task 3: Change 'easily' to 'right'
/** Accessing the index of 'easily' directly to replace it with 'right' */
secretMessage[secretMessage.indexOf('easily')] = 'right';

// Task 4: Remove the first string from the array
/** Using .shift() to remove the first element from the array */
secretMessage.shift();

// Task 5: Add 'Programming' to the beginning of the array
/** Using .unshift() to add 'Programming' to the start of the array */
secretMessage.unshift('Programming');

// Task 6: Remove specific strings and replace them with 'know,'
/** Using .splice() to remove specific words and replace them with 'know,' */
// Finding the index of 'get' to start the replacement from the correct position
let startIndex = secretMessage.indexOf('get');
// Calculating how many words to remove
let amountToRemove = secretMessage.indexOf('time,') - startIndex + 1;
secretMessage.splice(startIndex, amountToRemove, 'know,');

// Task 7: Log the secret message as a sentence
/** Using .join(' ') to combine all elements of the array into a single string separated by spaces */
console.log(secretMessage.join(' '));
