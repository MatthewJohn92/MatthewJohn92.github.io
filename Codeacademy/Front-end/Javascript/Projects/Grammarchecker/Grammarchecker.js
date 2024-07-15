let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// 1. Log the storyWords array to the console.
console.log(storyWords);

// 2. Comment out the console.log() statement.
// console.log(storyWords); // Commented out

// 3. Create a variable named count and set it to 0.
let count = 0;

// Use a forEach() method to iterate over the storyWords array and increment count by one for each word.
storyWords.forEach(word => {
  count++;
});

console.log(count); // Check the word count

// 4. Reassign the storyWords variable to filter out the word "literally".
storyWords = storyWords.filter(word => word !== unnecessaryWord);

console.log(storyWords.join(' ')); // Check the updated story

// 5. Reassign storyWords to spell-check the word "beautifull".
storyWords = storyWords.map(word => {
  return word === misspelledWord ? 'beautiful' : word;
});

console.log(storyWords.join(' ')); // Check the spell-checked story

// 6. Find the index of the bad word "freaking".
let badWordIndex = storyWords.findIndex(word => word === badWord);

console.log(badWordIndex); // Log the index of the bad word

// 7. Replace the bad word with a more appropriate word.
storyWords[badWordIndex] = 'really';

console.log(storyWords.join(' ')); // Check the story with the bad word replaced

// 8. Check if every word in the story is 10 characters or less.
let lengthCheck = storyWords.every(word => word.length <= 10);

console.log(lengthCheck); // Log the result of the length check

// 9. Find and replace the word longer than 10 characters.
storyWords = storyWords.map(word => word.length > 10 ? 'stunning' : word);

console.log(storyWords.join(' ')); // Check the story with long words replaced
