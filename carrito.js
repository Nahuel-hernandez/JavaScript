let total = 0;
let carrito = [];

//tomo del storage el contenido de de la key Juego

carrito = JSON.parse(localStorage.getItem("Juego"));

//si hay contenido en esa key da mensaje de bienvenida y muestra la el carrito y si no hay contenido muestra un msj indicandolo.

if (carrito != null) {
$('#saludo').append(`<h2 class="welcome">Hola Gamer, Bienvenido al carrito</h2>
<h2 id="buelec">..:::Buena eleccion de juegos, listo para la aventura?:::.. </h2>
`);

mostrarCarro();
}
else {
   $('#saludo').append(`<h2>Hola Gamer, No tiene nada en el carrito de compra</h2>`)
}

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
                           <label form="formGroupExampleInput">Nombre de usuario</label>
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
            <li><a id="carro" href="">Carrito de compra</a></li>
            <li><a id="disconect" href="">Desconectar</a></li>
      </ul>
      `
   const cuenta = document.getElementById("cuenta");
   cuenta.innerText = (localStorage.getItem("usuario"));
   const disc = document.getElementById("disconect");
   disc.onclick = () => localStorage.clear();
}


//llamada a funcion validar para formulario recomendacion y contacto del foother

let formularioContacto = document.getElementById("formularioContacto");
formularioContacto.addEventListener("submit", validarFormularioContacto);

let formularioRecomendacion = document.getElementById("formularioRecomendacion");
formularioRecomendacion.addEventListener("submit", validarFormularioRecomendacion);

// DOM
console.dir(document.body);

//Crea los div necesarios en el dom segun el contenido del carrito , hace el total y da un mensaje con el mismo , agrega boton para limpiar carrito o terminar compra

function mostrarCarro() {

   console.log(carrito);

   for (i = 0; i < carrito.length; i++) {
      $('#carroCompra').append(` <div class="card">

                              <h1> ${carrito[i].nombre} </h1>

							         <p> Precio: ${carrito[i].precio} AR$ </p>

                              </div><br><br>`
      );
      total = total + carrito[i].precio;
      
   }
   $('#carroCompra').prepend(`<h2 class="welcome"> Su total a pagar es AR$ ${total} <h2><br><br>`);
   $("#buelec").css({
      color: "cyan",
      font: "10px",
      padding: "80px"
   })

   $('#saludo').append(`<button id="limpiarCarrito"class="botompra">Limpiar Carrito de compra</button>
   <button id="completarCompra"class="botompra">Completar Compra</button>`);
   $('#limpiarCarrito').on('click', limpiarCarrito);
   $('#completarCompra').on('click', completarCompra);
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
   if (text.length == 0) {
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



function limpiarCarrito() {
   swal({
      title: "Esta seguro?",
      text: "Una vez limpiado el carrito , tendra que volver a agregar los juegos!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
   })
      .then((willDelete) => {
         if (willDelete) {
            swal("Poof! Carrito limpiado", {
               icon: "success",
            });
            localStorage.removeItem("Juego");
            window.location.reload();
         } else {
            swal("El carrito esta a salvo!");
         }
      });

}


function completarCompra() {
   swal("Esta seguro de que desea terminar la compra?", {
      buttons: {
         terminar: {
            text: "Claro que si!",
            value: "terminar",
         },
         seguir: "Seguir Comprando",
      },
   })
      .then((value) => {
         switch (value) {

            case "seguir":
               swal("Recuerde que para seguir comprando debe volver a la seccion juegos!");
               break;

            case "terminar":
               swal("GENIAL!", "Compra finalizada!", "success");
               break;
         }
      });

}