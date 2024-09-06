// ITERATORS

// for loop

//syntax:-

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }

// Execution Control of for loop

// initialisation ---> condition check ---> execution ---> updation ---> condition check ---> execution ---> updation ....

// BREAK AND CONTINUE IN LOOPs

for(let i = 1;i<10;++i)
{
    if( i== 5)
    {
        console.log("Break detected");
        break;
    }
    console.log(i);
}

for(let i = 1;i<=10;++i)
{
    if( i == 5)
    {
        console.log("Continue detected");
        continue;
    }
    console.log(i);
}

// Nesting of loops

for(let i = 1;i<=10;++i)
{
    for(let j = 1;j<=10;++j)
    {
        console.log(`${i}x${j} = ${i*j}`);
    }
    console.log();
}

//  we can iterate over an array using for loop

const arr = [1,2,3,4,5,6,7,8,9];

for(let i = 0;i<arr.length;++i)
{
    console.log(arr[i]);
}    

// NOTE: To print all elements of an array on one line in JavaScript, you can join the array elements into a single string and then print the string. Here's how you can do it using the join method:

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myarr = arr2.join(' vinay ');
console.log(arr2.join(' ')); // Joins the array elements with a space in between
console.log(myarr);
console.log(typeof myarr);


// join(' '): The join method creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator (in this case, a space ' ').

