//crear un arrelgo

const numeros = [10,20,30,40,50];
console.log(numeros);


//arreglos de strings

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Mayo');
console.log(meses);

//arrelgo mezclado
const mezclado  = ['Hola', 20, 30, 'Adios'];
console.log( mezclado);

console.log(mezclado.length);

console.log(Array.isArray(mezclado));
console.log(mezclado[2]);

//encontrar un elemento en el arreglo

console.log(mezclado.indexOf(20));

// insertar al final del arreglo

mezclado.push('Final del arreglo');

//Insertar al principio del arreglo
mezclado.unshift('Inicio del arreglo');

console.log(mezclado);

//elminiar  un elemento del arreglo al final
mezclado.pop();

//elminiar el elemento del principio
mezclado.shift();

//elminiar cualquier elemento del arreglo (indice del elemento , cuantos mas quiere quitar)
mezclado.splice(2,1)

//revertir el arreglo
mezclado.reverse();

//unir arreglos

let arreglo1 = [1,2,3];
let arreglo2 = [9,8,7];

console.log(arreglo1.concat(arreglo2));

// Organizar arreglos de strings

const frutas = ['Manzana', 'Fresa', 'Limon', 'Piña'];

console.log(frutas.sort());


//Organizar arreglo numerico ascendentemente o descendentemente

arreglo1 = [20, 50, 60, 5, 90];

arreglo1.sort(
    function(x,y)
    {
        return(x-y);
    }
)

console.log(arreglo1);
