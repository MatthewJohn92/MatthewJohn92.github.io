// Write your function here:

function tipCalculator(serviceQuality, totalCost) {
  switch (serviceQuality) {
    case 'bad':
      return totalCost * 0.05; // 5% tip
    case 'ok':
      return totalCost * 0.15; // 15% tip
    case 'good':
      return totalCost * 0.20; // 20% tip
    case 'excellent':
      return totalCost * 0.30; // 30% tip
    default:
      return totalCost * 0.18; // 18% tip (default)
  }
}

console.log(tipCalculator('good', 100)); // Should return 20





// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
