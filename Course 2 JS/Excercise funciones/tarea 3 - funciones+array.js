/*has una funcion que encuentre  el numero mayor de un array de n longitud */

function generator(NElement) {
    let array = [];
    for (let i = 0; i < NElement; i++) {
        let numero = Math.floor(Math.random()*(11));
        
    }
    
};

let arrayM = generator(12);


function NumeroMayor(arrayM) {
    let numero = arrayM[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === numero) {
            numero === array[i];
        }
    }
    return numero;
};

let imprime = NumeroMayor(arrayM);

console.log(imprime);