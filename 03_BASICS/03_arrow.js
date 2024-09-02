const user = {
  username: "shubhakant",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`); // this keyword used to acces the current context
    console.log(this);
  },
};

// user.welcomeMessage() // () represents methods function
// user.username = "vinay"
// user.welcomeMessage()

// console.log(this); // refers to an empty context. in DOM - window object

// function chai() {
//     let username = "shubhakant"
//     console.log(this.username); // it is not used in functions . only used in objects

// }

// chai()

// const chai = function () {
//         let username = "shubhakant"
//         console.log(this.username);

// }

// const chai = () => {
//     let username = "shubhakant"
//     console.log(this);

// }

// chai()

// explicit return function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// Implicit return

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username:"shubhakant"}) // in objects

console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]
// myArray.forEach()
