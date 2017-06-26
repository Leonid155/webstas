

document.addEventListener("DOMContentLoaded", function() {





var x = window.matchMedia("(max-width: 640px)")
var sign = document.getElementById("sign");
var menu = document.getElementById("menu");
var body = document.getElementsByTagName("BODY");


function myFunction(x) {
    if (x.matches) { // If media query matches

        sign.addEventListener("mouseover", function(){
            menu.style.top = "0";
           sign.style.opacity = "0.0";
        });

        menu.addEventListener("mouseleave",function(){
             menu.style.top = "-300px";
             setTimeout(function(){sign.style.opacity = "1";},500);
       });

        window.addEventListener("click", function(){
          menu.style.top = "-300px";
             setTimeout(function(){sign.style.opacity = "1";},500);
        });





    } else {

        sign.addEventListener("mouseover", function(){
            menu.style.right = "0";
            sign.style.opacity = "0.0";
        });


        menu.addEventListener("mouseleave",function(){
             menu.style.right = "-200px";
             setTimeout(function(){sign.style.opacity = "1";},500);
       });

      window.addEventListener("click", function(){
              menu.style.right = "-200px";
             setTimeout(function(){sign.style.opacity = "1";},500);
      });


    

    }
}


myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes 


});


