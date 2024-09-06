var btn = document.querySelector("#btn");
var target = document.querySelector("h2");

btn.addEventListener("click",function(){
    
    if( btn.dataset.flag == 1)
    {
        target.innerText = "Friend";
        target.style.color = "green";
        btn.innerText = "Remove Friend";
        btn.dataset.flag = 0;    
    }
    else
    {
        target.innerText = "stranger";
        target.style.color = "red";
        btn.innerText = "Add Friend";
        btn.dataset.flag = 1;
    }

})