const name = "hitesh"  //One way to declare strings
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// With string interpolation we can define placeholders in which we can directly inject values.

//Another way to declare Strings
const gameName = new String("hitesh");
 // Ek striking difference dono string declaration mein yeh hai ki jab pehle declaration ko console mein likhenge then string ke corresponding methods hai woh ni aayenge but jab dusre declaration se declare karenge console ke andar toh string ke correponding saare methods bhi dikhenge

// String ek object hai JS mein aur yeh sab jo methods hai woh actually mein values hai jinko hamm "." operator se access kar rahe hai values ko through corresponding keys.

console.log(gameName[0]);
// console.log(gameName.0);
console.log(gameName.__proto__);

//Methods of string

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // isse 2nd index pr jo character hai woh return hoga
console.log(gameName.indexOf('t')); // isse 't' kis index pr hai woh index number return hoga

const newGameName = gameName.substring(2,4);
//Isse aapko starting index se ending index tak ki substring return hogi
const newGameName2 = gameName.slice(-1,4);
//slice ek string ke specific part ko slice out kar dega from starting index to ending index but it won't include the ending index.
//Major difference between substring and slice yeh hoga ki negative indexing allowed hai slice ke andar but yeh substring ke andar nahi hota

const newStringOne = "    hitesh     ";
console.log(newStringOne.trim()); //It reduces extra space from the string

const url = "https://hitesh.com/vinay%21joshi";
//now to replace % with "-" we can use replace method
console.log(url.replace('%20','-'));

//To check whether an expression is present inside the string or not we can use includes method

console.log(url.includes('vinay'));

//To split the string on the basis if delimiter use split method
console.log(url.split('%'));

