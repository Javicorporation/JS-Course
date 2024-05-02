let array = [12,-3,50,43,53,10];

function NumMenAndMay(array) {

    let menor = array[0];
    let mayor = array[0];
    
    for (number of array) {
        menor = menor < number ? menor : number;
        mayor = mayor > number ? mayor : number;    
    }
    return [menor, mayor];
    
}

let result = NumMenAndMay(array);

console.log(result);