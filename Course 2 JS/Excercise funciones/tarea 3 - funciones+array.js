/*has una funcion que encuentre  el numero mayor de un array de n longitud */

function generator(NElement) {
    let array = [];
    for (let i = 0; i < NElement; i++) {
        let numero = Math.floor(Math.random()*(11));
        array[i] = numero;
    }
    return array;
    
};

let arrayM = generator(12);
console.log(arrayM);

function NumeroMayor(arrayM) {
    let numero = arrayM[0];
    for (let i = 0; i < arrayM.length; i++) {
        
        if (arrayM[i] > numero) {
            numero = arrayM[i];
        }
    }
    return numero;
};

let imprime = NumeroMayor(arrayM);

console.log(imprime);