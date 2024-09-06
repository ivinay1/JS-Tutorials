// FUNCTION

function sayHello(){
    console.log("hello brother!!! ");
}

sayHello // just yeh likhenge toh function execute nahi hoga hamm bss reference de rahe hai
sayHello(); // Ab hoga execute

function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}

addTwoNumbers(3,4); // OUTPUT: 7
addTwoNumbers(3,null); // OUTPUT: 3
addTwoNumbers(3,"a"); // OUTPUT: 3a

// Abhi aapne upar observe kiya ki woh paramters ko check nahi kar raha before adding jiski wajah se galat result produce kar raha hai toh inputs ko verify krna bohot jaruri hai in function before performing any operation over them

function multiply(number1,number2)
{
    // let multi = number1* number2;
    // return multi;
    return number1 * number2;
    console.log("hello") // It will not get executed beacause it is under return
}

console.log(addTwoNumbers(3,4)); //undefined since function does not return anything

console.log(multiply(3,4)); //OUTPUT: 12


function loginUserMessage( username = "sam")
{
    if(!username)
    {
        console.log("Please enter a username")
    }
    return `${username} just logged in`
}

console.log(loginUserMessage('Abhijeet'));
console.log(loginUserMessage());

// ******************************************************************************************************************************************************************

// Spread operator = ... allows an iterals such as an array or string to be expanded into separate elements(unpacks the elements)

let number = [1,2,3,4,5,6,7,8];

let max_num = Math.max(number) // It won't work output will be undefined

let Max_num = Math.max(...number) // It will work as all elements of number are expanded

// We can spread a string to array of character using spread operator

let name = "namoShankar";

let name_arr = [...name];

console.log(name_arr);

// To join them back spreaded characters we can use join method

let nameArr = [...name].join("-");
console.log(nameArr);

// We can also combine two arrays using spread operator and also we can add more variables to it

let name_Arr = [...name,...number,"sdsd","sdsd"];
console.log(name_Arr);


// We can pass spread operator in function but there it will act as rest operator

// for e.g., in shopping cart customer adds till he wants so when we dont know number of parameters we use it

function calculateCartPrice(...item){
    console.log(item);
}

calculateCartPrice(1,2,3,4,5,6,7,8,9);

function calCP (val1,val2,...item)
{
    console.log(val1);
    console.log(val2);
    console.log(item);
}

calCP(1,2,3,4,5,6,7,8,9);

// Passing object as a parameter

const user = {
    username: "vinay",
    price: 128
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// Type safety is very important in above type of function

handleObject(user);

// We can direct pass objects

handleObject({
    username:"happy",
    price:200
});

// Passing array as a paramter

const myNewArray = [234,54,23,11];

function returnSecondValue(getArray)
{
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

