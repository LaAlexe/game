var elem = document.getElementById("circle");
var wrap = document.getElementById("wrapper");
var pos = elem.offsetTop;
var myHeight = 550;
/*var myHeight = document.documentElement.clientHeight;*/

setInterval(function(event){
    /*pos++;
    elem.style.top = pos + "px";
}, 10);*/
if (pos == myHeight) {
	elem.style.display="none";
            /*clearInterval(id);*/
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            
        }
         
   });
 // шапка
 var wrapCoord = wrap.getBoundingClientRect();


  document.onmousemove = function (){
            
            var hat = document.getElementById('hat');
            hat.style.position = 'fixed';
 
            document.onmousemove = function(event){
                hat.style.left = event.clientX +'px';
                
            }
        }
    
        