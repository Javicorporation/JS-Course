const user = {id: 1};

//user.id= 2;


// guardar propiedades a un objeto constante, si se puede lo que no se puede es cambierl el valor a la variable
user.name = 'juan';
user.guardar = function () {
    console.log('guardar a ',user.name);
}
//user.guardar();


// como eliminar las propiedades de un objeto constante
delete user.name;
delete user.guardar;

// si queremos que no se pueda modificar un objeto excistente usamos .freezze
const user1 = Object.freeze({id:1})

user1.name ='carlo';
user1.id = 2;

//pero si queremos comiar los valores de las propiedades, pero que no se agregue o elimine las propiedades
// si queremos que no se pueda modificar un objeto excistente usamos .freezze
const user2 = Object.seal({id:1})

user2.name ='carlo';
user2.id = 2;

console.log(user);
console.log(user1);
console.log(user2);

