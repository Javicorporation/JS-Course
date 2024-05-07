// crea un funcion que invierta una cadena


/*  
    el metodo .toLowerCase() convierte la cadena a minuscula 
    el metodo .split() convierte a la cadena en un array, pero el array seria de un solo indice ['texto']
        pero si agregas '' o "" al metodo .split("") o .split(''), convertira a la cadena en unarray de carracteres['t','e','x','t','o']
    el metodo .reverse() invierte ese array de caracteres
    el metodo . join() devuelve un string pero con "," y podemos usar las '', para que debuelda solo los caracteres. 
    */

function revertir(cadena) {
    let cadenaRev = (cadena).toLowerCase().split("").reverse().join('');
    return cadenaRev;
}


// otra forma mas eficiente
/* 
function revertir(cadena) {
    return cadena.split("").reverse().join('');
}
*/



let cadena = "que taL";
let imprim = revertir(cadena);
console.log(imprim);