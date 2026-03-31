'use strict'


function random_num_to_5(){
    const random_num = Math.floor((Math.random()*5)+1);
    return random_num;
} 

function even_or_odd (numero) {
    if (numero % 2 === 0) {
        return 'pari';
    }else{
        return 'dispari';
    }
    
}

function trova_palindromo(parola) {
    const stringa_pulita = parola.toLowerCase(); // Mette la stringa in minuscolo
    let i = 0;//indice per il carattere di sinitra
    let j = stringa_pulita.length - 1;// indice per il carattere di destra
    while( i < j){// ciclo continua ad iterare fini a quando non si raggiunge il centro, ho usato un while perche voglio aggiornare manualmente i contatore cosi da poter saltare spazi
        const char_sinistra = stringa_pulita[i];// Carattere a sinistra (indice i)
        const char_destra = stringa_pulita[j];//Carattere a destra (indice j)
        if (!/[a-z0-9]/.test(char_sinistra)) {// Se il carattere a sinistra non è una lettera Sposta l'indice sinistro di uno a destra e salta al prossimo ciclo
            i++;
            continue;
        }
        if (!/[a-z]/.test(char_destra)) {//Se il carattere a destra non è una lettera Sposta l'indice destro di uno a sinistra e salta al prossimo ciclo
            j--;
            continue;
        }
        if (char_sinistra !== char_destra) {// Se i due caratteri validi confrontati sono diversi restituisce false e esce subito
            return false; 
        }
        // Se invece sono uguali, continua spostando entrambi gli indici verso il centro
        i++;
        j--;
    }
    return true;// Se il ciclo finisce senza trovare differenze, la stringa è palindroma
}