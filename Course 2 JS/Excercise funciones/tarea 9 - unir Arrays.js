/*Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro 
y que retorne un booleano, unir los dos arreglos en uno solo, 
si la longitud de el nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.*/

function arrayRandon(length) {
    let arrayVC = [];
    for (let i = 0; i < length; i++) {
        let num = Math.floor(Math.random()*(10)+1);
        arrayVC[i] = num;
    }
    return arrayVC;
}

function booleanoArray(array1, array2) {
    let newArray = [array1, array2];
    if (newArray.length >= 10) {
        return true;
    } else {
        return false;
    }
}

let length = 8;
let arrayN = arrayRandon(length)



let imprime = booleanoArray(arrayN, arrayN);
console.log(imprime);