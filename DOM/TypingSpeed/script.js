var btn = document.querySelector("button")
var quoteDisplay = document.querySelector(".quoteDisplay span");
var ta = document.querySelector("#quoteInput");
var result = document.querySelector(".result");

var results = Array.from(result.children); // html collection to array

var incorrect = document.querySelector("")

var startTime; 
var endTime;
var elapsedTime;


let url = "https://api.quotable.io/random";

const getQuote = async() =>{

    let response  = await fetch(url);
    let data = await response.json();
    quoteDisplay.innerText =  data.content;
}


function start()
{
    emptyTA();
    getQuote();
    startTimer();
    ta.focus();
    btn.innerText = "Stop";
}


function stop()
{
    endTimer();
    let tt = totalTime();

}


function startTimer()
{
        startTime = new Date();
}

function endTimer()
{
    endTime = new Date();
    // results[1].innerText = ""
}

function totalTime()
{
    let time = (endTime - startTime)/1000;
    return time/60;
}


