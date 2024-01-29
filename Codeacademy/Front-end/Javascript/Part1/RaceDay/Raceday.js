// Assegniamo casualmente il numero di gara a ciascun partecipante.
let raceNumber = Math.floor(Math.random() * 1000);

// Task 1: Creiamo una variabile che indica se un corridore si è registrato in anticipo o meno.
let registeredEarly = true;

// Task 2: Creiamo una variabile per l'età del corridore.
let runnerAge = 18;

// Task 3: Verifichiamo se il corridore è un adulto e si è registrato in anticipo.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// Task 4: Creiamo uno statement di controllo per determinare l'orario di gara.
if (runnerAge > 18 && registeredEarly) {
  // Task 5: Se il corridore è un adulto e si è registrato in anticipo, stampiamo il messaggio appropriato sulla console.
  console.log(`Il corridore con il numero di gara ${raceNumber} correrà alle 9:30.`);
} else if (runnerAge > 18 && !registeredEarly) {
  // Task 6: Se il corridore è un adulto ma non si è registrato in anticipo, stampiamo il messaggio appropriato sulla console.
  console.log(`Il corridore con il numero di gara ${raceNumber} correrà alle 11:00.`);
} else if (runnerAge < 18) {
  // Task 7: Se il corridore è minorenne, stampiamo il messaggio appropriato sulla console.
  console.log(`Il corridore con il numero di gara ${raceNumber} correrà alle 12:30.`);
} else {
  // Task 8: Gestiamo il caso speciale dei corridori esattamente di 18 anni con questo statement.
  console.log(`Il corridore con il numero di gara ${raceNumber} deve recarsi alla postazione di registrazione.`);
}
