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