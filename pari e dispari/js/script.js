// // PARI E DISPARI

// // CONSEGNA

// // L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// // Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// // Sommiamo i due numeri
// // Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// // Dichiariamo chi ha vinto.

// // ANALISI

// // [] L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//     // [x] chiedo all'utente di decidere tra pari o dispari
//     // [x] utente immette pari o dispari
// const userChoice = prompt('scegli tra pari o dispari');
// // console.log(userChoice);
// if (userChoice === 'pari') {
//     console.log('hai scelto', userChoice)
// } else {
//     console.log('hai scelto', userChoice)
// }
// // [] chiedo all'utente di selezionare un numero tra 1 e 5 
//     // - se numero compreso tra 1 e 5 procedo
//     // - altrimenti continuo a richiedere numero
//     let userNumber= 0;


// chiedo all'utente di scegliere tra pari o dispari
let userEvenOrOdd = prompt('Scegli pari o dispari');

// cnontinuo a chiedere all'utente di reinserire un numero corretto
while (( userEvenOrOdd !== 'pari') && ( userEvenOrOdd !== 'dispari')) {
    userEvenOrOdd = prompt('Scegli pari o dispari');
    console.log(userEvenOrOdd)
}

// chiedo all'utente di scegliere un numero tra 1 e 5
let userNumber = parseInt( prompt('Scegli un numero tra 1 e 5'));

// cnontinuo a chiedere all'utente di reinserire un numero corretto
while (userNumber > 5 || userNumber < 1) {
    userNumber = parseInt( prompt('Scegli un numero tra 1 e 5'));
    // console.log(userNumber)
}

// genero un numero casuale per il CPU (funzione)
const cpuNumber = getRndInteger(1, 5);

// Sommo i due numeri
const sum = userNumber + cpuNumber;

// stabilire se la somma è pari o dispari
const sumEvenOrOdd = isNumberEvenOrOdd(sum);

// stabilire il vincitore
if(userEvenOrOdd === sumEvenOrOdd) {
    alert("ha vinto l'user");
} else {
    alert ("ha vinto il CPU");
}



// FUNCTIONS

// funzione numero random da 1 a 5
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione riconosce numeri pari o dispari
// number -> numero da valutare

// return: stringa pari se numero pari o dispari se numero dispari
function isNumberEvenOrOdd(number) {
    let result;
    if (number % 2 === 0) {
        result = 'pari';
    } else {
        result = 'dispari';
    }
    return result;
}