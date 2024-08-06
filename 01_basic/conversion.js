let score = undefined
// const {score} = req.body
console.log(typeof (score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" easily convert to 33
// "33abc" convertion --> NaN
// true --> 1, false -->0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 33
let someString = String(someNumber)
console.log(typeof someString);
console.log(someString);



