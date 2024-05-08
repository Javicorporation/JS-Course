/*Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro 
y retornar un único arreglo, 
cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6]. */

function arrayRam1(length1) {
    let arrayVC = [];
    for (let i = 0; i < length1; i++) {
        let numerosR = Math.floor(Math.random()*(10)+1);
        arrayVC[i] = numerosR;
    }
    return arrayVC
}

function arrayRam2(length2) {
    let arrayVC2 = [];
    for (let i = 0; i < length2; i++) {
        let numerosR2 = Math.floor(Math.random()*(10)+1);
        arrayVC2[i] = numerosR2;
    }
    return arrayVC2;
}

function unirArrayMultiplicar(array1, array2) {
    let arrayNew = [...array1, ...array2];
    for (let i = 0; i < arrayNew.length; i++) {
        arrayNew[i] = arrayNew[i]*arrayNew[i];
        
    }



    return arrayNew;
}



let a =arrayRam1(4);
let b = arrayRam2(4);
let imprime = unirArrayMultiplicar(a,b);

console.log(a);
console.log(b);
console.log(imprime);