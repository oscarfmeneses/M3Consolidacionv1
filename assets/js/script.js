
// Obtener Fecha y hora actual
  var now = new Date();
  var datetime = now.toLocaleString();

// Insertar fecha y hora en 2 chats
 document.getElementById("datetime").innerHTML = datetime;
 document.getElementById("datetime2").innerHTML = datetime;


 
//---- BOTONES DE CHAT-----

//CHAT 1: Cambia perfil actual, estilo de botón a "visto" y completa conversación
function Img1() {
  document.getElementById("ImgPerfil").src ="assets/img/User5.png";
  document.getElementById("btn_1").style.fontWeight = "200";
  document.getElementById("NombreChat").innerHTML = "Cote";
  document.getElementById("msg1").innerHTML = "No me dijiste nada, siempre quedo en visto!!";
  document.getElementById("msg2").innerHTML = "Es que no sé si pueda ir a la fiesta...";
  document.getElementById("msg3").innerHTML = "Ya, estoy viendo que me dejarás botada de nuevo!";
  document.getElementById("msg4").innerHTML = "Espera, voy a intentar de nuevo :)";
  document.getElementById("msg5").innerHTML = "... ya no te creo nada. Chao no más";
}

//CHAT 2: Cambia perfil actual, estilo de botón a "visto" y completa conversación
  function Img2() {
    document.getElementById("ImgPerfil").src ="assets/img/User.png";
    document.getElementById("btn_2").style.fontWeight = "200";
    document.getElementById("NombreChat").innerHTML = "Pelao";
    document.getElementById("msg1").innerHTML = "Viejo, tenís 50 lucas que me prestes?";
    document.getElementById("msg2").innerHTML = "No querís 100?";
    document.getElementById("msg3").innerHTML = "Ya, mejor :D no pero en serio, estoy pato!";
    document.getElementById("msg4").innerHTML = "Pero todavía me debes 20 del otro día! ._.";
    document.getElementById("msg5").innerHTML = "Es que ha estado re mala la pega. No pasa nada con los sueldos";
  }

//CHAT 3: Cambia perfil actual, estilo de botón a "visto" y completa conversación
  function Img3() {
    document.getElementById("ImgPerfil").src ="assets/img/User3.png";
    document.getElementById("btn_3").style.fontWeight = "200";
    document.getElementById("NombreChat").innerHTML = "Daniela";
    document.getElementById("msg1").innerHTML = "¿Cómo va la pega? Acá hace un sol.... te mueres, feliz de vacaciones";
    document.getElementById("msg2").innerHTML = "Buuuu! Acá los pobres tenemos que trabajar....pa que otros puedan salir";
    document.getElementById("msg3").innerHTML = "Pero si volviste hace 1 mes no más!";
    document.getElementById("msg4").innerHTML = "Pero salí 4 días, y a hacer trámites... no son vacaciones";
    document.getElementById("msg5").innerHTML = "Qué pena. Bueno, esta caipirinha es por ti!";
  }

//CHAT 4: Cambia perfil actual, estilo de botón a "visto" y completa conversación
  function Img4() {
    document.getElementById("ImgPerfil").src ="assets/img/User4.png";
    document.getElementById("btn_4").style.fontWeight = "200";
    document.getElementById("NombreChat").innerHTML = "Pepa";
    document.getElementById("msg1").innerHTML = "¿Cómo van los planos del cliente? Estamos atrasados!";
    document.getElementById("msg2").innerHTML = "Estoy en eso! Me han interrumpido un montón!";
    document.getElementById("msg3").innerHTML = "Viejo, no puede pasar de hoy. Estamos pillados!";
    document.getElementById("msg4").innerHTML = "Sí! Si va a salir hoy, no es la primera vez que ando corriendo";
    document.getElementById("msg5").innerHTML = "Ya, vale. Avísame cualquier novedad! Me tiene super preocupada esto";
  }

//CHAT 5: Cambia perfil actual, estilo de botón a "visto" y completa conversación
  function Img5() {
    document.getElementById("ImgPerfil").src ="assets/img/User2.png";
    document.getElementById("btn_5").style.fontWeight = "200";
    document.getElementById("NombreChat").innerHTML = "Carlangas";
    document.getElementById("msg1").innerHTML = "Hoooolaaaa!!";
    document.getElementById("msg2").innerHTML = "¿Quién es?";
    document.getElementById("msg3").innerHTML = "Carlangas, vivito y coleando!!!";
    document.getElementById("msg4").innerHTML = "Viejo! Qué tepasó? No te habías muerto?";
    document.getElementById("msg5").innerHTML = "Casi no la cuento 2 veces! Cuándo nos juntamos a comadrear?";
  }
 
//Forzar altura para recuadro "Escriba su Mensaje"
  document.getElementById('mensaje').style.height="40px";
