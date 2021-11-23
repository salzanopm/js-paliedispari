// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// dichiaro variabile somma
let somma ='';
// chiedo utente stringa
let userWord = prompt('inserisci una parola')
// ciclo per scomporre parola e popolare un array con le singole lettere della stessa
function findPalindrome () {
    for (let i=0 ; i < userWord.length; i++){
        // variabile interna per formula
        let x =  (userWord.length -i);
        let n =  x-1
        // concateno con variabile nuova
        somma += userWord[n]
    };
    console.log(somma)
    // dichiaro variabile result
    let result='';
    // confronto le due parole
    console.log(userWord)
    // se userWord uguale somma stampa risultato positivo
    if (userWord == somma) {
        result = console.log('Questa parola è palindroma')
    // altrimenti stampa risultato positivo
    } else {
        result = console.log('Questa parola non è palindroma')
    }
    return result
}
// test function
findPalindrome(userWord)
