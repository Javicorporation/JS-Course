function generarChar(num , chartt) {
    let resultado = "";
    for (let i = 0; i < num; i++) {
        resultado +=chartt;
        
    }
    return resultado
}


// podemos mejorar el codigo con el metodo .repeat("numero de repeticiones")
/*
function generarChar(num,cha) {
    return cha.repeat(num);
    
}
*/
let imprime = generarChar(6,"p")

console.log(imprime);