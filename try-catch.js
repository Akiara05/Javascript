 try{
     algo(); // intenra hacer algo
 }catch(error){
     console.log(error); //captura el error
 }finally{
     console.log('No le importa, siempre se va a ejecutar')
 }
 
 
 function obtenerCliente(){
     console.log('Descargando....');

     setTimeout(function(){
         console.log('Completo!')
     }, 3000); 
 }


 obtenerCliente();