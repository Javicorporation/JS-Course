//clase


class persona{
    nombre = "";
    edad = 0;
    ednia = "";
    altura = 1.90;

    trabajar(){
        return "esta trabajando";
    }

    estudiar(){
        return "estudia";
    }
}

const juan = new persona();

document.write(juan.estudiar());