//declaracion de funciones
/*
function saludar(){

    console.log('Hola Angel');
    
}
saludar();
*/


function saludar(nombre){

    console.log(`hola ${nombre}`);
    
}
saludar('Angel');
saludar('David');

function sumar(num1, num2){

    return(num1 + num2);
    
}

let suma;
suma = sumar(8,3);
console.log(suma);



function generarSaludo(nombre = 'Visitante'){
    // generar un valor default casi como una captura de errores

    //if(typeof nombre === 'undefined'){nombre = 'Visitante'}
    return `hola ${nombre}`;
}

let saludo;
saludo = generarSaludo();
console.log(saludo);

//Declarando un IIFE
(function(){
    console.log('Creando un IIFE');
})();

(function(parametro){
    console.log(`Creando un IIFE ${parametro}`);
})('Javascript');


//Métodos de propiedad
// Referente a las funciones que estan declaradas dentro de un objeto

const musica = {

    reproducir: function(){

        console.log(`Reproduciendo Música...`);

    }
}

musica.reproducir();



