function NumMayor(a,b){
    if(a > b){
        return a;

    }else{
        return b;
    };

    // con el operador ternario seria asi
    // return (a > b)? a : b;
}

let mayor = NumMayor(1,9);

console.log(mayor);