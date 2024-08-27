// constructor---> singleton
// Object.create

//object literals

const mySymbol = Symbol("key1")
const jsUser = {
    name : 'Fatymah',
    "full name" : "MahNoorFatima",
    [mySymbol]:"myKey1",
    age : 20,
    location: 'LHR',
    email : 'theefatymah@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['monday', 'saturday']

}
console.log(jsUser.lastLoginDays);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]);
console.log( typeof jsUser.mySymbol);

jsUser.age = 23
// Object.freeze(jsUser)
jsUser.age = 17

console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello! js User")
}

jsUser.greetingTwo = function(){
    console.log(`hello! js User ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


console.log(tinderUser);

const regularUser = {
    email : "some@example.com",
    fullname : {
        userfullname : {
            firstname : "MahNoor",
            lastname : "Fatima"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 179847,
        email : "h@gmail.com"
    },
    {
        id: 179847,
        email : "h@gmail.com"
    },
    {
        id: 179847,
        email : "h@gmail.com"
    },
    {
        id: 179847,
        email : "h@gmail.com"
    },
    {
        id: 179847,
        email : "h@gmail.com"
    }
    
]

users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
 
const course = {
    courseName : "JS in Spanich",
    price : "999",
    courseInstructor : "Fatima"
}

const {courseInstructor} = course
console.log(courseInstructor);
