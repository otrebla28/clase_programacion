//Esta función es para duplicar el DIV de Chats
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