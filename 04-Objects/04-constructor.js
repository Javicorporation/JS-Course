// funciones contructoras - siempre se escribe con UpperCamelCase
// crearemos un objeto
function User(nombre) {
    this.id = 1;
    this.name = nombre;
    this.recuperarClave = function () { // lo raro es que a estas funciones ya no las llamasmos funciones simo METODOS
        console.log("recuperar clave")
    }
}


let usuario1 = new User('juan');

console.log(usuario1);