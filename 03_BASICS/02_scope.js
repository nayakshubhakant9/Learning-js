//var c = 300 // it is not user because it is not block scope. it gets out of the scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "shubhakant"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // child class can acess parent class but parent didn't access child class
    two()
    
}
// one()

if (true){
    const username = "shubhakant"
    if (username === "shubhakant") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


// ++++++++++++++++ intresting +++++++++++++++

console.log(addone(5))

function addone(num) {
    return num + 1
}

// hoisting 
// cannot access 'addTwo' before initialization
console.log(addTwo(5));
const addTwo = function (num) {
    return num + 2
} 