function numIndex(array, indice) {
    if (indice < 0 || array.length <= indice) {
        return "elemento no existente";
    }

    return array[indice];
    
    
}

let resultado = numIndex([6,8,22], 3);

console.log(resultado);