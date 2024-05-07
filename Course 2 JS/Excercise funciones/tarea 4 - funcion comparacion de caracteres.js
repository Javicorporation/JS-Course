// Crear uan funcion para saber si la letra del array es una vocal 

function esVocal(arrayvocal) {
    for (let i = 0; i < arrayvocal.length; i++) {
        let letraCon = arrayvocal[i].toLowerCase();
        if (letraCon === "a" || letraCon === "e" || letraCon === "i" || letraCon === "o" ||letraCon === "u") { 
            console.log(arrayvocal[i]+" es vocal.")
        }else{
            console.log(arrayvocal[i]+" no es vocal.")
        } 
    }
}



// como mejorarlo usando el metodo has de la creacion de un nuevo set() 
/* 
function esVocal(arrayvocal) {
    let comprobar = new Set(["a","e","i","o","u"]);
    for (let i = 0; i < arrayvocal.length; i++) {
        let letra = arrayvocal[i].toLowerCase();
        if (comprobar.has(letra)) {
            console.log(arrayvocal[i]+" es vocal.");
        }else{
            console.log(arrayvocal[i]+" no es vocal.");
        }
    }

}
*/


let arrayvocal = ["A","M","I","O","U"];
esVocal(arrayvocal);