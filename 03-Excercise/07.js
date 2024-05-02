function CalImpuesto(precio, impuesto) {
    let resultado = 0;
    let tt = 0;

    tt = precio * impuesto;
    resultado = precio + tt; 
    return resultado;

    // una forma mas facil seria 
    //return precio + precio *impuesto;
}

let result = CalImpuesto(20.40, 0.15);

console.log(result);