  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQxF15lOBk4qejuvnw9h-4yLe48Xe20NE",
    authDomain: "chatapp-98d00.firebaseapp.com",
    databaseURL: "https://chatapp-98d00.firebaseio.com",
    projectId: "chatapp-98d00",
    storageBucket: "chatapp-98d00.appspot.com",
    messagingSenderId: "1017162347060",
    appId: "1:1017162347060:web:472317d8d5adac4e491061",
    measurementId: "G-0GYGF64HTC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//crear variables
const db = firebase.firestore();

//función para generar los campos de la base de firebase

function renderChat(doc){
    //Let variable que solo existe dentro de la función
let div = document.createElement('div');
let divc = document.createElement('div');
let divtp= document.createElement('div');
let divcn = document.createElement('div');
let divbr = document.createElement('div');
let divtd= document.createElement('div');
let divcon = document.createElement('div');
let divs= document.createElement('div');

div.setAttribute('class',"row");
div.setAttribute('data-id', doc.id);
divc.setAttribute('class', "content");
divtp.setAttribute('class', "top-row");
divcn.setAttribute('class', "chatname");
divtd.setAttribute('class', "timedate");
divbr.setAttribute('class', "bottom-row")
divcon.setAttribute('class', "contactname");
divs.setAttribute('class', "status");    

    
    div.appendChild(divc);
    divc.appendChild(divtp);
    divc.appendChild(divbr);
    divtp.appendChild(divcn);
    divtp.appendChild(divtd);
    divbr.appendChild(divcon);
    divbr.appendChild(divs);

    //to.textContent = doc.data().to;
   // message.textContent = doc.data().message;
    divcn.textContent = doc.data().from;
    divcon.textContent = doc.data().message;
    //divtd.textContent = doc.data().timestamp;
    divtd.textContent = doc.data().timestamp.toDate().toLocaleString();
    divs.textContent="1";
    document.querySelector(".conver").appendChild(div);
}
//----------Cargando información de la base de datos firebase----------
//Se generan dos variables para hacer el filtro de información
function filtro(){
document.querySelector(".conver").innerHTML="";  
filtro_ = document.getElementById("to").value;
const fromto = db.collection('chat').where('to', '==', filtro_);
const tofrom = db.collection('chat').where('from', '==', filtro_);

//Se trae la colección de la base de datos con to=persona indicada
fromto.get()
.then((snapshots)=>{
    snapshots.docs.forEach(doc =>{
        renderChat(doc);
        console.log(doc.id, " => ", doc.data());
    });

  });
  //Se trae la colección de la base de datos con from=persona indicada
  tofrom.get()
.then((snapshots)=>{
    snapshots.docs.forEach(doc =>{
        renderChat(doc);
        console.log(doc.id, " => ", doc.data());
    });

  });
 //----------Finaliza la carga de información de la base de datos firebase----------
}

  //Ahora vamos a escribir en la base de datos
  function writeNewPost(){
    var coleccion = db.collection('chat');
        
        const de = "Hugo";
        var para = "";
        var mensaje = "";
        var fech = new Date();
        
        para = document.getElementById("to").value;
        mensaje = document.getElementById("message").value;
        document.getElementById("message").value="";
        alert('Entrando a la funciión para guardar datos'+para+' '+mensaje);
        coleccion.add({
            from:de,
            message:mensaje,
            timestamp:fech,
            to:para,
        }) .then(function(docRef) {
            console.log("Se gusrdó con éxito");
           
            db.collection("chat").doc(docRef.id).get().then(function(doc){
             
                renderChat(doc)});
        })
        .catch(function(error) {
            console.error("Error al escribir en la base de datos ", error);
        });
        
        
}
  //hasta aquí la función para escribir en la base de datos



//Esta función es para duplicar el DIV de Chats, llamadas y estados
function duplicate(){
 var str_html='';
 //la variable deb se trae todos los div de la clase copy
 // chats, estados y llamadas"
 var deb =document.querySelectorAll('.copy');
 for(i=0; i<deb.length; i++){
   // la variable activo nos dirá cuál elemento
   // está seleccionado "chats, estados o llamadas"
   var activo = deb[i].style.display;
  //solo al elemento que esté activo se le agregan copias
  // de su contenido
   if (activo=="block"){
    str_html = document.querySelector('.copy-'+i).innerHTML;
    console.log(str_html) //grabar en consola
    document.querySelector('.copy-'+i).innerHTML += str_html;
   }
}
}

//Esta función activa DIV estados "como seleccionado"
// y elimina la selección del resto
function activetab(renglon){
 var tabestados=document.querySelectorAll('#bottom-line');
 var edo = document.querySelectorAll('.copy');
 for(var i=0; i<tabestados.length; i++){
     tabestados[i].style.borderBottom = '3px solid green';
     edo[i].style.display="none";

  }

 //al elemento que sea seleccionado se pinta línea blanca
 // y además se muestra su contenido con display block
 tabestados[renglon].style.borderBottom = '3px solid white';
 edo[renglon].style.display="block";


}
//----------------------------------------------    

//Aquí implementamos la nueva función "al cargar"
document.addEventListener('DOMContentLoaded',function(){
document.querySelectorAll('#bottom-line').forEach(function (div) {
div.onclick=function(){

    //alert ("Entra a la función onclick de loader");
    console.log(div.dataset.view)
    
    //Aquí es donde Erick creó la magia completita
    //solo llama a la función activetab y le envía el parametro
    //contenido en el dataview
    activetab(div.dataset.view);

     
};
});
/*
window.onscroll=function(){
this.console.log(window.scrollY)
}*/
});