function nombreresolucion(a, b){
    if(a >= 7680 && b >= 4320){
        return "8k";
    }else if( a >= 3840 && b >= 2160){
        return "4k";
    }else if(a >= 2560 && b >= 1440){
        return "WQHD";
    }else if(a >= 1920 && b >= 1080){
        return "FHD";
    }else if(a >= 1280 && b >= 720){
        return "HD";
    }else{
        return false;
    }

}

let nombre = nombreresolucion(1200,721);
console.log(nombre);