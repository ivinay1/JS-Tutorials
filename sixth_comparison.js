console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2>=1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); //typescript allow hi nahi krta different datatype ka conversion
console.log("002">1);

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null>=0);    //true

//NOTE:- The reason is that an equality check  == and comparison > < >= =< work differenty.
//Comparison converts null to a number, treating it as 0.
//That's why null>=0 is true and null>0 false


//null ko kabhi toh woh convert karega NaN mein kabhi '0' mein toh ambiguity hai isme kaafi so avoid these type of conversions

console.log(undefined ==0);  //false
console.log(undefined >=0);  //false
console.log(undefined <= 0);  //false

//Above conversions of undefined raises ambiguity so avoid them 

// for strict check use:- ===

console.log("2"===2);


