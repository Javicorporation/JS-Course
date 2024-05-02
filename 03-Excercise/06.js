let array = [-2, -4, -8, -6, 3 , 8, 2];

function numbersMay(array) {
    let cantNMy = 0;

    for (const i of array) {
        if (i > 0) {
            cantNMy++;
        }
    }
    return cantNMy;    
}

let resultado = numbersMay(array);

console.log(resultado);