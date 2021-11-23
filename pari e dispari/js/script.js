// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// Chiedo il numero all'utente
let userNumber = parseInt( prompt('Dimmi un numero') );
// console.log(userNumber);

// Valuto se il numero è pari o dispari
// la variabile userNumberEvenOrOdd è uguale al return della funzione evenOrOdd
let userNumberEvenOrOdd = evenOrOdd(userNumber);
console.log(userNumberEvenOrOdd);

// Se è pari, scrive 'Il numero è pari', altrimenti scrivo 'Il numero è dispari'
if( userNumberEvenOrOdd === 'pari' ) {
    alert('Il numero è pari');
} else {
    alert('Il numero è dispari');
}


// FUNCTIONS

// Stabilisce se un numero è pari o dispari
// number -> numero da valutare (se pari o dispari)
// 
// return: una stringa. Se pari la stringa è uguale a 'pari' altrimenti 'dispari'
function evenOrOdd(number) {
    let result;

    // fare if se % 2 === 0
    if( number % 2 === 0 ) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    // return
    return result;
}