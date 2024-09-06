// In Javascript , undefined means a variable has been declared but has not been assigned a value

// null is an assigned value
// It can be assigned to a variable as a representaton of no value

// null and undefined are not datatype kyunki null toh object hai na toh not a primitive
// (NaN !== NaN is true)

let x;
console.log(x);
console.log(typeof x) // undefined

let y = null;
console.log(y);
console.log(typeof y); // object

let z = undefined; // we can assign undefined to a variable also
console.log(z);


if(undefined == null)
{
    console.log("undefined and null are == ");
}
else
{
    console.log("undefined and null are not == ");
}

if(undefined === null)
{
    console.log("undefined and null are === ");
}
else
{
    console.log("undefined and null are not === ");
}

// NOTE: to remove null and undefined values from arrays

const arr = [1,2,4,7,null,undefined];

const newArr = arr.filter(Boolean);

console.log(newArr)