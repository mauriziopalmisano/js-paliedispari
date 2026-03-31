'use strict'
//////////////////////////////////////////////////////////////////////////
//RICERCA DEL PALINDROMO
/////////////////////////////////////////////////////////////////////////

const input = prompt('inserisci la parola o la frase per vedere se é palindroma');
if(trova_palindromo(input) === true){
    console.log('la parola o frase inserita é palindroma');
    
}else{
    console.log('la parola o frase inserita non é palindroma');
}
