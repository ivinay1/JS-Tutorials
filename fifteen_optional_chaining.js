// Jab hamm ek object ke andar dusra object insert krte hai aur fir uske andar ke aur object and so on ..... toh ab jab hamm inn objects ko access karenge toh ek chamce hai ki agar vaise key ya object exist na karta ho toh error ayega since woh object define hi nahi hai jiski key hamm access karna cha rahe hai

// for e.g.,

const obj = {
        name: "vinay",
        username: {
            nameid: {
                id: "123abc"
            }
        },
        lastname: "joshi",
        sayhello: function(){
            console.log("hey buddy");
        }
}

//console.log(name.username.nameid.city); // Isko execute krne mein error ayega since city koi key hai hi nahi abhi ese case ko handle krna bohot jarur hai

console.log(obj.username.nameid.id);    // It will get executed since id is a relevant key

// To handle these cases and avoid chances of errors we use if else and "&&" operator
//for e.g.,

if(obj.username){
    console.log(obj.username.nameid)
}

console.log(obj.username && obj.username.nameid)


// BEST PRACTICE TO TACKLE THIS IS USING OPTIONAL CHAINING

console.log(obj.username.nameid?.id)
console.log(obj,username.nameid?.['id']);
console.log(obj.username.nameid?.[a]);
// isme kya karega  yeh pehle check karega nameid hai ki nahi fir uski id ke corresponding value dega

// Optional chaining can also be used with functions

console.log(obj.sayhello?.());