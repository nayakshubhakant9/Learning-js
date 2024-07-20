// Primitive 
// 7 types : string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useremail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 123456778n

//  Reference  (Non primitive )
// Arrays, objects, Finctions

const heros = ["shaktiman", "nagraaj", "doga"];
let myObj = {
    name: "shubhakant",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof anotherId);

// Assignment find out the yrpe of variables thhat are declared

// +++++++++++++++++++++++++++++++

// stack (primitive), Heap (non- primitive)

let myYoutubename = "shubhakantnayakdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com"
    //upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "user@google.com"

//console.log(userOne.email);
//console.log(userTwo.email);