const name = "shubhakant"
const repoCount = 50

//console.log(name + repoCount + "value"); // this is not a good practice

console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('shubhakant-sk-com')

//  console.log(gameName[0]);
//  console.log(gameName.__proto);

//  console.log(gameName.length);
 // console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12, 4) // for reverse value
console.log(anotherString);

const newStringOne = "    shubhakant   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shubhakant.com%20nayak"

console.log(url.replace('%20', '-'));

console.log(url.includes('shub'));

console.log(gameName.split('-'));