// crear una funcion que sume los valores de un array

function arrayRandom(lengthNum) {

    let numArray = [];
    for (let i = 0; i < lengthNum; i++) {
        let numRand = Math.floor(Math.random() *(10)+1);
        numArray[i] = numRand;
    }
    return numArray
}





let array = arrayRandom(4);
console.log(array);

function sumaArray(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma;
    
}

let imprime = sumaArray(array);
console.log(imprime);