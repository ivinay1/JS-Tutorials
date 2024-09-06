var hour = document.querySelector(".hour p");
console.log(hour);

var minute = document.querySelector(".minute p");
console.log(minute);

var second = document.querySelector(".second p");
console.log(second);

function updateClock()
{
    
    let now = new Date();

    let hours = now.getHours();

    let minutes = now.getMinutes();

    let seconds = now.getSeconds();

    hour.innerText = hours + " :";
    minute.innerText = minutes + " :";
    second.innerText = seconds ;

}

updateClock();

setInterval(updateClock,1000);

