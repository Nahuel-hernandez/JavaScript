let total=0;
let idJuego;
/*const juegos =[
   {nombre:"silent hill",precio:100,genero:"terror",id:1},
   {nombre:"resident evil",precio:90,genero:"terror",id:2},
   {nombre:"sea of thieves",precio:300,genero:"aventura",id:3},
   {nombre:"rainbox six",precio:100,genero:"fps",id:4},
   {nombre:"world of warcraft",precio:500,genero:"mmorpg",id:5},
   {nombre:"tomb raider",precio:120,genero:"accion",id:6},
   {nombre:"need for speed",precio:200,genero:"carreras",id:7},
   {nombre:"counter strike",precio:80,genero:"fps",id:8},
   {nombre:"eurotruck simulator",precio:70,genero:"simulador",id:9},
   {nombre:"mortal kombat",precio:270,genero:"accion",id:10},
   {nombre:"life is strange",precio:180,genero:"aventura",id:11},
   {nombre:"doom",precio:400,genero:"accion",id:12},
   {nombre:"dark souls",precio:200,genero:"accion",id:13},
   {nombre:"alien isolation",precio:300,genero:"terror",id:14},
   {nombre:"dead space",precio:150,genero:"terror",id:15}];*/

let carrito = [];


//eventos

/*for (let i=0;i<juegos.length;i++){
const contenedorProducto = document.getElementById('productos') // selecciono el section

const div = document.createElement('div')
div.className="card"
div.innerHTML= `
							<h1> ${juegos[i].nombre} </h1>

							<p> Precio: ${juegos[i].precio} </p>

							<p> Género: ${juegos[i].genero} </p>

                     <button id="botompra${juegos[i].id}"> Comprar Juego </button> 

`
contenedorProducto.appendChild(div)

let compra = document.getElementById(`botompra${juegos[i].id}`);
console.log(juegos[i].id);

compra.addEventListener('click', () => {
   agregarCarrito(juegos[i].id)
})
}
*/

//ajax



const URLJSON="juegos.json";

$.getJSON(URLJSON, function (respuesta, estado) {
   if(estado == "success"){
   let juegos = respuesta.juegos;
   for (let i=0;i<juegos.length;i++) {
   $("#productos").prepend(`<div class="card" >
   <h1> ${juegos[i].nombre} </h1>

   <p> Precio: ${juegos[i].precio} </p>

   <p> Género: ${juegos[i].genero} </p>

   <button id="botompra${juegos[i].id}"> Comprar Juego </button> 


   </div>`)
   let compra = document.getElementById(`botompra${juegos[i].id}`);
console.log(juegos[i]);

compra.addEventListener('click', () => {
   agregarCarrito(juegos[i])
}

)}

}    
});


let perfil = localStorage.getItem("usuario");
console.log(perfil);

if (perfil==null){
let modalCuenta = document.getElementById("modcuenta")
modalCuenta.innerHTML += `
   <a data-toggle="modal" data-target="#myModal3" class="encabezado-de-pagina__logueo"id="cuenta" href="">Cuenta</a>
   <div class="modal fade" id="myModal3">
   <div class="modal-dialog">
       <div class="modal-content">    
           <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" id="botonClose">&times;</button>
           </div>
           <div class="modal-body">
               <form id="formularioLog">
                   <fieldset>
                       <div class="form-group">
                           <label for="formGroupExampleInput">Nombre de usuario</label>
                           <input type="text" class="form-control" id="usr" placeholder="Ingrese su nombre de cuenta">
                       </div>
                       <div class="form-group">
                           <label for="formGroupExampleInput2">Contraseña</label>
                           <input type="text" class="form-control" id="pass" placeholder="Ingrese contraseña">
                       </div>
                   <input type="submit" value="enviar">
                   <input type="reset" value="Borrar">
               </form>
           </div>    
       </div>
   </div>
   </div>  
   `
   let formularioLog = document.getElementById("formularioLog");
   formularioLog.addEventListener("submit", validarFormularioLog);
   }
else{
let usuario = document.getElementById("modcuenta");
usuario.innerHTML += `
<li><a id=cuenta href="cuenta.html">Cuenta</a>
      <ul class="options">
            <li><a id="carro" href="carrito.html">Carrito de compra</a></li>
            <li><a id="disconect" href="">Desconectar</a></li>
      </ul>
      `
      const cuenta = document.getElementById("cuenta");
      cuenta.innerText = (localStorage.getItem("usuario"));
      const disc = document.getElementById("disconect");
      disc.onclick = () => localStorage.clear();
      let carro = document.getElementById("carro");
      carro.onclick = () => VerCarrito();
      }
     
//eventos

let primerFormulario = document.getElementById("formulario1");
primerFormulario.addEventListener("submit", validarFormularioUno);

let segundoFormulario = document.getElementById("formulario2");
segundoFormulario.addEventListener("submit",validarFormularioDos);

// DOM
console.dir(document.body);

//juegoss

   function baratos () {
      const juegosBaratos = juegos.filter(elemento => elemento.precio <= 200);
      console.log("los juegos en oferta son ");
      console.log(juegosBaratos);
   }

function agregarCarrito(juegos) {
   carrito.push(juegos);
   console.log(carrito);
   

};


function VerCarrito() {
   console.log("este es el carrito actualmente");

   localStorage.setItem("Juego",JSON.stringify(carrito));

}
   
function validarsn(){
while ((respuesta !=="s")&&(respuesta !=="n"))
{
   respuesta=prompt("valor ingresado es erroneo , vuelva a ingresar s para si o n para no");
}
}

function validarId(){    
      while (idJuego=="")
      {
      idJuego=prompt("Error , no ingreso una id");
      }
      }


function ret (a, b) {
   if (a.precio > b.precio) {
   return 1;
   }
   if (a.precio < b.precio) {
   return -1;
   }
   return 0;
};

function validarFormularioUno(e) {
   e.preventDefault();
   var nombre = document.getElementById('formGroupExampleInput').value;
if(nombre.length == 0) {
   alert("No has escrito nada en el nombre");
   return false;
}
var apellido = document.getElementById('formGroupExampleInput2').value;
if(apellido.length == 0) {
   alert("No has escrito nada en el apellido");
   return;
}
var mail = document.getElementById('formGroupExampleInput3').value;
if(mail.length == 0) {
   alert("No has escrito nada en el mail");
   return;
}
var text = document.getElementById('textAreaUno').value;
if(text.length == 0) {
   alert("No nos ha escrito nada");
   return;
}
this.submit();
}

function validarFormularioDos(e) {
   e.preventDefault();
   var nombre = document.getElementById('nombre').value;
if(nombre.length == 0) {
   alert("No has escrito nada en el nombre");
   return;
}
var text = document.getElementById('textAreaDos').value;
if(text.length == 0) {
   alert("No has escrito ninguna recomendacion");
   return;
}
this.submit();
}

function validarFormularioLog(e) {
   e.preventDefault();
   var nombre = document.getElementById('usr').value;
if(nombre.length == 0) {
   alert("No has escrito un nombre de cuenta");
   return;
}
localStorage.setItem('usuario',nombre);

var pass = document.getElementById('pass').value;
if(pass.length == 0) {
   alert("No has escrito una contraseña");
   return;
}this.submit();
}
