let arrayObj =[{
        id: 1,
        name: "juan"
    },{
        id:2,
        name: "pablo"
    },{
        id:3,
        name: "luca"
    },{
        id: 4,
        name: "carla"
    }];

function Paress(arrayObj) {
    let pairs = [];

    for (const idx in arrayObj) {
        let elemento = arrayObj[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;    
}


let resultados = Paress(arrayObj);
console.log(resultados);