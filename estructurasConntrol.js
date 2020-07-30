const edad = 18;


if (edad>=18){
    console.log('Puedes entrar')
}else{
    console.log('No puedes entrar')
}



//Comprobar que una cvariable tiene valor
let puntaje;

if(typeof puntaje != 'undefined'){
    console.log(`el puntaje fue de ${puntaje}`);
}else{
    console.log(`no hay puntaje`);
}

let efectivo     =50000;
let totalCarrito =5000 ;

if(efectivo>totalCarrito){
    console.log('Pago Correcto')
}else{
    console.log('Fondos insuficientes')
}



//ELSEIF
 let hora = 22;
 if(hora > 0 && hora <=10){
     console.log('Buenos Días');
 } else if(hora<=18){
     console.log('Buenas Tardes');
 } else{
     console.log('Buenas Noches')
 }


