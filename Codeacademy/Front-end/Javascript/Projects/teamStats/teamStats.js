// Team Stats: Creare, recuperare e aggiungere informazioni su una squadra sportiva preferita.

// 1. Creare una struttura dati per memorizzare le informazioni sulla squadra.
const team = {
  // Inizializzazione delle proprietà _players e _games con array vuoti per rappresentare i giocatori e le partite.
  _players: [],
  _games: [],

  // 2. Creare un metodo getter per recuperare la proprietà _players.
  get players() {
    return this._players;
  },

  // 3. Creare un metodo getter per recuperare la proprietà _games.
  get games() {
    return this._games;
  },

  // 4. Aggiungere un nuovo giocatore alla squadra.
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this._players.push(player);
  },

  // 5. Aggiungere un record di una nuova partita.
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this._games.push(game);
  }
};

// Popolare l'array _players con tre giocatori.
team.addPlayer('Pablo', 'Diaz', 31);
team.addPlayer('Marco', 'Rossi', 25);
team.addPlayer('Luca', 'Bianchi', 29);

// Popolare l'array _games con tre partite.
team.addGame('Sharks', 42, 27);
team.addGame('Wolves', 35, 33);
team.addGame('Eagles', 48, 45);

// Aggiungere un nuovo giocatore usando il metodo addPlayer.
team.addPlayer('Bugs', 'Bunny', 76);
// Verificare che il nuovo giocatore sia stato aggiunto correttamente.
console.log(team.players);

// Aggiungere un nuovo record di partita usando il metodo addGame.
team.addGame('Titans', 100, 98);
// Verificare che il nuovo record di partita sia stato aggiunto correttamente.
console.log(team.games);
