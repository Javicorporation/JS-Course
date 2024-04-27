let nombre= "jaco";
let color ="negro";
let edad = 12;

let persona = {
    nombre: "jaco",
    color: "negro",
    edad: 12,
};
console.log(persona);
console.log(persona.nombre);
console.log(persona['nombre']);

// edicion de una propiedad de un objeto
persona.color = "azul";
// eliminacion de una propiedad de un objeto 
delete persona.edad;

console.log(persona);