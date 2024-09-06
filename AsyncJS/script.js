var wrapper = document.querySelector(".wrapper");
var btn = document.querySelector("button");

var con = 1;

btn.addEventListener("click",function(e){

    if( con ==1 )
    {
        startColor();
        con = 0;
        e.currentTarget.innerText = "Stop";
    }
    else
    {
        stopColor();
        con = 1;
        e.currentTarget.innerText = "Start";
    }

})


function startColor() {
    colorInterval = setInterval(() => {
        let hexcode = colorGenerator();
        wrapper.style.backgroundColor = "#" + hexcode;
    }, 1000);
}

function stopColor() {
    clearInterval(colorInterval);
}


function colorGenerator()
{
    let hexcode = Math.random().toString(16).slice(2,6).padEnd(6,0); // this will generate hex code randomly
    return hexcode;    
}
