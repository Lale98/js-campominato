// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.

// -------------------------------------------------------FUNCTION-----------------------------------------------------------------------------------
function isInArray (element, array) {
    
    for (var i = 0; i < array.length; i++) {
        
        if (element==array[i]) {
            return true;
        }
    }
    return false;
}

function randomNumber (min, max) {
    num = Math.floor(Math.random() * (max - min + 1) + min );
    return num;
}
// -------------------------------------------------------/FUNCTION-----------------------------------------------------------------------------------


var tentativi = [];


var difficoltà = parseInt(prompt('Selezionara la difficoltà tra: 0 - 1 - 2'));

while (isNaN(difficoltà) || difficoltà < 0 || difficoltà > 2) {
    difficoltà = parseInt(prompt('Difficoltà sconosciuta\nSelezionara la difficoltà tra: 0 - 1 - 2'));
}

switch (difficoltà) {
    case 0:
        numeriGenerati = 100;
        break;
    case 1:
        numeriGenerati = 80;
        break;
    case 2:
        numeriGenerati = 50;
        break;
    default:
        alert('difficoltà sconosciuta');        
}

var maxTentativi = numeriGenerati - 16;

// ---------------------------------------------------------CREAZIONE BOMBE------------------------------------------------------------------------------

var bombe =[];

while (bombe.length < 16) {
    var numeroBomba = randomNumber(1,numeriGenerati);

    if (!isInArray(numeroBomba, bombe)) {
        bombe.push(numeroBomba);
    }
}
console.log(bombe);


// --------------------------------------------------------------GIOCO--------------------------------------------------------------------------------------
var gameOver = false;

while (tentativi.length < maxTentativi && gameOver == false) {
    
    var numeroUtente = parseInt(prompt('inserisci un numero compreso tra 1 e ' + numeriGenerati));

    while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > numeriGenerati) {
        var numeroUtente = parseInt(prompt('Ho detto un numero compreso tra 1 e ' + numeriGenerati + ' !'));
    }
    console.log(numeroUtente);

    if (isInArray(numeroUtente,bombe)) {
        gameOver = true;
        alert('GAME OVER\nil tuo punteggio ' + tentativi.length);

    } else if (!isInArray(numeroUtente, tentativi)) {
        tentativi.push(numeroUtente);
    }
    
}
if (tentativi.length == maxTentativi) {
    alert('HAI VINTO !\Nil tuo punteggio ' + tentativi.length);
}




