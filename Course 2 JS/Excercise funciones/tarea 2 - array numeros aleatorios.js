// llenar un array de numeros aleatorios con el metodo  normal o .push

function arrayAleato(NElem) {
    let array = [];
    for (let i = 0; i < NElem; i++) { 
        let numeroAleatori = Math.floor(Math.random()*(11));
        array[i] = numeroAleatori; 
    }
    return array;
}

let imprime = arrayAleato(12);
console.log(imprime);