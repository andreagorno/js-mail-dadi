// 1 - Mail
// Chiedi all'utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull'esito del controllo.

// Chiedi all'utente la sua email
var mailUtente;
mailUtente = prompt("Inserisci qui la tua mail");
console.log(mailUtente);

// lista di chi può accedere
var utentiAccettati;
utentiAccettati = ["andreagorno@gmail.com", "gornoandrea@gmail.com", "gigi@gmail.com", "nanni@gmail.com", "dario@gmail.com"];

var accesso = "negato";
// controlla che sia nella lista di chi può accedere
for (var i = 0; i < utentiAccettati.length; i++) {
    // console.log(utentiAccettati[i]);

    if (utentiAccettati[i] == mailUtente) {
        accesso = "riuscito";
    }
}

if (accesso == "riuscito") {
    console.log("Accesso Riuscito");
} else {
    console.log("Accesso Negato");
}