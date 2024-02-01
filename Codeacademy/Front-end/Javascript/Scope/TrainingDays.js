// Task: Make random local
// Spostare la variabile 'random' all'interno della funzione getRandEvent per assicurare che ogni invocazione generi un evento casuale indipendentemente.
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3); // 'random' ora è locale all'interno di questa funzione.
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Task: Expand days scope
// Dichiarare 'days' all'interno della funzione getTrainingDays, ma prima delle istruzioni if per evitare ReferenceError.
const getTrainingDays = event => {
  let days; // Dichiarazione ampliata di 'days' per renderla accessibile in tutta la funzione.
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days; // Restituisce il numero corretto di giorni basato sull'evento.
};

// Task: Make name global (and then adjust it to be a parameter instead)
// Modificare le funzioni logEvent e logTime per includere 'name' come parametro, eliminando la duplicazione del codice e migliorando la gestione dello scope.
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Definire variabili globali per il nome e gli eventi per una gestione più pulita dei dati.
const name = 'Nala';
const event = getRandEvent();
const days = getTrainingDays(event);

// Passare 'name' come argomento alle funzioni logEvent e logTime per rispettare il nuovo scope e la gestione dei parametri.
logEvent(name, event);
logTime(name, days);

// Task: Test the function for another competitor
// Provare le funzioni per un altro concorrente per assicurarsi che l'evento assegnato sia casuale e indipendente.
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);
