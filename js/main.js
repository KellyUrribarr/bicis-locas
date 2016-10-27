
/*document.getElementById("form-signup").submit();*/

//NOMBRE
function validateForm(){
  var name = document.forms[0]["name"].value;
  var lastname = document.forms[0]["lastname"].value;
  var email = document.forms[0]["input-email"].value;
  var password = document.forms[0]["input-password"].value;
  var seleccion = querySelector('select').selectedIndex;
  var twitter = document.forms[0]["input-social"].value;

//comprobar que el campo este completo
   if (name == null || name.length == 0 || /^\s+$/.test(name)) {
       alert("nombre o apellido son campo obligatorio");
       return false;
   }
//comprobar que solo sean letras
  else if(/^[a-zA-Z]+$/.test(name) == false){
  alert("nombre no valido ingresar solo letras")
  return true;
  }
//comprobar que el primer caracter es mayuscula
  else if(name.charAt(0).toUpperCase() !== name.charAt(0)){
  alert("la primera letra de nombre y apellido tiene que ser mayuscula")
  return false;
  }

  //APELLIDO
  //comprobar que el campo este completo
   if (lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)) {
       alert("nombre es un campo obligatorio");
       return false;
   }
//comprobar que solo sean letras
  else if(/^[a-zA-Z]+$/.test(lastname) == false){
  alert("apellido no valido ingresar solo letras")
  return true;
  }
//comprobar que el primer caracter es mayuscula
  else if(lastname.charAt(0).toUpperCase() !== lastname.charAt(0)){
  alert("la primera letra de nombre y apellido tiene que ser mayuscula")
  return false;
  }

//CORREO ELECTRONICO
  if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) == false){
        alert("La dirección de email es incorrecta.");
     }

//CONTRASEÑA
  if (password == null || password.length == 0) {
       alert("contraseña campo obligatorio");
       return false;
   }
   else if(password == "password" || password == 123456 || password == 098754){
    alert("campo incorrecto");
    return false;
   }
   else if(password.length < 6){
    alert("tu contraseña debe ser mayor a 6 caracteres");
   }
  //SELECCION 

if( seleccion == null || seleccion == 0 ) {
  alert("por favor ingrese su bici");
  return false;
}

}


