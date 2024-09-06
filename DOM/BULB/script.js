var bulb_select = document.querySelector('.bulb');
var button = document.querySelector('button')

var flag = 0;

button.addEventListener("click",function(){

    if(flag == 0)
    {
        bulb_select.style.backgroundColor = "yellow";
        button.innerHTML = "OFF";
        flag = 1;
    }
    else if(flag == 1)
    {
        bulb_select.style.backgroundColor = "white";
        button.innerHTML = "ON";
        flag = 0;
    }

});

