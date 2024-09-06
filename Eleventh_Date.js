// Dates

let myDate = new Date()
console.log(myDate); // objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

console.log(myDate.toString()); //It gives organised representation from above

console.log(myDate.toDateString()); // only date 
console.log(myDate.toLocaleString()); // time also with date
console.log(typeof myDate); //Date is a object in JS

let myCreatedDate = new Date(2023,0,23); // In js month start from 0.
console.log(myCreatedDate);
console.log(myCreatedDate.toLocaleString);

// let myCreatedDate = new Date(2023,0,24,5,3);
// console.log(myCreatedDate);

let myTimeStamp = Date.now() // It is equivalent to new Date() object 

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // Isse hamko woh 1 Jan 1970 se myCreatedData mein jo date hamne di hai waha tak mil jayega in milliseconds
//This concept of timestamp is widely used in poles and time based applications

//To convert milliseconds to seconds divide by 100
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

// `${newDate.getDay()} and the time`


//We can refine more Date using localestring
// newDate.toLocaleString('default',{
//     weekday:"long",
// })


