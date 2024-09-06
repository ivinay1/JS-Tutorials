var background = document.querySelector(".container");

var b1 = document.querySelector(".item1")
var b2 = document.querySelector(".item2")
var b3 = document.querySelector(".item3")
var b4 = document.querySelector(".item4")

b1.addEventListener("click",function(){

    background.style.backgroundColor = "#757475";
    
})

b2.addEventListener("click",function(){

    background.style.backgroundColor = "#fffff6";
    
})

b3.addEventListener("click",function(){

    background.style.backgroundColor = "#0000fe";
    
})

b4.addEventListener("click",function(){

    background.style.backgroundColor = "#ffff00";
    
})



