var img = document.querySelector("img");
var icon = document.querySelector("#symbol");

img.addEventListener("dblclick",function(){

    icon.style.opacity = 0.8;
    icon.style.transform = "translate(-50%,-50%)scale(1)";

    setTimeout(function(){
        icon.style.opacity = 0;
    },1000)
})