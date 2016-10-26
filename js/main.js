/*function validarFormulario() {
	alert("validando");
}

function limpiandoForma(){
	alert("limpiando");
}

window.onload = function(){
	var botonRegistrar;
	botonRegistrar = document.getElementsByTagName('button');
	botonRegistrar.onclick = botonRegistrar;
}

var verificar = true;
var expresionNombre =/^[a-zA-Z]+$/;
var expresrionNumero = /^[0-9]+$/;
var expresionEmail =/^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;

var formulario = document.getElementSById('sr-only');
var nombre = document.getElementSById('name');
var apellido = document.getElementSById('lastname');
var correo = document.getElementSById('inputEmail');
var contraseña = document.getElementSById('inputPassword');

if(nombre.value==""){
	alert("el campo nombre es requerido");
	nombre.focus();
	verificar = false;
}

if(verificar==true){
	alert("se ha enviado el formulario");
}
*/
/*

function soloLetras(uno) {
    key=uno.keyCode || uno.which;
    teclado=String.fromCharCode(key).toLowerCase();
    letras="abcdefghijklmnñopqrstuvwxyz";
    especiales="8-37-38-46-164";
    teclado_especial=false;

    for(var i in especiales){
    	if(key==especiales[i]){
    		teclado_especial=true;break;
    	}
    }
    if(letras.indexOf(teclado)==-1 && !teclado_especial){
    	return false;
    }
}
*/

 function validateForm(){
  var name = document.getElementSById('name').value;
  var lastname = document.forms[0]["name"].value;
  var email = document.forms[0]["input-email"].value;
  var password = document.forms[0]["input-password"].value;
  var twitter = document.forms[0]["input-social"].value;
  var combobox = document.getElementsByTagName('select')[0].value;

   if (name == null || name == "") {
       alert("Nombre valido");
       return false;
   }
    if (!validateEmail(email)) {
      alert("Invalido");
      return false;
    }

}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

