let ParIs = [
    [1,{name:"pablo"}],
    [2,{name:"carlos"}],
    [3,{name:"lucia"}],
    [4,{name:"juan"}],
];

function ArrayObj(paris) {
    let arrays = [];

    for (const idx in paris) {
        let elemento = paris[idx];
        arrays[idx] = elemento[1];
        arrays[idx].id = elemento[0];
    }
    return arrays;
}

let resultado = ArrayObj(ParIs);

console.log(resultado);