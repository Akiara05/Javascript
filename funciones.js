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

    reproducir: function(id){

        console.log(`Reproduciendo canción con el ID ${id}.`);

    },
    pausar: function(){
        console.log(`Pausé la música`)
    }


}
musica.reproducir(30);
musica.pausar();

// los métodos tambien pueden crearse o guardarse por fuera del objeto
musica.borrar = function(id){
    console.log(`Borrandola canción con el id ${id}.`)
}

musica.borrar(2);

