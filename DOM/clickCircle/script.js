var circle = document.querySelector(".container")
var bo = document.querySelector("body");

bo.addEventListener("click",function(e){

    circle.style.top = e.clientY + "px";
    circle.style.left = e.clientX + "px";
    circle.classList.add("circle");
    
    let dt = new Date();

    console.log(dt.toLocaleString())

    setTimeout(() => {
        circle.classList.remove("circle");
    }, 1000);

})