var btns = document.querySelectorAll("button");
var hr = document.querySelector(".hr");
var min = document.querySelector(".min");
var sec = document.querySelector(".sec");
var millisec = document.querySelector(".millisec");

let timer = false;

// variables for tracking the timer
let hour = 0;
let minute = 0;
let second = 0;
let milli = 0;


btns.forEach(function(btn){

    btn.addEventListener("click",function(e){

        if(e.target.id == "begin")
        {
            timer = true; //starting the timer
            stopwatch();
        }
        else if(e.target.id == "hault")
        {
            timer = false; //globally false so on next recursion it will be not call top watch
        }
        else
        {
            timer = false;
            hour = 0;
            minute = 0;
            second = 0;
            milli = 0;

            hr.innerText = "0" + hour;
            min.innerText = "0" + minute;
            sec.innerText = "0" + second;
            millisec.innerText = "00" + milli;
        }
    })


})


function stopwatch()
{
    if(timer)
    {
        milli = milli +1;
        if(milli == 100)
        {
            milli = 0;
            second++;
        }

        if(second == 60)
        {
            second = 0;
            minute++;
        }

        if(minute == 60)
        {
            minute = 0;
            hour++;
        }

        let milliString  = milli;
        let minString = minute;
        let secString = second;
        let hrString = hour;
        
        if( milliString < 10)
        {
            milliString = "00" + milliString;
        }

        if(milliString >10 && milliString<100)
        {
            milliString = "0" + milliString
        }

        if( minString <10)
        {
            minString = "0" + minString;
        }

        if(secString < 10)
        {
            secString = "0" + secString;
        }

        if(hrString < 10)
        {
            hrString  = "0" + hrString;
        }

        millisec.textContent = milliString;
        sec.textContent = secString;
        min.textContent = minString;
        hr.textContent = hrString;

        setTimeout(stopwatch,100);
    }
}