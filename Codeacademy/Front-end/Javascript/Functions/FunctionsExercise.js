/*
Default Parameters
*/
function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}


makeShoppingList('tacos');

// Return - When a function is called, the computer will run through the function’s code and evaluate the result. By default, the resulting value is undefined.
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  /*
  Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

Create a variable named plantNeedsWater using the const variable keyword.
Assign an anonymous function that takes in a parameter of day to plantNeedsWater.*/
  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors);


  const plantNeedsWater = function(day) {
    if(day === 'Wednesday'){
      return true;
    } else {
      return false;
    }
  };
  
  plantNeedsWater('Tuesday');
  
  console.log(plantNeedsWater('Tuesday'));

  //Arrow Functions
  const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  