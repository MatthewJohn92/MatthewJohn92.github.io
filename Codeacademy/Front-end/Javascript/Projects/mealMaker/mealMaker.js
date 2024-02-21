// Define the menu object with initial properties for _meal and _price
const menu = {
  _meal: '',
  _price: 0,

  /* Add Setter Methods 
 Setter method for _meal to ensure the input is a string*/
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      console.log('Meal must be a string.');
    }
  },

  // Setter method for _price to ensure the input is a number
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      console.log('Price must be a number.');
    }
  },

  /* Add a Getter Method */
  // Getter method to return Today's Special if _meal and _price are set correctly
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's Special is ${this._meal} for $${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

/* Direct Manipulation (For Testing) - Not recommended 
Directly manipulating _meal and _price for demonstration purposes*/
menu._meal = 10; // Incorrect type, for testing only
menu._price = 'twenty'; // Incorrect type, for testing only
console.log(menu); // Log to see why direct manipulation is not recommended

// Reset _meal and _price to correct types using setters
menu.meal = 'Spaghetti'; // Correct type through setter
menu.price = 5; // Correct type through setter

/* Use Setter Methods and Log Today's Special */
// Log Today's Special using the getter
console.log(menu.todaysSpecial);
