// crear usuario

let user ={
    name: 'juan',
    email: 'juanjose@gmail.com',
    activo: true,
    recuperarClave: function () {
        console.log('recuperar clave');
    },
};

// si queremos crear otro objeto usuario podriamos crear otro objeto
// pero si nos toca crear 1000 usuarios nos tocaria copiar y pegar 
// PERO ESO NO ES FAVORABLE, NI RECOMENDABLE.
// ASI QUE PODEMOS USAR LAS **** FACTORY FUNTIONS ****

function crearUsuario(name, correo) {
    return {
        name: name,
        correo: correo,
        activo: true,
        recuperarClave:function () {
            console.log('recuperemos tu clave');
        },
    };
    
};

let user1 = crearUsuario('juan','correo2@gmail.com');
let user2 = crearUsuario('jai','correo3@gmail.com');
let user3 = crearUsuario('camila','correo4@gmail.com');
let user4 = crearUsuario('jaime','correo5@gmail.com');


console.log(user,user1,user2,user3);

