// Singelton
// object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Shubhakant",
    "full name": "Shubhakant Nayak",
    [mySym]: "mykey1",
    age: 20,
    location: "Surat",
    email: "try.Subkantgmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(typeof jsUser);

jsUser.email = "shubhakant@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "shubhakant@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hellow JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
