// Set the initial temperature in Kelvin to 293
const kelvin = 293;
// Convert Kelvin to Celsius by subtracting 273
const celsius = kelvin - 273;

// Calculate Fahrenheit from Celsius
let fahrenheit = celsius * (9/5) + 32;

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// Calculate Newton from Celsius
let newton = celsius * (33/100);

// Round down the Newton temperature
newton = Math.floor(newton);

// Log the temperature in Fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);