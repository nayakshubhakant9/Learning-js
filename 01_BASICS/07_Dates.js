// For suggestions of methoda control + spacebar 
// note always use () after declaring the method of the log
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
//console.log(typeof myDate);

//let myCreatedDate = new Date(2024, 0, 23)
//let myCreatedDate = new Date(2024, 0, 23, 5, 3)
//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("01-14-2024")

//console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // it is use to convert the decimal value and convert into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default',{
    weekday: "long",
})