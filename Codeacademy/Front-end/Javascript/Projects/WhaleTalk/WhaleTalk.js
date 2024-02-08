// Task 1: Create a variable named input with a phrase to translate into whale talk.
let input = 'turpentine and turtles';

// Task 2: Create an array named vowels with the vowels that whales use to communicate.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Task 3: Create a variable named resultArray to store the vowels from the input string.
let resultArray = [];

// Task 4: Loop through each letter of the input text.
for (let i = 0; i < input.length; i++) {
    // Task 5: To check the loop, you can log the iterator (commented out as per instructions).
    // console.log('Input character position:', i);

    // Task 9: Check if the letter is 'e' or 'u' to double them.
    if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
    }

    // Task 6: Create a nested loop to iterate through the vowels array.
    for (let j = 0; j < vowels.length; j++) {
        // Task 7: To check this loop, log the iterator (commented out as per instructions).
        // console.log('Vowel position:', j);

        // Task 8: Compare the input letter to every letter in the vowels array.
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
        }
    }
}

// Task 10 & 11: The code to double 'e's and 'u's has already been included above.

// Task 12: Log the resultArray to the console to see the vowels extracted.
console.log(resultArray);

// Task 13: Combine the elements of resultArray into a single string and capitalize it.
let resultString = resultArray.join('').toUpperCase();

// Task 14: Output the whale talk translation and celebrate!
console.log(resultString);
