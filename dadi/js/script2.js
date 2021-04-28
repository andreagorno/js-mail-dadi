// 2 - Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// numero generato per il giocatore
var nPlayer;
nPlayer = Math.floor(Math.random() * 6 + 1);
console.log (nPlayer);

// numero generato per il computer
var nComputer;
nComputer = Math.floor(Math.random() * 6 + 1);
console.log (nComputer);

// Stabilire il vincitore
if (nPlayer > nComputer) {
    console.log("Hai Vinto!");
} else if (nPlayer < nComputer) {
    console.log("Il Computer ha Vinto!");
} else if (nPlayer == nComputer) {
    console.log("E' un Pareggio!");
}