no// Write your function here:

function finalGrade(grade1, grade2, grade3) {
  // Check if any grade is invalid
  if (grade1 < 0 || grade1 > 100 || grade2 < 0 || grade2 > 100 || grade3 < 0 || grade3 > 100) {
    return 'You have entered an invalid grade.';
  }

  // Calculate the average of the three grades
  const average = (grade1 + grade2 + grade3) / 3;

  // Determine the letter grade based on the average
  if (average >= 0 && average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else {
    return 'A';
  }
}





// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!