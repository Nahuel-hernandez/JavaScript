
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
<li><a id=cuenta href="">Cuenta</a>
      <ul class="options">
            <li><a href="carrito.html">Carrito de compra</a></li>
            <li><a id="disconect" href="">Desconectar</a></li>
      </ul>
      `
      const cuenta = document.getElementById("cuenta");
      cuenta.innerText = (localStorage.getItem("usuario"));
      const disc = document.getElementById("disconect");
      disc.onclick = () => localStorage.clear();
      
      }
//eventos

let primerFormulario = document.getElementById("formulario1");
primerFormulario.addEventListener("submit", validarFormularioUno);

let segundoFormulario = document.getElementById("formulario2");
segundoFormulario.addEventListener("submit",validarFormularioDos);


// DOM
console.dir(document.body);

   //Funciones

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
