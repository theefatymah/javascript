function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("T");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("h");
}
sayMyName()

function addTwoNumbers(number1,number2){
    // console.log( number1 + number2);

    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3,4)
console.log("Result : " , result);


function loginUserMessage(username) {
    return `${username} just logged in `
}
console.log(loginUserMessage('Fatymah'));