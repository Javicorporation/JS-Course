// crear una funcion que multiplique el numero mayor y menor de un array

function arrayRamdon(lengthN) {
    let array = [];
    for (let i = 0; i < lengthN; i++) {
        let numerRan = Math.floor(Math.random()*(10)+1);
        array[i] = numerRan;
        
    }
    return array;
    
}

function multiValuesArr(arrayPrint) {
    let numMax = arrayPrint[0];
    let numMin = arrayPrint[0];

    for (let i = 0; i < arrayPrint.length; i++) {
        if (arrayPrint[i] < numMin) {
            numMin = arrayPrint[i];
        }else if(arrayPrint[i] > numMax){
            numMax = arrayPrint[i];
        }
    }
    return numMax * numMin;
}

let arrayPrint = arrayRamdon(6);
console.log(arrayPrint);
let print = multiValuesArr(arrayPrint);
console.log(print);