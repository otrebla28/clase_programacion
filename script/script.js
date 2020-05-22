function duplicate(){
            var str_html='';
           var deb =document.querySelector('.copy').innerHTML;
           str_html+=deb;
           console.log(str_html) //grabar en consola
           document.querySelector('body').innerHTML += str_html;

       }

       function activetab(){
           var tabestados=document.querySelectorAll('#bottom-line');
           for(var i=0; i<tabestados.length; i++){
               tabestados[i].style.borderBottom = '3px solid green';
               
           }
           console.log(tabestados[i]);

           tabestados[1].style.borderBottom = '3px solid white';
       }

function ocultarEstados(){
    var edo = document.querySelectorAll('.rowE');

        for(var i=0; i<edo.length; i++){
            edo[i].style.display="none";
        }
  }       

  function mostrarEstados(){
    var showe = document.querySelectorAll('.copy-e');

        for(var i=0; i<showe.length; i++){
            showe[i].style.display="block";
        }
  } 

  function ocultarChats(){
    var chat = document.querySelectorAll('.copy');

        for(var i=0; i<chat.length; i++){
            chat[i].style.display="none";
        }
  } 

  function showEhideChat(){
      mostrarEstados();
      activetab();
      ocultarChats();
  }