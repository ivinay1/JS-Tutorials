var tf = document.querySelector(".tf");
var submit = document.querySelector("#submitBtn");
var start = document.querySelector("#newgame");
var prev_guess = document.querySelector("#prevResult");
var guessRem = document.querySelector("#guessleft");
var lowOrhi = document.querySelector("#hint");

var prev = [];
var guess = 0;
var target = -1;

submit.disabled = true;

start.addEventListener("click",function(e){

    e.preventDefault();
    emptyTF();
    emptyPrevGuess(prev);
    startTotalGuess();
    emptylowOrhi();
    setTarget();
    submit.disabled = false;
})

submit.addEventListener("click",function(e){

    e.preventDefault();
    let value = parseInt(tf.value);
    
    if(validateGuess(value))
    {
           if(checkGuess(value)) 
           {
              submit.disabled = true;
           }
           else
           {
                printPrevGuess();
                printTotalGuess();
           }
    }
    if( guess >10)
    {
        submit.disabled = true;
    }

})


function emptyTF()  // TO empty the text field 
{
    tf.value = "";
}

function emptyPrevGuess()  // Removing all values present in text field
{
    prev = [];  //reinitialising the array which stores previous guesses
    prev_guess.innerText = prev;    
}

function startTotalGuess()  // initialsing the total guesses
{
    guess = 0;
    guessRem.innerText = guess;
}

function emptylowOrhi()   // removing all output statements
{
    lowOrhi.innerText = "";
}

function validateGuess(value)
{
    if( value <1 || value>100 || isNaN(value))
    {
        alert(" INVALID NUMBER ");
        return false;
    }
    else
    {
        return true;
    }
}

function checkGuess(value)
{
    if(value == target)
    {
        lowOrhi.innerText = "Hurray You Won Buddy!!!";
        return true;
    }
    else if( value < target)
    {
        lowOrhi.innerText = "Too LOWWWW!!!";
        guess++;
        prev.push(value);
        return false;
    }
    else
    {
        lowOrhi.innerText = "Too High!!!";
        guess++;
        prev.push(value);
        return false;
    }
}

function setTarget()
{
    target = Math.floor(Math.random()* 100)+1;
}

function printPrevGuess()
{
    prev_guess.innerText = prev;    
}

function printTotalGuess()
{
    guessRem.innerText = guess;
}
