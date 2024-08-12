// const tinderUser = new Object() //singelton object
const tinderUser = {}

tinderUser.id = "1234abc"
tinderUser.name = "shubhakant"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shubhakant",
            lastname: "nayak"
        }
    }
    
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread functions
// console.log(obj3);

const users = [
{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 1,
    email: "s@gmail.com"
},
{
    id: 1,
    email: "s@gmail.com"
},

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); 

// object - destructure , JSON 7 API
const course ={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Shubhakant"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

// JSON - we can write as a object or strings also

// {
//     "name": "shubhakant",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]

