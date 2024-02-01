// Task 1: Create a function named getSleepHours with a single parameter named day.
function getSleepHours(day) {
  // Task 2: The function uses a switch statement to return hours slept each night.
  switch(day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 5;
    case 'friday':
      return 7;
    case 'saturday':
      return 9;
    case 'sunday':
      return 8;
    default:
      return 'Error: Invalid day';
  }
}

// Task 4: Create a function to get the total sleep hours that you actually slept.
function getActualSleepHours() {
  // Task 5: Calls getSleepHours() for each day and adds the results together.
  return getSleepHours('monday') +
         getSleepHours('tuesday') +
         getSleepHours('wednesday') +
         getSleepHours('thursday') +
         getSleepHours('friday') +
         getSleepHours('saturday') +
         getSleepHours('sunday');
}

// Task 6: Create a function named getIdealSleepHours with no parameters.
function getIdealSleepHours(idealHours = 8) { // Task 12: Updated to accept an argument for ideal hours per night
  // Task 7: Returns the ideal hours multiplied by 7.
  return idealHours * 7;
}

// Task 8-9: Calculate sleep debt.
function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours(); // Actual sleep hours
  const idealSleepHours = getIdealSleepHours(); // Ideal sleep hours based on preference
  
  // Task 10: Determine sleep debt and log the result.
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed. You're ${actualSleepHours - idealSleepHours} hour(s) over your ideal sleep.`);
  } else {
    console.log(`You should get some rest. You're ${idealSleepHours - actualSleepHours} hour(s) under your ideal sleep.`);
  }
}

// Task 11: Start the program by calling calculateSleepDebt().
calculateSleepDebt();
