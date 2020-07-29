//crear objeto

const persona = {

    nombre:     'Angel',
    apellido:   'Aldana',
    edad:       20,
    profesion:  'Desarrollador',
    email:      'anfealsa@hotmail.com',
    celular:    3003603499,
    gustosMusicales: ['Rock', 'Jazz'],
    
    // Objetos dentro de objetos

    lugarResidencia:
    {
        ciudad: 'Bogotá',
        pais:   'Colombia'
    },

    //Funciones

    fechaNacimiento: function() {
        return new Date().getFullYear - this.edad;
    }



}
/*
console.log(persona);

console.log(persona.nombre);
console.log(persona.gustosMusicales[0]);
console.log(persona.lugarResidencia.pais);

//Accediendo de otra manera a los valores de un objeto

console.log(persona['lugarResidencia']['ciudad']);

console.log(persona.fechaNacimiento());

*/

//Arreglo de objetos

const autos = [

    {modelo: 'Mustang', motor:6.0},
    {modelo: 'Camaro', motor:5.0},
    {modelo: 'Challenger', motor:3.0}

];

for (let i =0; i<autos.length; i++){

    console.log(autos[i]);
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
}

