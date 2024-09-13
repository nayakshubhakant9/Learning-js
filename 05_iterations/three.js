// for of loop

// [" "," "," "] // arrays in strings
// [{}, {}, {}] // arrays in objects

const arr = [1,2,3,4,5]

for (const  num of arr) {
    // console.log(num);
    
}

const greetings = "Hello world"
for (const greet  of greetings) {
    // console.log(`each char is ${greet}`);
    
}

// Maps - objects hold key value pairs. unique values and having a proper order

const map = new Map()
map.set('IN', "India")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "India")

// console.log(map);

for (const [key, value ] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'clash of clans',
    game2: 'UNO'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }