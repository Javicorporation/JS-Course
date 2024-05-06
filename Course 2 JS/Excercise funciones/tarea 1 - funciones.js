/*Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, 
si son iguales devolver un String «son iguales». */
function buscaMayor(number1, number2, number3) {

    return  (number1 > number2 && number1 > number3)? number1 :
            (number2 > number1 && number2 > number3)? number2 :
            (number3 > number2 && number3 > number1)? number3 :
            "son iguales";




    //utiliznado ifs anidados
    /* 
    if (number1 > number2 && number1 > number3) {
        return number1;
    }else if(number2 > number1 && number2 > number3){
        return number2
    }else if (number3 > number2 && number3 > number1) {
        return number3
    }else{
        return "son iguales.";
    }
    */


}


let impreme = buscaMayor(12, 111,1);
console.log(impreme);

