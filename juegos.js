let total = 0;
let carrito = [];

//declaro el uso de el array en un archivo .json y creo los div con los juegos

const URLJSON = "juegos.json";
$.getJSON(URLJSON, function (respuesta, estado) {
   if (estado == "success") {
      let juegos = respuesta.juegos;
      for (let i = 0; i < juegos.length; i++) {
         $("#productos").append(`
      
   <div class="card">

   <h1 class="tituloJuego"> ${juegos[i].nombre} </h1>

   <p> Precio: ${juegos[i].precio} AR$ </p>

   <p> Género: ${juegos[i].genero} </p>

   <a> Trailer:<br> ${juegos[i].trailer} </a><br>

   <button id="botompra${juegos[i].id}" class="botompra"> Comprar Juego </button> 


   </div><br><br>`)

   //Llamada funcion agregar al carrito cuando se apreta el boton comprar.

         let compra = document.getElementById(`botompra${juegos[i].id}`);
         console.log(juegos[i]);

         compra.addEventListener('click', () => {
            agregarCarrito(juegos[i])
         }

         )
      }

   }
});

//Toma si hay algo en storage para ver que opciones poner en el menu del encabezado

let perfil = localStorage.getItem("usuario");
console.log(perfil);

//si no esta logueado aparecen los modal para loguear a la cuenta

if (perfil == null) {
   let modalCuenta = document.getElementById("modcuenta")
   modalCuenta.innerHTML += `
   <a data-toggle="modal" data-target="#myModal3" class="encabezado-de-pagina__logueo"id="cuenta" href="">Loguear</a>
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
   //llamada funcion validar logueo
   
   let formularioLog = document.getElementById("formularioLog");
   formularioLog.addEventListener("submit", validarFormularioLog);
}
//si esta logueado aparece menu desplegable para desconectar e ir al carrito
else {
   let usuario = document.getElementById("modcuenta");
   usuario.innerHTML += `
<li><a id=cuenta href="">Cuenta</a>
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

//llamada a funcion validar para formulario recomendacion y contacto del foother

let formularioContacto = document.getElementById("formularioContacto");
formularioContacto.addEventListener("submit", validarFormularioContacto);

let formularioRecomendacion = document.getElementById("formularioRecomendacion");
formularioRecomendacion.addEventListener("submit", validarFormularioRecomendacion);

// DOM
console.dir(document.body);

//funcion agregar carrito al apretar el boton comprar

function agregarCarrito(juegos) {

   carrito.push(juegos);
   console.log(carrito);
   swal("Juego agregado al carrito!", "Podra verlo en la seccion carrito!", "success");
   localStorage.setItem("Juego", JSON.stringify(carrito));
};

//funcion para ver por consola el carrito actualmente

function VerCarrito() {
   console.log("este es el carrito actualmente");

}

//validacion mail ,nombre, apellido y si escribio algo en formulario contacto

function validarFormularioContacto(e) {
   e.preventDefault();
   var nombre = document.getElementById('formNombre').value;
   if (nombre.length < 4) {
      alert("No ha escrito un nombre correcto");
      return false;
   }
   var apellido = document.getElementById('formApellido').value;
   if (apellido.length < 4) {
      alert("No ha escrito un apellido valido");
      return;
   }

   var mail = document.getElementById('formMail').value;
   var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   var mailValido = expReg.test(mail)
   if (mailValido == false) {
      alert("No has escrito un mail valido");
      return;
   }

   var text = document.getElementById('textAreaUno').value;
   if (text.length < 10) {
      alert("Ha escrito un mensaje muy corto o vacio");
      return;
   }
   this.submit();
}
//validacion nombre y si escribio algo en recomendaciones

function validarFormularioRecomendacion(e) {
   e.preventDefault();
   var nombre = document.getElementById('nombre').value;
   if (nombre.length < 4) {
      alert("No ha escrito un nombre valido");
      return;
   }
   var text = document.getElementById('textAreaDos').value;
   if (text.length < 10) {
      alert("Ha escrito una recomendacion muy corta o vacia");
      return;
   }
   this.submit();
}

//Validacion logueo usuario y contraseña

function validarFormularioLog(e) {
   e.preventDefault();

   var nombre = document.getElementById('usr').value;
   if (nombre.length < 5) {
      alert("No has escrito un nombre de cuenta correcto - recuerde que debe tener almenos 5 caracteres");
      return;
   }
   localStorage.setItem('usuario', nombre);

   var pass = document.getElementById('pass').value;
   if (pass.length < 7) {
      alert("Su contraseña es demasiado corta");
      return;
   }
   this.submit();
}