// Classe padre Media
class Media {
  constructor(title) {
    // Proprietà condivise da tutte le sottoclassi
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // Getter per il titolo
  get title() {
    return this._title;
  }

  // Getter per lo stato di "isCheckedOut"
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  // Getter per le valutazioni (ratings)
  get ratings() {
    return this._ratings;
  }

  // Setter per modificare "isCheckedOut"
  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

  // Metodo per alternare lo stato di "isCheckedOut"
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // Metodo per ottenere la valutazione media
  getAverageRating() {
    const sum = this._ratings.reduce((acc, rating) => acc + rating, 0);
    return sum / this._ratings.length;
  }

  // Metodo per aggiungere una valutazione
  addRating(rating) {
    this._ratings.push(rating);
  }
}

// Classe Book estende Media
class Book extends Media {
  constructor(author, title, pages) {
    super(title); // Chiama il costruttore della classe padre
    this._author = author;
    this._pages = pages;
  }

  // Getter per l'autore
  get author() {
    return this._author;
  }

  // Getter per il numero di pagine
  get pages() {
    return this._pages;
  }
}

// Classe Movie estende Media
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title); // Chiama il costruttore della classe padre
    this._director = director;
    this._runTime = runTime;
  }

  // Getter per il regista
  get director() {
    return this._director;
  }

  // Getter per la durata del film
  get runTime() {
    return this._runTime;
  }
}

// Esempio di utilizzo con la classe Book
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

// Cambia lo stato di checkout
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut); // Output: true

// Aggiungi valutazioni
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

// Ottieni la media delle valutazioni
console.log(historyOfEverything.getAverageRating()); // Output: 4.67

// Esempio di utilizzo con la classe Movie
const speed = new Movie('Jan de Bont', 'Speed', 116);

// Cambia lo stato di checkout
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut); // Output: true

// Aggiungi valutazioni
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

// Ottieni la media delle valutazioni
console.log(speed.getAverageRating()); // Output: 2.33
