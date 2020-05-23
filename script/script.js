//Esta función es para duplicar el DIV de Chats
function duplicate(){
            var str_html='';
           var deb =document.querySelector('.copy').innerHTML;
           str_html+=deb;
           console.log(str_html) //grabar en consola
           document.querySelector('body').innerHTML += str_html;

       }
//Esta función activa DIV estados "como seleccionado"
// y elimina la selección del resto
       function activetab(){
           var tabestados=document.querySelectorAll('#bottom-line');
           for(var i=0; i<tabestados.length; i++){
               tabestados[i].style.borderBottom = '3px solid green';
            }
           //console.log(tabestados[i]);
           tabestados[1].style.borderBottom = '3px solid white';
       }
//----------------------------------------------    

//----------------------------------------------

// activar chats con la función activvtab
function activetabChat(){
    var tabestados=document.querySelectorAll('#bottom-line');
    for(var i=0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
     }
    //console.log(tabestados[i]);
    tabestados[0].style.borderBottom = '3px solid white';
}

//-----------------------------------------------
//Activar llamadas con la función activetab
function activetabCall(){
    var tabestados=document.querySelectorAll('#bottom-line');
    for(var i=0; i<tabestados.length; i++){
        tabestados[i].style.borderBottom = '3px solid green';
     }
    console.log(tabestados[i]);
    tabestados[2].style.borderBottom = '3px solid white';
}

//-----------------------------------------------


//Esta función oculta el DIV estados
function ocultarEstados(){
    var edo = document.querySelectorAll('.copy-e');

        for(var i=0; i<edo.length; i++){
            edo[i].style.display="none";
        }
  }       
//Esta función muestra el DIV estados
  function mostrarEstados(){
    var showe = document.querySelectorAll('.copy-e');

        for(var i=0; i<showe.length; i++){
            showe[i].style.display="block";
        }
  }
//-----------------------------------------

//-----------------------------------------
//Esta función oculta el DIV de chats
  function ocultarChats(){
    var chat = document.querySelectorAll('.copy');

        for(var i=0; i<chat.length; i++){
            chat[i].style.display="none";
        }
  } 

  //Esta función muestra el DIV Chats
  function mostrarChats(){
    var showc = document.querySelectorAll('.copy');

        for(var i=0; i<showc.length; i++){
            showc[i].style.display="block";
        }
  } 

//-----------------------------------------------

//Esta función oculta el DIV de Llamadas
function ocultarCall(){
    var call = document.querySelectorAll('.copy-c');

        for(var i=0; i<call.length; i++){
            call[i].style.display="none";
        }
  } 

  //Esta función muestra el DIV Chats
  function mostrarCall(){
    var showcall = document.querySelectorAll('.copy-c');

        for(var i=0; i<showcall.length; i++){
            showcall[i].style.display="block";
        }
  } 

//-----------------------------------------------


//Función que muestra DIV de estados y oculta el de chats y llamadas, además
//..activa la etiqueta "estados"
  function showEhideChat(){
      ocultarChats();
      ocultarCall();
      mostrarEstados();
      activetab();
  }
//Función que muestra DIV de chats y oculta estados y llamadas, además
//..activa la etiqueta de Chats
  function ShowChatsHideEyLL(){
      ocultarCall();
      ocultarEstados();
      mostrarChats();
      activetabChat();
  }
//Función que muestra DIV de llamadas y oculta Chats y estados, además
//..activa la etiqueta de Llamadas
  function ShowCallHideCyE(){
      ocultarChats();
      ocultarEstados();
      mostrarCall();
      activetabCall();
  }