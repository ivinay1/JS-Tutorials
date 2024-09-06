// var c = 500 // avoid var beacuse of its scoping issue
let a = 300
if(true) {
    let a = 10
    const b = 20
    var c = 500;
    console.log("INNER: ",a);
}

console.log(a);
console.log(b);
console.log(c);

// Scoping inside functions
function one(){
    const username = "vinay"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    console.log(website)
    two();
}

one();

// Scoping inside If-else

if (true) {
    const username = "vinay"
    if(username === "vinay") {
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);


//  ********************************* NOTE ****************************************************** 

addOne(5) // It will get executed;

function addOne(num){
    return num+1;
}


// Here it is called function expression. kyunki variable ke andar ek function reside kar raha hai. In JS variables kaafi strong hai they can store anything JSON files, function , different , values...


addTwo(5); // Here error will come beacause addTwo function expression is not defined

const addTwo = function(num){
    return num+2;
}

// This above concept is Known as "Hoisting"

