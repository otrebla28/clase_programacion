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