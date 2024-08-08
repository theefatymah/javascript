// stack (primitive), heap (non-primitive)

let myName = "Fatymah"
let anotherName = myName
anotherName = "MahNoor"

console.log(anotherName);
console.log(myName);

let userOne = {
    email: "theefatymah@gmail.com",
    paymentGateway : "theefatymah@nayapay.com"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);

