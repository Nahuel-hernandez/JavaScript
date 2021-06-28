let nombreJuego;
let precioJuego;
let generoJuego;
let respuesta;
let nombree;
let oferta;


const juegos =[
{nombre:"silent hill",precio:100,genero:"terror"},
{nombre:"resident evil",precio:90,genero:"terror"},
{nombre:"sea of thieves",precio:300,genero:"aventura"}];

class Juego{
   constructor(nombre, precio, genero) {
   this.nombre = nombre;
   this.precio = precio;
   this.genero = genero;
   }
   }




   let nomUser = prompt("ingrese su nombre de usuario");
   validarUser();
   
   nomUser=nomUser.toLocaleLowerCase();

   if (nomUser=="admin"){

   respuesta=prompt("Desea Cargar algun juego s/n");
   respuesta=respuesta.toLocaleLowerCase();
   validarsn();

while (respuesta=="s"){

   nombreJuego=prompt("ingrese el nombre del juego");
   validarNombreJuego();
   precioJuego=parseFloat(prompt("Ingrese el precio en $"));
   validarPrecio();
   generoJuego=prompt("ingrese el genero del juego");
   validarGenero();
   
   
   const juego1 = new Juego (nombreJuego,precioJuego,generoJuego);
   juegos.push( juego1 )

respuesta=prompt("quiere agregar otro juego s/n");
validarsn();


}

for (let i = 0; i < juegos.length; i++) {
   console.log(juegos[i]);
   
}




let enJSON = JSON.stringify(juegos);

console.log("en json queda asi");
console.log(enJSON);

console.log("el tipo es "+typeof juegos);

const juegosBaratos = juegos.filter(elemento => elemento.precio <= 200);
console.log("los juegos en oferta son");
console.log(JSON.stringify(juegosBaratos));


function ret (a, b) {
   if (a.precio > b.precio) {
   return 1;
   }
   if (a.precio < b.precio) {
   return -1;
   }
   return 0;
};
console.log("ordenados queda de esta forma");
console.log(juegos.sort(ret));

}
else{
let total=0;
respuesta=prompt("quire calcular costos en 3/6/12 cuotas de algun juego destacado ingresando su nombre? s/n");
respuesta=respuesta.toLocaleLowerCase();
validarsn();

while (respuesta=="s")
{
nombree=prompt("ingrese el nombre del juego Actualmente en oferta se encuentran Silent hill - Resident Evil - Sea of Thieves");
nombree=nombree.toLocaleLowerCase();

switch(nombree){
    case "silent hill":
       alert("Juego: Silent hill - Genero : Terror - Precio 100 AR$. Ha sido agregado")
    total=total+100;
    alert("Total hasta el momento es de: "+total+"AR$");
    break;
    case "resident evil":
      alert("Juego: Resident Evil - Genero : Terror - Precio 90 AR$. Ha sido agregado")
    total=total+90;
    alert("Total hasta el momento es de: "+total+"AR$");
    break;
    case "sea of thieves":
      alert("Juego: Sea of Thieves - Genero : Aventura - Precio 300 AR$. Ha sido agregado")
    total=total+300;
    alert("Total hasta el momento es de: "+total+"AR$");
    break;
    default:
    alert("error");
    break;
}


respuesta=prompt("quiere seguir agregando juegos s/n?");
validarsn();
}
alert("El total de los juegos ingresados es de "+total+" en cuotas de 3x "+(total/3)+" 6x "+(total/6)+" 12x "+(total/12));
}

//validaciones//


function validarUser(){
   while(nomUser==""){
      nomUser=prompt("error , no ha ingresado un nombre , vuelva a intentarlo");
}
}

function validarGenero (){    
   while (generoJuego==""){
   generoJuego=prompt("Error , no ingreso un nombre vuelva a intentarlo");
   }
   }

function validarNombreJuego(){    
   while (nombreJuego==""){
   nombreJuego=prompt("Error , no ingreso un nombre vuelva a intentarlo");
   }
   }

function validarPrecio (){    
while (precioJuego=="")
{
precioJuego=prompt("Error , ingreso precio nulo");
}
}


function validarsn(){
while ((respuesta !=="s")&&(respuesta !=="n"))

{
   respuesta=prompt("valor ingresado es erroneo , vuelva a ingresar s para si o n para no");
}

}

