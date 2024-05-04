let longitud = 7;

function imprime(longi) {

    if (longi === 0 || longi < 0) {
        console.log("el numero es 0 o es un numero negativo");
        return [];
    }
    let array = []

    for (let i = 0; i < longi; i++) {
        array[i] = i + 1;
    }
    return array;
}

let resultado = imprime(longitud);

console.log(resultado);