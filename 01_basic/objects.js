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