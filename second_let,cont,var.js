//How to declare variable in JS

const accountId = 144553  //To lock a value which cannot change
let accountEmail = "vinya@gmail.com" // cannot be redeclare(best)
var accountPassword = "jaipur" //Can be re declare and globally visible
accountCity = "Jaipur" //not good practice

// accountId = 2;   NOT ALLOWED
let accountState;    //undefined

console.log(accountId);

accountEmail = "abc@gmal.com";
accountCity = "mumbai";

console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/*
Prefer not to use var
*/
