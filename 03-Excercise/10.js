function mostrarTriangulo(numero) {

    let triangulo = "";

    for (let i = 1; i <= numero; i++) {
        triangulo += "jacinto-".repeat(i)+'\n';
    }
    return triangulo;
}

let sumaI = mostrarTriangulo(3

);
console.log(sumaI);
