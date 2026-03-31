'use strict'
//////////////////////////////////////////////////////////////////////////
//GIOCO DEL PARI E DISPARI
/////////////////////////////////////////////////////////////////////////
let scelta_giocatore = '';
let numero_giocatore = 0;
do {
    scelta_giocatore = prompt('pari o dispari?').toLowerCase().trim(); //scelta tra pari e dispari con il .tolowercase per avere sempre tutto in minuscolo
    console.log(scelta_giocatore);
    
} while ((scelta_giocatore !== 'pari') && (scelta_giocatore !== 'dispari'));
do {
    numero_giocatore = parseInt(prompt("Scegli un numero 1-5"));//scelta del tumero tra 1 e 5
} while (isNaN(numero_giocatore) || (numero_giocatore < 1) || (numero_giocatore > 5));
const numero_cpu = random_num_to_5(); // calcolo del numero random tra 1 e 5 per la cpu 
const sum = numero_giocatore + numero_cpu; // somma del numero giocatore e cpu
const risultato = even_or_odd(sum);// check che la sommma sia pari o dispari
const vincitore = risultato === scelta_giocatore;//variabile booleana per capire se la scelta del giocatore era giusta o sbagliata
console.log(`Tu: ${numero_giocatore}, CPU: ${numero_cpu}, Somma: ${sum} (${risultato})`);//log di tutti i valori cosi da fare un controllo sui numeri
console.log(vincitore ? "Hai vinto!" : "Hai perso!");// sfruttiamo la variabile booleana per determinare se stampare la vittoria o la sconfitta 

