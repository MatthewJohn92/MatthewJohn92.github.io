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
  
  const numOfMonitors = monitorCount(5,4);
  console.log(numOfMonitors);