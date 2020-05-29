  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAOjJh5tLTxrrSMMcmzg10hQLHAPJInAjk",
    authDomain: "chatapp-2a11f.firebaseapp.com",
    databaseURL: "https://chatapp-2a11f.firebaseio.com",
    projectId: "chatapp-2a11f",
    storageBucket: "chatapp-2a11f.appspot.com",
    messagingSenderId: "157134947168",
    appId: "1:157134947168:web:3304e879a09e45931a5405",
    measurementId: "G-PCW5869LNL"
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
    document.querySelector("body").appendChild(div);
}
//Se generan dos variables para hacer el filtro de información
const fromto = db.collection('chat').where('to', '==', 'Edgardo');
const tofrom = db.collection('chat').where('from', '==', 'Edgardo');

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
 

  //Ahora vamos a escribir en la base de datos
  function insert(){
    var referencia = db.collection('chat');
    //alert("si entro");
        const fr = "Hugo";
        var para = "";
        var mensaje = "";
        var f = new Date();
        //document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
 
        para = document.getElementById("to").value;
        mensaje = document.getElementById("message").value;
        
        referencia.add({
            from:fr,
            message:mensaje,
            timestamp:f,
            to:para,
        }) .then(function(docRef) {
            console.log("Document successfully written!");
            //document.querySelector('.rowc').appendChild(divrow3);
            db.collection("chat").doc(docRef.id).get().then(function(doc){
                //console.log(doc.id);
                renderChat(doc)});
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
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