// función de orden superior que devuelve otra función

function multiplicar(numero) {
    return numb => numb * numero;
}

let cadai = multiplicar(2);

console.log(cadai(8))

