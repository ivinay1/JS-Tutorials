let url = "https://potterapi-fedeperin.vercel.app/en/spells/random";

// let promise = fetch(url); // It will result a promise which is in pending state so we have to resolve it in order to use the data provided by it
// in api fetching all things happen at runtime no reload happens

var spell = document.querySelector(".spell");
var use = document.querySelector(".use");
var btn = document.querySelector("button");

var spellRes;
var useRes; 

const getfacts = async() =>{

    let response = await fetch(url);
    console.log(response);  // JSON format

    console.log(response.status);

    let data =  await response.json(); // return second promise

    console.log(data);
    console.log(`spell name is :- ${data.spell} and its use ${data.use}`);

    spellRes = data.spell;
    useRes = data.use;

    spell.innerText = spellRes;
    use.innerText = useRes;
}

// getfacts();

// console.log(promise);

btn.addEventListener("click",function(){

    getfacts();


})
